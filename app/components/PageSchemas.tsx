// components/PageSchemas.tsx
import React from 'react';
import { CONSTANTS } from '@/lib/seo';

const SITE_URL = `https://${CONSTANTS.DOMAIN}`;

export function ProductSchema() {
  const commonOfferDefaults = {
    validFrom: '2026-01-01',
    hasMerchantReturnPolicy: {
      '@type': 'MerchantReturnPolicy',
      applicableCountry: 'US',
      returnPolicyCategory: 'https://schema.org/MerchantReturnNotPermitted',
    },
    shippingDetails: {
      '@type': 'OfferShippingDetails',
      shippingRate: {
        '@type': 'MonetaryAmount',
        value: '0.00',
        currency: 'USD',
      },
      shippingDestination: {
        '@type': 'DefinedRegion',
        addressCountry: 'US',
      },
      deliveryTime: {
        '@type': 'ShippingDeliveryTime',
        handlingTime: {
          '@type': 'QuantitativeValue',
          minValue: 0,
          maxValue: 0,
          unitCode: 'DAY',
        },
        transitTime: {
          '@type': 'QuantitativeValue',
          minValue: 0,
          maxValue: 0,
          unitCode: 'DAY',
        },
      },
    },
  };

  const productSchema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    '@id': `${SITE_URL}/#product`,
    name: 'Best IPTV Provider USA Premium Subscription',
    sku: 'IPTV-PROVIDER-USA-PREMIUM',
    category: 'Streaming Service',
    description: `Best IPTV Provider in the USA. Stream 36,000+ live channels and 120,000+ movies and TV shows in 4K Ultra HD. Instant activation, free trial available, USD pricing, and 24/7 US support.`,
    image: {
      '@type': 'ImageObject',
      '@id': `${SITE_URL}/#primaryimage`,
      url: `${SITE_URL}/img/structer.webp`,
      contentUrl: `${SITE_URL}/img/structer.webp`,
      width: { '@type': 'QuantitativeValue', value: 1200 },
      height: { '@type': 'QuantitativeValue', value: 630 },
      caption: 'Best IPTV Provider USA - 4K Ultra HD Streaming Service',
      representativeOfPage: true,
    },
    brand: {
      '@type': 'Brand',
      name: CONSTANTS.BRAND_NAME,
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '1255',
      bestRating: '5',
      worstRating: '1',
    },
    offers: [
      {
        '@type': 'Offer',
        name: '1 Screen - 3 Months IPTV Subscription',
        price: '29.00',
        priceCurrency: 'USD',
        priceValidUntil: '2027-12-31',
        availability: 'https://schema.org/InStock',
        url: `${SITE_URL}/pricing`,
        ...commonOfferDefaults,
      },
      {
        '@type': 'Offer',
        name: '1 Screen - 6 Months IPTV Subscription',
        price: '49.00',
        priceCurrency: 'USD',
        priceValidUntil: '2027-12-31',
        availability: 'https://schema.org/InStock',
        url: `${SITE_URL}/pricing`,
        ...commonOfferDefaults,
      },
      {
        '@type': 'Offer',
        name: '1 Screen - 12 Months IPTV Subscription',
        price: '79.00',
        priceCurrency: 'USD',
        priceValidUntil: '2027-12-31',
        availability: 'https://schema.org/InStock',
        url: `${SITE_URL}/pricing`,
        ...commonOfferDefaults,
      },
      {
        '@type': 'Offer',
        name: '2 Screens - 3 Months IPTV Subscription',
        price: '49.00',
        priceCurrency: 'USD',
        priceValidUntil: '2027-12-31',
        availability: 'https://schema.org/InStock',
        url: `${SITE_URL}/pricing`,
        ...commonOfferDefaults,
      },
      {
        '@type': 'Offer',
        name: '2 Screens - 6 Months IPTV Subscription',
        price: '79.00',
        priceCurrency: 'USD',
        priceValidUntil: '2027-12-31',
        availability: 'https://schema.org/InStock',
        url: `${SITE_URL}/pricing`,
        ...commonOfferDefaults,
      },
      {
        '@type': 'Offer',
        name: '2 Screens - 12 Months IPTV Subscription',
        price: '129.00',
        priceCurrency: 'USD',
        priceValidUntil: '2027-12-31',
        availability: 'https://schema.org/InStock',
        url: `${SITE_URL}/pricing`,
        ...commonOfferDefaults,
      },
      {
        '@type': 'Offer',
        name: '3 Screens - 3 Months IPTV Subscription',
        price: '69.00',
        priceCurrency: 'USD',
        priceValidUntil: '2027-12-31',
        availability: 'https://schema.org/InStock',
        url: `${SITE_URL}/pricing`,
        ...commonOfferDefaults,
      },
      {
        '@type': 'Offer',
        name: '3 Screens - 6 Months IPTV Subscription',
        price: '109.00',
        priceCurrency: 'USD',
        priceValidUntil: '2027-12-31',
        availability: 'https://schema.org/InStock',
        url: `${SITE_URL}/pricing`,
        ...commonOfferDefaults,
      },
      {
        '@type': 'Offer',
        name: '3 Screens - 12 Months IPTV Subscription',
        price: '179.00',
        priceCurrency: 'USD',
        priceValidUntil: '2027-12-31',
        availability: 'https://schema.org/InStock',
        url: `${SITE_URL}/pricing`,
        ...commonOfferDefaults,
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
    />
  );
}

export function FAQSchema() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What is IPTV and how does it work?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'IPTV stands for Internet Protocol Television. Instead of a cable or satellite box, your channels and movies stream over your internet connection. With this IPTV Provider, you can watch 36,000+ live channels and over 120,000 movies and TV shows in 4K on your Smart TV, Firestick, phone, or tablet.',
        },
      },
      {
        '@type': 'Question',
        name: 'What makes this the best IPTV Provider in the USA?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'This IPTV Provider is built for American viewers with 36,000+ live channels covering the NFL, NBA, MLB, NHL, UFC, and PPV events, plus over 120,000 movies and TV shows on demand. Anti-freeze servers run on dedicated capacity in New York, Dallas, and Los Angeles for smooth playback during peak events.',
        },
      },
      {
        '@type': 'Question',
        name: 'Which devices are compatible with your IPTV services?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Our IPTV services work on Samsung and LG Smart TVs, Android TV, Google TV, Amazon Firestick, Apple TV, iPhone, iPad, Windows PC, Mac, plus MAG and Formuler set-top boxes. If you are not sure about your device, contact our support team and we will check before you subscribe.',
        },
      },
      {
        '@type': 'Question',
        name: 'How does the setup and activation process work?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Once you choose your IPTV Subscription plan and screen count, you receive your M3U playlist and Xtream Codes login instantly. Install a supported player like IPTV Extreme Pro, TiviMate, or Smart IPTV, paste in your credentials, and start streaming. Activation is instant and setup takes under 5 minutes.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can I request a free trial before I pay?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. Request a free trial and we will set you up so you can test the 4K picture quality, check the channel lineup for NFL Sunday or NBA games, and make sure everything runs smooth on your device and internet connection. No pressure and no commitment.',
        },
      },
      {
        '@type': 'Question',
        name: 'How do I install the IPTV player on my Smart TV or Firestick?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'For Smart TVs and Firestick, download a supported player like IPTV Extreme Pro, TiviMate, Smart IPTV, or IPTV Smarters from your app store, then enter the login details we send you. If any step is unclear, our 24/7 US support team guides you through it directly.',
        },
      },
      {
        '@type': 'Question',
        name: 'What payment methods do you accept and what currency is used?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'All prices are in US dollars (USD $) and you can cancel anytime. We accept Credit Card, PayPal, and Crypto through a secure encrypted checkout. You can pick a 1, 3, 6, or 12 month IPTV Subscription and choose 1, 2, or 3 screens for your household.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is technical support available during my IPTV Subscription?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, right through your whole IPTV Subscription. Reach our US-based support team any time via email and live chat for help with installation, setup, or anything else. That includes guidance on getting the most out of your player app and quick fixes if you ever notice buffering on your end.',
        },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
    />
  );
}