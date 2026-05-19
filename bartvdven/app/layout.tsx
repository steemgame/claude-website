import type { Metadata } from "next";
import { Playfair_Display, Lato } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const lato = Lato({
  variable: "--font-lato",
  weight: ["300", "400", "700", "900"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Bart van de Ven – Allround Timmerwerken en Montage | Heesch",
  description:
    "Vakkundige timmerman in Heesch (Noord-Brabant). Kozijnen, dakkapellen, inbouwkasten, gevelbetimmering en meer. Bel 06-15953885 voor een vrijblijvende offerte.",
  keywords:
    "timmerman, timmerwerken, kozijnen, dakkapellen, inbouwkasten, Heesch, Noord-Brabant, Bernheze, Oss",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="nl"
      className={`${playfair.variable} ${lato.variable} scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-cream text-charcoal font-sans antialiased">
        <Navigation />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
