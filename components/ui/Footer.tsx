
export default function Footer() {
  return (
    <footer className="bg-black px-6 py-16 text-white">
    <div className="h-px w-full bg-yellow-500 mt-6 mb-6" />
      <div className="mx-auto max-w-7xl">

        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">

          {/* Brand */}
          <div>
            <h2 className="text-2xl font-bold">
              ТРОИЦКОЕ
              <span className="text-yellow-500"> ЭВАКУАТОР</span>
            </h2>

            <p className="mt-5 max-w-sm text-sm leading-6 text-yellow-500">
              Эвакуация автомобилей 24/7.
              Быстрая помощь на дороге в Троицком,
              Любашевке, Кривом Озере и ближайших районах.
            </p>
          </div>


          {/* Services */}
          <div>
            <h3 className="mb-5 text-sm font-semibold uppercase tracking-wider">
              Услуги
            </h3>

            <ul className="space-y-3 text-sm text-yellow-500">
              <li>Эвакуация авто</li>
              <li>Помощь при ДТП</li>
              <li>Перевозка автомобилей</li>
              <li>Помощь на дороге</li>
              <li>Эвакуация 24/7</li>
            </ul>
          </div>

          {/* Contacts */}
          <div>
            <h3 className="mb-5 text-sm font-semibold uppercase tracking-wider">
              Контакты
            </h3>

            <div className="space-y-4 text-sm">

              <a
                href="tel:+380668029054"
                className="block text-xl font-semibold transition hover:text-white/70"
              >
                +38 066 802 90 54
              </a>

              <p className="text-yellow-500">
                Троицкое, Одесская область
              </p>

              <p className="text-yellow-500">
                Работаем круглосуточно
              </p>

            </div>
          </div>

        </div>

      </div>
    </footer>
  );
}

