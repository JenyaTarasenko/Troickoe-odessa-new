const steps = [
  {
    number: "01",
    title: "Звонок",
    description: "В течение 1 минуты мы перезвоним вам на ваш номер",
  },
  {
    number: "02",
    title: "Быстрый выезд",
    description: "Быстрый выезд в Троицком по месту 15 минут",
  },
  {
    number: "03",
    title: "Эвакуация",
    description: "Аккуратная погрузка и бережная транспортировка",
  },
  {
    number: "04",
    title: "Опыт более 10 лет",
    description: "Опыт работы в сфере эвакуации более 10 лет",
  },
];

export default function Steps() {
  return (
    <section className="px-6 py-20">
      <div className="mx-auto max-w-7xl">

        <div className="grid grid-cols-1 gap-0 md:grid-cols-4">
          {steps.map((step) => (
            <div
              key={step.number}
              className="border border-white/10 px-8 py-10 font-inter"
            >
              <div className="text-6xl font-normal tracking-tight text-white font-inter">
                {step.number}
              </div>

              <h3 className="mt-6 text-xl font-normal text-white uppercase tracking-wider font-inter">
                {step.title}
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-white/70">
                {step.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
