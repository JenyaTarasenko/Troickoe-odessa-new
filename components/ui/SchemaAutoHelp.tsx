
export default function SchemaAutoHelp() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "AutoRepair",

    name: "Troitscoe Evacuator 24/7",

    description:
      "Эвакуатор 24/7 на трассе E95 M05 Троицкое. Срочная эвакуация автомобилей, помощь на дороге, запуск двигателя, доставка топлива и круглосуточная автопомощь в Одесской области.",

    url: "https://joyful-blini-28a6ab.netlify.app/",

    telephone: "+380668029054",

    email: "eavtoservice@gmail.com",

    address: {
      "@type": "PostalAddress",
      addressLocality: "Троицкое",
      addressRegion: "Одеська область",
      addressCountry: "UA",
    },

    geo: {
      "@type": "GeoCoordinates",
      latitude: 47.647677,
      longitude: 30.309478,
    },

    hasMap:
      "https://www.google.com/maps/search/?api=1&query=47.647677,30.309478",

    areaServed: [
      {
        "@type": "AdministrativeArea",
        name: "Одеська область",
      },
      {
        "@type": "Place",
        name: "Траса М-05",
      },
      {
        "@type": "Place",
        name: "Траса Е-95",
      },
      {
        "@type": "Place",
        name: "Любашівка",
      },
      {
        "@type": "Place",
        name: "Ширяєве",
      },
      {
        "@type": "Place",
        name: "Знам’янка",
      },
      {
        "@type": "City",
        name: "Одеса",
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

    priceRange: "$$",

    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+380668029054",
      contactType: "customer service",
      availableLanguage: ["uk", "ru"],
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema),
      }}
    />
  );
}

