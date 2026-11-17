import Link from 'next/link';
import { WA_URL } from '@/lib/constants';
import { FaInstagram, FaWhatsapp, FaEnvelope } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-brand-navy text-white py-12 mt-auto border-t border-brand-yellow/20">
      <div className="max-w-6xl mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Brand */}
        <div>
          <h2 className="font-playfair font-bold text-3xl mb-4 text-brand-yellow">SELEMBAR</h2>
          <p className="text-white/80 text-sm md:text-base leading-relaxed max-w-sm">
            Setiap momen spesial layak diabadikan dengan indah. Solusi undangan digital, portofolio web, dan landing page profesional.
          </p>
        </div>

        {/* Links */}
        <div className="flex flex-col md:items-center">
          <div>
            <h3 className="font-semibold text-lg mb-4 text-white">Navigasi</h3>
            <ul className="space-y-2 text-white/80">
              <li><Link href="/" className="hover:text-brand-yellow transition-colors">Home</Link></li>
              <li><Link href="/projek" className="hover:text-brand-yellow transition-colors">Projek</Link></li>
              <li><Link href="/kontak" className="hover:text-brand-yellow transition-colors">Kontak</Link></li>
            </ul>
          </div>
        </div>

        {/* Social & Contact */}
        <div className="flex flex-col md:items-end">
          <div>
            <h3 className="font-semibold text-lg mb-4 text-white">Hubungi Kami</h3>
            <div className="flex gap-4 mb-6">
              <Link href={WA_URL} target="_blank" rel="noopener noreferrer" className="bg-white/10 p-3 rounded-full hover:bg-brand-yellow/20 border border-white/20 hover:border-brand-yellow transition-all" aria-label="WhatsApp">
                <FaWhatsapp size={20} className="text-brand-yellow" />
              </Link>
              <Link href="https://instagram.com/selembar" target="_blank" rel="noopener noreferrer" className="bg-white/10 p-3 rounded-full hover:bg-brand-yellow/20 border border-white/20 hover:border-brand-yellow transition-all" aria-label="Instagram">
                <FaInstagram size={20} className="text-brand-yellow" />
              </Link>
              <Link href="mailto:hello@selembar.id" className="bg-white/10 p-3 rounded-full hover:bg-brand-yellow/20 border border-white/20 hover:border-brand-yellow transition-all" aria-label="Email">
                <FaEnvelope size={20} className="text-brand-yellow" />
              </Link>
            </div>
            <p className="text-white/60 text-sm">
              Senin - Jumat: 09.00 - 17.00 WIB
            </p>
          </div>
        </div>
      </div>

      <div className="mt-12 pt-8 border-t border-white/10 text-center text-white/60 text-sm max-w-6xl mx-auto px-4 md:px-8">
        <p>&copy; {new Date().getFullYear()} SELEMBAR. All rights reserved.</p>
      </div>
    </footer>
  );
}
