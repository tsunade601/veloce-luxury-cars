import type { Metadata, Viewport } from 'next';
import { Inter, Cormorant_Garamond, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import SmoothScroll from '@/components/SmoothScroll';
import LoadingScreen from '@/components/LoadingScreen';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-cormorant',
});

const mono = JetBrains_Mono({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500'],
  variable: '--font-mono',
});

export const metadata: Metadata = {
  title: 'VÉLOCÉ — Performance, Refined.',
  description:
    'An ultra-luxury bespoke automotive atelier crafting high-performance, sculptural mechanical works of art. Explore the flagship V1, all-terrain X1, electric S1, and transcontinental GT.',
  keywords: [
    'VÉLOCÉ',
    'luxury cars',
    'hypercar',
    'supercar',
    'grand tourer',
    'automotive design',
    'bespoke automobiles',
  ],
  authors: [{ name: 'VÉLOCÉ Atelier' }],
  openGraph: {
    title: 'VÉLOCÉ — Performance, Refined.',
    description:
      'The pure sovereign of speed. An ultra-luxury bespoke automotive atelier crafting sculptural performance vehicles.',
    url: 'https://veloce-automotive.com',
    siteName: 'VÉLOCÉ Automotive',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?q=80&w=1200&auto=format&fit=crop',
        width: 1200,
        height: 630,
        alt: 'VÉLOCÉ V1 Hypercar',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'VÉLOCÉ — Performance, Refined.',
    description:
      'An ultra-luxury bespoke automotive atelier crafting sculptural performance vehicles.',
    images: ['https://images.unsplash.com/photo-1617814076367-b759c7d7e738?q=80&w=1200&auto=format&fit=crop'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: '#090909',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${cormorant.variable} ${mono.variable} scroll-smooth`}>
      <body className="bg-[#090909] text-[#F2F0EB] font-sans antialiased selection:bg-[#B89B5E] selection:text-[#090909] min-h-screen flex flex-col">
        <SmoothScroll>
          <LoadingScreen />
          <div className="noise-overlay" />
          <Navbar />
          <main className="flex-grow pt-0">{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}