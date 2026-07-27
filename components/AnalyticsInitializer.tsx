// src/components/AnalyticsInitializer.tsx
"use client";

import { useEffect } from 'react';
import { getConsent, updateGTMConsent } from '@/lib/analytics/consent';

export function AnalyticsInitializer() {
  useEffect(() => {
    // Initialize consent state
    const consent = getConsent();
    updateGTMConsent(consent);
    
    // Push initial page view if consent is given
    if (consent.analytics && window.dataLayer) {
      window.dataLayer.push({
        event: 'page_view_initial',
        page: {
          url: window.location.pathname,
          title: document.title,
        },
      });
    }
  }, []);

  return null;
}