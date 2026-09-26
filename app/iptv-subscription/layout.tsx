// app/iptv-subscription/layout.tsx
import type { Metadata } from 'next';
import { CONSTANTS } from '@/lib/seo';

const SITE_URL = CONSTANTS.SITE_URL;
const BRAND = CONSTANTS.BRAND_NAME;
const PAGE_URL = `${SITE_URL}/iptv-subscription`;

const clampTitle = (s: string, max = 60): string =>
  s.length <= max ? s : s.slice(0, max - 1).trimEnd() + '…';

const clampDescription = (s: string, max = 158): string =>
  s.length <= max ? s : s.slice(0, max - 3).trimEnd() + '...';

const PAGE_TITLE = clampTitle(
  `IPTV Subscription USA | IPTV Service for Firestick & Roku`
);

const PAGE_DESCRIPTION = clampDescription(
  `Get the best IPTV subscription in the USA from $29. 36,000+ channels, 120,000+ movies in 4K. Works on Firestick, Roku, and Smart TV. Free trial, no lock-in.`
);

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: PAGE_TITLE, absolute: PAGE_TITLE },
  description: PAGE_DESCRIPTION,
  keywords: [
    'iptv subscription',
    'iptv subscription usa',
    'best iptv subscription',
    'iptv subscription usa 2026',
    'iptv service',
    'iptv service usa',
    'best iptv service',
    'iptv firestick',
    'iptv firestick setup',
    'iptv for firestick',
    'iptv roku',
    'iptv for roku',
    'iptv roku setup',
    'iptv provider',
    'iptv provider usa',
    '4k iptv subscription',
    'iptv subscription usa pricing',
    'free iptv trial usa',
    'iptv smarters pro setup',
    'iptv smart tv usa',
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
        alt: `IPTV Subscription USA - 36,000+ live channels in 4K on Firestick and Roku`,
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

const IPTVSubscriptionSchema = () => {
  const currentDate = new Date().toISOString().split('T')[0];

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      // ----------------------------------------------------------------
      // ORGANIZATION
      // ----------------------------------------------------------------
      {
        '@type': 'Organization',
        '@id': `${SITE_URL}/#organization`,
        name: BRAND,
        alternateName: `${BRAND} Streaming`,
        url: SITE_URL,
        logo: `${SITE_URL}/img/iptv-logo.webp`,
        image: `${SITE_URL}/img/structer.webp`,
        description: `${BRAND} is a trusted USA IPTV provider offering IPTV subscriptions with 36,000+ live channels and 120,000+ movies and TV shows in 4K Ultra HD. Works on Firestick, Roku, and Smart TV with WhatsApp guided setup.`,
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

      // ----------------------------------------------------------------
      // WEBSITE
      // ----------------------------------------------------------------
      {
        '@type': 'WebSite',
        '@id': `${SITE_URL}/#website`,
        url: SITE_URL,
        name: BRAND,
        alternateName: `${BRAND} - Best IPTV Provider USA`,
        publisher: { '@id': `${SITE_URL}/#organization` },
        inLanguage: 'en-US',
      },

      // ----------------------------------------------------------------
      // WEBPAGE
      // ----------------------------------------------------------------
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

      // ----------------------------------------------------------------
      // BREADCRUMB
      // ----------------------------------------------------------------
      {
        '@type': 'BreadcrumbList',
        '@id': `${PAGE_URL}/#breadcrumb`,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'IPTV Subscription',
            item: PAGE_URL,
          },
        ],
      },

      // ----------------------------------------------------------------
      // PRODUCT — subscription with USD offers
      // ----------------------------------------------------------------
      {
        '@type': 'Product',
        '@id': `${PAGE_URL}/#product`,
        name: 'IPTV Subscription USA — Firestick, Roku & Smart TV',
        sku: 'IPTV-SUBSCRIPTION-US',
        category: 'Streaming Service',
        description: `Best IPTV subscription in the USA from ${BRAND}. 36,000+ live channels, 120,000+ movies and TV shows in 4K Ultra HD. Works on Firestick, Roku, Smart TV, Apple TV, Android, and PC. Free trial available, USD pricing with no lock-in contract.`,
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
            description: 'IPTV subscription 3 month plan on 1 device with 36,000+ live channels and 120,000+ movies.',
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
            description: 'IPTV subscription 6 month plan on 1 device with 36,000+ live channels and 120,000+ movies.',
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
            description: 'IPTV subscription 12 month VIP plan on 1 device with 36,000+ live channels and 120,000+ movies.',
          },
          {
            '@type': 'Offer',
            name: '2 Screens - 3 Months',
            priceCurrency: 'USD',
            price: '49.00',
            priceValidUntil: '2027-12-31',
            validFrom: currentDate,
            availability: 'https://schema.org/InStock',
            url: `${SITE_URL}/pricing`,
            description: 'IPTV subscription 3 month plan on 2 devices with 36,000+ live channels.',
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
            description: 'IPTV subscription 6 month plan on 2 devices with 36,000+ live channels.',
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
            description: 'IPTV subscription 12 month VIP plan on 2 devices with 36,000+ live channels.',
          },
          {
            '@type': 'Offer',
            name: '3 Screens - 3 Months',
            priceCurrency: 'USD',
            price: '69.00',
            priceValidUntil: '2027-12-31',
            validFrom: currentDate,
            availability: 'https://schema.org/InStock',
            url: `${SITE_URL}/pricing`,
            description: 'IPTV subscription 3 month plan on 3 devices with 36,000+ live channels.',
          },
          {
            '@type': 'Offer',
            name: '3 Screens - 6 Months',
            priceCurrency: 'USD',
            price: '109.00',
            priceValidUntil: '2027-12-31',
            validFrom: currentDate,
            availability: 'https://schema.org/InStock',
            url: `${SITE_URL}/pricing`,
            description: 'IPTV subscription 6 month plan on 3 devices with 36,000+ live channels.',
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
            description: 'IPTV subscription 12 month VIP plan on 3 devices with 36,000+ live channels.',
          },
        ],
      },

      // ----------------------------------------------------------------
      // HOWTO — subscription setup on Firestick / Roku / Smart TV
      // ----------------------------------------------------------------
      {
        '@type': 'HowTo',
        '@id': `${PAGE_URL}/#howto`,
        name: 'How to set up your IPTV subscription on Firestick, Roku, or Smart TV',
        description: 'Step-by-step guide to activate your IPTV subscription and start streaming on any device in the USA.',
        totalTime: 'PT10M',
        estimatedCost: {
          '@type': 'MonetaryAmount',
          currency: 'USD',
          value: '29.00',
        },
        supply: [
          {
            '@type': 'HowToSupply',
            name: 'Firestick, Roku, Smart TV, Apple TV, Android device, or PC',
          },
          {
            '@type': 'HowToSupply',
            name: 'Stable internet connection (minimum 15 Mbps, 30 Mbps for 4K)',
          },
          {
            '@type': 'HowToSupply',
            name: 'Active IPTV subscription or free trial',
          },
        ],
        tool: [
          {
            '@type': 'HowToTool',
            name: 'IPTV Smarters Pro (recommended IPTV player)',
          },
          {
            '@type': 'HowToTool',
            name: 'WhatsApp (for 24/7 setup support)',
          },
        ],
        step: [
          {
            '@type': 'HowToStep',
            position: 1,
            name: 'Pick your IPTV subscription plan',
            text: 'Choose how many screens you need at home and pick a 3, 6, or 12 month IPTV subscription. Everything is in US dollars with no lock-in contract.',
          },
          {
            '@type': 'HowToStep',
            position: 2,
            name: 'Get your login details on WhatsApp',
            text: 'Message us on WhatsApp and we send your IPTV service login details in the chat: server URL, username, and password for the Xtream Codes API.',
          },
          {
            '@type': 'HowToStep',
            position: 3,
            name: 'Install IPTV Smarters Pro on your device',
            text: 'Install IPTV Smarters Pro, IBO Player Pro, or TiviMate on your Firestick, Roku (via casting or Firestick), Smart TV, or phone.',
          },
          {
            '@type': 'HowToStep',
            position: 4,
            name: 'Enter your IPTV service login',
            text: 'Open the player, choose Xtream Codes API, and paste your server URL, username, and password. Your full channel list loads automatically.',
          },
          {
            '@type': 'HowToStep',
            position: 5,
            name: 'Test on the free trial',
            text: 'Try everything on the free 24 hour trial. Check the picture quality, sport lineup, and playback on your device before you upgrade to a paid IPTV subscription.',
          },
          {
            '@type': 'HowToStep',
            position: 6,
            name: 'Start streaming in 4K',
            text: 'Enjoy instant access to 36,000+ live channels and 120,000+ movies and TV shows. Sport coverage includes NFL, NBA, MLB, NHL, UFC, boxing PPV, plus ESPN, Fox, NBC, CBS, ABC, HBO, and Showtime.',
          },
        ],
      },

      // ----------------------------------------------------------------
      // FAQ
      // ----------------------------------------------------------------
      {
        '@type': 'FAQPage',
        '@id': `${PAGE_URL}/#faq`,
        mainEntity: [
          {
            '@type': 'Question',
            name: 'How much does an IPTV subscription cost in the USA?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Our IPTV subscription plans start at just $29 for 3 months on 1 screen. The 6 month plan is $49, and the 12 month VIP plan is $79 — saving you up to 50% off shorter terms. Multi-screen IPTV service plans for 2 or 3 devices at home are also available from $79.',
            },
          },
          {
            '@type': 'Question',
            name: 'What do I get with an IPTV service from IPTV Pro?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Every IPTV service subscription includes 36,000+ live channels, 120,000+ movies and TV shows, full live sport (NFL, NBA, MLB, NHL, UFC, boxing PPV, ESPN, Fox, NBC, CBS, ABC, HBO, Showtime), a 7-day EPG guide, and 24/7 WhatsApp support. No hidden fees, no lock-in contract.',
            },
          },
          {
            '@type': 'Question',
            name: 'Does IPTV work on Firestick?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes — Firestick is the #1 device for IPTV Firestick setups in the USA. You install IPTV Smarters Pro or IBO Player Pro on your Fire TV Stick 4K, 4K Max, Lite, or Fire TV Cube in under 5 minutes. Send us your Device Key and we activate your IPTV subscription remotely.',
            },
          },
          {
            '@type': 'Question',
            name: 'Does IPTV work on Roku?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Roku does not allow sideloading like Firestick, but you can still run IPTV on any Roku TV or Roku Stick using three methods: screen mirroring from the Roku mobile app, screen casting from a Windows or Mac PC, or plugging a Firestick 4K Max into your Roku TV HDMI port. Our WhatsApp team helps you choose the best option for your setup.',
            },
          },
          {
            '@type': 'Question',
            name: 'Which IPTV player should I use?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'We recommend IPTV Smarters Pro as the primary IPTV player for Firestick, Smart TV, Android, and iOS. IBO Player Pro and TiviMate are also fully supported as alternates. All three load your channel list, EPG, and favorites automatically once your login details are entered.',
            },
          },
          {
            '@type': 'Question',
            name: 'Is there a free trial before I pay for an IPTV subscription?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes. Message us on WhatsApp and we will set you up with a free 24-hour trial IPTV subscription. Test the 4K picture quality, check the sport and movie lineup, and make sure everything runs smooth on your device and internet connection before you commit to a paid plan.',
            },
          },
          {
            '@type': 'Question',
            name: 'Can I use my IPTV subscription on multiple devices at once?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes. You can install the IPTV service on unlimited devices, but the number of simultaneous streams depends on your plan. Choose 1, 2, or 3 screens at checkout so your household can watch different content in different rooms at the same time.',
            },
          },
          {
            '@type': 'Question',
            name: 'Do I need a VPN for IPTV in the USA?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'No VPN is required. Our IPTV service runs on US-optimized servers in New York, Dallas, and Los Angeles, delivering smooth buffer-free streaming on your home connection. If your ISP applies streaming throttling during peak hours, a VPN is fully compatible and will not affect playback quality.',
            },
          },
        ],
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      id="iptv-subscription-schema"
      suppressHydrationWarning
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
};

export default function IPTVSubscriptionLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full overflow-x-hidden min-h-screen flex flex-col bg-[#04208B] text-[#EDEADE]">
      <IPTVSubscriptionSchema />
      <main className="flex-grow w-full">{children}</main>
    </div>
  );
}