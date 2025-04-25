"use client";

import React, { ReactNode } from 'react';
import MainHeader from './header/MainHeader';
import Footer from './Footer';
import { motion } from 'framer-motion';

interface ResidentialLayoutProps {
  children: ReactNode;
}

export default function ResidentialLayout({ children }: ResidentialLayoutProps) {
  return (
    <div className="flex flex-col min-h-screen">
      <MainHeader />
      <main className="flex-grow">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {children}
        </motion.div>
      </main>
      <Footer />
    </div>
  );
}
