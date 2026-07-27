// src/lib/analytics/ga.ts
import { pushToDataLayer } from './gtm';

// Track GA4 event through GTM
export const trackGAEvent = (
  eventName: string,
  parameters?: Record<string, any>
): void => {
  pushToDataLayer({
    event: 'ga_event',
    ga_event_name: eventName,
    ga_event_parameters: parameters,
  });
};

// Track GA4 conversion
export const trackGAConversion = (
  conversionId: string,
  conversionLabel?: string,
  value?: number
): void => {
  pushToDataLayer({
    event: 'ga_conversion',
    ga_conversion_id: conversionId,
    ga_conversion_label: conversionLabel,
    ga_conversion_value: value,
  });
};

// Track form submission
export const trackFormSubmit = (
  formName: string,
  success: boolean,
  formData?: Record<string, any>
): void => {
  trackGAEvent('form_submit', {
    form_name: formName,
    success,
    form_data: formData,
  });
};