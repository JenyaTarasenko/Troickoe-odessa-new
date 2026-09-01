"use client";
import { ParallaxHeroImages } from "@/components/ui/parallax-hero-images";

export default function ParallaxHeroImagesDemo() {
  return (
    <div className="relative flex min-h-screen w-full items-center justify-center overflow-hidden mb-20">
      <ParallaxHeroImages images={images} />
      <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center gap-4 px-4 text-center">
        <h1 className="text-4xl font-bold tracking-tight text-white md:text-6xl font-inter uppercase">
          Вызов эвакуатора в Троицком
        </h1>
        <p className="max-w-md text-yellow-500 md:text-2xl font-inter uppercase">
          Эвакуатор Троицкое, Любашевка, Кривое Озеро
        </p>
      </div>
    </div>
  );
}

const images = [
  "/images/slaid1.webp",
  "/images/slaid2.webp",
  "/images/slaid3.webp",
  "/images/slaid4.webp",
  "/images/slaid5.webp",
  "/images/slaid6.webp",
];
