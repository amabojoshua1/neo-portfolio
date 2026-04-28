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
  title: {
    default: "Amabo Joshua | Computer Engineer",
    template: "%s | Amabo Joshua",
  },
  description:
    "Architecting high-performance digital systems. Portfolio of Amabo Joshua, a Computer Engineer specializing in scalable software and elegant design.",
  keywords: [
    "Computer Engineer",
    "Software Developer",
    "Amabo Joshua",
    "Next.js Portfolio",
    "Full Stack Engineer",
    "Architectural Minimalism",
  ],
  authors: [{ name: "Amabo Joshua" }],
  openGraph: {
    title: "Amabo Joshua | Computer Engineer",
    description: "Architecting high-performance digital systems.",
    url: "https://amabojoshua.com",
    siteName: "Amabo Joshua Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Amabo Joshua | Computer Engineer",
    description: "Architecting high-performance digital systems.",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/portfolio-Icon.webp",
    apple: "/portfolio-Icon.webp",
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
