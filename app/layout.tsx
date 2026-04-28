import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://openclubetech.com.br"),
  title: "OpenClube - O Clube Mais Inovador do Mundo",
  description: "Transformando benefícios em conexões reais e oportunidades financeiras.",
  keywords: ["benefícios", "clube de vantagens", "inteligência financeira", "royalties", "tecnologia", "openclube"],
  authors: [{ name: "OpenClube" }],
  robots: "index, follow",
  icons: {
    icon: "/fav.png",
  },
  openGraph: {
    title: "OpenClube - O Clube Mais Inovador do Mundo",
    description: "Transformando benefícios em conexões reais e oportunidades financeiras.",
    url: "https://openclubetech.com.br",
    siteName: "OpenClube",
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "OpenClube - O Clube Mais Inovador do Mundo",
    description: "Transformando benefícios em conexões reais e oportunidades financeiras.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${manrope.variable} overflow-x-hidden scroll-smooth`}>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={`bg-background text-on-background font-body-md antialiased overflow-x-hidden selection:bg-primary-container selection:text-white min-h-full flex flex-col`}
      >
        {children}
      </body>
    </html>
  );
}
