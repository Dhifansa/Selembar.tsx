'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { WA_URL } from '@/lib/constants';
import SplitText from '@/components/ui/SplitText';

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { threshold: 0.05 }
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative min-h-screen w-full overflow-hidden flex items-center justify-center" id="hero">
      {/* Background Video: selembar hero.mp4 */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          className="w-full h-full object-cover object-center"
        >
          <source src="/selembar%20hero.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Content Container */}
      <div className="relative z-20 flex flex-col items-center justify-center px-4 md:px-8 max-w-4xl mx-auto pt-32 pb-20 text-center">
        <SplitText
          tag="h1"
          text="Setiap momen spesial layak diabadikan dengan indah"
          className="font-playfair font-bold text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-brand-navy leading-tight mb-6"
          delay={30}
          duration={1}
          ease="power3.out"
          splitType="words, chars"
          textAlign="center"
        />

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full sm:w-auto">
          <Link href={WA_URL} target="_blank" rel="noopener noreferrer"
            className="px-8 py-3.5 border-2 border-brand-matcha bg-brand-matcha text-white rounded-full font-semibold transition-all hover:scale-105 shadow-lg shadow-brand-matcha/30 hover:shadow-xl hover:shadow-brand-matcha/40 text-center hover:bg-white hover:text-brand-matcha hover:border-brand-matcha">
            Pesan Sekarang
          </Link>
          <Link href="/projek"
            className="px-8 py-3.5 border-2 border-white text-white rounded-full font-semibold hover:bg-white hover:text-brand-navy transition-all backdrop-blur-md text-center shadow-lg shadow-black/10">
            Lihat Projek
          </Link>
        </div>
      </div>
    </section>
  );
}
