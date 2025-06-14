import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import './globals.css';
import Navbar from '@/components/Navbar';
import { TarefaProvider } from '@/data/ContextTarefa';
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt">
      <body className="font-sans bg-gray-100">
        <TarefaProvider>
          <Navbar />
          <main className="p-4 container mx-auto">{children}</main>
        </TarefaProvider>
      </body>
    </html>
  );
}

