import type { Metadata } from "next";
import { Playfair_Display, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SmoothScroll from "@/components/layout/SmoothScroll";
import { ThemeProvider } from "next-themes";
import { I18nProvider } from "@/providers/I18nProvider";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://amabojoshua.com"),
  alternates: {
    canonical: "/",
  },
  title: {
    default: "Amabo Joshua | Computer Engineer, Backend Developer & Product Manager",
    template: "%s | Amabo Joshua",
  },
  description:
    "Amabo Joshua is a Computer Engineer, Backend Developer and Product Manager in Douala, Cameroon, building scalable software, cloud systems and digital products.",
  keywords: [
    "Amabo Joshua",
    "Computer Engineer Douala",
    "Backend Developer Cameroon",
    "Product Manager Cameroon",
    "Software Architecture",
    "Cloud Infrastructure",
    "Full-Stack Development",
    "Cameroon",
    "Douala",
  ],
  authors: [{ name: "Amabo Joshua" }],
  creator: "Amabo Joshua",
  publisher: "Amabo Joshua",
  openGraph: {
    title: "Amabo Joshua | Computer Engineer, Backend Developer & Product Manager",
    description:
      "Portfolio of Amabo Joshua, building scalable software, cloud systems and digital products in Douala, Cameroon.",
    url: "https://amabojoshua.com",
    siteName: "Amabo Joshua Portfolio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/portfolio.jpg",
        width: 1200,
        height: 1200,
        alt: "Amabo Joshua portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Amabo Joshua | Computer Engineer, Backend Developer & Product Manager",
    description:
      "Portfolio of Amabo Joshua, building scalable software, cloud systems and digital products in Douala, Cameroon.",
    images: ["/portfolio.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: "/portfolio.png",
    apple: "/portfolio.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${playfair.variable} ${inter.variable} ${jetbrainsMono.variable} font-sans antialiased bg-soft-cream text-deep-charcoal selection:bg-burgundy/30 selection:text-deep-charcoal h-full`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <I18nProvider>
            <SmoothScroll>
              <Navbar />
              {children}
              <Footer />
            </SmoothScroll>
          </I18nProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
