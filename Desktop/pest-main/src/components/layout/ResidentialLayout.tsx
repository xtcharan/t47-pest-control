"use client";

import React, { ReactNode } from 'react';

interface ResidentialLayoutProps {
  children: ReactNode;
}

export default function ResidentialLayout({ children }: ResidentialLayoutProps) {
  return (
    <main className="min-h-screen animate-fade-in">
      {children}
    </main>
  );
}
