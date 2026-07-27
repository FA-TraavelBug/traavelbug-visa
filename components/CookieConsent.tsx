// src/components/CookieConsent.tsx
"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Cookie, 
  Check, 
  X, 
  Shield, 
  ChevronDown,
  ChevronUp,
  Settings
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { 
  getConsent, 
  setConsent, 
  needsConsent,
  updateGTMConsent,
  ConsentPreferences 
} from '@/lib/analytics/consent';

const consentOptions = [
  {
    id: 'essential',
    label: 'Essential Cookies',
    description: 'Necessary for the website to function properly.',
    required: true,
  },
  {
    id: 'analytics',
    label: 'Analytics Cookies',
    description: 'Help us understand how visitors interact with our website.',
    required: false,
  },
  {
    id: 'marketing',
    label: 'Marketing Cookies',
    description: 'Used to deliver relevant ads and track campaign performance.',
    required: false,
  },
  {
    id: 'preferences',
    label: 'Preference Cookies',
    description: 'Remember your preferences and settings.',
    required: false,
  },
];

export function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [preferences, setPreferences] = useState<Partial<ConsentPreferences>>({
    essential: true,
    analytics: false,
    marketing: false,
    preferences: false,
  });

  useEffect(() => {
    // Check if consent is needed
    if (needsConsent()) {
      setShowBanner(true);
    }
  }, []);

  const handleAcceptAll = () => {
    const allPreferences: ConsentPreferences = {
      essential: true,
      analytics: true,
      marketing: true,
      preferences: true,
    };
    saveConsent(allPreferences);
  };

  const handleRejectAll = () => {
    const minimalPreferences: ConsentPreferences = {
      essential: true,
      analytics: false,
      marketing: false,
      preferences: false,
    };
    saveConsent(minimalPreferences);
  };

  const handleSavePreferences = () => {
    const finalPreferences: ConsentPreferences = {
      essential: true,
      analytics: preferences.analytics || false,
      marketing: preferences.marketing || false,
      preferences: preferences.preferences || false,
    };
    saveConsent(finalPreferences);
  };

  const saveConsent = (preferences: ConsentPreferences) => {
    setConsent(preferences);
    updateGTMConsent(preferences);
    setShowBanner(false);
    
    // Initialize analytics if consent is given
    if (preferences.analytics) {
      // Initialize analytics scripts
      const script = document.createElement('script');
      script.src = 'https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX';
      script.async = true;
      document.head.appendChild(script);
    }
  };

  const togglePreference = (id: keyof ConsentPreferences) => {
    if (id === 'essential') return;
    setPreferences(prev => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  if (!showBanner) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 100, opacity: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6"
        role="dialog"
        aria-label="Cookie consent banner"
      >
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-2xl border border-border/50 overflow-hidden">
            {/* Main Content */}
            <div className="p-6 md:p-8">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Cookie className="w-6 h-6 text-primary" />
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg font-heading font-semibold text-dark-text">
                    We Value Your Privacy
                  </h3>
                  <p className="text-sm text-muted-text mt-1 leading-relaxed">
                    We use cookies to enhance your browsing experience, serve personalized content, 
                    and analyze our traffic. By clicking "Accept All", you consent to our use of cookies.
                  </p>
                  
                  {/* Details Toggle */}
                  <button
                    onClick={() => setShowDetails(!showDetails)}
                    className="flex items-center gap-1.5 text-sm text-primary font-medium mt-3 hover:text-primary/80 transition-colors duration-200"
                    aria-expanded={showDetails}
                  >
                    <Settings className="w-4 h-4" />
                    Customize Settings
                    {showDetails ? (
                      <ChevronUp className="w-4 h-4" />
                    ) : (
                      <ChevronDown className="w-4 h-4" />
                    )}
                  </button>
                </div>
              </div>

              {/* Details Panel */}
              <AnimatePresence>
                {showDetails && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="mt-6 pt-6 border-t border-border/50 space-y-4">
                      {consentOptions.map((option) => (
                        <div
                          key={option.id}
                          className={cn(
                            "flex items-start gap-3 p-3 rounded-lg",
                            "hover:bg-light-bg transition-colors duration-200",
                            option.required && "opacity-70"
                          )}
                        >
                          <button
                            onClick={() => togglePreference(option.id as keyof ConsentPreferences)}
                            disabled={option.required}
                            className={cn(
                              "flex-shrink-0 w-5 h-5 rounded border-2 mt-0.5",
                              "flex items-center justify-center",
                              "transition-all duration-200",
                              preferences[option.id as keyof ConsentPreferences]
                                ? "bg-primary border-primary"
                                : "bg-white border-border",
                              option.required && "cursor-not-allowed"
                            )}
                            aria-label={`Toggle ${option.label}`}
                          >
                            {preferences[option.id as keyof ConsentPreferences] && (
                              <Check className="w-3 h-3 text-white" />
                            )}
                          </button>
                          <div className="flex-1">
                            <div className="flex items-center gap-2">
                              <span className="text-sm font-medium text-dark-text">
                                {option.label}
                              </span>
                              {option.required && (
                                <span className="text-xs text-muted-text bg-light-bg px-2 py-0.5 rounded-full">
                                  Required
                                </span>
                              )}
                            </div>
                            <p className="text-xs text-muted-text mt-0.5">
                              {option.description}
                            </p>
                          </div>
                        </div>
                      ))}

                      <div className="pt-4 border-t border-border/50">
                        <button
                          onClick={handleSavePreferences}
                          className="w-full py-2.5 px-4 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition-colors duration-200"
                        >
                          Save Preferences
                        </button>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-3 p-6 pt-0 bg-light-bg/50">
              <button
                onClick={handleAcceptAll}
                className="flex-1 py-2.5 px-6 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition-colors duration-200 shadow-sm hover:shadow-md"
              >
                Accept All
              </button>
              <button
                onClick={handleRejectAll}
                className="flex-1 py-2.5 px-6 bg-white text-dark-text rounded-lg font-medium hover:bg-light-bg transition-colors duration-200 border border-border"
              >
                Reject All
              </button>
              <button
                onClick={() => setShowDetails(!showDetails)}
                className="py-2.5 px-6 text-muted-text hover:text-dark-text transition-colors duration-200 font-medium text-sm"
              >
                {showDetails ? 'Hide Settings' : 'Customize'}
              </button>
            </div>

            {/* Privacy Shield */}
            <div className="flex items-center justify-center gap-2 py-3 bg-white/50 border-t border-border/50">
              <Shield className="w-3.5 h-3.5 text-muted-text" />
              <span className="text-xs text-muted-text">
                Your privacy is important to us. Learn more in our{' '}
                <a href="/privacy-policy" className="text-primary hover:underline">
                  Privacy Policy
                </a>
              </span>
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}