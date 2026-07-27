// src/lib/analytics/gtm.ts
declare global {
  interface Window {
    dataLayer: any[];
  }
}

// Initialize dataLayer
export const initGTM = (gtmId: string): void => {
  if (typeof window === 'undefined') return;
  
  window.dataLayer = window.dataLayer || [];
  
  // Load GTM script
  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtm.js?id=${gtmId}`;
  document.head.appendChild(script);
};

// Push data to dataLayer
export const pushToDataLayer = (data: Record<string, any>): void => {
  if (typeof window === 'undefined') return;
  
  if (!window.dataLayer) {
    window.dataLayer = [];
  }
  
  window.dataLayer.push(data);
};

// Track page view
export const trackPageView = (url: string, title?: string): void => {
  pushToDataLayer({
    event: 'page_view',
    page: {
      url,
      title: title || document?.title,
    },
  });
};

// Track event
export const trackGTMEvent = (eventName: string, eventData?: Record<string, any>): void => {
  pushToDataLayer({
    event: eventName,
    ...eventData,
  });
};