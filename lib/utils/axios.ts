import Axios, { AxiosInstance, InternalAxiosRequestConfig } from 'axios';

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
 * Pre-configured axios instance for API requests
 */
export const axios: AxiosInstance = Axios.create({
  baseURL: '/api',
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
  timeout: 30000, // 30 seconds
});

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
 *
 * Token Priority: access > refresh > onboarding
 */
axios.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    // Get the highest priority token available
    const token = getActiveToken();

    // Add Authorization header if token exists
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    // Add tenant identifier from subdomain
    const subdomain = getSubdomain();
    if (subdomain) {
      config.headers['x-subdomain'] = subdomain;
    }

    // Add CSRF token for state-changing requests
    const csrfTokenValue = getCsrfToken();
    if (csrfTokenValue && ['post', 'put', 'patch', 'delete'].includes(config.method?.toLowerCase() || '')) {
      config.headers['x-csrf-token'] = csrfTokenValue;
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
