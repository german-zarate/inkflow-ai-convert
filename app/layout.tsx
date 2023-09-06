'use client';

import './globals.css';

import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import { ThemeProvider } from 'next-themes';

import Navbar from '@/components/Navbar';
import { cn } from '@/lib/utils';

const montserrat = Montserrat({ subsets: ['latin'] });
// main color

export const metadata: Metadata = {
  title: 'InkFlow AI Convert',
  description:
    'Experience the future of handwritten content conversion with "InkFlow AI Convert". Our innovative web application, powered by cutting-edge technologies, offers a seamless solution to transform handwritten text into digital text. This pioneering solution rests upon the pillars of Next.js, Tailwind CSS, and MongoDB, forming the bedrock of innovation. Simplify your workflow, enhance efficiency, and harness the power of AI-driven transcription to unlock the potential of your handwritten content.',
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body
        className={cn((montserrat.className, 'bg-slate-50 dark:bg-navy-900'))}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navbar />

          {children}
        </ThemeProvider>
      </body>
    </html>
  );
};

export default RootLayout;
