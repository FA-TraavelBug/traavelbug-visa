// src/lib/analytics/consent.ts
export type ConsentPreferences = {
  essential: boolean;
  analytics: boolean;
  marketing: boolean;
  preferences: boolean;
};

const CONSENT_KEY = 'traavel_bug_consent';

// Default consent (only essential)
const defaultConsent: ConsentPreferences = {
  essential: true,
  analytics: false,
  marketing: false,
  preferences: false,
};

// Get consent from localStorage
export const getConsent = (): ConsentPreferences => {
  if (typeof window === 'undefined') return defaultConsent;
  
  try {
    const stored = localStorage.getItem(CONSENT_KEY);
    if (stored) {
      const parsed = JSON.parse(stored);
      return { ...defaultConsent, ...parsed };
    }
  } catch (error) {
    console.error('Failed to parse consent:', error);
  }
  
  return defaultConsent;
};

// Save consent to localStorage
export const setConsent = (preferences: Partial<ConsentPreferences>): void => {
  if (typeof window === 'undefined') return;
  
  const current = getConsent();
  const updated = { ...current, ...preferences };
  
  try {
    localStorage.setItem(CONSENT_KEY, JSON.stringify(updated));
  } catch (error) {
    console.error('Failed to save consent:', error);
  }
};

// Check if analytics consent is given
export const hasAnalyticsConsent = (): boolean => {
  return getConsent().analytics;
};

// Check if marketing consent is given
export const hasMarketingConsent = (): boolean => {
  return getConsent().marketing;
};

// Check if any consent is needed
export const needsConsent = (): boolean => {
  if (typeof window === 'undefined') return false;
  return !localStorage.getItem(CONSENT_KEY);
};

// Update GTM consent
export const updateGTMConsent = (preferences: ConsentPreferences): void => {
  if (typeof window === 'undefined') return;
  
  // Push consent update to dataLayer
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: 'consent_update',
    consent: {
      ad_storage: preferences.marketing ? 'granted' : 'denied',
      analytics_storage: preferences.analytics ? 'granted' : 'denied',
      functionality_storage: preferences.preferences ? 'granted' : 'denied',
      personalization_storage: preferences.preferences ? 'granted' : 'denied',
      security_storage: 'granted',
    },
  });
};