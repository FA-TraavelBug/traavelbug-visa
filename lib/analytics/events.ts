// src/lib/analytics/events.ts
import { trackGTMEvent } from './gtm';
import { trackGAEvent } from './ga';
import { trackMetaEvent, trackMetaLead, trackMetaContact } from './meta';
import { trackClarityEvent } from './clarity';

// Helper to track events across all platforms
export const trackEvent = (
  eventName: string,
  parameters?: Record<string, any>
): void => {
  // Track in GTM
  trackGTMEvent(eventName, parameters);
  
  // Track in GA4
  trackGAEvent(eventName, parameters);
  
  // Track in Meta (only if it's a standard event)
  const metaEvents = ['Lead', 'Contact', 'ViewContent', 'PageView', 'AddToCart', 'Purchase'];
  if (metaEvents.includes(eventName)) {
    trackMetaEvent(eventName, parameters);
  } else {
    trackMetaEvent('CustomEvent', { event_name: eventName, ...parameters });
  }
  
  // Track in Clarity
  trackClarityEvent(eventName, parameters);
};

// Specific event trackers
export const trackCTA = (
  ctaName: string,
  ctaLocation: string,
  ctaType?: string
): void => {
  trackEvent('cta_click', {
    cta_name: ctaName,
    cta_location: ctaLocation,
    cta_type: ctaType || 'button',
  });
};

export const trackFormStart = (formName: string): void => {
  trackEvent('form_start', {
    form_name: formName,
  });
};

export const trackFormSubmit = (
  formName: string,
  success: boolean,
  formData?: Record<string, any>
): void => {
  trackEvent('form_submit', {
    form_name: formName,
    success,
    form_data: formData,
  });
};

export const trackFormSuccess = (
  formName: string,
  formData?: Record<string, any>
): void => {
  trackEvent('form_success', {
    form_name: formName,
    form_data: formData,
  });
  
  // Track Lead event in Meta
  trackMetaLead({
    form_name: formName,
    ...formData,
  });
};

export const trackWhatsAppClick = (location: string): void => {
  trackEvent('whatsapp_click', {
    location,
  });
};

export const trackPhoneClick = (location: string): void => {
  trackEvent('phone_click', {
    location,
  });
};

export const trackFAQExpand = (question: string): void => {
  trackEvent('faq_expand', {
    question,
  });
};

export const trackDestinationClick = (destination: string, location: string): void => {
  trackEvent('destination_click', {
    destination,
    location,
  });
};

export const trackNavbarCTA = (ctaName: string): void => {
  trackCTA(ctaName, 'navbar');
};

export const trackHeroCTA = (ctaName: string): void => {
  trackCTA(ctaName, 'hero');
};

export const trackFinalCTA = (ctaName: string): void => {
  trackCTA(ctaName, 'final_cta');
};

export const trackFooterContact = (contactType: string): void => {
  trackEvent('footer_contact', {
    contact_type: contactType,
  });
};