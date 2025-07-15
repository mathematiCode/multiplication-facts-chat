import type { Metadata } from 'next';
import './globals.css';
import React from 'react';

export const metadata: Metadata = {
  title: 'Multiplication Chat',
  description:
    'Learn multiplication fact strategies to promote fluency andretention.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Favicon placeholder: replace href with your favicon file, e.g. /favicon.ico or /placeholder-logo.png */}
        <link rel="icon" href="/logo.svg" type="image/svg+xml" />
      </head>
      <body>{children}</body>
    </html>
  );
}
