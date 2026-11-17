'use client';

import { useState } from 'react';
import { PORTFOLIO_ITEMS, WA_NUMBER } from '@/lib/constants';
import { Button } from '@/components/ui/Button';
import { Modal } from '@/components/ui/Modal';
import { FaExternalLinkAlt } from 'react-icons/fa';
import ChromaGrid, { type ChromaItem } from '@/components/ui/ChromaGrid';

const CATEGORIES = [
  { id: 'semua', label: 'Semua Karya' },
  { id: 'undangan', label: 'Undangan Digital' },
  { id: 'portofolio', label: 'Portofolio Web' },
  { id: 'landing-page', label: 'Landing Page' },
];

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState('semua');
  const [selectedItem, setSelectedItem] = useState<typeof PORTFOLIO_ITEMS[0] | null>(null);

  const filteredItems = activeTab === 'semua' 
    ? PORTFOLIO_ITEMS 
    : PORTFOLIO_ITEMS.filter(item => item.category === activeTab);

  const chromaItems = filteredItems.map(item => ({
    id: item.id,
    image: item.thumbnail,
    title: item.title,
    subtitle: item.category === 'landing-page' ? 'Landing Page' : item.category === 'portofolio' ? 'Portofolio Web' : 'Undangan Digital',
    accent: item.category === 'portofolio' ? '#789262' : item.category === 'landing-page' ? '#112544' : '#FFC61A',
    itemOriginal: item,
    onClick: () => setSelectedItem(item),
  }));

  const waLink = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent('Halo SELEMBAR! Saya tertarik membuat web seperti yang ada di portofolio Anda.')}`;

  return (
    <section className="py-20 md:py-28 bg-brand-surface" id="portofolio">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <h2 className="font-playfair font-bold text-3xl md:text-5xl text-brand-navy mb-4">Karya Kami</h2>
          <p className="text-brand-text-muted text-lg max-w-2xl mx-auto">
            Jelajahi berbagai karya yang telah kami buat dengan penuh cinta untuk para klien.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12">
          {CATEGORIES.map(cat => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                activeTab === cat.id
                  ? 'bg-brand-matcha text-white shadow-md shadow-brand-matcha/30'
                  : 'bg-white text-brand-navy hover:bg-brand-matcha-light/50 border border-brand-matcha/20 hover:border-brand-matcha hover:text-brand-matcha'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* ChromaGrid */}
        {filteredItems.length > 0 ? (
          <div className="mb-16">
            <ChromaGrid
              items={chromaItems}
              columns={3}
              minCardWidth={240}
              gap={20}
              radius={280}
              aspectRatio="4 / 3"
              cardRadius={20}
              reveal="spotlight"
              softness={0.6}
              damping={0.45}
              fadeOut={0.6}
              grayscale={1}
              dim={0.12}
              glow={0.5}
              borderGlow={1}
              theme="selembar"
              onCardClick={(chromaItem: ChromaItem) => {
                if (chromaItem.itemOriginal) {
                  setSelectedItem(chromaItem.itemOriginal);
                }
              }}
            />
          </div>
        ) : (
          <div className="text-center py-16 mb-16 bg-white rounded-2xl border border-brand-matcha/20 shadow-sm max-w-xl mx-auto px-6">
            <p className="text-brand-text-muted mb-4 font-medium">Koleksi untuk kategori ini sedang diperbarui dengan karya terbaru.</p>
            <Button asChild size="sm" className="bg-brand-navy text-white hover:bg-brand-matcha hover:text-white transition-all">
              <a href={waLink} target="_blank" rel="noopener noreferrer">
                Tanya Katalog via WhatsApp
              </a>
            </Button>
          </div>
        )}

        {/* Bottom CTA */}
        <div className="text-center bg-white p-8 md:p-12 rounded-3xl border border-brand-matcha/20 shadow-sm">
          <h3 className="font-playfair font-bold text-2xl md:text-3xl text-brand-navy mb-4">
            Ingin karya seperti ini untuk momen Anda?
          </h3>
          <p className="text-brand-text-muted mb-8 max-w-lg mx-auto">
            Mari diskusikan ide Anda bersama tim kami. Kami siap mewujudkannya menjadi nyata.
          </p>
          <Button asChild size="lg" className="border-2 border-brand-matcha bg-brand-matcha text-white hover:bg-white hover:border-brand-matcha hover:text-brand-matcha font-semibold shadow-md shadow-brand-matcha/25">
            <a href={waLink} target="_blank" rel="noopener noreferrer">
              Hubungi Kami Sekarang
            </a>
          </Button>
        </div>
      </div>

      {/* Modal Preview */}
      <Modal isOpen={!!selectedItem} onClose={() => setSelectedItem(null)} className="max-w-4xl p-0 bg-transparent shadow-none">
        {selectedItem && (
          <div className="bg-white rounded-2xl overflow-hidden shadow-2xl border border-brand-matcha/20 relative">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img 
              src={selectedItem.thumbnail} 
              alt={selectedItem.title} 
              className="w-full max-h-[60vh] object-cover"
              loading="lazy"
              decoding="async"
            />
            <div className="p-6 md:p-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <h3 className="font-playfair font-bold text-2xl text-brand-navy mb-2">{selectedItem.title}</h3>
                <span className="inline-block px-3 py-1 bg-brand-matcha-light text-brand-matcha-dark text-xs font-semibold rounded-full capitalize border border-brand-matcha/25">
                  {selectedItem.category.replace('-', ' ')}
                </span>
              </div>
              <Button asChild className="border-2 border-brand-matcha bg-brand-matcha text-white hover:bg-white hover:border-brand-matcha hover:text-brand-matcha font-semibold shadow-md shadow-brand-matcha/25">
                <a href={selectedItem.liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  <FaExternalLinkAlt /> Kunjungi Live Web
                </a>
              </Button>
            </div>
          </div>
        )}
      </Modal>
    </section>
  );
}
