import type { Metadata } from "next";
import "./globals.css";

const BASE_URL = "https://tradegator.vercel.app";

export const metadata: Metadata = {
  title: "Tradegator — Ferramentas de Comércio Exterior",
  description:
    "Agregador das principais ferramentas e plataformas para profissionais de comércio exterior: sistemas aduaneiros, NCM, câmbio, logística, legislação e mais.",
  keywords: [
    "comércio exterior",
    "importação",
    "exportação",
    "siscomex",
    "NCM",
    "câmbio",
    "drawback",
    "despacho aduaneiro",
    "logística internacional",
    "ferramentas comex",
  ],
  authors: [{ name: "Tradegator" }],
  metadataBase: new URL(BASE_URL),
  openGraph: {
    title: "Tradegator — Ferramentas de Comércio Exterior",
    description:
      "Acesso rápido às principais plataformas usadas por importadores, exportadores, despachantes e analistas de comex.",
    url: BASE_URL,
    siteName: "Tradegator",
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tradegator — Ferramentas de Comércio Exterior",
    description:
      "Acesso rápido às principais plataformas de comércio exterior em um só lugar.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className="min-h-screen antialiased">
        {children}
      </body>
    </html>
  );
}
