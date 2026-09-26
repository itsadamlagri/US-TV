import type { Metadata } from 'next';
import { CONSTANTS } from '@/lib/seo';

const SITE_URL = `https://${CONSTANTS.DOMAIN}`;
const BRAND = CONSTANTS.BRAND_NAME;
const PAGE_URL = `${SITE_URL}/faq`;

const clampTitle = (s: string, max = 60): string =>
  s.length <= max ? s : s.slice(0, max - 1).trimEnd() + '…';

const clampDescription = (s: string, max = 160): string =>
  s.length <= max ? s : s.slice(0, max - 3).trimEnd() + '...';

const PAGE_TITLE = clampTitle(
  `IPTV Provider USA FAQ | Setup, Channels & Billing Help`
); // 58 chars

const PAGE_DESCRIPTION = clampDescription(
  `Answers to the most common questions about IPTV Provider USA. 4K streaming, Smart TV setup, USD payments, free trial, and 24/7 WhatsApp help.`
); // ~150 chars

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: PAGE_TITLE, absolute: PAGE_TITLE },
  description: PAGE_DESCRIPTION,
  keywords: [
    'iptv provider usa faq',
    'iptv provider usa setup help',
    'best iptv provider usa',
    'iptv provider usa',
    'iptv subscription usa',
    'iptv smart tv usa',
    'iptv firestick usa',
    'iptv provider usa payment',
    'iptv provider usa support',
    'iptv setup usa',
    'usa iptv service',
    'free iptv trial usa',
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
        alt: `IPTV Provider USA FAQ - Help Center and Answers`,
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

export default function FAQLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}