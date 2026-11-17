import Hero from '@/components/sections/Hero';
import Services from '@/components/sections/Services';
import WhyUs from '@/components/sections/WhyUs';
import CTAFinal from '@/components/sections/CTAFinal';
import ScrollFloat from '@/components/ui/ScrollFloat';
import AnimatedContent from '@/components/ui/AnimatedContent';

export default function Home() {
  return (
    <>
      <Hero />
      <div className="py-20 bg-brand-surface overflow-hidden flex justify-center border-b border-brand-matcha/20">
        <ScrollFloat
          animationDuration={1}
          ease='back.inOut(2)'
          scrollStart='center bottom+=50%'
          scrollEnd='bottom bottom-=40%'
          stagger={0.03}
          textClassName="text-brand-matcha tracking-tighter"
        >
          SELEMBAR
        </ScrollFloat>
      </div>
      <AnimatedContent distance={100} direction="vertical" duration={1}>
        <Services />
      </AnimatedContent>
      <AnimatedContent distance={100} direction="vertical" duration={1}>
        <WhyUs />
      </AnimatedContent>
      <AnimatedContent distance={100} direction="vertical" duration={1}>
        <CTAFinal />
      </AnimatedContent>
    </>
  );
}
