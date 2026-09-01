const services = [
  {
    image: "/images/serv1.svg",
    title: "Выезд по Троицкому",
    description:
      "Быстрый выезд по Троицкому всего за 15-20 минут",
  },
  {
    image: "/images/serv2.svg",
    title: "Скрость наш приоритет",
    description:
      "Мы делаем все быстро качественно и недорого",
  },
  {
    image: "/images/serv3.svg",
    title: "Эвакуация всех авто ",
    description:
      "Эвакуация всех видов авто мотоциклы крупногабарит",
  },
];

export default function Services() {
  return (
    <section className="bg-black px-6 py-24">
      <div className="mx-auto max-w-7xl">

        <div className="grid gap-8 md:grid-cols-3">

          {services.map((service) => (
            <div
              key={service.title}
              className="overflow-hidden flex flex-col items-center justify-center "
            >
              <img
                src={service.image}
                alt={service.title}
                className="h-12 w-12"
              />

              <div className="p-6 text-center max-w-sm">
                <h2 className="mb-3 text-2xl font-normal uppercase text-yellow-500">
                  {service.title}
                </h2>

                <p className="text-xs leading-relaxed text-white max-w-xs uppercase">
                  {service.description}
                </p>
              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}