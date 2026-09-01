
import Script from "next/script";

export default function ServiceSchema() {
  const data = {
    "@context": "https://schema.org",
    "@type": "AutoRepair",

    name: "Troitscoe Evacuator 24/7",

    description:
      "Troitscoe Evacuator 24/7 — круглосуточный эвакуатор в Троицком, автосервис, шиномонтаж и помощь на дороге. Быстрая подача 15–30 минут по трассе Е-95 и Одесской области.",

    url: "https://joyful-blini-28a6ab.netlify.app/",

    telephone: "+380668029054",

    email: "eavtoservice@gmail.com",

    image:
      "https://joyful-blini-28a6ab.netlify.app/images/og.png",

    priceRange: "$$",

    address: {
      "@type": "PostalAddress",
      addressLocality: "Троицкое",
      addressRegion: "Одесская область",
      addressCountry: "UA",
    },

    geo: {
      "@type": "GeoCoordinates",
      latitude: 47.6512446,
      longitude: 30.30669,
    },

    hasMap:
      "https://www.google.com/maps/search/?api=1&query=47.6512446,30.3066900",

    areaServed: [
      {
        "@type": "Place",
        name: "Троицкое",
      },
      {
        "@type": "Place",
        name: "Знаменка",
      },
      {
        "@type": "Place",
        name: "Любашевка",
      },
      {
        "@type": "Place",
        name: "Кривое Озеро",
      },
      {
        "@type": "Place",
        name: "Ширяево",
      },
      {
        "@type": "AdministrativeArea",
        name: "Одесская область",
      },
    ],

    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "00:00",
        closes: "23:59",
      },
    ],

    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+380663099011",
      contactType: "customer service",
      availableLanguage: ["uk", "ru"],
    },

    makesOffer: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Эвакуатор 24/7",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Помощь на дороге",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Шиномонтаж",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Автосервис",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Такси 24/7",
        },
      },
    ],
  };

  return (
    <Script
      id="service-schema"
      type="application/ld+json"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data),
      }}
    />
  );
}

