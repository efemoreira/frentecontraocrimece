import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Frente Contra o Crime CE - Evento na ALECE",
  description: "Evento especial na Assembleia Legislativa do Ceará contra o crime organizado - 08 de agosto",
  keywords: "crime, segurança, Ceará, ALECE, evento, denúncia",
  authors: [{ name: "Frente Contra o Crime CE" }],
  openGraph: {
    title: "Frente Contra o Crime CE - Evento na ALECE",
    description: "Evento especial na Assembleia Legislativa do Ceará contra o crime organizado - 08 de agosto",
    url: "https://frentecontraocrimece.org.br",
    siteName: "Frente Contra o Crime CE",
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
