import './globals.css';

import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'InkFlow AI Converter',
  description:
    'Experience the future of handwritten content conversion with "InkFlow AI Convert". Our innovative web application, powered by cutting-edge technologies, offers a seamless solution to transform handwritten text into digital text. This pioneering solution rests upon the pillars of Next.js, Tailwind CSS, and MongoDB, forming the bedrock of innovation. Simplify your workflow, enhance efficiency, and harness the power of AI-driven transcription to unlock the potential of your handwritten content.',
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body className={montserrat.className}>{children}</body>
    </html>
  );
};

export default RootLayout;
