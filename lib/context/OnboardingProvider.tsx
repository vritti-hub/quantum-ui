import React, { useEffect, useState, useRef, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { OnboardingContext, type OnboardingContextType, type OnboardingData } from './OnboardingContext';
import { axios } from '../utils/axios';
import type { AxiosError } from 'axios';

interface OnboardingProviderProps {
  children: React.ReactNode;
}

interface OnboardingStatusResponse extends OnboardingData {
  onboardingToken: string;
}

export const OnboardingProvider: React.FC<OnboardingProviderProps> = ({ children }) => {
  const [data, setData] = useState<OnboardingContextType | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  const isFetchingRef = useRef(false);

  const fetchOnboardingStatus = useCallback(async () => {
    // Prevent multiple simultaneous calls
    if (isFetchingRef.current) return;

    isFetchingRef.current = true;
    try {
      const response = await axios.get<OnboardingStatusResponse>('/onboarding/status');
      setData({
        ...response.data,
        isLoading: false,
        error: null,
      });
    } catch (err) {
      const axiosError = err as AxiosError;
      if (axiosError.response?.status === 401) {
        navigate('/login', { replace: true });
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
  }, [navigate]);

  // Only call once on mount with empty dependency array
  useEffect(() => {
    fetchOnboardingStatus();
  }, []);

  useEffect(() => {
    if (!data?.onboardingToken) return;

    // Request interceptor - Add authorization header
    const requestInterceptor = axios.interceptors.request.use((config) => {
      config.headers.Authorization = `Bearer ${data.onboardingToken}`;
      return config;
    });

    return () => {
      axios.interceptors.request.eject(requestInterceptor);
    };
  }, [data?.onboardingToken]);

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
