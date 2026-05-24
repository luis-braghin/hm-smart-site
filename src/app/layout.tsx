import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-head",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "HM Smart — Telefonia em Nuvem para Empresas",
  description:
    "PABX em nuvem, omnichannel, SMS e softphone para pequenas e médias empresas. Atendimento humanizado, configurado por quem entende do setor. Mais de 9 anos de experiência.",
  openGraph: {
    title: "HM Smart — Telefonia em Nuvem para Empresas",
    description:
      "PABX em nuvem, omnichannel, SMS e softphone para PMEs. Atendimento humanizado. +9 anos de experiência.",
    type: "website",
    locale: "pt_BR",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`${plusJakarta.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  );
}
