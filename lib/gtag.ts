// Google Analytics utility functions
export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID || ""

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageview = (url: string) => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("config", GA_TRACKING_ID, {
      page_path: url,
    })
  }
}

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const event = (action: string, parameters: any) => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", action, parameters)
  }
}

// Declare gtag function for TypeScript
declare global {
  interface Window {
    gtag: (...args: any[]) => void
  }
}

// Export gtag for direct use
export const gtag = (...args: any[]) => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag(...args)
  }
}
