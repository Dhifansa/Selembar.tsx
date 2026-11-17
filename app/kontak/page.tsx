import type { Metadata } from 'next';
import CTAFinal from '@/components/sections/CTAFinal';
import { FaWhatsapp, FaInstagram, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa';
import Link from 'next/link';
import ProjectHeroBackground from '@/components/ui/ProjectHeroBackground';
import SplitText from '@/components/ui/SplitText';
import AnimatedContent from '@/components/ui/AnimatedContent';

export const metadata: Metadata = {
  title: 'Kontak',
  description: 'Hubungi SELEMBAR untuk konsultasi gratis. Pesan via WhatsApp atau kirim email.',
};

const CONTACT_CARDS = [
  {
    icon: <FaWhatsapp size={28} />,
    title: 'WhatsApp',
    desc: 'Chat langsung dengan tim kami',
    value: '+62 812-2502-8952',
    href: 'https://wa.me/6281225028952',
  },
  {
    icon: <FaEnvelope size={28} />,
    title: 'Email',
    desc: 'Kirim detail kebutuhan Anda',
    value: 'selembar2828@gmail.com',
    href: 'mailto:selembar2828@gmail.com',
  },
  {
    icon: <FaInstagram size={28} />,
    title: 'Instagram',
    desc: 'Lihat portofolio terbaru kami',
    value: '@selemba.tsx',
    href: 'https://selembar-tsx.vercel.app/',
  },
];

export default function KontakPage() {
  return (
    <>
      {/* Contact Hero */}
      <section className="py-24 md:py-32 overflow-hidden relative pt-32">
        <ProjectHeroBackground />

        <div className="max-w-6xl mx-auto px-4 md:px-8 relative z-10">
          <div className="text-center mb-16">
            <SplitText
              tag="h1"
              text="Mari Terhubung"
              className="font-playfair font-bold text-4xl md:text-5xl lg:text-6xl text-white mb-6 drop-shadow-sm"
              delay={30}
              duration={1}
              ease="power3.out"
              splitType="words, chars"
              textAlign="center"
            />
            <p className="text-white/85 text-lg md:text-xl max-w-2xl mx-auto drop-shadow-sm">
              Punya ide proyek? Ingin konsultasi gratis? Kami siap membantu mewujudkan visi digital Anda.
            </p>
          </div>

          {/* Contact Cards */}
          <AnimatedContent distance={100} direction="vertical" duration={1}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
              {CONTACT_CARDS.map((card, i) => (
                <Link
                  key={i}
                  href={card.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-white/95 backdrop-blur-md p-8 rounded-2xl border border-white/20 hover:border-brand-matcha hover:shadow-2xl hover:shadow-black/25 hover:-translate-y-1 transition-all text-center shadow-lg shadow-black/10"
                >
                  <div className="w-16 h-16 mx-auto rounded-2xl bg-brand-matcha-light/70 flex items-center justify-center mb-5 text-brand-matcha border border-brand-matcha/20 group-hover:bg-brand-matcha group-hover:text-white transition-colors">
                    {card.icon}
                  </div>
                  <h3 className="font-bold text-lg text-brand-navy mb-1">{card.title}</h3>
                  <p className="text-brand-text-muted text-sm mb-3">{card.desc}</p>
                  <p className="text-brand-matcha font-semibold">{card.value}</p>
                </Link>
              ))}
            </div>
          </AnimatedContent>

          {/* Additional Info */}
          <AnimatedContent distance={100} direction="vertical" duration={1} delay={0.2}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
              <div className="bg-white/90 backdrop-blur-md p-6 rounded-2xl border border-white/30 flex items-start gap-4 shadow-lg shadow-black/10">
                <div className="w-12 h-12 rounded-xl bg-brand-matcha-light/70 flex items-center justify-center text-brand-matcha border border-brand-matcha/20 flex-shrink-0">
                  <FaMapMarkerAlt size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-brand-navy mb-1">Lokasi</h4>
                  <p className="text-brand-text-muted text-sm">Semarang, Jawa Tengah, Indonesia</p>
                </div>
              </div>
              <div className="bg-white/90 backdrop-blur-md p-6 rounded-2xl border border-white/30 flex items-start gap-4 shadow-lg shadow-black/10">
                <div className="w-12 h-12 rounded-xl bg-brand-matcha-light/70 flex items-center justify-center text-brand-matcha border border-brand-matcha/20 flex-shrink-0">
                  <FaClock size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-brand-navy mb-1">Jam Kerja</h4>
                  <p className="text-brand-text-muted text-sm">Senin - Jumat: 09.00 - 17.00 WIB</p>
                </div>
              </div>
            </div>
          </AnimatedContent>
        </div>
      </section>

      {/* CTA */}
      <AnimatedContent distance={100} direction="vertical" duration={1}>
        <CTAFinal />
      </AnimatedContent>
    </>
  );
}
