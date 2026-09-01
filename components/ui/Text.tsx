


export default function Text() {
  return (
    <section className="flex min-h-screen items-center px-10">
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-12 px-6 md:grid-cols-2">

        {/* СЛЕВА */}
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-white md:text-6xl lg:text-7xl">
            Вызов эвакуатора
            <br />
            в
            <span className="text-yellow-500"> Троицком</span>
          </h1>
        </div>

        {/* СПРАВА */}
        <div>
          <p className="max-w-xl text-md leading-relaxed text-white/80">
            Эвакуатор в Троицком, Любашевке и Кривом Озере.
            Быстрая подача и помощь на дороге 24/7.Надежная эвакуация в Троицком и по всей Одесской области. Вызовите эвакуатор прямо сейчас — подача от 20 минут.
          </p>
        </div>

      </div>
    </section>
  );
}