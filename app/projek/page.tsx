'use client';

import dynamic from 'next/dynamic';
import type { ComponentType } from 'react';
import Portfolio from '@/components/sections/Portfolio';
import SplitText from '@/components/ui/SplitText';
import AnimatedContent from '@/components/ui/AnimatedContent';
import type { CardSwapProps } from '@/components/ui/CardSwap';

const ProjectHeroBackground = dynamic(() => import('@/components/ui/ProjectHeroBackground'), {
  ssr: false,
  loading: () => <div className="absolute inset-0 bg-white" />,
});

const CardSwap = dynamic<CardSwapProps>(
  () => import('@/components/ui/CardSwap').then(m => m.default as ComponentType<CardSwapProps>),
  { ssr: false }
);

const CARD_PROJECTS = [
  {
    title: 'Warasin • Konsultasi Kesehatan',
    image: '/projek/Warasin.webp',
  },
  {
    title: 'Leafy Cookies • Kuliner & Toko',
    image: '/projek/leafycookies.webp',
  },
  {
    title: 'Portofolio Web • Showcase Digital',
    image: '/Portofolio.webp',
  },
  {
    title: 'Univora • Platform Edukasi',
    image: '/projek/Univora.webp',
  },
  {
    title: 'Stora • E-Commerce Modern',
    image: '/projek/Stora.webp',
  },
];

export default function ProjekPage() {
  return (
    <>
      {/* Hero Section with CardSwap */}
      <section className="relative lg:h-screen w-full overflow-hidden" id="projek-hero">
        <ProjectHeroBackground />

        <div className="relative z-10 flex flex-col justify-center min-h-screen lg:min-h-0 lg:h-screen px-4 md:px-8 max-w-7xl mx-auto pt-24 pb-8 lg:pt-0 lg:pb-0">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center lg:h-full">
            {/* Left: Text */}
            <div>
              <SplitText
                tag="h1"
                text="Projek & Portofolio"
                className="font-playfair font-bold text-4xl md:text-5xl lg:text-6xl text-white mb-6 leading-tight drop-shadow-sm"
                delay={30}
                duration={1}
                ease="power3.out"
                splitType="words, chars"
                textAlign="left"
              />
              <p className="text-white/85 text-lg md:text-xl mb-8 max-w-xl leading-relaxed">
                Jelajahi berbagai karya yang telah kami buat dari undangan digital, landing page, hingga company profile yang premium.
              </p>
              <div className="flex flex-wrap gap-3">
                {['Landing Page', 'Portofolio', 'E-Commerce', 'Web App'].map((tag) => (
                  <span
                    key={tag}
                    className="px-4 py-2 rounded-full text-sm font-medium bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-brand-matcha hover:border-brand-matcha transition-all cursor-default shadow-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Right: CardSwap - Desktop */}
            <div className="hidden lg:flex items-center justify-center w-full h-[580px] pointer-events-auto z-20">
              <CardSwap
                items={CARD_PROJECTS}
                width={480}
                height={340}
                cardDistance={50}
                verticalDistance={60}
                delay={3500}
                theme="selembar"
                autoplay={true}
                pauseOnHover={true}
                draggable={true}
              />
            </div>

            {/* Mobile: CardSwap with mobile-sized cards */}
            <div className="lg:hidden relative w-full h-[380px] flex items-center justify-center mt-6">
              <CardSwap
                items={CARD_PROJECTS}
                width={320}
                height={240}
                cardDistance={25}
                verticalDistance={35}
                delay={3500}
                theme="selembar"
                autoplay={true}
                pauseOnHover={true}
                draggable={true}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Grid Section */}
      <AnimatedContent distance={100} direction="vertical" duration={1}>
        <Portfolio />
      </AnimatedContent>
    </>
  );
}
