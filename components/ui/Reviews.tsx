"use client";

const reviews = [
  {
    name: "Александр",
    text: "Быстро приехали, аккуратно погрузили автомобиль. Спасибо за помощь!",
    rating: "★★★★★",
  },
  {
    name: "Ирина",
    text: "Позвонила ночью, приехали очень быстро. Отличный сервис!",
    rating: "★★★★★",
  },
  {
    name: "Максим",
    text: "Попал в неприятную ситуацию на дороге. Ребята оперативно помогли.",
    rating: "★★★★★",
  },
  {
    name: "Олег",
    text: "Хороший эвакуатор, адекватная цена и быстрое обслуживание.",
    rating: "★★★★★",
  },
  {
    name: "Наталья",
    text: "Спасибо за быструю помощь! Всё прошло отлично.",
    rating: "★★★★★",
  },
];

export default function Reviews() {
  return (
    <section className="overflow-hidden py-20">
      <div className="mb-10 px-6 text-center">
        <h2 className="text-4xl font-bold">
          Отзывы клиентов
        </h2>

        <p className="mt-3 text-gray-500">
          Нам доверяют водители
        </p>
      </div>

      <div className="relative overflow-hidden">
        <div className="flex w-max gap-6 animate-reviews">
          {[...reviews, ...reviews].map((review, index) => (
            <div
              key={index}
              className="w-[350px] shrink-0 rounded-3xl border border-gray-200 bg-white p-7 shadow-sm"
            >
              <div className="text-xl tracking-widest text-yellow-500">
                {review.rating}
              </div>

              <p className="mt-5 min-h-[80px] text-gray-600">
                "{review.text}"
              </p>

              <div className="mt-6 font-semibold">
                {review.name}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes reviews {
          from {
            transform: translateX(0);
          }

          to {
            transform: translateX(calc(-50% - 12px));
          }
        }

        .animate-reviews {
          animation: reviews 30s linear infinite;
        }

        .animate-reviews:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}