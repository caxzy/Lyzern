import type { Metadata } from 'next';
import './globals.css';
import Navbar from './components/Navbar';

export const metadata: Metadata = {
  title: 'VexyraHub - Your Hub for optimization.',
  description: 'VexyraHub - A hub of PC optimization tools, programs, and guides for Windows 10/11. All in one place and 100% open source.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#060606] text-white antialiased min-h-screen relative font-sans">
        <Navbar />
        <main className="pt-28 pb-10 px-6">
          {children}
        </main>
      </body>
    </html>
  );
}