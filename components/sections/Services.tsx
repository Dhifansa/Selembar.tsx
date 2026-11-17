import Link from 'next/link';
import { SERVICES, WA_NUMBER } from '@/lib/constants';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { FaEnvelopeOpenText, FaLaptopCode, FaRocket } from 'react-icons/fa6';
import BorderGlow from '@/components/ui/BorderGlow';

const iconMap: Record<string, React.ReactNode> = {
  envelope: <FaEnvelopeOpenText size={32} className="text-brand-matcha" />,
  laptop: <FaLaptopCode size={32} className="text-brand-matcha" />,
  rocket: <FaRocket size={32} className="text-brand-matcha" />,
};

export default function Services() {
  return (
    <section className="py-20 md:py-28 bg-brand-dark" id="layanan">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="font-playfair font-bold text-3xl md:text-5xl text-brand-navy mb-4">Layanan Kami</h2>
          <p className="text-brand-text-muted text-lg max-w-2xl mx-auto">
            Kami menyediakan berbagai solusi digital untuk membantu Anda merayakan momen spesial dan memajukan bisnis Anda.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SERVICES.map((service) => {
            const waLink = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(service.waText)}`;
            return (
              <BorderGlow
                key={service.id}
                className="border-none h-full"
                backgroundColor="#ffffff"
                borderRadius={16}
                glowColor="100 30% 50%"
                colors={['#789262', '#586F46', '#112544']}
                glowIntensity={2.5}
                glowRadius={60}
                edgeSensitivity={45}
              >
                <Card className="flex flex-col h-full hover:shadow-lg hover:shadow-brand-matcha/10 transition-all border-none bg-white">
                  <CardHeader className="text-center pb-2">
                    <div className="mx-auto bg-brand-matcha-light/60 w-16 h-16 rounded-2xl flex items-center justify-center mb-4 border border-brand-matcha/20">
                      {iconMap[service.icon]}
                    </div>
                    <CardTitle className="text-brand-navy">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center flex-grow">
                    <p className="text-brand-text-muted mb-6">{service.description}</p>
                    <p className="font-bold text-brand-navy text-lg">{service.price}</p>
                  </CardContent>
                  <CardFooter className="pt-0 pb-8 flex justify-center">
                    <Button asChild className="w-full max-w-[200px] bg-brand-navy text-white border-2 border-brand-navy hover:bg-brand-matcha hover:border-brand-matcha hover:text-white transition-all font-semibold">
                      <Link href={waLink} target="_blank" rel="noopener noreferrer">
                        {service.cta}
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              </BorderGlow>
            );
          })}
        </div>
      </div>
    </section>
  );
}
