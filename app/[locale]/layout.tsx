import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Navbar } from "@/components/layout/navbar";
import { ThemeProvider } from "@/components/layout/theme-provider";
const inter = Inter({ subsets: ["latin"] });
import { notFound } from "next/navigation";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { routing } from "@/i18n/routing";
import { getMessages } from "next-intl/server";
import BackToTop from "@/components/BackTotop";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  // Vous devez attendre la résolution des paramètres
  const resolvedParams = await Promise.resolve(params);
  const { locale } = resolvedParams;

  return {
    title:
      locale === "fr"
        ? "AFRIQUE AVENIR"
        : locale === "ar"
        ? "AFRIQUE AVENIR" // Titre en arabe
        : "AFRIQUE AVENIR", // Titre par défaut en anglais

    description:
      locale === "fr"
        ? "Page d'accueil d'AFRIQUE AVENIR"
        : locale === "ar"
        ? "الصفحة الرئيسية لأفريقيا أفينير" // Description en arabe
        : "Home page AFRIQUE AVENIR", // Description par défaut en anglais

    icons: {
      icon: "/favicon.ico",
    },
  };
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  // Ensure that the incoming `locale` is valid
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  const messages = await getMessages({ locale });
  return (
    <html
      lang={locale}
      dir={locale === "ar" ? "rtl" : "ltr"}
      suppressHydrationWarning
    >
      <head>
        <meta charSet="UTF-8" />
      </head>
      <body className={cn("min-h-screen bg-background", inter.className)}>
        <NextIntlClientProvider locale={locale} messages={messages}>
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
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
