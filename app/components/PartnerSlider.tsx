'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useMemo } from 'react';

export default function PartnerSlider() {
  // -------------------------------------------------------------------------
  // PARTNER LOGOS — each with a unique descriptive alt
  // -------------------------------------------------------------------------
  const partners = [
    { name: 'Amazon Firestick', alt: 'Amazon Firestick streaming IPTV in razor-sharp 4K' },
    { name: 'Samsung Smart TV', alt: 'Samsung Smart TV playing live sports without buffering' },
    { name: 'LG Smart TV', alt: 'LG Smart TV running 20,000+ channels on IPTV Subscription' },
    { name: 'Apple TV 4K', alt: 'Apple TV 4K streaming movies and shows in Ultra HD' },
    { name: 'Android TV', alt: 'Android TV box playing on-demand titles in 4K' },
    { name: 'Nvidia Shield', alt: 'Nvidia Shield delivering 60FPS sports streams' },
    { name: 'IPTV Extreme Pro', alt: 'IPTV Extreme Pro player running on IPTV Provider USA' },
    { name: 'TiviMate Player', alt: 'TiviMate IPTV Player loading M3U playlists in seconds' },
    { name: 'IPTV Smarters', alt: 'IPTV Smarters Pro with full EPG guide support' },
    { name: 'MAG & Formuler', alt: 'MAG and Formuler set-top boxes working on IPTV services' },
  ].map((p, i) => {
    const number = String(i + 1).padStart(2, '0');
    return {
      ...p,
      imagePath: `/img/partners/iptv-pro-usa-partners-${number}`,
      width: 128,
      height: 128,
    };
  });

  // Duplicate for smooth infinite loop
  const sliderItems = useMemo(() => [...partners, ...partners], [partners]);

  // Total animation travel distance (10 items × 150px = 1500px)
  const animationDistance = partners.length * 150;

  return (
    <div className="w-full overflow-hidden relative py-12 bg-[#04208B]">
      {/* Blended gradient edge masks */}
      <div className="absolute left-0 top-0 bottom-0 w-24 md:w-32 bg-gradient-to-r from-[#04208B] via-[#04208B]/50 to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 md:w-32 bg-gradient-to-l from-[#04208B] via-[#04208B]/50 to-transparent z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-8">
        <p className="text-sm text-[#FFD532] font-black uppercase tracking-widest flex items-center justify-center gap-2">
          <span>Supported USA IPTV Apps &amp; Devices</span>
        </p>
      </div>

      {/* Wrapper hides motion track from screen readers, but alt text stays for Google */}
      <div aria-hidden="true" role="presentation">
        <motion.div
          className="flex gap-12 md:gap-16 items-center w-max"
          animate={{
            x: [0, -animationDistance],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: 'loop',
              duration: 30,
              ease: 'linear',
            },
          }}
        >
          {sliderItems.map((partner, idx) => {
            // Duplicated half gets empty alt to avoid duplicate-alt spam
            const isDuplicate = idx >= partners.length;
            const altText = isDuplicate ? '' : partner.alt;

            return (
              <div
                key={`${partner.name}-${idx}`}
                className="flex items-center justify-center min-w-[120px] md:min-w-[150px] opacity-70 hover:opacity-100 transition-all duration-300 grayscale hover:grayscale-0"
              >
                <div className="relative w-20 h-20 md:w-28 md:h-28">
                  <Image
                    src={`${partner.imagePath}.png`}
                    alt={altText}
                    width={partner.width}
                    height={partner.height}
                    className="object-contain"
                    sizes="(max-width: 768px) 80px, 112px"
                    loading="lazy"
                  />
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
}