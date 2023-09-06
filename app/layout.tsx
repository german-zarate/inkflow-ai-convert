'use client';

import './globals.css';

import { Montserrat } from 'next/font/google';
import { ThemeProvider } from 'next-themes';

import Navbar from '@/components/Navbar';
import { cn } from '@/lib/utils';

const montserrat = Montserrat({ subsets: ['latin'] });
// main color

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
