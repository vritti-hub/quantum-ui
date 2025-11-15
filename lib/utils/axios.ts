import Axios, { AxiosInstance, InternalAxiosRequestConfig } from 'axios';
import { getConfig } from '../config';

/**
 * Token types supported by the application
 */
export type TokenType = 'onboarding' | 'access' | 'refresh';

/**
 * Token storage interface for type safety
 */
interface TokenStore {
  onboarding?: string;
  access?: string;
  refresh?: string;
}

/**
 * In-memory token storage
 * Tokens are stored in memory for security - not persisted to localStorage
 */
const tokenStore: TokenStore = {};

/**
 * CSRF token storage
 * Stored in memory for security
 */
let csrfToken: string | null = null;

/**
 * CSRF token fetch promise
 * Used to prevent duplicate fetches
 */
let csrfFetchPromise: Promise<string | null> | null = null;

/**
 * Sets the CSRF token in the in-memory store
 *
 * @param token - The CSRF token value to store
 *
 * @example
 * ```typescript
 * // Set CSRF token after fetching from server
 * setCsrfToken('csrf_token_from_server');
 * ```
 */
export const setCsrfToken = (token: string): void => {
  if (!token || typeof token !== 'string') {
    console.warn('[axios] Invalid CSRF token provided');
    return;
  }
  csrfToken = token;
};

/**
 * Retrieves the CSRF token from the in-memory store
 *
 * @returns The CSRF token string if exists, null otherwise
 *
 * @example
 * ```typescript
 * const token = getCsrfToken();
 * if (token) {
 *   console.log('CSRF token is available');
 * }
 * ```
 */
export const getCsrfToken = (): string | null => {
  return csrfToken;
};

/**
 * Clears the CSRF token from the in-memory store
 *
 * @example
 * ```typescript
 * // Clear CSRF token on logout or when no longer needed
 * clearCsrfToken();
 * ```
 */
export const clearCsrfToken = (): void => {
  csrfToken = null;
};

/**
 * Token priority order for Authorization header
 * Higher priority tokens override lower priority ones
 */
const TOKEN_PRIORITY: TokenType[] = ['access', 'refresh', 'onboarding'];

/**
 * Sets a token in the in-memory store
 *
 * @param type - The type of token to set ('onboarding' | 'access' | 'refresh')
 * @param token - The token value to store
 *
 * @example
 * ```typescript
 * // Set onboarding token after user registration
 * setToken('onboarding', 'eyJhbGciOiJIUzI1NiIs...');
 *
 * // Set access token after login
 * setToken('access', 'eyJhbGciOiJIUzI1NiIs...');
 * ```
 */
export const setToken = (type: TokenType, token: string): void => {
  if (!token || typeof token !== 'string') {
    console.warn(`[axios] Invalid token provided for type: ${type}`);
    return;
  }

  tokenStore[type] = token;
};

/**
 * Retrieves a token from the in-memory store
 *
 * @param type - The type of token to retrieve ('onboarding' | 'access' | 'refresh')
 * @returns The token string if exists, null otherwise
 *
 * @example
 * ```typescript
 * const accessToken = getToken('access');
 * if (accessToken) {
 *   console.log('User is authenticated');
 * }
 * ```
 */
export const getToken = (type: TokenType): string | null => {
  return tokenStore[type] || null;
};

/**
 * Clears a specific token from the in-memory store
 *
 * @param type - The type of token to clear ('onboarding' | 'access' | 'refresh')
 *
 * @example
 * ```typescript
 * // Clear onboarding token after onboarding completes
 * clearToken('onboarding');
 *
 * // Clear access token on logout
 * clearToken('access');
 * ```
 */
export const clearToken = (type: TokenType): void => {
  delete tokenStore[type];
};

/**
 * Clears all tokens from the in-memory store
 * Useful for logout or complete session reset
 *
 * @example
 * ```typescript
 * // On user logout
 * clearAllTokens();
 * ```
 */
export const clearAllTokens = (): void => {
  Object.keys(tokenStore).forEach(key => {
    delete tokenStore[key as TokenType];
  });
};

/**
 * Gets the highest priority token available in the store
 * Used internally by the axios interceptor to determine which token to use
 *
 * @returns The highest priority token if available, null otherwise
 */
const getActiveToken = (): string | null => {
  for (const tokenType of TOKEN_PRIORITY) {
    const token = tokenStore[tokenType];
    if (token) {
      return token;
    }
  }
  return null;
};

/**
 * Fetches CSRF token from the configured endpoint
 * Uses promise locking to prevent duplicate fetches
 *
 * @returns Promise resolving to CSRF token or null
 */
async function fetchCsrfToken(): Promise<string | null> {
  // Return existing fetch promise if one is in progress
  if (csrfFetchPromise) {
    return csrfFetchPromise;
  }

  // Create new fetch promise
  csrfFetchPromise = (async () => {
    try {
      const config = getConfig();

      if (!config.csrf.enabled) {
        return null;
      }

      const response = await Axios.get(config.csrf.endpoint, {
        baseURL: config.axios.baseURL,
        withCredentials: config.axios.withCredentials,
        timeout: config.axios.timeout,
      });

      const token = response.data?.csrfToken;

      if (token && typeof token === 'string') {
        setCsrfToken(token);
        return token;
      }

      console.warn('[axios] CSRF endpoint did not return a csrfToken field');
      return null;
    } catch (error) {
      console.error('[axios] Failed to fetch CSRF token:', error);
      return null;
    } finally {
      // Clear the promise after completion
      csrfFetchPromise = null;
    }
  })();

  return csrfFetchPromise;
}

/**
 * Pre-configured axios instance for API requests
 * Configuration is initialized with defaults and can be overridden via configureQuantumUI()
 */
function createAxiosInstance(): AxiosInstance {
  const config = getConfig();

  return Axios.create({
    baseURL: config.axios.baseURL,
    withCredentials: config.axios.withCredentials,
    headers: config.axios.headers,
    timeout: config.axios.timeout,
  });
}

export const axios: AxiosInstance = createAxiosInstance();

/**
 * Extracts the subdomain from the current hostname
 * Used for multi-tenant architecture
 *
 * @returns The subdomain if present, null otherwise
 *
 * @example
 * ```typescript
 * // URL: acme.localhost:3001
 * getSubdomain() // returns 'acme'
 *
 * // URL: localhost:3001
 * getSubdomain() // returns null
 * ```
 */
const getSubdomain = (): string | null => {
  if (typeof window === 'undefined') {
    return null;
  }

  const hostname = window.location.hostname;

  // Split hostname by dots
  const parts = hostname.split('.');

  // For localhost development (e.g., acme.localhost)
  if (parts.length >= 2 && parts[parts.length - 1] === 'localhost') {
    return parts[0];
  }

  // For production domains (e.g., acme.vritti.cloud)
  if (parts.length >= 3) {
    return parts[0];
  }

  // No subdomain found
  return null;
};

/**
 * Request interceptor to automatically add Authorization header and tenant identifier
 * - Adds Bearer token if any token is available in the store
 * - Adds X-Tenant-Id header with subdomain for multi-tenant architecture
 * - Auto-fetches CSRF token if needed for state-changing requests
 *
 * Token Priority: access > refresh > onboarding
 */
axios.interceptors.request.use(
  async (config: InternalAxiosRequestConfig) => {
    const quantumConfig = getConfig();

    // Get the highest priority token available
    const token = getActiveToken();

    // Add Authorization header if token exists
    if (token) {
      const authHeaderName = quantumConfig.auth.tokenHeaderName;
      const tokenPrefix = quantumConfig.auth.tokenPrefix;
      config.headers[authHeaderName] = `${tokenPrefix} ${token}`;
    }

    // Add tenant identifier from subdomain
    const subdomain = getSubdomain();
    if (subdomain) {
      config.headers['x-subdomain'] = subdomain;
    }

    // Handle CSRF token for state-changing requests
    const isStateChangingRequest = ['post', 'put', 'patch', 'delete'].includes(
      config.method?.toLowerCase() || ''
    );

    if (isStateChangingRequest && quantumConfig.csrf.enabled) {
      let csrfTokenValue = getCsrfToken();

      // Auto-fetch CSRF token if not available
      if (!csrfTokenValue) {
        csrfTokenValue = await fetchCsrfToken();
      }

      // Add CSRF token to headers
      if (csrfTokenValue) {
        config.headers[quantumConfig.csrf.headerName] = csrfTokenValue;
      } else {
        console.warn('[axios] CSRF token not available for state-changing request');
      }
    }

    return config;
  },
  (error) => {
    // Handle request error
    return Promise.reject(error);
  }
);

/**
 * Response interceptor for handling token expiration and refresh
 * Can be extended to handle token refresh logic
 */
axios.interceptors.response.use(
  (response) => {
    // Pass through successful responses
    return response;
  },
  async (error) => {
    const originalRequest = error.config;

    // Handle 401 Unauthorized errors
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      // Room for future token refresh logic
      // const refreshToken = getToken('refresh');
      // if (refreshToken) {
      //   try {
      //     const response = await refreshAccessToken(refreshToken);
      //     setToken('access', response.data.accessToken);
      //     originalRequest.headers.Authorization = `Bearer ${response.data.accessToken}`;
      //     return axios(originalRequest);
      //   } catch (refreshError) {
      //     clearAllTokens();
      //     window.location.href = '/login';
      //     return Promise.reject(refreshError);
      //   }
      // }
    }

    return Promise.reject(error);
  }
);

export default axios;
