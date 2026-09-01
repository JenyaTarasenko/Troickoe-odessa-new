import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
// MIU перед этим установил npm install @mui/material-nextjs   npm install @mui/material @emotion/react @emotion/styled
// import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";

const inter = Inter({
  subsets: ["latin", "cyrillic"],
});

export const metadata: Metadata = {
  title: "Troitscoe Evacuator 24/7",
  description: "Эвакуация авто в Троицком, Любашевке и Кривом Озере. Быстрая подача 15–30 минут. Работаем круглосуточно 24/7. Помощь при ДТП, поломке и перевозке авто.",

  metadataBase: new URL("https://joyful-blini-28a6ab.netlify.app/"),

  verification: {
    google: "F8L-WtNY0RLl3x6p-wFAikqQjBX_XTsAWTvd7NJaKRM",
  },

  // 🔥 SEO keywords (можно оставить, но Google почти не учитывает)
  keywords: [
    "эвакуатор Троицкое",
    "эвакуатор Любашевка",
    "эвакуатор Кривое Озеро",
    "эвакуатор Ананьев",
    "такси 24/7",
    "СТО Е-95",
    "автосервис Украина",
  ],

  // 🔥 OpenGraph (соцсети + SEO)
  openGraph: {
    title: "Troitscoe Evacuator 24/7 | эвакуатор, такси, СТО 24/7 Троицкое",
    description:
      "Срочная помощь на дороге: эвакуатор, такси и автосервис 24/7 Троицкое",
    url: "https://joyful-blini-28a6ab.netlify.app/",
    siteName: "Troitscoe Evacuator 24/7",
    images: [
      {
        url: "https://joyful-blini-28a6ab.netlify.app/images/og.png",
        width: 1200,
        height: 630,
        alt: "Е-95 AVTOSERVICE",
      },
    ],
    locale: "ru_UA",
    type: "website",
  },

  // 🔥 Twitter (даёт доп. SEO сигнал)
  twitter: {
    card: "summary_large_image",
    title: "Troitscoe Evacuator 24/7",
    description: "Эвакуатор Троицкое,24/7",
    images: ["https://joyful-blini-28a6ab.netlify.app/images/og.png"],
  },

  // 🔥 CANONICAL
  alternates: {
    canonical: "https://joyful-blini-28a6ab.netlify.app/",
  },

  // 🔥 GEO + LOCAL SEO (ВАЖНО ДЛЯ ТВОЕЙ НИШИ)
  other: {
    // GEO + LOCAL SEO
    "geo.region": "UA-51",
    "geo.placename": "Троицкое, Одесская область, Украина",

    // Координаты точки бизнеса
    "geo.position": "47.647677;30.309478",
    "ICBM": "47.647677, 30.309478",

    // Business contact
    "business:contact_data:phone_number": "+380668029054",
    "business:contact_data:country_name": "Ukraine",
    "business:contact_data:locality": "Троицкое",
    "business:contact_data:region": "Одесская область",
  }, 
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body className={inter.className}>

          {children}
    
      </body>
    </html>
  );
}