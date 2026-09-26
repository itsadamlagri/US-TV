'use client';

import dynamic from 'next/dynamic';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { CONSTANTS } from '@/lib/seo';
import {
  PlayCircle,
  ShieldCheck,
  Zap,
  CheckCircle2,
  ArrowRight,
  Medal,
  Trophy,
  MessageCircle,
  Tv,
  Film,
  Globe,
  Sparkles,
  ChevronDown,
  KeyRound,
  Smartphone,
  CreditCard,
  Star,
  Users,
  MonitorSmartphone,
  AlertCircle,
  Wifi,
  Link2,
} from 'lucide-react';
import { FadeIn, FadeInStagger, FadeInItem } from '../components/AnimatedSection';

const PricingSection = dynamic(() => import('../components/PricingSection'), {
  loading: () => (
    <div className="min-h-[600px] flex items-center justify-center">
      <div className="h-12 w-12 animate-spin rounded-full border-4 border-[#1C65CE] border-t-transparent" />
    </div>
  ),
});

const PartnerSlider = dynamic(() => import('../components/PartnerSlider'), {
  loading: () => <div className="h-32 bg-transparent max-w-7xl mx-auto" />,
});

const MovieSlider = dynamic(() => import('../components/MovieSlider'), {
  loading: () => (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-7xl mx-auto px-4">
      {[...Array(4)].map((_, i) => (
        <div key={i} className="aspect-[2/3] bg-[#000814] rounded-2xl animate-pulse" />
      ))}
    </div>
  ),
});

const GlobalServerMap = dynamic(() => import('../components/GlobalServerMap'), {
  loading: () => <div className="h-[400px] bg-[#000814] rounded-3xl animate-pulse max-w-7xl mx-auto" />,
});

// ---------------------------------------------------------------------------
// FAQ ACCORDION
// ---------------------------------------------------------------------------
function FAQItem({ q, a }: { q: string; a: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <button
      onClick={() => setIsOpen(!isOpen)}
      className={`w-full text-left bg-[#EDEADE] border-4 ${
        isOpen ? 'border-[#FFD532]' : 'border-[#1C65CE]/20'
      } rounded-2xl p-6 hover:border-[#FFD532]/60 transition-all duration-300 group`}
      aria-expanded={isOpen}
    >
      <div className="flex justify-between items-center gap-4">
        <h3
          className={`text-lg md:text-xl font-black uppercase tracking-tight transition-colors ${
            isOpen ? 'text-[#1C65CE]' : 'text-[#04208B] group-hover:text-[#1C65CE]'
          } flex items-center gap-3`}
        >
          <span className={`${isOpen ? 'text-[#1C65CE]' : 'text-[#04208B]/30'} font-black text-2xl`}>
            Q.
          </span>
          {q}
        </h3>
        <ChevronDown
          className={`w-6 h-6 flex-shrink-0 transition-transform duration-300 ${
            isOpen ? 'rotate-180 text-[#1C65CE]' : 'text-[#04208B]/30 group-hover:text-[#1C65CE]/50'
          }`}
        />
      </div>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-96 mt-4 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <p className="text-[#04208B]/80 font-medium leading-relaxed pl-10 md:pl-12 border-l-4 border-[#1C65CE] ml-2 py-2">
          {a}
        </p>
      </div>
    </button>
  );
}

export default function IPTVSubscriptionPage() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-[#04208B] text-[#EDEADE] overflow-hidden">

      {/* ==========================================================
          HERO — IPTV Subscription
      ========================================================== */}
      <section className="relative px-15 py-24 md:py-40 overflow-hidden flex flex-col items-center justify-center text-center min-h-screen w-full bg-[#000814]">
        <div className="absolute inset-0 z-0">
          <Image
            src="/img/background.webp"
            alt="IPTV Subscription USA - 36,000+ live channels in 4K"
            fill
            priority
            fetchPriority="high"
            className="object-cover object-center brightness-[0.22]"
            sizes="100vw"
            quality={85}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#000814]/20 via-[#000814]/10 to-[#000814]/20" />
        </div>

        <FadeIn className="relative z-10 max-w-5xl mx-auto flex flex-col items-center justify-center my-auto w-full">
          <div className="inline-flex items-center gap-2 bg-[#1C65CE]/20 border border-[#1C65CE]/40 px-5 py-2 rounded-full mb-6 backdrop-blur-md">
            <Medal className="w-4 h-4 text-[#FFD532]" />
            <span className="text-[#EDEADE] font-extrabold text-xs uppercase tracking-widest flex items-center gap-2">
              Trusted IPTV Service USA 🇺🇸
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight uppercase text-[#EDEADE] mb-6 leading-none break-words">
            IPTV SUBSCRIPTION <br />
            <span className="text-[#FFD532]">USA 4K STREAMING</span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-[#EDEADE]/80 max-w-3xl mx-auto mb-10 font-medium leading-relaxed px-2">
            Get the best IPTV subscription in the USA with 36,000+ live channels, 120,000+ movies and TV shows in crisp 4K Ultra HD. Works on Firestick, Roku, Smart TV, and every device. Free 24-hour trial, guided WhatsApp setup, USD pricing, no lock-in contract.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center w-full max-w-md sm:max-w-xl mx-auto px-4">
            <Link
              href="/pricing"
              className="w-full sm:w-auto text-center whitespace-nowrap py-3.5 px-8 rounded-full bg-[#FFD532] text-[#04208B] font-black text-sm hover:bg-[#E5BE1F] transition-all hover:scale-105 uppercase tracking-wider shrink-0 shadow-lg shadow-[#FFD532]/30 border border-[#04208B]/20"
            >
              Get IPTV Subscription Now
            </Link>
            <Link
              href="/free-trial"
              className="w-full sm:w-auto text-center whitespace-nowrap py-3.5 px-8 rounded-full bg-[#04208B]/80 text-[#EDEADE] border border-[#EDEADE]/20 font-black text-sm hover:bg-[#1C65CE]/20 transition-all hover:scale-105 uppercase tracking-wider flex items-center justify-center gap-2 shrink-0 backdrop-blur-md"
            >
              <PlayCircle className="w-5 h-5 text-[#FFD532] shrink-0" /> Claim Free Trial
            </Link>
          </div>

          <div className="mt-12 flex flex-wrap justify-center gap-6 text-xs md:text-sm text-[#EDEADE] font-bold uppercase tracking-widest bg-[#EDEADE]/5 backdrop-blur-md px-8 py-4 rounded-3xl border border-[#EDEADE]/10 shadow-2xl">
            <span className="flex items-center gap-2">
              <Zap className="w-5 h-5 text-[#FFD532]" /> Instant Activation
            </span>
            <span className="flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-[#FFD532]" /> Anti-Freeze Servers
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-[#FFD532]" /> 99.9% Uptime
            </span>
          </div>
        </FadeIn>
      </section>

      {/* ==========================================================
          WHAT YOU GET — 4 FEATURE CARDS
      ========================================================== */}
      <section className="py-28 bg-[#EDEADE] w-full relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#1C65CE_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.05] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <FadeIn className="text-center mb-16 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-[#1C65CE]/10 border border-[#1C65CE]/25 px-4 py-2 rounded-full mb-6">
              <Sparkles className="w-4 h-4 text-[#1C65CE]" />
              <span className="text-[#1C65CE] font-black text-xs uppercase tracking-widest">
                What Your IPTV Subscription Unlocks
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#04208B] uppercase tracking-tight leading-tight mb-6">
              ONE IPTV SERVICE, <span className="text-[#1C65CE]">EVERYTHING INCLUDED</span>
            </h2>
            <p className="text-[#04208B]/75 font-semibold text-base md:text-lg leading-relaxed">
              Every IPTV subscription from IPTV Pro includes the full streaming service on any device. Here is what you get.
            </p>
          </FadeIn>

          <FadeInStagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Tv,
                title: '36,000+ Live Channels',
                desc: 'All US networks plus international channels from the UK, Canada, Australia, Europe, India, Pakistan, China, and the Middle East.',
              },
              {
                icon: Film,
                title: '120,000+ Movies & TV Shows',
                desc: 'Complete boxsets and the latest cinema releases. Fresh titles land every day in the on-demand library.',
              },
              {
                icon: Trophy,
                title: 'Live Sport & PPV',
                desc: 'NFL, NBA, MLB, NHL, UFC, college football, NASCAR, Formula 1, and every PPV included at no extra cost.',
              },
              {
                icon: MonitorSmartphone,
                title: 'Any Device, Any Screen',
                desc: 'Firestick, Roku, Smart TV, Apple TV, Android, iPhone, iPad, PC, Mac. Your IPTV service works everywhere.',
              },
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <FadeInItem
                  key={idx}
                  className="bg-[#f0ebd8] text-[#04208B] rounded-3xl p-6 md:p-7 border-2 border-[#1C65CE]/20 hover:border-[#FFD532] hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(255,213,50,0.25)] transition-all duration-500 flex flex-col"
                >
                  <div className="w-14 h-14 rounded-2xl bg-[#1C65CE] flex items-center justify-center mb-5 shadow-lg">
                    <Icon className="w-7 h-7 text-[#FFD532]" />
                  </div>
                  <h3 className="text-lg md:text-xl font-black uppercase tracking-tight mb-3">
                    {item.title}
                  </h3>
                  <p className="text-[#04208B]/75 text-sm font-medium leading-relaxed">
                    {item.desc}
                  </p>
                </FadeInItem>
              );
            })}
          </FadeInStagger>

          <FadeIn className="text-center mt-14">
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto">
              <Link
                href="/pricing"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#FFD532] text-[#04208B] font-black text-sm uppercase tracking-widest shadow-lg hover:scale-105 transition-all border border-[#04208B]/20"
              >
                View Subscription Plans
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/support"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#04208B] text-[#EDEADE] font-black text-sm uppercase tracking-widest shadow-lg hover:scale-105 transition-all border border-[#FFD532]"
              >
                <MessageCircle className="w-5 h-5" />
                Ask On WhatsApp
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ==========================================================
          IPTV FIRESTICK SECTION — dedicated keyword
      ========================================================== */}
      <section className="py-24 bg-[#04208B] w-full relative overflow-hidden border-t border-[#1C65CE]/20">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#1C65CE]/10 blur-[150px] rounded-full pointer-events-none" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left — copy */}
            <FadeIn>
              <div className="inline-flex items-center gap-2 bg-[#1C65CE]/20 border border-[#1C65CE]/40 px-4 py-2 rounded-full mb-6">
                <MonitorSmartphone className="w-4 h-4 text-[#FFD532]" />
                <span className="text-[#FFD532] font-black text-xs uppercase tracking-widest">
                  IPTV Firestick Setup
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#EDEADE] uppercase tracking-tight leading-tight mb-6">
                IPTV FIRESTICK — <span className="text-[#FFD532]">EASIEST SETUP</span> IN THE USA
              </h2>

              <p className="text-[#EDEADE]/75 font-medium text-base md:text-lg leading-relaxed mb-6">
                Amazon Firestick is the #1 device for streaming our IPTV service in America. Setup takes under 5 minutes with IPTV Smarters Pro or IBO Player Pro sideloaded directly to your Fire TV Stick 4K, 4K Max, or Fire TV Cube.
              </p>

              <ul className="space-y-3 mb-8">
                {[
                  'Works on Fire TV Stick Lite, 4K, 4K Max, and Fire TV Cube',
                  'Install IPTV Smarters Pro or IBO Player Pro in minutes',
                  'Send your Device Key to support — we activate remotely',
                  'Full 36,000+ channel list loads automatically',
                  '60FPS sports streams with zero buffering',
                ].map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-[#EDEADE]/80 font-bold text-sm md:text-base"
                  >
                    <CheckCircle2 className="w-5 h-5 text-[#FFD532] flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="/setup"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-[#FFD532] text-[#04208B] font-black text-xs uppercase tracking-widest hover:bg-[#E5BE1F] transition-all shadow-lg border border-[#04208B]/20"
                >
                  Firestick Setup Guide <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/support"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-[#1C65CE] text-[#EDEADE] font-black text-xs uppercase tracking-widest hover:bg-[#04208B] transition-all border border-[#FFD532]/40"
                >
                  <MessageCircle className="w-4 h-4" /> Get Firestick Help
                </Link>
              </div>
            </FadeIn>

            {/* Right — 4 step mini timeline */}
            <FadeIn>
              <div className="space-y-4">
                {[
                  {
                    n: '01',
                    title: 'Enable Unknown Sources',
                    desc: 'Fire TV Settings → My Fire TV → Developer Options → Turn on Apps from Unknown Sources.',
                  },
                  {
                    n: '02',
                    title: 'Install Downloader App',
                    desc: 'Search "Downloader" in the Amazon App Store and install it in 30 seconds.',
                  },
                  {
                    n: '03',
                    title: 'Get the Player APK',
                    desc: 'We send you the direct link to IPTV Smarters Pro or IBO Player Pro on WhatsApp.',
                  },
                  {
                    n: '04',
                    title: 'Activate & Stream',
                    desc: 'Send us your Device Key and we activate your IPTV subscription remotely in under 60 seconds.',
                  },
                ].map((step) => (
                  <div
                    key={step.n}
                    className="flex items-start gap-4 bg-[#EDEADE] border-2 border-[#1C65CE]/30 rounded-2xl p-5 hover:border-[#FFD532] transition-all"
                  >
                    <div className="w-12 h-12 rounded-xl bg-[#1C65CE] flex items-center justify-center shrink-0 border border-[#FFD532]/40">
                      <span className="text-[#FFD532] font-black text-base">{step.n}</span>
                    </div>
                    <div>
                      <h3 className="font-black text-[#04208B] text-sm md:text-base uppercase tracking-tight mb-1">
                        {step.title}
                      </h3>
                      <p className="text-[#04208B]/75 text-xs md:text-sm font-medium leading-relaxed">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ==========================================================
          IPTV ROKU SECTION — dedicated keyword
      ========================================================== */}
      <section className="py-24 bg-[#EDEADE] w-full relative overflow-hidden border-t border-[#1C65CE]/10">
        <div className="absolute inset-0 bg-[radial-gradient(#1C65CE_1px,transparent_1px)] [background-size:28px_28px] opacity-[0.05] pointer-events-none" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <FadeIn className="text-center mb-12 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-[#1C65CE]/10 border border-[#1C65CE]/30 px-4 py-2 rounded-full mb-5">
              <AlertCircle className="w-4 h-4 text-[#1C65CE]" />
              <span className="text-[#1C65CE] font-black text-xs uppercase tracking-widest">
                IPTV Roku Guide
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#04208B] uppercase tracking-tight leading-tight mb-5">
              IPTV ROKU — <span className="text-[#1C65CE]">THE TRUTH ABOUT SETUP</span>
            </h2>
            <p className="text-[#04208B]/75 font-semibold text-base md:text-lg leading-relaxed">
              Roku does not allow sideloading like Firestick does. But you can still run our IPTV service on any Roku device with three proven methods that work in the USA.
            </p>
          </FadeIn>

          <FadeInStagger className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {[
              {
                icon: Link2,
                title: 'Method 1 — Screen Mirroring',
                desc: 'Use the Roku mobile app to mirror your phone or tablet screen to your Roku TV. Works on every Roku device. Best for occasional viewing.',
              },
              {
                icon: Wifi,
                title: 'Method 2 — Screen Cast from PC',
                desc: 'Cast from Windows or Mac using the Roku Screen Mirroring beta. Best when you want a bigger screen for sports on Roku TVs.',
              },
              {
                icon: MonitorSmartphone,
                title: 'Method 3 — Add a Firestick',
                desc: 'Plug a $30 Firestick 4K Max into your Roku TV HDMI port. This gives you the native IPTV Smarters Pro experience with zero lag.',
              },
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <FadeInItem
                  key={idx}
                  className="bg-[#f0ebd8] border-2 border-[#1C65CE]/20 rounded-3xl p-6 md:p-7 hover:border-[#FFD532] hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(255,213,50,0.2)] transition-all duration-500 flex flex-col"
                >
                  <div className="w-14 h-14 rounded-2xl bg-[#1C65CE] flex items-center justify-center mb-5 shadow-lg">
                    <Icon className="w-7 h-7 text-[#FFD532]" />
                  </div>
                  <h3 className="text-lg font-black text-[#04208B] uppercase tracking-tight mb-3">
                    {item.title}
                  </h3>
                  <p className="text-[#04208B]/75 text-sm font-medium leading-relaxed">
                    {item.desc}
                  </p>
                </FadeInItem>
              );
            })}
          </FadeInStagger>

          <FadeIn className="text-center">
            <div className="inline-flex flex-col sm:flex-row gap-3 mx-auto">
              <a
                href={`${CONSTANTS.CONTACT.whatsappUrl}?text=${encodeURIComponent(
                  `Hi! I want to set up an IPTV subscription on my Roku. Can you help me choose the best method?`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-[#FFD532] text-[#04208B] font-black text-xs uppercase tracking-widest hover:bg-[#E5BE1F] transition-all shadow-lg border border-[#04208B]/20"
              >
                <MessageCircle className="w-4 h-4" /> Get Roku Help on WhatsApp
              </a>
              <Link
                href="/setup"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-[#04208B] text-[#EDEADE] font-black text-xs uppercase tracking-widest hover:bg-[#1C65CE] transition-all border-2 border-[#FFD532]"
              >
                Full Setup Guide <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ==========================================================
          3 STEP SETUP
      ========================================================== */}
      <section className="py-24 bg-[#04208B] w-full relative overflow-hidden border-t border-[#1C65CE]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <FadeIn>
            <div className="flex flex-col items-center justify-center text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center gap-2 bg-[#1C65CE]/10 border border-[#1C65CE]/25 px-4 py-2 rounded-full mb-6 shadow-sm">
                <div className="w-2.5 h-2.5 rounded-full bg-[#FFD532] animate-pulse" />
                <span className="text-[#FFD532] font-black text-xs uppercase tracking-widest">
                  IPTV Service Setup
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#EDEADE] tracking-tight uppercase leading-[1.05]">
                HOW TO START YOUR <br className="hidden sm:block" />
                <span className="text-[#FFD532] relative inline-block mt-1">
                  IPTV SUBSCRIPTION
                  <span className="absolute -bottom-1 left-0 right-0 h-2 bg-gradient-to-r from-transparent via-[#FFD532]/60 to-transparent rounded-full" />
                </span>
              </h2>

              <p className="text-[#EDEADE]/75 text-base sm:text-lg mt-6 font-semibold max-w-2xl leading-relaxed">
                Three simple steps and you are streaming. We handle the technical side on WhatsApp so you do not have to.
              </p>
            </div>
          </FadeIn>

          <FadeInStagger className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {[
              {
                n: '01',
                icon: CreditCard,
                badge: 'Step One',
                title: 'Pick Your Plan',
                desc: 'Choose how many screens you need at home and pick a 3, 6, or 12 month IPTV subscription. Everything is in USD with no lock-in contract.',
                bullets: ['1, 2, or 3 Screens', '3, 6, or 12 Months', 'Card, PayPal, Crypto, Apple Pay'],
                footer: 'Simple Selection',
              },
              {
                n: '02',
                icon: KeyRound,
                badge: 'Step Two',
                title: 'Get Your Login',
                desc: 'Message us on WhatsApp and we send your IPTV service login details in the chat. You get a server URL, username, and password.',
                bullets: ['Instant Login On WhatsApp', 'Xtream Codes API Format', 'Live Team Guidance'],
                footer: 'Instant Delivery',
              },
              {
                n: '03',
                icon: PlayCircle,
                badge: 'Step Three',
                title: 'Login And Stream',
                desc: 'Install IPTV Smarters Pro, TiviMate, or IBO Player Pro on Firestick, Smart TV, or phone. Paste the login and your channels load automatically.',
                bullets: ['Works With Popular Players', 'Channel List Loads Auto', 'Free Trial Before You Pay'],
                footer: 'Ready To Watch',
              },
            ].map((step) => {
              const Icon = step.icon;
              return (
                <FadeInItem
                  key={step.n}
                  className="group relative z-10 flex flex-col justify-between bg-[#EDEADE] text-[#04208B] rounded-[2.5rem] p-8 sm:p-10 border-2 border-[#1C65CE] shadow-[0_15px_35px_rgba(28,101,206,0.2)] hover:border-[#FFD532] hover:shadow-[0_25px_50px_rgba(255,213,50,0.25)] hover:-translate-y-2.5 transition-all duration-300"
                >
                  <div>
                    <div className="flex items-center justify-between mb-8 relative">
                      <div className="w-16 h-16 rounded-2xl bg-[#1C65CE] shadow-lg shadow-[#1C65CE]/40 border border-[#FFD532] group-hover:scale-110 transition-transform duration-300 flex items-center justify-center">
                        <Icon className="w-8 h-8 text-[#FFD532]" />
                      </div>
                      <span className="text-5xl font-black text-[#04208B] bg-[#FFD532] px-4 py-1 rounded-2xl shadow-md tracking-tight border border-[#04208B]/20">
                        {step.n}
                      </span>
                    </div>

                    <div className="inline-flex items-center gap-1.5 text-[11px] font-black uppercase tracking-widest text-[#04208B] bg-[#FFD532] px-3.5 py-1.5 rounded-full mb-4 shadow-sm border border-[#04208B]/20">
                      {step.badge}
                    </div>

                    <h3 className="text-2xl font-black mb-3 uppercase tracking-tight group-hover:text-[#1C65CE] transition-colors">
                      {step.title}
                    </h3>

                    <p className="text-[#04208B]/80 text-sm font-medium leading-relaxed mb-6">
                      {step.desc}
                    </p>

                    <ul className="text-xs font-bold text-[#04208B]/80 space-y-2.5 mb-8">
                      {step.bullets.map((b) => (
                        <li key={b} className="flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-[#FFD532]" /> {b}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-5 border-t border-[#1C65CE]/30 flex items-center justify-between mt-auto">
                    <span className="text-xs font-black uppercase tracking-wider group-hover:text-[#1C65CE] transition-colors">
                      {step.footer}
                    </span>
                    <div className="w-9 h-9 rounded-xl bg-[#1C65CE] text-[#EDEADE] flex items-center justify-center shadow-md group-hover:bg-[#FFD532] group-hover:text-[#04208B] transition-all duration-300">
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                    </div>
                  </div>
                </FadeInItem>
              );
            })}
          </FadeInStagger>
        </div>
      </section>

      {/* PARTNER SLIDER */}
      <div className="min-h-[128px]">
        {isMounted ? <PartnerSlider /> : <div className="h-32 bg-transparent" />}
      </div>

      {/* PRICING SECTION */}
      <div className="min-h-[600px] bg-[#04208B]" id="pricing-section">
        {isMounted ? <PricingSection /> : <div className="h-[600px] bg-transparent" />}
      </div>

      {/* MOVIE SLIDER */}
      <section id="channels" className="pt-24 bg-[#04208B] max-w-[100vw] overflow-hidden relative min-h-[400px] border-t border-[#1C65CE]/20">
        <FadeIn className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col justify-between items-start mb-12 gap-6 relative z-10 w-full">
          <div>
            <h2 className="text-4xl md:text-5xl font-black text-[#EDEADE] mb-4 uppercase tracking-tight leading-none">
              CHANNELS & MOVIES ON <span className="text-[#FFD532]">YOUR IPTV SUBSCRIPTION</span>
            </h2>
            <p className="text-[#EDEADE]/70 font-medium text-lg">
              Every IPTV subscription unlocks thousands of live television channels plus 120,000+ movies and TV shows in the on-demand library.
            </p>
          </div>
        </FadeIn>
        {isMounted ? (
          <MovieSlider />
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-7xl mx-auto px-4">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="aspect-[2/3] bg-[#000814] rounded-2xl" />
            ))}
          </div>
        )}
      </section>

      {/* GLOBAL SERVER MAP */}
      <div className="min-h-[400px] bg-[#04208B]">
        {isMounted ? <GlobalServerMap /> : <div className="h-[400px] bg-transparent" />}
      </div>

      {/* FAQ */}
      <section className="py-24 bg-[#04208B] relative overflow-hidden border-t border-[#1C65CE]/20">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#1C65CE]/10 blur-[130px] rounded-full pointer-events-none" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <FadeIn className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-[#1C65CE]/20 border border-[#1C65CE]/40 px-4 py-2 rounded-full mb-6">
              <Sparkles className="w-4 h-4 text-[#FFD532]" />
              <span className="text-[#FFD532] font-black text-xs uppercase tracking-widest">
                IPTV Subscription FAQ
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#EDEADE] mb-6 uppercase tracking-tight leading-tight">
              YOUR IPTV <span className="text-[#FFD532]">QUESTIONS</span>
            </h2>
            <p className="text-[#EDEADE]/70 font-medium text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
              The most common questions about IPTV subscriptions, IPTV service, IPTV Firestick, and IPTV Roku.
            </p>
          </FadeIn>

          <FadeInStagger className="space-y-4">
            {[
              {
                q: 'How much does an IPTV subscription cost in the USA?',
                a: 'Our IPTV subscription plans start at just $29 for 3 months on 1 screen. The 6 month plan is $49, and the 12 month VIP plan is $79 — saving you up to 50% off shorter terms. Multi-screen IPTV service plans for 2 or 3 devices at home are also available from $79.',
              },
              {
                q: 'What do I get with an IPTV service from IPTV Pro?',
                a: 'Every IPTV service subscription includes 36,000+ live channels, 120,000+ movies and TV shows, full live sport (NFL, NBA, MLB, NHL, UFC, boxing PPV, ESPN, Fox, NBC, CBS, ABC, HBO, Showtime), a 7-day EPG guide, and 24/7 WhatsApp support. No hidden fees, no lock-in contract.',
              },
              {
                q: 'Does IPTV work on Firestick?',
                a: 'Yes — Firestick is the #1 device for IPTV Firestick setups in the USA. You install IPTV Smarters Pro or IBO Player Pro on your Fire TV Stick 4K, 4K Max, Lite, or Fire TV Cube in under 5 minutes. Send us your Device Key and we activate your IPTV subscription remotely.',
              },
              {
                q: 'Does IPTV work on Roku?',
                a: 'Roku does not allow sideloading like Firestick, but you can still run IPTV on any Roku TV or Roku Stick using three methods: screen mirroring from the Roku mobile app, screen casting from a Windows or Mac PC, or plugging a Firestick 4K Max into your Roku TV HDMI port. Our WhatsApp team helps you choose the best option for your setup.',
              },
              {
                q: 'Which IPTV player should I use?',
                a: 'We recommend IPTV Smarters Pro as the primary IPTV player for Firestick, Smart TV, Android, and iOS. IBO Player Pro and TiviMate are also fully supported as alternates. All three load your channel list, EPG, and favorites automatically once your login details are entered.',
              },
              {
                q: 'Is there a free trial before I pay for an IPTV subscription?',
                a: 'Yes. Message us on WhatsApp and we will set you up with a free 24-hour trial IPTV subscription. Test the 4K picture quality, check the sport and movie lineup, and make sure everything runs smooth on your device and internet connection before you commit to a paid plan.',
              },
              {
                q: 'Can I use my IPTV subscription on multiple devices at once?',
                a: 'Yes. You can install the IPTV service on unlimited devices, but the number of simultaneous streams depends on your plan. Choose 1, 2, or 3 screens at checkout so your household can watch different content in different rooms at the same time.',
              },
              {
                q: 'Do I need a VPN for IPTV in the USA?',
                a: 'No VPN is required. Our IPTV service runs on US-optimized servers in New York, Dallas, and Los Angeles, delivering smooth buffer-free streaming on your home connection. If your ISP applies streaming throttling during peak hours, a VPN is fully compatible and will not affect playback quality.',
              },
            ].map((faq, i) => (
              <FadeInItem key={i}>
                <FAQItem q={faq.q} a={faq.a} />
              </FadeInItem>
            ))}
          </FadeInStagger>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative overflow-hidden py-16 sm:py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-[#EDEADE] w-full">
        <div className="absolute inset-0 bg-[radial-gradient(#1C65CE_1px,transparent_1px)] [background-size:24px_24px] opacity-5 pointer-events-none" />

        <div className="relative z-10 mx-auto max-w-7xl">
          <div className="relative overflow-hidden rounded-[2rem] sm:rounded-[2.5rem] lg:rounded-[3rem] border-2 border-[#1C65CE]/20 bg-[#EDEADE] shadow-2xl">
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#1C65CE]/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[#FFD532]/20 rounded-full blur-3xl pointer-events-none" />

            <div className="h-2 w-full bg-gradient-to-r from-[#1C65CE] via-[#FFD532] to-[#1C65CE]" />

            <FadeIn className="relative z-10 px-5 py-10 text-center sm:px-8 sm:py-14 md:px-12 md:py-16 lg:px-16 lg:py-20">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#1C65CE]/30 bg-[#1C65CE]/10 px-4 py-2 backdrop-blur-md">
                <ShieldCheck className="h-4 w-4 text-[#1C65CE]" />
                <span className="text-xs font-black uppercase tracking-widest text-[#1C65CE] flex items-center gap-1.5">
                  USA IPTV Subscription 🇺🇸
                </span>
              </div>

              <h2 className="mx-auto max-w-5xl text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight uppercase text-[#04208B] leading-[1.05] mb-6">
                START YOUR IPTV <br />
                <span className="text-[#1C65CE]">SUBSCRIPTION TODAY</span>
              </h2>

              <p className="mx-auto mt-4 max-w-3xl text-sm sm:text-base md:text-lg font-medium leading-relaxed text-[#04208B]/80">
                Pick your plan, message us on WhatsApp, and we will get you set up on Firestick, Roku, Smart TV, or any device. Test everything on the free trial first, then upgrade to a paid IPTV subscription only when you are happy. No lock-in. No worries.
              </p>

              <div className="mx-auto mt-10 grid max-w-4xl grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
                {[
                  ['36K+', 'Live Channels'],
                  ['120K+', 'Movies & TV'],
                  ['99.9%', 'Server Uptime'],
                  ['24/7', 'WhatsApp Support'],
                ].map(([value, label]) => (
                  <div key={label} className="rounded-2xl sm:rounded-3xl border border-[#1C65CE]/20 bg-[#f0ebd8] p-4 shadow-sm hover:border-[#FFD532] transition-colors">
                    <div className="text-2xl sm:text-3xl font-black text-[#1C65CE]">{value}</div>
                    <div className="mt-1 text-[10px] sm:text-xs font-extrabold uppercase tracking-widest text-[#04208B]/70">{label}</div>
                  </div>
                ))}
              </div>

              <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-md mx-auto">
                <Link
                  href="/pricing"
                  className="w-full sm:w-auto text-center whitespace-nowrap rounded-2xl bg-[#FFD532] px-8 py-4 text-xs sm:text-sm font-black uppercase tracking-widest text-[#04208B] hover:bg-[#E5BE1F] transition-all hover:scale-105 shrink-0 shadow-lg shadow-[#FFD532]/25 border border-[#04208B]/20"
                >
                  Choose Your IPTV Plan
                </Link>
                <Link
                  href="/free-trial"
                  className="w-full sm:w-auto text-center whitespace-nowrap inline-flex items-center justify-center gap-2 rounded-2xl border border-[#1C65CE]/30 bg-[#f0ebd8] px-8 py-4 text-xs sm:text-sm font-black uppercase tracking-widest text-[#04208B] hover:bg-[#1C65CE]/10 transition-all hover:scale-105 shrink-0 shadow-sm"
                >
                  <PlayCircle className="h-4 w-4 text-[#1C65CE] shrink-0" /> Free 24h Trial
                </Link>
              </div>

              <p className="mt-8 text-[11px] sm:text-xs font-black text-[#1C65CE] uppercase tracking-wider">
                Free Trial First • WhatsApp Guided Setup • No Lock-In Contract
              </p>
            </FadeIn>
          </div>
        </div>
      </section>
    </div>
  );
}