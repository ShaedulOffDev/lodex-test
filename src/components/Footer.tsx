const Footer = () => {
  return (
    <div>
      <div className="contact">
        <div className="container max-md:px-5 items-center grid max-lg:grid-cols-1 grid-cols-2 gap-3 text-white py-14">
          <div className="max-lg:mb-5">
            <h2 className="text-3xl max-md:text-2xl font-[900] mb-4">
              <i className="fa fa-envelope me-3"></i>
              <span>Подпишитесь на рассылку</span>
            </h2>
            <p className="text-xl max-md:text-lg max-w-[600px]">
              Мы будем сообщать вам только о крутых акциях и присылать полезные
              статьи
            </p>
          </div>
          <form>
            <span className="relative">
              <input
                className="border-b text-lg text-gray-100 py-2 px-1 outline-none ps-9 placeholder:text-gray-200 bg-transparent mb-8 w-full max-w-[400px]"
                type="email"
                name="email"
                placeholder="Ваш емаил"
              />
              <i className="absolute text-xl -translate-y-1/2 start-2 fa fa-envelope top-1/2"></i>
            </span>
            <button className="flex">
              <span className="bg-[#C3F8D7] transition-all text-lg hover:bg-white py-2 px-3 uppercase text-secondary">
                подписаться
              </span>
              <span className="text-primary bg-white py-2 px-4 text-lg">
                <i className="fa fa-chevron-right"></i>
              </span>
            </button>
          </form>
        </div>
      </div>
      <div className="bg-[#F7F8F7]">
        <div className="grid py-8 grid-cols-5 max-lg:grid-cols-3 max-md:grid-cols-2 max-[425px]:grid-cols-1 container">
          <div className="mb-5">
            <h3 className="text-xl uppercase font-bold mb-5">одежда</h3>
            <ul>
              <li>
                <a
                  className="hover:text-secondary transition-all text-gray-500 text-base max-lg:text-sm mb-2 block"
                  href="#"
                >
                  Детские брюки
                </a>
              </li>
              <li>
                <a
                  className="hover:text-secondary transition-all text-gray-500 text-base max-lg:text-sm mb-2 block"
                  href="#"
                >
                  Детские комбинезоны
                </a>
              </li>
              <li>
                <a
                  className="hover:text-secondary transition-all text-gray-500 text-base max-lg:text-sm mb-2 block"
                  href="#"
                >
                  Детские комплекты
                </a>
              </li>
              <li>
                <a
                  className="hover:text-secondary transition-all text-gray-500 text-base max-lg:text-sm mb-2 block"
                  href="#"
                >
                  Детские конверты
                </a>
              </li>
              <li>
                <a
                  className="hover:text-secondary transition-all text-gray-500 text-base max-lg:text-sm mb-2 block"
                  href="#"
                >
                  Детские купальники, плавки
                </a>
              </li>
              <li>
                <a
                  className="hover:text-secondary transition-all text-gray-500 text-base max-lg:text-sm mb-2 block"
                  href="#"
                >
                  Детские куртки
                </a>
              </li>
              <li>
                <a
                  className="hover:text-secondary transition-all text-gray-500 text-base max-lg:text-sm mb-2 block"
                  href="#"
                >
                  Мамам и папам
                </a>
              </li>
              <li>
                <a
                  className="hover:text-secondary transition-all text-gray-500 text-base max-lg:text-sm mb-2 block"
                  href="#"
                >
                  Детские дождевики
                </a>
              </li>
              <li>
                <a
                  className="hover:text-secondary transition-all text-gray-500 text-base max-lg:text-sm mb-2 block"
                  href="#"
                >
                  Детские пальто
                </a>
              </li>
              <li>
                <a
                  className="hover:text-secondary transition-all text-gray-500 text-base max-lg:text-sm mb-2 block"
                  href="#"
                >
                  Детские платья, юбки
                </a>
              </li>
              <li>
                <a
                  className="hover:text-secondary transition-all text-gray-500 text-base max-lg:text-sm mb-2 block"
                  href="#"
                >
                  Детские полукомбинезоны
                </a>
              </li>
              <li>
                <a
                  className="hover:text-secondary transition-all text-gray-500 text-base max-lg:text-sm mb-2 block"
                  href="#"
                >
                  Детский софтшелл
                </a>
              </li>
              <li>
                <a
                  className="hover:text-secondary transition-all text-gray-500 text-base max-lg:text-sm mb-2 block"
                  href="#"
                >
                  Детский флис
                </a>
              </li>
              <li>
                <a
                  className="hover:text-secondary transition-all text-gray-500 text-base max-lg:text-sm mb-2 block"
                  href="#"
                >
                  Детские футболки, толстовки
                </a>
              </li>
              <li>
                <a
                  className="hover:text-secondary transition-all text-gray-500 text-base max-lg:text-sm mb-2 block"
                  href="#"
                >
                  Школьная форма
                </a>
              </li>
              <li>
                <a
                  className="hover:text-secondary transition-all text-gray-500 text-base max-lg:text-sm mb-2 block"
                  href="#"
                >
                  Детские шорты, брюки
                </a>
              </li>
            </ul>
          </div>
          <div className="mb-5">
            <h3 className="text-xl uppercase font-bold mb-5">обувь</h3>
            <ul>
              <li>
                <a
                  className="hover:text-secondary transition-all text-gray-500 text-base max-lg:text-sm mb-2 block"
                  href="#"
                >
                  Детские ботинки
                </a>
              </li>
              <li>
                <a
                  className="hover:text-secondary transition-all text-gray-500 text-base max-lg:text-sm mb-2 block"
                  href="#"
                >
                  Детские кеды
                </a>
              </li>
              <li>
                <a
                  className="hover:text-secondary transition-all text-gray-500 text-base max-lg:text-sm mb-2 block"
                  href="#"
                >
                  Детские кроссовки
                </a>
              </li>
              <li>
                <a
                  className="hover:text-secondary transition-all text-gray-500 text-base max-lg:text-sm mb-2 block"
                  href="#"
                >
                  Детские мокасины
                </a>
              </li>
              <li>
                <a
                  className="hover:text-secondary transition-all text-gray-500 text-base max-lg:text-sm mb-2 block"
                  href="#"
                >
                  Обувь для взрослых
                </a>
              </li>
              <li>
                <a
                  className="hover:text-secondary transition-all text-gray-500 text-base max-lg:text-sm mb-2 block"
                  href="#"
                >
                  Детские резиновые сапоги
                </a>
              </li>
              <li>
                <a
                  className="hover:text-secondary transition-all text-gray-500 text-base max-lg:text-sm mb-2 block"
                  href="#"
                >
                  Детские сабо
                </a>
              </li>
              <li>
                <a
                  className="hover:text-secondary transition-all text-gray-500 text-base max-lg:text-sm mb-2 block"
                  href="#"
                >
                  Детские сандалии
                </a>
              </li>
              <li>
                <a
                  className="hover:text-secondary transition-all text-gray-500 text-base max-lg:text-sm mb-2 block"
                  href="#"
                >
                  Детские сапоги
                </a>
              </li>
              <li>
                <a
                  className="hover:text-secondary transition-all text-gray-500 text-base max-lg:text-sm mb-2 block"
                  href="#"
                >
                  Детские сноубутсы
                </a>
              </li>
              <li>
                <a
                  className="hover:text-secondary transition-all text-gray-500 text-base max-lg:text-sm mb-2 block"
                  href="#"
                >
                  Детские тапочки
                </a>
              </li>
              <li>
                <a
                  className="hover:text-secondary transition-all text-gray-500 text-base max-lg:text-sm mb-2 block"
                  href="#"
                >
                  Детские туфли
                </a>
              </li>
              <li>
                <a
                  className="hover:text-secondary transition-all text-gray-500 text-base max-lg:text-sm mb-2 block"
                  href="#"
                >
                  Школьная обувь
                </a>
              </li>
              <li>
                <a
                  className="hover:text-secondary transition-all text-gray-500 text-base max-lg:text-sm mb-2 block"
                  href="#"
                >
                  Детские шлепанцы
                </a>
              </li>
            </ul>
          </div>
          <div className="mb-5">
            <h3 className="text-xl uppercase font-bold mb-5">аксессуары</h3>
            <ul>
              <li>
                <a
                  className="hover:text-secondary transition-all text-gray-500 text-base max-lg:text-sm mb-2 block"
                  href="#"
                >
                  Детские зонты
                </a>
              </li>
              <li>
                <a
                  className="hover:text-secondary transition-all text-gray-500 text-base max-lg:text-sm mb-2 block"
                  href="#"
                >
                  Детские игрушки
                </a>
              </li>
              <li>
                <a
                  className="hover:text-secondary transition-all text-gray-500 text-base max-lg:text-sm mb-2 block"
                  href="#"
                >
                  Маски и антисептики
                </a>
              </li>
              <li>
                <a
                  className="hover:text-secondary transition-all text-gray-500 text-base max-lg:text-sm mb-2 block"
                  href="#"
                >
                  Детское нижнее белье
                </a>
              </li>
              <li>
                <a
                  className="hover:text-secondary transition-all text-gray-500 text-base max-lg:text-sm mb-2 block"
                  href="#"
                >
                  Детские очки
                </a>
              </li>
              <li>
                <a
                  className="hover:text-secondary transition-all text-gray-500 text-base max-lg:text-sm mb-2 block"
                  href="#"
                >
                  Детские панамы, кепки
                </a>
              </li>
              <li>
                <a
                  className="hover:text-secondary transition-all text-gray-500 text-base max-lg:text-sm mb-2 block"
                  href="#"
                >
                  Детские пинетки
                </a>
              </li>
              <li>
                <a
                  className="hover:text-secondary transition-all text-gray-500 text-base max-lg:text-sm mb-2 block"
                  href="#"
                >
                  Подарки
                </a>
              </li>
              <li>
                <a
                  className="hover:text-secondary transition-all text-gray-500 text-base max-lg:text-sm mb-2 block"
                  href="#"
                >
                  Детские рукавицы
                </a>
              </li>
              <li>
                <a
                  className="hover:text-secondary transition-all text-gray-500 text-base max-lg:text-sm mb-2 block"
                  href="#"
                >
                  Детские рюкзаки и сумки
                </a>
              </li>
              <li>
                <a
                  className="hover:text-secondary transition-all text-gray-500 text-base max-lg:text-sm mb-2 block"
                  href="#"
                >
                  Детское термобелье
                </a>
              </li>
              <li>
                <a
                  className="hover:text-secondary transition-all text-gray-500 text-base max-lg:text-sm mb-2 block"
                  href="#"
                >
                  Детские шапки
                </a>
              </li>
              <li>
                <a
                  className="hover:text-secondary transition-all text-gray-500 text-base max-lg:text-sm mb-2 block"
                  href="#"
                >
                  Детские шарфы, манишки
                </a>
              </li>
            </ul>
          </div>
          <div className="mb-5">
            <h3 className="text-xl uppercase font-bold mb-5">помощь</h3>
            <ul>
              <li>
                <a
                  className="hover:text-secondary transition-all text-gray-500 text-base max-lg:text-sm mb-2 block"
                  href="#"
                >
                  Детские брюки
                </a>
              </li>
              <li>
                <a
                  className="hover:text-secondary transition-all text-gray-500 text-base max-lg:text-sm mb-2 block"
                  href="#"
                >
                  Детские комбинезоны
                </a>
              </li>
              <li>
                <a
                  className="hover:text-secondary transition-all text-gray-500 text-base max-lg:text-sm mb-2 block"
                  href="#"
                >
                  Детские комплекты
                </a>
              </li>
              <li>
                <a
                  className="hover:text-secondary transition-all text-gray-500 text-base max-lg:text-sm mb-2 block"
                  href="#"
                >
                  Детские конверты
                </a>
              </li>
              <li>
                <a
                  className="hover:text-secondary transition-all text-gray-500 text-base max-lg:text-sm mb-2 block"
                  href="#"
                >
                  Детские купальники, плавки
                </a>
              </li>
              <li>
                <a
                  className="hover:text-secondary transition-all text-gray-500 text-base max-lg:text-sm mb-2 block"
                  href="#"
                >
                  Детские куртки
                </a>
              </li>
              <li>
                <a
                  className="hover:text-secondary transition-all text-gray-500 text-base max-lg:text-sm mb-2 block"
                  href="#"
                >
                  Мамам и папам
                </a>
              </li>
              <li>
                <a
                  className="hover:text-secondary transition-all text-gray-500 text-base max-lg:text-sm mb-2 block"
                  href="#"
                >
                  Детские дождевики
                </a>
              </li>
              <li>
                <a
                  className="hover:text-secondary transition-all text-gray-500 text-base max-lg:text-sm mb-2 block"
                  href="#"
                >
                  Детские пальто
                </a>
              </li>
              <li>
                <a
                  className="hover:text-secondary transition-all text-gray-500 text-base max-lg:text-sm mb-2 block"
                  href="#"
                >
                  Детские платья, юбки
                </a>
              </li>
              <li>
                <a
                  className="hover:text-secondary transition-all text-gray-500 text-base max-lg:text-sm mb-2 block"
                  href="#"
                >
                  Детские полукомбинезоны
                </a>
              </li>
              <li>
                <a
                  className="hover:text-secondary transition-all text-gray-500 text-base max-lg:text-sm mb-2 block"
                  href="#"
                >
                  Детский софтшелл
                </a>
              </li>
            </ul>
          </div>
          <div className="mb-5">
            <h3 className="text-xl uppercase font-bold mb-5">Контакты</h3>
            <div>
              <div className="mb-3">
                <a
                  href="tel: +74957887750"
                  className="flex gap-2 items-center font-bold text-lg"
                >
                  <i className="fa fa-mobile-screen"></i>
                  <span>+7 (495) 788-77-50</span>
                </a>
                <a
                  href="https://wa.com/74957887750"
                  className="text-sm text-gray-400 flex items-center"
                >
                  <span>или напишите нам</span>
                  <i className="fab fa-whatsapp text-primary ms-1 text-xl"></i>
                </a>
              </div>
              <div className="mb-3">
                <p className="mb-3">
                  <i className="fa me-1 fa-location-dot"></i>
                  <span>Москва, ул.Малая Филевская, д. 8, корп. 1</span>
                </p>
                <p className="mb-3">
                  <i className="fa me-1 fa-m"></i>
                  <span>Филевский парк</span>
                </p>
                <p className="text-gray-400 mb-3">Ежедневно c 10 до 20</p>
              </div>
              <ul className="flex justify-between text-3xl mb-10 mt-7 max-md:px-3">
                <li>
                  <a href="#">
                    <i className="fab fa-instagram"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-youtube"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-vk"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-telegram"></i>
                  </a>
                </li>
              </ul>
              <div>
                <div className="mb-5">
                  <div className="bg-white inline-flex rounded px-6 py-2 items-center mb-1">
                    <i className="fab fa-yandex text-red-500 text-2xl"></i>
                    <i className="fa fa-star-half text-yellow-400 text-2xl ms-1"></i>
                    <span className="font-[900] text-2xl">4,8</span>
                    <span className="text-gray-300">/5</span>
                  </div>
                  <span className="block text-gray-400 text-sm">
                    Рейтинг в Яндекс
                  </span>
                </div>
                <div>
                  <div className="bg-white inline-flex rounded px-6 py-2 items-center mb-1">
                    <i className="fab fa-google text-blue-500 text-2xl"></i>
                    <i className="fa fa-star-half text-yellow-400 text-2xl ms-1"></i>
                    <span className="font-[900] text-2xl">4,8</span>
                    <span className="text-gray-300">/5</span>
                  </div>
                  <span className="block text-gray-400 text-sm">
                    Рейтинг в Google
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
