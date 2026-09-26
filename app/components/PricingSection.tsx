'use client';

import { useState } from 'react';
import { FadeIn, FadeInStagger, FadeInItem } from './AnimatedSection';
import { CONSTANTS } from '@/lib/seo';
import {
  CheckCircle2,
  Zap,
  Crown,
  MonitorPlay,
  Gift,
  Sparkles,
  Flame,
  ShieldCheck,
  Lock,
} from 'lucide-react';

// ---------------------------------------------------------------------------
// Payment Method SVG Icons — USA & Global Standard
// ---------------------------------------------------------------------------
const PaymentIcons = ({ variant = 'light' }: { variant?: 'light' | 'dark' }) => {
  const isDark = variant === 'dark';
  const shellBg = '#EDEADE';
  const shellBorder = '#1C65CE';

  const Shell = ({ children }: { children: React.ReactNode }) => (
    <div
      className="flex items-center justify-center h-8 w-12 rounded-md overflow-hidden shrink-0 transition-transform duration-300 hover:scale-110"
      style={{ backgroundColor: shellBg, border: `1px solid ${shellBorder}` }}
    >
      {children}
    </div>
  );

  return (
    <div className="grid grid-cols-5 gap-2 items-center">
      {/* Visa */}
      <Shell>
        <svg viewBox="0 0 48 32" className="h-5 w-auto" xmlns="http://www.w3.org/2000/svg">
          <text
            x="24"
            y="22"
            textAnchor="middle"
            fontFamily="Helvetica, Arial, sans-serif"
            fontSize="14"
            fontWeight="900"
            fontStyle="italic"
            fill="#1434CB"
            letterSpacing="-0.5"
          >
            VISA
          </text>
        </svg>
      </Shell>

      {/* Mastercard */}
      <Shell>
        <svg viewBox="0 0 48 32" className="h-5 w-auto" xmlns="http://www.w3.org/2000/svg">
          <circle cx="19" cy="16" r="9" fill="#EB001B" />
          <circle cx="29" cy="16" r="9" fill="#F79E1B" />
          <path d="M24 8.5a9 9 0 000 15 9 9 0 000-15z" fill="#FF5F00" />
        </svg>
      </Shell>

      {/* PayPal */}
      <Shell>
        <svg viewBox="0 0 48 32" className="h-5 w-auto" xmlns="http://www.w3.org/2000/svg">
          <text
            x="24"
            y="21"
            textAnchor="middle"
            fontFamily="Helvetica, Arial, sans-serif"
            fontSize="11"
            fontWeight="900"
            fontStyle="italic"
            fill="#003087"
          >
            Pay
          </text>
          <text
            x="24"
            y="27"
            textAnchor="middle"
            fontFamily="Helvetica, Arial, sans-serif"
            fontSize="9"
            fontWeight="800"
            fontStyle="italic"
            fill="#0079C1"
          >
            Pal
          </text>
        </svg>
      </Shell>

      {/* Bitcoin */}
      <Shell>
        <svg viewBox="0 0 48 32" className="h-5 w-auto" xmlns="http://www.w3.org/2000/svg">
          <circle cx="24" cy="16" r="10" fill="#F7931A" />
          <text
            x="24"
            y="21"
            textAnchor="middle"
            fontFamily="Helvetica, Arial, sans-serif"
            fontSize="14"
            fontWeight="900"
            fill="#FFFFFF"
          >
            ₿
          </text>
        </svg>
      </Shell>

      {/* Apple / Google Pay */}
      <Shell>
        <svg viewBox="0 0 48 32" className="h-5 w-auto" xmlns="http://www.w3.org/2000/svg">
          <text
            x="24"
            y="21"
            textAnchor="middle"
            fontFamily="Helvetica, Arial, sans-serif"
            fontSize="11"
            fontWeight="800"
            fill="#5F6368"
          >
            GPay
          </text>
        </svg>
      </Shell>
    </div>
  );
};

// ---------------------------------------------------------------------------
// MAIN COMPONENT
// ---------------------------------------------------------------------------
export default function PricingSection() {
  const [devices, setDevices] = useState<1 | 2 | 3>(1);

  // USA pricing in USD
  const pricing = {
    1: {
      3: { total: 29, mo: (29 / 3).toFixed(2) },
      6: { total: 49, mo: (49 / 6).toFixed(2) },
      12: { total: 79, mo: (79 / 12).toFixed(2) },
    },
    2: {
      3: { total: 49, mo: (49 / 3).toFixed(2) },
      6: { total: 79, mo: (79 / 6).toFixed(2) },
      12: { total: 129, mo: (129 / 12).toFixed(2) },
    },
    3: {
      3: { total: 69, mo: (69 / 3).toFixed(2) },
      6: { total: 109, mo: (109 / 6).toFixed(2) },
      12: { total: 179, mo: (179 / 12).toFixed(2) },
    },
  };

  const currentPricing = pricing[devices] || pricing[1];

  const handleWhatsAppRedirect = (months: number) => {
    const selectedPrice = currentPricing[months as 3 | 6 | 12]?.total;
    const message = `Hi, I would like to order a ${months}-month IPTV Subscription for ${devices} ${
      devices > 1 ? 'screens' : 'screen'
    } for $${selectedPrice} USD. Please send me the setup guide so we can get started.`;
    const whatsappUrl = `${CONSTANTS.CONTACT.whatsappUrl}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleFreeTrialRedirect = () => {
    const message = `Hi, I would like to request a free trial to test the 4K streaming quality and channel lineup on my device before I subscribe.`;
    const whatsappUrl = `${CONSTANTS.CONTACT.whatsappUrl}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section
      id="pricing-section"
      className="w-full py-24 md:py-32 px-4 sm:px-6 lg:px-8 relative z-10 scroll-mt-20 bg-[#000814] text-[#EDEADE] overflow-hidden"
    >
      {/* Ambient Blue & Gold Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#1C65CE]/25 blur-[140px] rounded-full pointer-events-none" />
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#edeade08_1px,transparent_1px),linear-gradient(to_bottom,#edeade08_1px,transparent_1px)] bg-[size:24px_24px] md:bg-[size:40px_40px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full relative z-10">

        {/* Section Header */}
        <FadeIn className="text-center justify-center max-w-4xl mx-auto mb-16 md:mb-20 relative z-10">
          <div className="inline-flex items-center gap-2 border border-[#FFD532] bg-[#04208B] px-4 py-1.5 rounded-full mb-6 shadow-lg shadow-[#FFD532]/10">
            <Crown className="w-4 h-4 text-[#FFD532]" />
            <span className="text-[#FFD532] font-black text-xs uppercase tracking-widest">
              Best IPTV Provider Plans 🇺🇸
            </span>
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-[#EDEADE] mb-6 uppercase tracking-tight leading-tight">
            CHOOSE YOUR <span className="text-[#FFD532]">IPTV SUBSCRIPTION</span> PLAN
          </h2>
          <p className="text-base sm:text-lg text-[#EDEADE]/70 mb-10 max-w-2xl mx-auto leading-relaxed font-medium">
            Trusted IPTV Provider with instant 4K Ultra HD streaming. Save up to{' '}
            <span className="text-[#FFD532] font-bold">50% off</span> on 12-month plans with simultaneous multi-screen support. Instant activation, free trial, and 24/7 US support.
          </p>

          {/* Device Switcher */}
          <div className="flex flex-col items-center justify-center mb-6">
            <div className="inline-flex items-center gap-2 mb-3">
              <Zap className="w-4 h-4 text-[#FFD532]" />
              <span className="text-xs text-[#EDEADE]/70 font-black uppercase tracking-widest">
                Select Simultaneous Screens
              </span>
            </div>
            <div className="inline-flex bg-[#1C65CE]/20 border border-[#1C65CE]/40 rounded-2xl p-1.5 shadow-2xl relative">
              {[1, 2, 3].map((d) => (
                <button
                  key={d}
                  onClick={() => setDevices(d as 1 | 2 | 3)}
                  className={`px-5 sm:px-8 py-2.5 rounded-xl text-xs sm:text-sm font-black tracking-wider uppercase transition-all duration-300 relative ${
                    devices === d
                      ? 'bg-[#FFD532] text-[#04208B] shadow-lg shadow-[#FFD532]/40 scale-[1.03] ring-2 ring-[#FFD532]/40'
                      : 'text-[#EDEADE]/70 hover:text-[#EDEADE]'
                  }`}
                >
                  {d} {d > 1 ? 'Screens' : 'Screen'}
                </button>
              ))}
            </div>
          </div>
        </FadeIn>

        {/* Pricing Cards Grid */}
        <FadeInStagger className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-8 items-stretch max-w-6xl mx-auto mt-12 relative z-10">

          {/* CARD 1: 3 MONTHS PLAN */}
          <FadeInItem className="relative bg-[#EDEADE] text-[#04208B] border-2 border-[#1C65CE]/50 rounded-3xl p-6 sm:p-8 flex flex-col group overflow-hidden shadow-xl transition-all duration-500 hover:border-[#FFD532] hover:shadow-[0_25px_60px_rgba(255,213,50,0.35)] hover:-translate-y-3">
            <div className="absolute inset-0 bg-gradient-to-br from-[#1C65CE]/0 via-[#1C65CE]/0 to-[#1C65CE]/0 group-hover:from-[#1C65CE]/5 group-hover:to-[#1C65CE]/10 transition-all duration-500 pointer-events-none" />
            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-[#1C65CE]/10 to-transparent rounded-bl-[3rem] pointer-events-none transition-all duration-500 group-hover:from-[#FFD532]/20 group-hover:w-32 group-hover:h-32" />
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#FFD532] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="relative z-10 flex flex-col h-full">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xs font-black text-[#1C65CE] uppercase tracking-[0.2em]">Starter Pass</h3>
                <MonitorPlay className="w-5 h-5 text-[#1C65CE] transition-transform duration-500 group-hover:rotate-12 group-hover:scale-110" />
              </div>
              <div className="text-3xl font-black text-[#04208B] mb-2 tracking-tighter uppercase">3 Months</div>

              <div className="flex items-baseline gap-2 mb-2 mt-4">
                <span className="text-5xl font-black text-[#04208B] tracking-tighter transition-all duration-500 group-hover:text-[#1C65CE]">
                  ${currentPricing[3]?.total || 0}
                </span>
              </div>
              <div className="text-[11px] font-black text-[#1C65CE] mb-8 uppercase tracking-widest border border-[#1C65CE]/30 self-start px-3 py-1 rounded-full inline-block bg-[#1C65CE]/10">
                ${currentPricing[3]?.mo || 0} / month
              </div>

              <ul className="w-full space-y-3.5 flex-grow relative mb-6">
                {[
                  `${devices} Simultaneous ${devices > 1 ? 'Screens' : 'Connection'}`,
                  '4K Ultra HD & 60FPS Sports Feeds',
                  '36,000+ Live Channels Worldwide',
                  '120,000+ Movies & TV Shows (Updated Daily)',
                  'NFL, NBA, MLB, NHL, UFC & PPV Coverage',
                  '7-Day Catch-Up & Full EPG Guide',
                  'Anti-Freeze US Edge Servers',
                  'Smart TV, Firestick, iOS, Android, Shield',
                  '24/7 Priority US Support',
                ].map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-[#04208B]/70 text-sm font-semibold">
                    <CheckCircle2 className="w-4 h-4 text-[#1C65CE] flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="mb-6 p-3 bg-[#1C65CE]/10 rounded-2xl flex items-center gap-2.5 transition-colors duration-500 group-hover:bg-[#FFD532]/20">
                <Zap className="w-4 h-4 text-[#1C65CE] shrink-0" />
                <span className="text-[11px] font-black text-[#04208B] uppercase tracking-wider">
                  Instant Activation • 99.9% Uptime Guarantee
                </span>
              </div>

              <div className="mb-6 pt-4 border-t border-[#1C65CE]/20">
                <div className="flex items-center justify-between text-[10px] font-black text-[#04208B]/60 uppercase tracking-widest mb-3">
                  <span>Accepted Payments</span>
                  <Lock className="w-3 h-3 text-[#04208B]/60" />
                </div>
                <PaymentIcons variant="light" />
              </div>

              <button
                onClick={() => handleWhatsAppRedirect(3)}
                className="w-full text-center whitespace-nowrap px-6 py-4 rounded-full bg-[#FFD532] text-[#04208B] font-black text-xs uppercase tracking-widest hover:bg-[#E5BE1F] transition-all shadow-lg shadow-[#FFD532]/30 active:scale-95 group-hover:scale-105 group-hover:shadow-[0_15px_35px_rgba(255,213,50,0.5)]"
              >
                Select 3 Months
              </button>
            </div>
          </FadeInItem>

          {/* CARD 2: 12 MONTHS VIP */}
          <FadeInItem className="relative bg-[#04208B] border-2 border-[#FFD532] rounded-3xl p-6 sm:p-9 flex flex-col transform lg:-translate-y-4 shadow-[0_0_50px_rgba(255,213,50,0.3)] z-20 group transition-all duration-500 hover:shadow-[0_0_70px_rgba(255,213,50,0.55)] hover:-translate-y-6">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-30 w-auto whitespace-nowrap">
              <div className="bg-[#FFD532] text-[#04208B] text-[11px] font-black uppercase tracking-[0.2em] px-5 py-2 rounded-full flex items-center gap-1.5 shadow-xl border border-[#04208B]">
                <Flame className="w-3.5 h-3.5 fill-current text-[#04208B]" /> Most Popular in the USA
              </div>
            </div>

            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#FFD532]/0 via-[#FFD532]/0 to-[#FFD532]/0 group-hover:from-[#FFD532]/5 group-hover:to-[#FFD532]/10 transition-all duration-500 pointer-events-none" />

            <div className="relative z-10 flex flex-col h-full pt-2">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xs font-black text-[#FFD532] uppercase tracking-[0.2em] flex items-center gap-1.5">
                  <Crown className="w-4 h-4 text-[#FFD532]" /> Ultimate VIP
                </h3>
                <Sparkles className="w-4 h-4 text-[#FFD532] transition-transform duration-500 group-hover:rotate-12 group-hover:scale-110" />
              </div>

              <div className="mb-4 inline-flex items-center gap-2 self-start px-3 py-1.5 rounded-full bg-[#1C65CE] text-[#EDEADE] text-[10px] font-black uppercase tracking-widest shadow-lg shadow-[#1C65CE]/40">
                <Flame className="w-3 h-3 fill-current" /> Save 50% Today
              </div>

              <div className="text-3xl font-black text-[#FFD532] mb-2 tracking-tighter uppercase">
                12 Months
              </div>

              <div className="flex items-baseline gap-2 mb-2 mt-4">
                <span className="text-6xl font-black text-[#FFD532] tracking-tighter drop-shadow-[0_0_20px_rgba(255,213,50,0.4)] transition-all duration-500 group-hover:drop-shadow-[0_0_30px_rgba(255,213,50,0.7)]">
                  ${currentPricing[12]?.total || 0}
                </span>
              </div>

              <div className="text-[11px] font-black text-[#FFD532] mb-8 uppercase tracking-widest border border-[#FFD532] self-start px-4 py-1.5 rounded-full inline-block bg-[#FFD532]/10 shadow-sm">
                BEST VALUE: ${currentPricing[12]?.mo || 0} / mo
              </div>

              <ul className="w-full space-y-3.5 flex-grow relative mb-6">
                {[
                  `${devices} Simultaneous ${devices > 1 ? 'Screens' : 'Connection'}`,
                  'Ultra HD 4K & Pure Full HD Quality',
                  '36,000+ Premium Live Channels',
                  '120,000+ Movies & TV Shows (Updated Daily)',
                  'NFL, NBA, UFC, Boxing & All PPV Events',
                  '7-Day Catch-Up & Electronic Program Guide',
                  'Dedicated New York, Dallas & LA Server Line',
                  'Smart TV, Firestick, Apple TV, iOS, Android',
                  '24/7 VIP Priority US Support',
                ].map((feature, idx) => (
                  <li key={feature} className="flex items-center gap-3 text-[#EDEADE] font-semibold text-sm">
                    <div className="bg-[#FFD532]/20 p-0.5 rounded-full border border-[#FFD532]/40">
                      <CheckCircle2 className="w-4 h-4 text-[#FFD532] flex-shrink-0" />
                    </div>
                    <span className="text-[#EDEADE]">{feature}</span>
                    {idx === 4 && (
                      <span className="bg-[#FFD532]/20 text-[#FFD532] text-[9px] font-black uppercase px-2 py-0.5 rounded ml-auto border border-[#FFD532]/40">
                        All PPVs
                      </span>
                    )}
                  </li>
                ))}
              </ul>

              <div className="mb-6 p-3 bg-[#FFD532]/10 border border-[#FFD532]/30 rounded-2xl flex items-center gap-2.5 transition-colors duration-500 group-hover:bg-[#FFD532]/20">
                <Crown className="w-4 h-4 text-[#FFD532] shrink-0" />
                <span className="text-[11px] font-black text-[#FFD532] uppercase tracking-wider">
                  Priority US Server Line Included
                </span>
              </div>

              <div className="mb-6 pt-4 border-t border-[#FFD532]/20">
                <div className="flex items-center justify-between text-[10px] font-black text-[#FFD532]/80 uppercase tracking-widest mb-3">
                  <span>Accepted Payments</span>
                  <Lock className="w-3 h-3 text-[#FFD532]" />
                </div>
                <PaymentIcons variant="dark" />
              </div>

              <button
                onClick={() => handleWhatsAppRedirect(12)}
                className="w-full text-center whitespace-nowrap px-6 py-4 sm:py-5 rounded-full bg-[#FFD532] text-[#04208B] font-black text-xs sm:text-sm uppercase tracking-widest hover:bg-[#E5BE1F] transition-all shadow-xl shadow-[#FFD532]/30 active:scale-95 group-hover:scale-105 group-hover:shadow-[0_15px_40px_rgba(255,213,50,0.5)]"
              >
                Get 12 Months VIP
              </button>
            </div>
          </FadeInItem>

          {/* CARD 3: 6 MONTHS PLAN */}
          <FadeInItem className="relative bg-[#EDEADE] text-[#04208B] border-2 border-[#1C65CE]/50 rounded-3xl p-6 sm:p-8 flex flex-col group overflow-hidden shadow-xl transition-all duration-500 hover:border-[#FFD532] hover:shadow-[0_25px_60px_rgba(255,213,50,0.35)] hover:-translate-y-3">
            <div className="absolute inset-0 bg-gradient-to-br from-[#1C65CE]/0 via-[#1C65CE]/0 to-[#1C65CE]/0 group-hover:from-[#1C65CE]/5 group-hover:to-[#1C65CE]/10 transition-all duration-500 pointer-events-none" />
            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-[#1C65CE]/10 to-transparent rounded-bl-[3rem] pointer-events-none transition-all duration-500 group-hover:from-[#FFD532]/20 group-hover:w-32 group-hover:h-32" />
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#FFD532] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="relative z-10 flex flex-col h-full">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xs font-black text-[#1C65CE] uppercase tracking-[0.2em]">Standard Pass</h3>
                <MonitorPlay className="w-5 h-5 text-[#1C65CE] transition-transform duration-500 group-hover:rotate-12 group-hover:scale-110" />
              </div>
              <div className="text-3xl font-black text-[#04208B] mb-2 tracking-tighter uppercase">6 Months</div>

              <div className="flex items-baseline gap-2 mb-2 mt-4">
                <span className="text-5xl font-black text-[#04208B] tracking-tighter transition-all duration-500 group-hover:text-[#1C65CE]">
                  ${currentPricing[6]?.total || 0}
                </span>
              </div>
              <div className="text-[11px] font-black text-[#1C65CE] mb-8 uppercase tracking-widest border border-[#1C65CE]/30 self-start px-3 py-1 rounded-full inline-block bg-[#1C65CE]/10">
                ${currentPricing[6]?.mo || 0} / month
              </div>

              <ul className="w-full space-y-3.5 flex-grow relative mb-6">
                {[
                  `${devices} Simultaneous ${devices > 1 ? 'Screens' : 'Connection'}`,
                  '4K Ultra HD & 60FPS Sports Feeds',
                  '36,000+ Live Channels Worldwide',
                  '120,000+ Movies & TV Shows (Updated Daily)',
                  'NFL, NBA, MLB, NHL, UFC & PPV Coverage',
                  '7-Day Catch-Up & Full EPG Guide',
                  'Anti-Freeze US Edge Servers',
                  'Smart TV, Firestick, iOS, Android, Shield',
                  '24/7 Priority US Support',
                ].map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-[#04208B]/70 text-sm font-semibold">
                    <CheckCircle2 className="w-4 h-4 text-[#1C65CE] flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="mb-6 p-3 bg-[#1C65CE]/10 rounded-2xl flex items-center gap-2.5 transition-colors duration-500 group-hover:bg-[#FFD532]/20">
                <Zap className="w-4 h-4 text-[#1C65CE] shrink-0" />
                <span className="text-[11px] font-black text-[#04208B] uppercase tracking-wider">
                  Instant Activation • 99.9% Uptime Guarantee
                </span>
              </div>

              <div className="mb-6 pt-4 border-t border-[#1C65CE]/20">
                <div className="flex items-center justify-between text-[10px] font-black text-[#04208B]/60 uppercase tracking-widest mb-3">
                  <span>Accepted Payments</span>
                  <Lock className="w-3 h-3 text-[#04208B]/60" />
                </div>
                <PaymentIcons variant="light" />
              </div>

              <button
                onClick={() => handleWhatsAppRedirect(6)}
                className="w-full text-center whitespace-nowrap px-6 py-4 rounded-full bg-[#FFD532] text-[#04208B] font-black text-xs uppercase tracking-widest hover:bg-[#E5BE1F] transition-all shadow-lg shadow-[#FFD532]/30 active:scale-95 group-hover:scale-105 group-hover:shadow-[0_15px_35px_rgba(255,213,50,0.5)]"
              >
                Select 6 Months
              </button>
            </div>
          </FadeInItem>

        </FadeInStagger>

        {/* Free Trial Banner */}
        <FadeIn className="max-w-2xl mx-auto mt-16 relative z-30">
          <div className="bg-[#1C65CE]/20 border border-[#FFD532]/40 rounded-2xl p-5 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-2xl relative overflow-hidden group hover:border-[#FFD532] transition-all duration-500">
            <div className="absolute -top-16 -left-16 w-64 h-64 bg-[#FFD532]/10 blur-[80px] rounded-full pointer-events-none" />
            <div className="flex items-center gap-4 text-left relative z-10">
              <div className="bg-[#FFD532]/15 border border-[#FFD532]/40 p-3 rounded-xl text-[#FFD532] shrink-0 hidden sm:block transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6">
                <Gift className="w-6 h-6" />
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <ShieldCheck className="w-4 h-4 text-[#FFD532]" />
                  <h4 className="text-base font-black text-[#EDEADE] uppercase tracking-tight">
                    Free IPTV Trial 🇺🇸
                  </h4>
                </div>
                <p className="text-xs text-[#EDEADE]/70 font-medium">
                  Test 4K streaming on your own device before you commit. Our US support team walks you through setup so you are streaming in minutes.
                </p>
              </div>
            </div>

            <div className="w-full sm:w-auto shrink-0 relative z-10">
              <button
                onClick={handleFreeTrialRedirect}
                className="w-full sm:w-auto text-center whitespace-nowrap px-6 py-3 rounded-full bg-[#FFD532] text-[#04208B] font-black text-xs uppercase tracking-widest hover:bg-[#E5BE1F] transition-all shadow-lg active:scale-95 hover:scale-105"
              >
                Request Free Trial
              </button>
            </div>
          </div>
        </FadeIn>

      </div>
    </section>
  );
}