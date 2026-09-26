'use client';

import dynamic from 'next/dynamic';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { CONSTANTS } from '@/lib/seo';
import USFlag from '../components/USFlag';
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
// KROOZTV FAQ ACCORDION ITEM
// ---------------------------------------------------------------------------
function KroozTvFAQItem({ q, a }: { q: string; a: string }) {
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
          <span
            className={`${
              isOpen ? 'text-[#1C65CE]' : 'text-[#04208B]/30'
            } font-black text-2xl`}
          >
            Q.
          </span>
          {q}
        </h3>
        <ChevronDown
          className={`w-6 h-6 flex-shrink-0 transition-transform duration-300 ${
            isOpen
              ? 'rotate-180 text-[#1C65CE]'
              : 'text-[#04208B]/30 group-hover:text-[#1C65CE]/50'
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

export default function KroozTvPage() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-[#04208B] text-[#EDEADE] overflow-hidden">

      {/* HERO */}
      <section className="relative px-15 py-24 md:py-40 overflow-hidden flex flex-col items-center justify-center text-center min-h-screen w-full bg-[#000814]">
        <div className="absolute inset-0 z-0">
          <Image
            src="/img/background.webp"
            alt="KroozTV streaming service in 4K ultra HD quality"
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
              Trusted KroozTV Provider
              <USFlag className="w-7 h-7 rounded-[2px] shrink-0" />
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight uppercase text-[#EDEADE] mb-6 leading-none break-words">
            KROOZ<span className="text-[#FFD532]">TV</span> <br />
            <span className="text-[#FFD532]">IPTV PROVIDER USA</span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-[#EDEADE]/80 max-w-3xl mx-auto mb-10 font-medium leading-relaxed px-2">
            Welcome to KroozTV. Get KroozTV IPTV in the USA with 36,000+ live channels and over 120,000 movies and TV shows in crisp 4K. Our KroozTV service includes guided setup on WhatsApp, a free 24 hour trial to test on your own TV first, and USD pricing with no lock-in contract.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center w-full max-w-md sm:max-w-xl mx-auto px-4">
            <Link
              href="/pricing"
              className="w-full sm:w-auto text-center whitespace-nowrap py-3.5 px-8 rounded-full bg-[#FFD532] text-[#04208B] font-black text-sm hover:bg-[#E5BE1F] transition-all hover:scale-105 uppercase tracking-wider shrink-0 shadow-lg shadow-[#FFD532]/30 border border-[#04208B]/20"
            >
              Get KroozTV Now
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
              <Zap className="w-5 h-5 text-[#FFD532]" /> Ultra HD Stream Quality
            </span>
            <span className="flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-[#FFD532]" /> High Uptime Network
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-[#FFD532]" /> Anti Freeze Server Technology
            </span>
          </div>
        </FadeIn>
      </section>

      {/* PARTNER SLIDER */}
      <div className="min-h-[128px]">
        {isMounted ? <PartnerSlider /> : <div className="h-32 bg-transparent" />}
      </div>

      {/* SOFA / LIVING ROOM SECTION */}
      <section className="w-full bg-[#04208B] py-20 md:py-28 flex flex-col items-center justify-center overflow-hidden">
        <div className="w-full max-w-7xl px-4 text-center mb-8">
          <span className="mb-4 inline-flex rounded-full bg-[#1C65CE]/20 border border-[#1C65CE]/40 px-4 py-1.5 text-xs font-black uppercase tracking-widest text-[#FFD532]">
            KroozTV Home Cinema 🇺🇸
          </span>
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight text-[#EDEADE] leading-none">
            BRING KROOZTV TO YOUR <span className="text-[#FFD532]">LIVING ROOM</span>
          </h2>
        </div>

        <div className="w-full bg-[#000814]/40 py-10 flex justify-center items-center transition-all duration-300">
          <div className="w-full max-w-[1100px] px-6 h-auto aspect-[5/2] flex justify-center items-center">
            <Image
              src="/img/sofa.webp"
              alt="KroozTV service playing on a Smart TV in a living room"
              width={1200}
              height={480}
              loading="lazy"
              className="h-full w-full object-contain"
              sizes="(max-width: 1100px) 100vw, 1100px"
            />
          </div>
        </div>

        <div className="w-full max-w-3xl px-4 text-center mt-10">
          <p className="text-base md:text-lg leading-relaxed text-[#EDEADE]/80 font-medium">
            There is nothing quite like watching your favorite team or a new release on the big screen. The KroozTV servers keep the picture sharp and the sound in sync, so you can relax on the couch without worrying about buffering or drops in quality.
          </p>
          <div className="w-full flex justify-center mt-8">
            <Link
              href="/pricing"
              className="bg-[#FFD532] border border-[#04208B]/20 px-8 py-3 text-sm font-black uppercase tracking-widest text-[#04208B] hover:bg-[#E5BE1F] transition-transform hover:scale-105 rounded-full shadow-xl shadow-[#FFD532]/30"
            >
              Activate KroozTV Today
            </Link>
          </div>
        </div>
      </section>

      {/* WHAT IS KROOZTV — INFO CARDS + PARAGRAPHS */}
      <section className="py-24 bg-[#EDEADE] relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#1C65CE_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.05] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <FadeIn className="text-center mb-16 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-[#1C65CE]/10 border border-[#1C65CE]/25 px-4 py-2 rounded-full mb-6">
              <Sparkles className="w-4 h-4 text-[#1C65CE]" />
              <span className="text-[#1C65CE] font-black text-xs uppercase tracking-widest">
                What Is KroozTV
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#04208B] uppercase tracking-tight leading-tight mb-6">
              EVERYTHING YOU NEED TO KNOW ABOUT <span className="text-[#1C65CE]">KROOZTV</span>
            </h2>
            <p className="text-[#04208B]/75 font-semibold text-base md:text-lg leading-relaxed">
              KroozTV is a premium streaming service that delivers live television channels, movies, and TV shows over your internet connection. Here is what you get with KroozTV IPTV in the USA.
            </p>
          </FadeIn>

          <FadeInStagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {[
              {
                icon: Tv,
                title: '36,000+ Live Channels',
                desc: 'All US networks plus thousands of international channels from the UK, Canada, Australia, Europe, India, Pakistan, China, and the Middle East.',
              },
              {
                icon: Film,
                title: '120,000+ Movies & TV Shows',
                desc: 'Complete boxsets and the latest cinema releases. Fresh titles land every day in the KroozTV on demand library.',
              },
              {
                icon: Trophy,
                title: 'Live Sport & PPV',
                desc: 'NFL, NBA, MLB, NHL, UFC, college football, NASCAR, Formula 1, and every PPV included at no extra cost.',
              },
              {
                icon: Globe,
                title: 'Guided WhatsApp Setup',
                desc: 'Our team walks you through the whole install on WhatsApp, step by step, until you are watching KroozTV on your own device.',
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
                View KroozTV Plans
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

      {/* PRICING SECTION */}
      <div className="min-h-[600px] bg-[#04208B]" id="pricing-section">
        {isMounted ? <PricingSection /> : <div className="h-[600px] bg-transparent" />}
      </div>

      {/* MOVIE SLIDER SECTION */}
      <section id="channels" className="pt-24 bg-[#04208B] max-w-[100vw] overflow-hidden relative min-h-[400px] border-t border-[#1C65CE]/20">
        <FadeIn className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col justify-between items-start mb-12 gap-6 relative z-10 w-full">
          <div>
            <h2 className="text-4xl md:text-5xl font-black text-[#EDEADE] mb-4 uppercase tracking-tight leading-none">
              KROOZTV CHANNELS &amp; MOVIE LIBRARY
            </h2>
            <p className="text-[#EDEADE]/70 font-medium text-lg">
              Explore thousands of live television channels plus 120,000+ movies and TV shows in the KroozTV on demand library. Fresh titles land every day.
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

      {/* KROOZTV CUSTOM FAQ SECTION */}
      <section className="py-24 bg-[#04208B] relative overflow-hidden border-t border-[#1C65CE]/20">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#1C65CE]/10 blur-[130px] rounded-full pointer-events-none" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <FadeIn className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-[#1C65CE]/20 border border-[#1C65CE]/40 px-4 py-2 rounded-full mb-6">
              <Sparkles className="w-4 h-4 text-[#FFD532]" />
              <span className="text-[#FFD532] font-black text-xs uppercase tracking-widest">
                KroozTV Questions
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#EDEADE] mb-6 uppercase tracking-tight leading-tight">
              FREQUENTLY ASKED ABOUT <span className="text-[#FFD532]">KROOZTV</span>
            </h2>
            <p className="text-[#EDEADE]/70 font-medium text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
              The most common questions our team gets about KroozTV in the USA.
            </p>
          </FadeIn>

          <FadeInStagger className="space-y-4">
            {[
              {
                q: 'What is KroozTV?',
                a: 'KroozTV is a premium streaming service that delivers live television channels, movies, and TV shows over your internet connection. In the USA, our KroozTV service offers 36,000+ live channels and 120,000+ movies and TV shows in 4K Ultra HD, with guided WhatsApp setup and USD pricing.',
              },
              {
                q: 'How much does KroozTV cost in the USA?',
                a: 'KroozTV plans start at USD $29 for 3 months on 1 screen. The 12 month VIP plan costs USD $79 and saves up to 50%. Multi screen plans are available for 2 or 3 devices at home.',
              },
              {
                q: 'Is there a free trial for KroozTV?',
                a: 'Yes. Message us on WhatsApp and we will set you up with a free 24 hour KroozTV trial. Test the 4K picture, check the channel lineup, and make sure everything runs smooth on your device before you upgrade to a paid plan.',
              },
              {
                q: 'Which devices work with KroozTV?',
                a: 'KroozTV works on Amazon Firestick, Samsung and LG Smart TVs, Android TV, Google TV, Apple TV, iPhone, iPad, Windows PC, Mac, and MAG or Formuler set top boxes. Our team helps you install and configure a player like IPTV Smarters Pro on WhatsApp.',
              },
              {
                q: 'Do I need a VPN to use KroozTV in the USA?',
                a: 'No VPN is required. Our KroozTV servers are optimized for US ISPs to deliver smooth, buffer free streaming on your home connection.',
              },
              {
                q: 'How fast is KroozTV setup?',
                a: 'Most customers are streaming within 10 minutes. You choose your plan, message us on WhatsApp, and our team walks you through the install step by step until everything is working.',
              },
              {
                q: 'Can I use KroozTV on multiple TVs at once?',
                a: 'Yes. Pick the 2 screen or 3 screen plan during checkout and multiple household members can watch different things at the same time without any interruption.',
              },
              {
                q: 'What channels does KroozTV include?',
                a: 'KroozTV includes all major US networks (ABC, CBS, NBC, FOX, PBS, The CW), live sport channels (ESPN, Fox Sports, NFL Network, NBA TV, MLB Network, UFC PPV), plus thousands of international channels from the UK, Canada, Australia, Europe, India, Pakistan, China, and the Middle East.',
              },
            ].map((faq, i) => (
              <FadeInItem key={i}>
                <KroozTvFAQItem q={faq.q} a={faq.a} />
              </FadeInItem>
            ))}
          </FadeInStagger>
        </div>
      </section>



      {/* FINAL CTA */}
      <section className="relative overflow-hidden py-16 sm:py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-[#EDEADE] w-full">

          {/* PARAGRAPHS */}
          <FadeIn className="max-w-4xl mx-auto">
            <div className="bg-[#f0ebd8] rounded-[2rem] p-8 md:p-12 border-4 border-[#FFD532] shadow-2xl space-y-5">
              <h3 className="text-2xl md:text-3xl font-black text-[#04208B] uppercase tracking-tight mb-4">
                WHY KROOZTV IS THE SMART CHOICE IN THE USA
              </h3>

              <p className="text-[#04208B]/85 text-base md:text-lg leading-relaxed font-medium">
                Traditional American cable television has become more expensive every year while offering fewer channels at higher prices. Households across New York, Los Angeles, Chicago, Houston, and Miami are switching to KroozTV because it delivers the same content for a fraction of the monthly cost, with no lock-in contract and no need for extra boxes or hardware.
              </p>

              <p className="text-[#04208B]/85 text-base md:text-lg leading-relaxed font-medium">
                KroozTV runs on a modern streaming infrastructure that was built for American conditions. Our servers sit in New York, Dallas, and Los Angeles edge data centers with dedicated bandwidth, so channel changes happen instantly and streams stay smooth during the highest traffic moments like the Super Bowl, NBA Finals, and the World Series.
              </p>

              <p className="text-[#04208B]/85 text-base md:text-lg leading-relaxed font-medium">
                Setup is one of the things customers mention the most in reviews. You do not need to be tech savvy. You pick a plan, message our team on WhatsApp, and we walk you through installing a player like IPTV Smarters Pro on your Firestick, Smart TV, or phone. Once you are up and running, you get a free 24 hour trial to test the picture quality, check the sport lineup, and make sure everything works perfectly on your internet connection before you upgrade.
              </p>

              <p className="text-[#04208B]/85 text-base md:text-lg leading-relaxed font-medium">
                The KroozTV channel lineup covers everything an American household could ask for. You get ABC, CBS, NBC, FOX, PBS, and The CW alongside live sport from ESPN, Fox Sports, NFL Network, NBA TV, MLB Network, and UFC PPV. Movies and complete TV boxsets land in the on demand library every day from HBO, Netflix, Disney, Paramount, and Apple. International channels from the UK, Canada, Australia, Europe, India, Pakistan, China, and the Middle East are organized into easy to browse groups, so you can find anything in seconds.
              </p>

              <p className="text-[#04208B]/85 text-base md:text-lg leading-relaxed font-medium">
                Pricing is in US dollars and there is no lock-in contract. You pick the number of screens you need at home, choose between a 3, 6, or 12 month plan, and you can cancel or change at any time. That is the KroozTV difference. No hidden fees, no long-term commitments, and no pressure to commit before you know the service is right for you.
              </p>
            </div>
          </FadeIn>

<br /><br />

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
                  USA KroozTV Service 🇺🇸
                </span>
              </div>

              <h2 className="mx-auto max-w-5xl text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight uppercase text-[#04208B] leading-[1.05] mb-6">
                GET KROOZTV <br />
                <span className="text-[#1C65CE]">TODAY</span>
              </h2>

              <p className="mx-auto mt-4 max-w-3xl text-sm sm:text-base md:text-lg font-medium leading-relaxed text-[#04208B]/80">
                Pick your KroozTV plan, message us on WhatsApp, and we will get you set up on your own device. Test everything on the free trial first, then upgrade to a paid subscription only when you are happy. No lock-in. No worries.
              </p>

              <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-md mx-auto">
                <Link
                  href="/pricing"
                  className="w-full sm:w-auto text-center whitespace-nowrap rounded-2xl bg-[#FFD532] px-8 py-4 text-xs sm:text-sm font-black uppercase tracking-widest text-[#04208B] hover:bg-[#E5BE1F] transition-all hover:scale-105 shrink-0 shadow-lg shadow-[#FFD532]/25 border border-[#04208B]/20"
                >
                  Choose Your KroozTV Plan
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