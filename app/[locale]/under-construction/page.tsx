import { useTranslations } from "next-intl";
import { Construction } from "lucide-react";
import Link from "next/link";

export default function UnderConstructionPage() {
  const t = useTranslations("UnderConstruction");

  return (
    <div className="container flex flex-col items-center justify-center min-h-screen py-12">
      <Construction className="w-24 h-24 text-primary mb-6" />
      <h1 className="text-4xl font-bold text-center mb-4">{t("title")}</h1>
      <p className="text-xl text-muted-foreground text-center mb-8 max-w-md">
        {t("description")}
      </p>
      <Link
        href="/"
        className="inline-flex justify-center py-2 px-6 border border-primary shadow-sm text-sm font-medium rounded-md bg-primary hover:bg-primary/90 transition-colors"
      >
        {t("backButton")}
      </Link>
    </div>
  );
}
