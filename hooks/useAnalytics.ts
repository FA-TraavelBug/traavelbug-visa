// src/hooks/useAnalytics.ts
import { useEffect, useCallback } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import { trackEvent, trackCTA, trackFormStart, trackFormSubmit } from '@/lib/analytics/events';
import { hasAnalyticsConsent, hasMarketingConsent } from '@/lib/analytics/consent';

export const useAnalytics = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // Track page views
  useEffect(() => {
    if (!hasAnalyticsConsent()) return;
    
    const url = pathname + (searchParams?.toString() ? `?${searchParams.toString()}` : '');
    trackEvent('page_view', {
      page_url: url,
      page_title: document?.title,
    });
  }, [pathname, searchParams]);

  // Track CTA click
  const trackCTAClick = useCallback((
    ctaName: string,
    ctaLocation: string,
    ctaType?: string
  ) => {
    if (!hasMarketingConsent()) return;
    trackCTA(ctaName, ctaLocation, ctaType);
  }, []);

  // Track form interactions
  const trackFormInteraction = useCallback((
    formName: string,
    action: 'start' | 'submit' | 'success' | 'error',
    formData?: Record<string, any>
  ) => {
    if (!hasAnalyticsConsent()) return;
    
    switch (action) {
      case 'start':
        trackFormStart(formName);
        break;
      case 'submit':
        trackFormSubmit(formName, true, formData);
        break;
      case 'success':
        trackEvent('form_success', { form_name: formName, ...formData });
        break;
      case 'error':
        trackEvent('form_error', { form_name: formName, ...formData });
        break;
    }
  }, []);

  // Track custom event
  const trackCustomEvent = useCallback((
    eventName: string,
    parameters?: Record<string, any>
  ) => {
    if (!hasAnalyticsConsent()) return;
    trackEvent(eventName, parameters);
  }, []);

  return {
    trackCTAClick,
    trackFormInteraction,
    trackCustomEvent,
    hasAnalyticsConsent: hasAnalyticsConsent(),
    hasMarketingConsent: hasMarketingConsent(),
  };
};