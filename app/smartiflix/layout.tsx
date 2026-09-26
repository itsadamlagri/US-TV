// app/smartiflix/layout.tsx
import type { Metadata } from 'next';
import { CONSTANTS } from '@/lib/seo';

const SITE_URL = CONSTANTS.SITE_URL;
const BRAND = CONSTANTS.BRAND_NAME;
const PAGE_URL = `${SITE_URL}/smartiflix`;

const clampTitle = (s: string, max = 60): string =>
  s.length <= max ? s : s.slice(0, max - 1).trimEnd() + '…';

const clampDescription = (s: string, max = 158): string =>
  s.length <= max ? s : s.slice(0, max - 3).trimEnd() + '...';

const PAGE_TITLE = clampTitle(
  `Smartiflix IPTV Provider USA | 36,000+ Channels 4K UHD`
);

const PAGE_DESCRIPTION = clampDescription(
  `Get Smartiflix IPTV login details on WhatsApp. Xtream Codes API for 36,000+ channels and 120,000+ movies in 4K. Free trial, USD pricing, no lock-in.`
);

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: PAGE_TITLE, absolute: PAGE_TITLE },
  description: PAGE_DESCRIPTION,
  keywords: [
    'smartiflix',
    'smartiflix iptv',
    'smartiflix iptv provider usa',
    'smartiflix login',
    'smartiflix subscription',
    'smartiflix service',
    'smartiflix xtream codes',
    'smartiflix review',
    'smartiflix price',
    'iptv xtream code login',
    'iptv provider usa',
    'best iptv provider usa',
    'usa iptv subscription',
    'usa iptv service',
    'iptv setup usa',
    '4k streaming usa',
  ],
  authors: [{ name: `${BRAND} Team` }],
  creator: BRAND,
  publisher: BRAND,
  alternates: {
    canonical: PAGE_URL,
    languages: {
      'en-US': PAGE_URL,
      'en-CA': PAGE_URL,
      'en-GB': PAGE_URL,
      'x-default': PAGE_URL,
    },
  },
  openGraph: {
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    url: PAGE_URL,
    siteName: BRAND,
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: `${SITE_URL}/img/structer.webp`,
        width: 1200,
        height: 630,
        alt: `Smartiflix IPTV Provider USA - 36,000+ live channels in 4K Ultra HD`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    images: [`${SITE_URL}/img/structer.webp`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  category: 'entertainment',
};

const SmartiflixSchema = () => {
  const currentDate = new Date().toISOString().split('T')[0];

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': `${SITE_URL}/#organization`,
        name: BRAND,
        alternateName: `${BRAND} Streaming`,
        url: SITE_URL,
        logo: `${SITE_URL}/img/iptv-logo.webp`,
        image: `${SITE_URL}/img/structer.webp`,
        description: `${BRAND} is a trusted USA IPTV provider with 36,000+ live channels and 120,000+ movies and TV shows in 4K Ultra HD. Smartiflix IPTV login details are delivered on WhatsApp with guided setup.`,
        contactPoint: {
          '@type': 'ContactPoint',
          telephone: CONSTANTS.CONTACT.phone,
          email: CONSTANTS.CONTACT.email,
          contactType: 'customer service',
          availableLanguage: ['English'],
          areaServed: 'US',
          contactOption: 'https://schema.org/TollFree',
        },
        sameAs: [
          CONSTANTS.SOCIALS.twitter,
          CONSTANTS.SOCIALS.instagram,
          CONSTANTS.SOCIALS.facebook,
        ],
      },
      {
        '@type': 'WebSite',
        '@id': `${SITE_URL}/#website`,
        url: SITE_URL,
        name: BRAND,
        alternateName: `${BRAND} - Best IPTV Provider USA`,
        publisher: { '@id': `${SITE_URL}/#organization` },
        inLanguage: 'en-US',
      },
      {
        '@type': 'WebPage',
        '@id': `${PAGE_URL}/#webpage`,
        url: PAGE_URL,
        name: PAGE_TITLE,
        description: PAGE_DESCRIPTION,
        inLanguage: 'en-US',
        isPartOf: { '@id': `${SITE_URL}/#website` },
        about: { '@id': `${PAGE_URL}/#product` },
        breadcrumb: { '@id': `${PAGE_URL}/#breadcrumb` },
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${PAGE_URL}/#breadcrumb`,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Smartiflix',
            item: PAGE_URL,
          },
        ],
      },
      {
        '@type': 'Product',
        '@id': `${PAGE_URL}/#product`,
        name: 'Smartiflix IPTV Provider USA Subscription',
        sku: 'SMARTIFLIX-IPTV-US',
        category: 'Streaming Service',
        description: `Smartiflix IPTV in the USA from ${BRAND}. Get your Xtream Codes API login details on WhatsApp with 36,000+ live channels and 120,000+ movies in 4K Ultra HD. Free trial available, USD pricing with no lock-in.`,
        image: `${SITE_URL}/img/structer.webp`,
        brand: { '@type': 'Brand', name: BRAND },
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
            name: '1 Screen - 3 Months',
            priceCurrency: 'USD',
            price: '29.00',
            priceValidUntil: '2027-12-31',
            validFrom: currentDate,
            availability: 'https://schema.org/InStock',
            url: `${SITE_URL}/pricing`,
            description: 'Smartiflix IPTV 3 month plan on 1 device with 36,000+ live channels.',
          },
          {
            '@type': 'Offer',
            name: '1 Screen - 6 Months',
            priceCurrency: 'USD',
            price: '49.00',
            priceValidUntil: '2027-12-31',
            validFrom: currentDate,
            availability: 'https://schema.org/InStock',
            url: `${SITE_URL}/pricing`,
            description: 'Smartiflix IPTV 6 month plan on 1 device with 36,000+ live channels.',
          },
          {
            '@type': 'Offer',
            name: '1 Screen - 12 Months',
            priceCurrency: 'USD',
            price: '79.00',
            priceValidUntil: '2027-12-31',
            validFrom: currentDate,
            availability: 'https://schema.org/InStock',
            url: `${SITE_URL}/pricing`,
            description: 'Smartiflix IPTV 12 month plan on 1 device with 36,000+ live channels.',
          },
          {
            '@type': 'Offer',
            name: '2 Screens - 6 Months',
            priceCurrency: 'USD',
            price: '79.00',
            priceValidUntil: '2027-12-31',
            validFrom: currentDate,
            availability: 'https://schema.org/InStock',
            url: `${SITE_URL}/pricing`,
            description: 'Smartiflix IPTV 6 month plan on 2 devices with 36,000+ live channels.',
          },
          {
            '@type': 'Offer',
            name: '2 Screens - 12 Months',
            priceCurrency: 'USD',
            price: '129.00',
            priceValidUntil: '2027-12-31',
            validFrom: currentDate,
            availability: 'https://schema.org/InStock',
            url: `${SITE_URL}/pricing`,
            description: 'Smartiflix IPTV 12 month plan on 2 devices with 36,000+ live channels.',
          },
          {
            '@type': 'Offer',
            name: '3 Screens - 12 Months',
            priceCurrency: 'USD',
            price: '179.00',
            priceValidUntil: '2027-12-31',
            validFrom: currentDate,
            availability: 'https://schema.org/InStock',
            url: `${SITE_URL}/pricing`,
            description: 'Smartiflix IPTV 12 month plan on 3 devices with 36,000+ live channels.',
          },
        ],
      },
      {
        '@type': 'HowTo',
        '@id': `${PAGE_URL}/#howto`,
        name: 'How to set up Smartiflix IPTV on your device',
        description: 'Step by step guide to enter your Smartiflix IPTV login details and start streaming on any device.',
        totalTime: 'PT10M',
        estimatedCost: {
          '@type': 'MonetaryAmount',
          currency: 'USD',
          value: '29.00',
        },
        step: [
          {
            '@type': 'HowToStep',
            position: 1,
            name: 'Pick your plan',
            text: 'Choose how many screens you need at home and pick a 3, 6, or 12 month plan in US dollars.',
          },
          {
            '@type': 'HowToStep',
            position: 2,
            name: 'Get your Smartiflix IPTV login on WhatsApp',
            text: 'Message us on WhatsApp and we send your Xtream Codes API details: server URL, username, and password.',
          },
          {
            '@type': 'HowToStep',
            position: 3,
            name: 'Install a compatible player app',
            text: 'Install IPTV Smarters Pro, TiviMate, IBO Player Pro, or XCIPTV on your Firestick, Smart TV, or phone.',
          },
          {
            '@type': 'HowToStep',
            position: 4,
            name: 'Enter your Smartiflix login',
            text: 'Open the player, choose Xtream Codes API, and paste your server URL, username, and password. Your channel list loads automatically.',
          },
        ],
      },
      {
        '@type': 'FAQPage',
        '@id': `${PAGE_URL}/#faq`,
        mainEntity: [
          {
            '@type': 'Question',
            name: 'What is Smartiflix?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Smartiflix is a premium IPTV service that delivers live television channels, movies, and TV shows over your internet connection. In the USA, Smartiflix offers 36,000+ live channels and 120,000+ movies and TV shows in 4K Ultra HD, with guided WhatsApp setup and USD pricing.',
            },
          },
          {
            '@type': 'Question',
            name: 'How do I get my Smartiflix IPTV login details?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Pick your plan, message us on WhatsApp, and our team sends your Smartiflix IPTV Xtream Codes API details in the chat. You also get step by step help installing the player app and loading your channel list.',
            },
          },
          {
            '@type': 'Question',
            name: 'Which IPTV players support Smartiflix?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Most modern IPTV players support the Xtream Codes API format. The most popular ones for US viewers are IPTV Smarters Pro, TiviMate, IBO Player Pro, and XCIPTV. Our team helps you choose the right one for your device.',
            },
          },
          {
            '@type': 'Question',
            name: 'Do I need technical skills to set up Smartiflix IPTV?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'No. Setup takes about 10 minutes with our help. You install the player app, copy the details we send on WhatsApp, paste them into the login fields, and your channel list loads automatically.',
            },
          },
          {
            '@type': 'Question',
            name: 'What is the difference between Smartiflix and other IPTV providers?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Smartiflix runs on the same high-quality infrastructure as IPTV Provider USA, with 36,000+ channels, 120,000+ movies, 99.9% uptime, US-optimized servers in New York, Dallas, and Los Angeles, and 24/7 WhatsApp support. You get the same service under the Smartiflix brand name.',
            },
          },
          {
            '@type': 'Question',
            name: 'Is there a free trial for Smartiflix IPTV?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes. Message us on WhatsApp and we will send you a free 24 hour trial Smartiflix login. Test the 4K picture, check the sport lineup, and make sure everything runs smooth on your internet before you commit to a paid plan.',
            },
          },
        ],
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      id="smartiflix-schema"
      suppressHydrationWarning
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
};

export default function SmartiflixLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full overflow-x-hidden min-h-screen flex flex-col bg-[#04208B] text-[#EDEADE]">
      <SmartiflixSchema />
      <main className="flex-grow w-full">{children}</main>
    </div>
  );
}