import { WHY_US } from '@/lib/constants';
import { FaBolt, FaPalette, FaCheckCircle, FaTags } from 'react-icons/fa';
import BorderGlow from '@/components/ui/BorderGlow';

const iconMap: Record<string, React.ReactNode> = {
  lightning: <FaBolt size={24} className="text-brand-matcha" />,
  palette: <FaPalette size={24} className="text-brand-matcha" />,
  check: <FaCheckCircle size={24} className="text-brand-matcha" />,
  tag: <FaTags size={24} className="text-brand-matcha" />,
};

export default function WhyUs() {
  return (
    <section className="py-20 md:py-28 bg-brand-surface relative overflow-hidden" id="mengapa-kami">
      {/* Decorative blobs */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-brand-matcha/15 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-brand-matcha/20 rounded-full blur-3xl translate-x-1/3 translate-y-1/3"></div>

      <div className="max-w-6xl mx-auto px-4 md:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <h2 className="font-playfair font-bold text-3xl md:text-5xl text-brand-navy mb-6 leading-tight">
              Kenapa Memilih <span className="text-brand-matcha">SELEMBAR</span>?
            </h2>
            <p className="text-brand-text-muted text-lg mb-8 leading-relaxed">
              Kami percaya bahwa setiap karya harus memiliki nyawa. Tidak sekadar jadi, tapi dikerjakan dengan penuh hati untuk memberikan impresi terbaik bagi audiens Anda.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {WHY_US.map((item) => (
              <BorderGlow
                key={item.id}
                className="border-none"
                backgroundColor="#ffffff"
                borderRadius={16}
                glowColor="100 30% 50%"
                colors={['#789262', '#586F46', '#112544']}
                glowIntensity={2.5}
                glowRadius={60}
                edgeSensitivity={45}
              >
                <div className="bg-white/90 backdrop-blur-sm p-6 rounded-2xl h-full shadow-sm hover:shadow-md transition-all">
                  <div className="bg-brand-matcha-light/60 w-12 h-12 rounded-xl flex items-center justify-center mb-4 border border-brand-matcha/20">
                    {iconMap[item.icon]}
                  </div>
                  <h3 className="font-bold text-brand-text text-lg mb-2">{item.title}</h3>
                  <p className="text-brand-text-muted text-sm leading-relaxed">{item.description}</p>
                </div>
              </BorderGlow>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
