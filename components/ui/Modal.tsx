'use client';

import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { cn } from './Button';
import { GoX } from 'react-icons/go';

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  className?: string;
}

export function Modal({ isOpen, onClose, children, className }: ModalProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen || !mounted) return null;

  return createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div 
        className="fixed inset-0 bg-brand-navy/60 backdrop-blur-sm transition-opacity" 
        onClick={onClose} 
        aria-hidden="true" 
      />
      
      <div 
        className={cn(
          "relative bg-white rounded-2xl shadow-xl shadow-brand-navy/10 w-full max-w-lg overflow-hidden transform transition-all animate-in fade-in zoom-in-95 duration-200 border border-brand-matcha/20",
          className
        )}
      >
        <button
          onClick={onClose}
          className="absolute right-4 top-4 rounded-full p-1 text-brand-text-muted hover:bg-brand-matcha-light hover:text-brand-matcha transition-colors focus:outline-none z-10"
          aria-label="Tutup"
        >
          <GoX size={24} />
        </button>
        {children}
      </div>
    </div>,
    document.body
  );
}
