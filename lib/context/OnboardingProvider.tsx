import React, { useEffect, useState, useRef, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { OnboardingContext, type OnboardingContextType, type OnboardingData } from './OnboardingContext';
import { axios, setToken, clearToken } from '../utils/axios';
import type { AxiosError } from 'axios';

/**
 * Props for the OnboardingProvider component
 */
interface OnboardingProviderProps {
  /** React children to render within the provider */
  children: React.ReactNode;
  /** Optional initial onboarding token to set before fetching status */
  onboardingToken?: string;
  /** Optional callback to handle unauthorized (401) responses */
  onUnauthorized?: () => void;
}

/**
 * API response structure for onboarding status endpoint
 */
interface OnboardingStatusResponse extends OnboardingData {
  onboardingToken: string;
}

/**
 * OnboardingProvider manages the onboarding state and token lifecycle.
 *
 * This provider integrates with the centralized axios token management system:
 * - Sets onboarding tokens automatically when available
 * - Clears tokens on 401 errors or unmount
 * - All axios requests automatically include the Authorization header
 *
 * @example
 * ```tsx
 * // Basic usage (fetches onboarding status on mount)
 * <OnboardingProvider>
 *   <App />
 * </OnboardingProvider>
 *
 * // With initial token
 * <OnboardingProvider onboardingToken={token}>
 *   <App />
 * </OnboardingProvider>
 *
 * // With custom unauthorized handler
 * <OnboardingProvider onUnauthorized={() => router.push('/custom-login')}>
 *   <App />
 * </OnboardingProvider>
 * ```
 */
export const OnboardingProvider: React.FC<OnboardingProviderProps> = ({
  children,
  onboardingToken: initialToken,
  onUnauthorized
}) => {
  const [data, setData] = useState<OnboardingContextType | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  const isFetchingRef = useRef(false);
  const hasSetInitialTokenRef = useRef(false);

  /**
   * Handle unauthorized (401) responses
   */
  const handleUnauthorized = useCallback(() => {
    // Clear the onboarding token
    clearToken('onboarding');

    // Call custom handler if provided, otherwise navigate to login
    if (onUnauthorized) {
      onUnauthorized();
    } else {
      navigate('/login', { replace: true });
    }
  }, [navigate, onUnauthorized]);

  /**
   * Fetch onboarding status from the API
   */
  const fetchOnboardingStatus = useCallback(async () => {
    // Prevent multiple simultaneous calls
    if (isFetchingRef.current) return;

    isFetchingRef.current = true;
    try {
      const response = await axios.get<OnboardingStatusResponse>('/onboarding/status');

      // Set the new token if provided by the API
      if (response.data.onboardingToken) {
        setToken('onboarding', response.data.onboardingToken);
      }

      setData({
        ...response.data,
        isLoading: false,
        error: null,
      });
    } catch (err) {
      const axiosError = err as AxiosError;
      if (axiosError.response?.status === 401) {
        handleUnauthorized();
      } else {
        // Set error state for other failures (connection errors, etc)
        setData({
          onboardingToken: null,
          userId: '',
          email: '',
          firstName: '',
          lastName: '',
          currentStep: '',
          onboardingComplete: false,
          accountStatus: '',
          emailVerified: false,
          phoneVerified: false,
          isLoading: false,
          error: axiosError?.message || 'Failed to fetch onboarding status',
        });
      }
    } finally {
      isFetchingRef.current = false;
      setIsLoading(false);
    }
  }, [handleUnauthorized]);

  /**
   * Set initial token if provided via props
   * This runs before fetching status to ensure the token is available for the API call
   */
  useEffect(() => {
    if (initialToken && !hasSetInitialTokenRef.current) {
      hasSetInitialTokenRef.current = true;
      setToken('onboarding', initialToken);
    }
  }, [initialToken]);

  /**
   * Fetch onboarding status on mount
   */
  useEffect(() => {
    fetchOnboardingStatus();
  }, [fetchOnboardingStatus]);

  /**
   * Update token when data changes
   * This handles tokens returned from the API that might differ from the initial token
   */
  useEffect(() => {
    if (data?.onboardingToken) {
      setToken('onboarding', data.onboardingToken);
    }
  }, [data?.onboardingToken]);

  /**
   * Clean up token on unmount
   */
  useEffect(() => {
    return () => {
      // Clear onboarding token when provider unmounts
      clearToken('onboarding');
    };
  }, []);

  if (isLoading) {
    return (
      <div className='flex items-center justify-center min-h-screen'>
        <div className='text-center space-y-4'>
          <div className='animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto'></div>
          <p className='text-muted-foreground'>Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <OnboardingContext.Provider value={data || {
      onboardingToken: null,
      userId: '',
      email: '',
      firstName: '',
      lastName: '',
      currentStep: '',
      onboardingComplete: false,
      accountStatus: '',
      emailVerified: false,
      phoneVerified: false,
      isLoading: false,
      error: null,
    }}>
      {children}
    </OnboardingContext.Provider>
  );
};
