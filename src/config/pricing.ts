import { Locale } from "@/i18n.config"

export const pricingConfig = {
  en: {
    currency: "USD",
    extraScreenPrice: 500,
    projectTypes: [
      { id: "landing-page", basePrice: 5000 },
      { id: "ecommerce", basePrice: 25000 },
      { id: "webapp", basePrice: 40000 },
      { id: "mobileapp", basePrice: 50000 },
    ],
    additionalFeatures: {
      "landing-page": [
        { id: "cms", price: 2500 },
        { id: "multilanguage", price: 4000 },
        { id: "seo", price: 3000 },
        { id: "analytics", price: 1500 },
        { id: "crm-integration", price: 2000 },
      ],
      ecommerce: [
        { id: "inventory", price: 8000 },
        { id: "customer-accounts", price: 5000 },
        { id: "discounts", price: 4000 },
        { id: "reviews", price: 3000 },
        { id: "subscription", price: 10000 },
      ],
      webapp: [
        { id: "auth", price: 8000 },
        { id: "dashboard", price: 12000 },
        { id: "api-integration", price: 10000 },
        { id: "reporting", price: 8000 },
        { id: "realtime", price: 15000 },
      ],
      mobileapp: [
        { id: "offline-mode", price: 10000 },
        { id: "push-notifications", price: 5000 },
        { id: "geolocation", price: 8000 },
        { id: "in-app-purchases", price: 12000 },
        { id: "social-integration", price: 6000 },
      ],
    },
    designOptions: [
      { id: "template", price: 0 },
      { id: "professional", price: 8000 },
      { id: "premium", price: 20000 },
    ],
    maintenanceOptions: [
      { id: "none", price: 0 },
      { id: "basic", price: 500 },
      { id: "standard", price: 1500 },
      { id: "premium", price: 4000 },
    ],
  },
  es: {
    currency: "USD",
    extraScreenPrice: 40,
    projectTypes: [
      { id: "landing-page", basePrice: 400 },
      { id: "ecommerce", basePrice: 1000 },
      { id: "webapp", basePrice: 800 },
      { id: "mobileapp", basePrice: 1500 },
    ],
    additionalFeatures: {
      "landing-page": [
        { id: "cms", price: 300 },
        { id: "multilanguage", price: 100 },
        { id: "seo", price: 150 },
        { id: "analytics", price: 250 },
      ],
      ecommerce: [
        { id: "inventory", price: 1000 },
        { id: "customer-accounts", price: 700 },
        { id: "discounts", price: 500 },
        { id: "reviews", price: 400 },
        { id: "subscription", price: 1200 },
      ],
      webapp: [
        { id: "dashboard", price: 300 },
        { id: "api-integration", price: 300 },
        { id: "reporting", price: 600 },
        { id: "realtime", price: 400 },
      ],
      mobileapp: [
        { id: "offline-mode", price: 1200 },
        { id: "push-notifications", price: 300 },
        { id: "geolocation", price: 400 },
        { id: "in-app-purchases", price: 600 },
        { id: "social-integration", price: 300 },
      ],
    },
    designOptions: [
      { id: "template", price: 0 },
      { id: "premium", price: 500 },
    ],
    maintenanceOptions: [
      { id: "none", price: 0 },
      { id: "basic", price: 20 },
      { id: "standard", price: 100 },
      { id: "premium", price: 200 },
    ],
  },
} 