import Link from 'next/link';
import { WA_URL } from '@/lib/constants';
import { Button } from '@/components/ui/Button';
import { FaWhatsapp, FaEnvelope } from 'react-icons/fa';

export default function CTAFinal() {
  return (
    <section className="py-20 md:py-28 bg-brand-surface relative overflow-hidden" id="cta">
      {/* Decorative glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-matcha/15 rounded-full blur-3xl"></div>

      <div className="max-w-4xl mx-auto px-4 md:px-8 relative z-10 text-center">
        <h2 className="font-playfair font-bold text-4xl md:text-5xl lg:text-6xl text-brand-navy mb-6 leading-tight">
          Mari Abadikan Momen Spesial Anda Bersama <span className="text-brand-matcha">Kami</span>
        </h2>
        <p className="text-brand-text-muted text-lg md:text-xl mb-10 max-w-2xl mx-auto">
          Jangan biarkan momen berharga berlalu begitu saja. Percayakan pada kami untuk menjadikannya karya yang indah dan profesional.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button asChild size="lg" className="w-full sm:w-auto border-2 border-brand-matcha bg-brand-matcha text-white hover:bg-white hover:text-brand-matcha hover:border-brand-matcha shadow-lg shadow-brand-matcha/30 font-semibold transition-all p-0">
            <Link href={WA_URL} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 w-full h-full px-10">
              <FaWhatsapp size={20} />
              <span>Pesan Sekarang via WhatsApp</span>
            </Link>
          </Button>
          
          <Button asChild size="lg" className="w-full sm:w-auto border-2 border-brand-navy bg-brand-navy text-white hover:bg-brand-matcha hover:border-brand-matcha hover:text-white transition-all p-0">
            <Link href="mailto:hello@selembar.id" className="flex items-center justify-center gap-2 w-full h-full px-10">
              <FaEnvelope size={20} />
              <span>Kirim Email</span>
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
