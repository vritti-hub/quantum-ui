import React, { useEffect, useState, useCallback, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext, type AuthContextType } from './AuthContext';
import { axios } from '../utils/axios';
import type { AxiosError, InternalAxiosRequestConfig } from 'axios';

interface AuthProviderProps {
  children: React.ReactNode;
}

interface RefreshResponse {
  accessToken: string;
}

const TOKEN_REFRESH_INTERVAL = 15 * 60 * 1000; // 15 minutes in milliseconds

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [accessToken, setAccessToken] = useState<string | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const refreshTimerRef = useRef<NodeJS.Timeout | null>(null);
  const isRefreshingRef = useRef(false);

  // Fetch and set token
  const refreshToken = useCallback(async () => {
    // Prevent multiple simultaneous refresh attempts
    if (isRefreshingRef.current) {
      return;
    }

    try {
      isRefreshingRef.current = true;
      setError(null);

      const response = await axios.get<RefreshResponse>('/auth/refresh-application');

      const { accessToken: newToken } = response.data;

      if (newToken) {
        setAccessToken(newToken);
        setIsAuthenticated(true);
      } else {
        throw new Error('No access token received');
      }
    } catch (err) {
      console.error('Token refresh failed:', err);
      setError('Authentication failed');
      setAccessToken(null);
      setIsAuthenticated(false);

      // Redirect to login on failure
      navigate('/login', { replace: true });
    } finally {
      isRefreshingRef.current = false;
      setIsLoading(false);
    }
  }, [navigate]);

  // Set token manually
  const setToken = useCallback((token: string) => {
    setAccessToken(token);
    setIsAuthenticated(true);
  }, []);

  // Logout function
  const logout = useCallback(() => {
    setAccessToken(null);
    setIsAuthenticated(false);
    setError(null);

    // Clear refresh timer
    if (refreshTimerRef.current) {
      clearInterval(refreshTimerRef.current);
      refreshTimerRef.current = null;
    }

    navigate('/login', { replace: true });
  }, [navigate]);

  // Initial token fetch on mount
  useEffect(() => {
    refreshToken();
  }, [refreshToken]);

  // Set up periodic token refresh
  useEffect(() => {
    if (isAuthenticated && accessToken) {
      // Clear any existing timer
      if (refreshTimerRef.current) {
        clearInterval(refreshTimerRef.current);
      }

      // Set up new refresh timer
      refreshTimerRef.current = setInterval(() => {
        refreshToken();
      }, TOKEN_REFRESH_INTERVAL);
    }

    // Cleanup on unmount or when auth state changes
    return () => {
      if (refreshTimerRef.current) {
        clearInterval(refreshTimerRef.current);
        refreshTimerRef.current = null;
      }
    };
  }, [isAuthenticated, accessToken, refreshToken]);

  // Set up axios interceptors
  useEffect(() => {
    // Request interceptor - Add authorization header
    const requestInterceptor = axios.interceptors.request.use(
      (config: InternalAxiosRequestConfig) => {
        if (accessToken && config.headers) {
          config.headers.Authorization = `Bearer ${accessToken}`;
        }
        return config;
      },
      (error) => Promise.reject(error)
    );

    // Response interceptor - Handle 401 errors
    const responseInterceptor = axios.interceptors.response.use(
      (response) => response,
      async (error: AxiosError) => {
        const originalRequest = error.config as InternalAxiosRequestConfig & { _retry?: boolean };

        // If 401 error and not already retried
        if (error.response?.status === 401 && !originalRequest._retry) {
          originalRequest._retry = true;

          try {
            // Try to refresh token
            await refreshToken();

            // Retry original request with new token
            if (accessToken && originalRequest.headers) {
              originalRequest.headers.Authorization = `Bearer ${accessToken}`;
            }

            return axios(originalRequest);
          } catch (refreshError) {
            // Refresh failed, logout user
            logout();
            return Promise.reject(refreshError);
          }
        }

        return Promise.reject(error);
      }
    );

    // Cleanup interceptors on unmount
    return () => {
      axios.interceptors.request.eject(requestInterceptor);
      axios.interceptors.response.eject(responseInterceptor);
    };
  }, [accessToken, refreshToken, logout]);

  const value: AuthContextType = {
    accessToken,
    isAuthenticated,
    isLoading,
    error,
    refreshToken,
    logout,
    setToken,
  };

  // Show loading state during initial authentication
  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center space-y-4">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
          <p className="text-muted-foreground">Loading...</p>
        </div>
      </div>
    );
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
