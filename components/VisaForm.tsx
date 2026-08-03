// components/VisaForm.tsx
"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Loader2, 
  CheckCircle, 
  AlertCircle,
  Calendar,
  Mail,
  Phone,
  User,
  Globe,
  Briefcase,
  ArrowRight,
  Home
} from "lucide-react";
import { z } from "zod";
import { cn } from "@/lib/utils";

// Validation Schema
const visaFormSchema = z.object({
  fullName: z
    .string()
    .min(2, "Full name must be at least 2 characters")
    .max(100, "Full name must be less than 100 characters")
    .regex(/^[a-zA-Z\s'-]+$/, "Name can only contain letters, spaces, apostrophes, and hyphens")
    .trim(),
  
  mobileNumber: z
    .string()
    .min(10, "Please enter a valid phone number")
    .max(15, "Phone number is too long")
    .regex(/^[\+]?[(]?[0-9]{1,4}[)]?[-\s\.]?[(]?[0-9]{1,4}[)]?[-\s\.]?[0-9]{1,5}[-\s\.]?[0-9]{1,5}$/, "Please enter a valid phone number"),
  
  email: z
    .string()
    .email("Please enter a valid email address")
    .min(5, "Email must be at least 5 characters")
    .max(100, "Email must be less than 100 characters")
    .toLowerCase()
    .trim(),
  
  destination: z
    .string()
    .min(2, "Please select a destination")
    .max(100, "Destination must be less than 100 characters")
    .trim(),
  
  travelDate: z
    .string()
    .min(1, "Please select a travel date")
    .refine((date) => {
      const selected = new Date(date);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      return selected >= today;
    }, "Travel date must be today or in the future"),
  
  purpose: z
    .string()
    .min(2, "Please select a purpose of travel")
    .max(100, "Purpose must be less than 100 characters")
    .trim(),
  
  honeypot: z
    .string()
    .max(0, "Spam detected"),
});

type VisaFormData = z.infer<typeof visaFormSchema>;

interface VisaFormProps {
  className?: string;
  onSuccess?: () => void;
}

const purposes = [
  { value: "tourism", label: "Tourism" },
  { value: "business", label: "Business" },
  { value: "family-visit", label: "Family Visit" },
  { value: "medical", label: "Medical" },
  { value: "education", label: "Education" },
  { value: "other", label: "Other" },
];

const destinations = [
  "United States",
  "United Kingdom",
  "Canada",
  "Australia",
  "Schengen Countries",
  "United Arab Emirates",
  "Singapore",
  "Japan",
  "South Korea",
  "New Zealand",
  "Thailand",
  "Malaysia",
  "Germany",
  "France",
  "Italy",
  "Spain",
  "Netherlands",
  "Switzerland",
  "Other",
];

export function VisaForm({ className, onSuccess }: VisaFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState<string>('');

  const {
    register,
    handleSubmit,
    formState: { errors, isDirty, isValid },
    reset,
  } = useForm<VisaFormData>({
    resolver: zodResolver(visaFormSchema),
    mode: "onChange",
    defaultValues: {
      fullName: "",
      mobileNumber: "",
      email: "",
      destination: "",
      travelDate: "",
      purpose: "",
      honeypot: "",
    },
  });

  // ✅ Track Google Ads Conversion
  const trackConversion = () => {
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag('event', 'form_start', {
        // Google will automatically use the conversion ID from your setup
      });
    }
  };

  const onSubmit = async (data: VisaFormData) => {
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "Something went wrong. Please try again.");
      }

      setSubmitStatus('success');
      reset();
      onSuccess?.();
      
      // ✅ Track conversion on successful form submission
      trackConversion();
      
    } catch (error) {
      setSubmitStatus('error');
      setErrorMessage(error instanceof Error ? error.message : "Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setSubmitStatus('idle');
    setErrorMessage('');
    reset();
  };

  // Success State
  if (submitStatus === 'success') {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="text-center py-8 px-4"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
          className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6"
        >
          <CheckCircle className="w-10 h-10 text-green-600" />
        </motion.div>
        
        <h3 className="text-2xl font-heading font-bold text-dark-text mb-2">
          Thank You!
        </h3>
        <p className="text-muted-text mb-2">
          Your enquiry has been received.
        </p>
        <p className="text-muted-text text-sm mb-6">
          Our team will contact you shortly.
        </p>
        
        <button
          onClick={handleReset}
          className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors duration-300 font-medium"
        >
          <Home className="w-4 h-4" />
          Return Home
        </button>
      </motion.div>
    );
  }

  return (
    <div className={cn("w-full", className)}>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        {/* Honeypot Field - Hidden from users */}
        <div className="hidden">
          <label htmlFor="honeypot">Leave this field empty</label>
          <input
            id="honeypot"
            type="text"
            {...register("honeypot")}
            tabIndex={-1}
            autoComplete="off"
          />
        </div>

        <div className="space-y-4">
          {/* Full Name */}
          <div>
            <label htmlFor="fullName" className="block text-sm font-medium text-dark-text mb-1.5">
              Full Name <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-text" />
              <input
                id="fullName"
                type="text"
                placeholder="John Doe"
                className={cn(
                  "w-full pl-10 pr-4 py-3",
                  "bg-white border rounded-lg",
                  "focus:ring-2 focus:ring-primary/20 focus:border-primary",
                  "transition-all duration-200 outline-none",
                  "text-dark-text placeholder:text-muted-text/60",
                  errors.fullName ? "border-red-500" : "border-border"
                )}
                {...register("fullName")}
                aria-invalid={!!errors.fullName}
                aria-describedby={errors.fullName ? "fullName-error" : undefined}
                disabled={isSubmitting}
              />
            </div>
            <AnimatePresence>
              {errors.fullName && (
                <motion.p
                  id="fullName-error"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="mt-1.5 text-sm text-red-500 flex items-center gap-1"
                >
                  <AlertCircle className="w-3.5 h-3.5" />
                  {errors.fullName.message}
                </motion.p>
              )}
            </AnimatePresence>
          </div>

          {/* Mobile Number */}
          <div>
            <label htmlFor="mobileNumber" className="block text-sm font-medium text-dark-text mb-1.5">
              Mobile Number <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-text" />
              <input
                id="mobileNumber"
                type="tel"
                placeholder="+91 98765 43210"
                className={cn(
                  "w-full pl-10 pr-4 py-3",
                  "bg-white border rounded-lg",
                  "focus:ring-2 focus:ring-primary/20 focus:border-primary",
                  "transition-all duration-200 outline-none",
                  "text-dark-text placeholder:text-muted-text/60",
                  errors.mobileNumber ? "border-red-500" : "border-border"
                )}
                {...register("mobileNumber")}
                aria-invalid={!!errors.mobileNumber}
                aria-describedby={errors.mobileNumber ? "mobileNumber-error" : undefined}
                disabled={isSubmitting}
              />
            </div>
            <AnimatePresence>
              {errors.mobileNumber && (
                <motion.p
                  id="mobileNumber-error"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="mt-1.5 text-sm text-red-500 flex items-center gap-1"
                >
                  <AlertCircle className="w-3.5 h-3.5" />
                  {errors.mobileNumber.message}
                </motion.p>
              )}
            </AnimatePresence>
          </div>

          {/* Email Address */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-dark-text mb-1.5">
              Email Address <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-text" />
              <input
                id="email"
                type="email"
                placeholder="john@example.com"
                className={cn(
                  "w-full pl-10 pr-4 py-3",
                  "bg-white border rounded-lg",
                  "focus:ring-2 focus:ring-primary/20 focus:border-primary",
                  "transition-all duration-200 outline-none",
                  "text-dark-text placeholder:text-muted-text/60",
                  errors.email ? "border-red-500" : "border-border"
                )}
                {...register("email")}
                aria-invalid={!!errors.email}
                aria-describedby={errors.email ? "email-error" : undefined}
                disabled={isSubmitting}
              />
            </div>
            <AnimatePresence>
              {errors.email && (
                <motion.p
                  id="email-error"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="mt-1.5 text-sm text-red-500 flex items-center gap-1"
                >
                  <AlertCircle className="w-3.5 h-3.5" />
                  {errors.email.message}
                </motion.p>
              )}
            </AnimatePresence>
          </div>

          {/* Destination Country */}
          <div>
            <label htmlFor="destination" className="block text-sm font-medium text-dark-text mb-1.5">
              Destination Country <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <Globe className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-text" />
              <select
                id="destination"
                className={cn(
                  "w-full pl-10 pr-4 py-3",
                  "bg-white border rounded-lg",
                  "focus:ring-2 focus:ring-primary/20 focus:border-primary",
                  "transition-all duration-200 outline-none appearance-none",
                  "text-dark-text",
                  errors.destination ? "border-red-500" : "border-border"
                )}
                {...register("destination")}
                aria-invalid={!!errors.destination}
                aria-describedby={errors.destination ? "destination-error" : undefined}
                disabled={isSubmitting}
              >
                <option value="">Select destination</option>
                {destinations.map((dest) => (
                  <option key={dest} value={dest}>
                    {dest}
                  </option>
                ))}
              </select>
            </div>
            <AnimatePresence>
              {errors.destination && (
                <motion.p
                  id="destination-error"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="mt-1.5 text-sm text-red-500 flex items-center gap-1"
                >
                  <AlertCircle className="w-3.5 h-3.5" />
                  {errors.destination.message}
                </motion.p>
              )}
            </AnimatePresence>
          </div>

          {/* Travel Date & Purpose - Two columns */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Travel Date */}
            <div>
              <label htmlFor="travelDate" className="block text-sm font-medium text-dark-text mb-1.5">
                Travel Date <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-text" />
                <input
                  id="travelDate"
                  type="date"
                  className={cn(
                    "w-full pl-10 pr-4 py-3",
                    "bg-white border rounded-lg",
                    "focus:ring-2 focus:ring-primary/20 focus:border-primary",
                    "transition-all duration-200 outline-none",
                    "text-dark-text",
                    errors.travelDate ? "border-red-500" : "border-border"
                  )}
                  {...register("travelDate")}
                  aria-invalid={!!errors.travelDate}
                  aria-describedby={errors.travelDate ? "travelDate-error" : undefined}
                  disabled={isSubmitting}
                  min={new Date().toISOString().split('T')[0]}
                />
              </div>
              <AnimatePresence>
                {errors.travelDate && (
                  <motion.p
                    id="travelDate-error"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="mt-1.5 text-sm text-red-500 flex items-center gap-1"
                  >
                    <AlertCircle className="w-3.5 h-3.5" />
                    {errors.travelDate.message}
                  </motion.p>
                )}
              </AnimatePresence>
            </div>

            {/* Purpose of Travel */}
            <div>
              <label htmlFor="purpose" className="block text-sm font-medium text-dark-text mb-1.5">
                Purpose <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <Briefcase className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-text" />
                <select
                  id="purpose"
                  className={cn(
                    "w-full pl-10 pr-4 py-3",
                    "bg-white border rounded-lg",
                    "focus:ring-2 focus:ring-primary/20 focus:border-primary",
                    "transition-all duration-200 outline-none appearance-none",
                    "text-dark-text",
                    errors.purpose ? "border-red-500" : "border-border"
                  )}
                  {...register("purpose")}
                  aria-invalid={!!errors.purpose}
                  aria-describedby={errors.purpose ? "purpose-error" : undefined}
                  disabled={isSubmitting}
                >
                  <option value="">Select purpose</option>
                  {purposes.map((purpose) => (
                    <option key={purpose.value} value={purpose.value}>
                      {purpose.label}
                    </option>
                  ))}
                </select>
              </div>
              <AnimatePresence>
                {errors.purpose && (
                  <motion.p
                    id="purpose-error"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="mt-1.5 text-sm text-red-500 flex items-center gap-1"
                  >
                    <AlertCircle className="w-3.5 h-3.5" />
                    {errors.purpose.message}
                  </motion.p>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Error State */}
          <AnimatePresence>
            {submitStatus === 'error' && errorMessage && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="p-4 bg-red-50 border border-red-200 rounded-lg flex items-start gap-3"
                role="alert"
              >
                <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-medium text-red-800">Something went wrong</p>
                  <p className="text-sm text-red-600">{errorMessage}</p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* ✅ GOOGLE ADS DISCLAIMER */}
          <div className="p-2.5 bg-light-bg rounded-lg border border-border/50">
            <p className="text-[10px] text-muted-text leading-relaxed">
              <strong>Disclaimer:</strong> We provide guidance and document review only. 
              Visa approval is at embassy's discretion.
            </p>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting || !isValid || !isDirty}
            className={cn(
              "w-full py-3.5 px-6",
              "bg-primary text-white font-medium rounded-lg",
              "transition-all duration-300",
              "hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/25",
              "focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2",
              "disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:shadow-none",
              "flex items-center justify-center gap-2"
            )}
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                Submitting...
              </>
            ) : (
              <>
                Request Assistance
                <ArrowRight className="w-4 h-4" />
              </>
            )}
          </button>

          {/* Form Footer */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <div className="flex items-center gap-2 text-xs text-muted-text">
              <CheckCircle className="w-3.5 h-3.5 text-primary" />
              Secure Enquiry
            </div>
            <div className="w-px h-4 bg-border" />
            <div className="flex items-center gap-2 text-xs text-muted-text">
              <CheckCircle className="w-3.5 h-3.5 text-primary" />
              We respond quickly
            </div>
            <div className="w-px h-4 bg-border" />
            <div className="flex items-center gap-2 text-xs text-muted-text">
              <CheckCircle className="w-3.5 h-3.5 text-primary" />
              100% Free Consultation
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}