// src/lib/analytics/clarity.ts
declare global {
  interface Window {
    clarity: any;
  }
}

// Initialize Microsoft Clarity
export const initClarity = (clarityId: string): void => {
  if (typeof window === 'undefined') return;
  
  (function(c,l,a,r,i,t,y){
    c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
    t=l.createElement(r);
    t.async=1;
    t.src="https://www.clarity.ms/tag/"+i;
    y=l.getElementsByTagName(r)[0];
    y.parentNode.insertBefore(t,y);
  })(window, document, "clarity", "script", clarityId);
};

// Track custom event in Clarity
export const trackClarityEvent = (eventName: string, parameters?: Record<string, any>): void => {
  if (typeof window === 'undefined' || !window.clarity) return;
  
  window.clarity('event', eventName, parameters);
};