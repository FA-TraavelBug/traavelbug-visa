// src/lib/analytics/googleAds.ts
import { pushToDataLayer } from './gtm';

// Track Google Ads conversion
export const trackGoogleAdsConversion = (
  conversionId: string,
  conversionLabel: string,
  value?: number,
  currency?: string
): void => {
  if (typeof window === 'undefined') return;
  
  pushToDataLayer({
    event: 'google_ads_conversion',
    google_ads_conversion_id: conversionId,
    google_ads_conversion_label: conversionLabel,
    google_ads_conversion_value: value,
    google_ads_conversion_currency: currency || 'INR',
  });
};

// Track Google Ads conversion from environment variables
export const trackGoogleAdsConversionFromEnv = (
  value?: number,
  currency?: string
): void => {
  const conversionId = process.env.NEXT_PUBLIC_GOOGLE_ADS_ID;
  const conversionLabel = process.env.NEXT_PUBLIC_GOOGLE_ADS_LABEL;
  
  if (!conversionId || !conversionLabel) {
    console.warn('Google Ads conversion ID or label not configured');
    return;
  }
  
  trackGoogleAdsConversion(conversionId, conversionLabel, value, currency);
};