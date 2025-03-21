import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Navbar } from "@/components/layout/navbar";
import { ThemeProvider } from "@/components/layout/theme-provider";
const inter = Inter({ subsets: ["latin"] });
import BackToTop from "../components/BackToTop";
import Head from "next/head";

export const metadata: Metadata = {
  title: "AFRIQUE AVENIR",
  description: "Page d'accueil d'AFRIQUE AVENIR ",
  icons: {
    icon: "/favicon.ico", // Chemin vers ton favicon
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      {/* <Head>
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
      </Head> */}
      <body className={cn("min-h-screen bg-background", inter.className)}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />

          {children}
          <BackToTop />
        </ThemeProvider>
      </body>
    </html>
  );
}
