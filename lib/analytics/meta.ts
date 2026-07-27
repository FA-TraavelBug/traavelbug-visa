// src/lib/analytics/meta.ts
declare global {
  interface Window {
    fbq: any;
  }
}

// Initialize Meta Pixel
export const initMetaPixel = (pixelId: string): void => {
  if (typeof window === 'undefined') return;
  
  // Load Meta Pixel script
  !(function (f, b, e, v, n, t, s) {
    if (f.fbq) return;
    n = f.fbq = function () {
      n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
    };
    if (!f._fbq) f._fbq = n;
    n.push = n;
    n.loaded = !0;
    n.version = '2.0';
    n.queue = [];
    t = b.createElement(e);
    t.async = !0;
    t.src = v;
    s = b.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t, s);
  })(
    window,
    document,
    'script',
    'https://connect.facebook.net/en_US/fbevents.js'
  );
  
  window.fbq('init', pixelId);
  window.fbq('track', 'PageView');
};

// Track Meta Pixel event
export const trackMetaEvent = (
  eventName: string,
  parameters?: Record<string, any>
): void => {
  if (typeof window === 'undefined' || !window.fbq) return;
  
  window.fbq('track', eventName, parameters);
};

// Track lead conversion
export const trackMetaLead = (parameters?: Record<string, any>): void => {
  trackMetaEvent('Lead', parameters);
};

// Track contact
export const trackMetaContact = (parameters?: Record<string, any>): void => {
  trackMetaEvent('Contact', parameters);
};

// Track view content
export const trackMetaViewContent = (parameters?: Record<string, any>): void => {
  trackMetaEvent('ViewContent', parameters);
};