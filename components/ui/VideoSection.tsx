export default function VideoSection() {
  return (
   <section className="px-6 py-20">
    <div className="mx-auto max-w-xl space-y-8">
      <video
        className="w-full max-w-[500px] mx-auto rounded-2xl"
        src="/videos/evacuator-1.MOV"
        autoPlay
        muted
        loop
        playsInline
      />
    </div>
  </section>
  );
}