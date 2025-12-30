import './globals.css';
import { ReactNode } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export const metadata = {
  title: 'My Next.js App',
  description: 'A fresh Next.js 13 App Router setup',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head />
      <body>
        <Navbar />
        <main style={{ padding: '1rem' }}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
