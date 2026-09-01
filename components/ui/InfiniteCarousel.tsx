"use client";

const images = [
  "/images/ph1.webp",
  "/images/ph2.webp",
  "/images/ph3.webp",
  "/images/ph4.webp",
  "/images/ph5.webp",
  "/images/ph6.webp",
  "/images/ph7.webp",
  "/images/ph8.webp",
];

export default function InfiniteCarousel() {
  return (
    <>
      <style jsx>{`
        @keyframes infinite-scroll {
          from {
            transform: translateX(0);
          }

          to {
            transform: translateX(calc(-50% - 12px));
          }
        }

        .carousel-track {
          animation: infinite-scroll 25s linear infinite;
        }

        .carousel-track:hover {
          animation-play-state: paused;
        }
      `}</style>

      <section className="w-full overflow-hidden py-10">
        <div className="carousel-track flex w-max gap-6">
          {[...images, ...images].map((image, index) => (
            <div
              key={index}
              className="h-64 w-80 shrink-0 overflow-hidden rounded-2xl"
            >
              <img
                src={image}
                alt={`Эвакуатор ${index + 1}`}
                className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </section>
    </>
  );
}