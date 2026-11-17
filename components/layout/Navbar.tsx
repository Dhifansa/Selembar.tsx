'use client';

import PillNav from '@/components/ui/PillNav';

const NAV_ITEMS = [
  { label: 'Home', href: '/' },
  { label: 'Projek', href: '/projek' },
  { label: 'Kontak', href: '/kontak' },
];

export default function Navbar() {
  return (
    <PillNav
      logo="/logo.png"
      logoAlt="SELEMBAR"
      items={NAV_ITEMS}
      className="selembar-nav"
      ease="power3.easeOut"
      baseColor="rgba(255, 255, 255, 0.4)"
      pillColor="rgba(255, 255, 255, 0.7)"
      hoveredPillTextColor="#789262"
      pillTextColor="#112544"
      initialLoadAnimation
    />
  );
}
