import { Heart, Logo, MagnifyingGlass, ShoppingBag } from "../assets";

const Navbar = () => {
  return (
    <div className="relative">
      <div className="w-full py-2 bg-pink text-center">
        <div className="container relative">
          <p className="text-sm">
            🍁 Осенние и зимние новинки одежды и обуви, которые мы уже получили.
            Смотрите
          </p>
          <button className="absolute -translate-y-1/2 end-2 text-xl top-1/2">
            <i className="fa fa-close"></i>
          </button>
        </div>
      </div>
      <div className="w-full py-2 bg-[#F7F8F7] text-sm">
        <div className="container flex justify-between items-center">
          <div>
            <i className="fa-solid me-1 fa-location-dot"></i>
            <span>Шоурум: Москва, ул. Малая Филевская, д. 8, корп. 1</span>
            <span className="text-[#99969A] inline-block ms-2">
              Ежедневно c 10 до 20
            </span>
          </div>
          <a href="#">
            <i className="fa-regular me-1 fa-user"></i>
            Личный кабинет
          </a>
        </div>
      </div>
      <div className="w-full container border-b-2 flex justify-between items-center">
        <div>
          <a className="block text-lg font-semibold" href="tel: +7(495)7887750">
            +7 (495) 788-77-50
          </a>
          <a className="text-sm text-gray-400" href="https://wa.me/74957887750">
            или напишите нам <i className="fab text-green-500 fa-whatsapp"></i>
          </a>
        </div>
        <a className="relative bottom-3" href="/">
          <img src={Logo} className="max-w-[284px] w-full" alt="logo" />
        </a>
        <div className="flex items-center gap-6">
          <button>
            <img src={MagnifyingGlass} alt="magnifying-glass icon" />
          </button>
          <button className="relative">
            <img src={Heart} alt="heart icon" />
            <span className="absolute top-0 end-0 flex text-[10px] font-semibold translate-x-1/2 -translate-y-1/2 justify-center items-center bg-pink rounded-full w-[20px] h-[20px]">
              12
            </span>
          </button>
          <button className="relative">
            <img src={ShoppingBag} alt="icon shopping bag" />
            <span className="absolute top-0 end-0 flex text-[10px] font-semibold translate-x-1/2 -translate-y-1/2 justify-center items-center bg-pink rounded-full w-[20px] h-[20px]">
              3
            </span>
          </button>
        </div>
      </div>
      <ul className="container text-md font-bold flex justify-center">
        <li className="py-3 dropdown-link px-5">
          <a href="#">
            Мальчики <i className="fa fa-caret-down"></i>
          </a>
          <div className="w-full hidden bg-white absolute top-full start-0 dropdown-link__menu">
            <div className="container flex justify-between gap-2 font-normal border-t-2 py-3">
              <div>
                <h3 className="mb-3">ОДЕЖДА</h3>
                <ul>
                  <li className="text-sm mb-2">
                    <a href="#">Брюки</a>
                  </li>
                  <li className="text-sm mb-2">
                    <a href="#">Комбинезоны</a>
                  </li>
                  <li className="text-sm mb-2">
                    <a href="#">Комплекты</a>
                  </li>
                  <li className="text-sm mb-2">
                    <a href="#">Конверты</a>
                  </li>
                  <li className="text-sm mb-2">
                    <a href="#">Купальники, плавки</a>
                  </li>
                  <li className="text-sm mb-2">
                    <a href="#">Куртки</a>
                  </li>
                  <li className="text-sm mb-2">
                    <a href="#">Мамам и папам</a>
                  </li>
                  <li className="text-sm mb-2">
                    <a href="#">Одежда для дождя</a>
                  </li>
                  <li className="text-sm mb-2">
                    <a href="#">Пальто</a>
                  </li>
                  <li className="text-sm mb-2">
                    <a href="#">Полукомбинезоны</a>
                  </li>
                  <li className="text-sm mb-2">
                    <a href="#">Софтшелл</a>
                  </li>
                  <li className="text-sm mb-2">
                    <a href="#">Флис</a>
                  </li>
                  <li className="text-sm mb-2">
                    <a href="#">Футболки, толстовки</a>
                  </li>
                  <li className="text-sm mb-2">
                    <a href="#">Школьная форма</a>
                  </li>
                  <li className="text-sm mb-2">
                    <a href="#">Шорты, брюки</a>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="mb-3">ОБУВЬ</h3>
                <ul>
                  <li className="text-sm mb-2">
                    <a href="#">Ботинки</a>
                  </li>
                  <li className="text-sm mb-2">
                    <a href="#">Кеды</a>
                  </li>
                  <li className="text-sm mb-2">
                    <a href="#">Кроссовки</a>
                  </li>
                  <li className="text-sm mb-2">
                    <a href="#">Мокасины</a>
                  </li>
                  <li className="text-sm mb-2">
                    <a href="#">Обусь для взрослых</a>
                  </li>
                  <li className="text-sm mb-2">
                    <a href="#">Резиновые сапоги</a>
                  </li>
                  <li className="text-sm mb-2">
                    <a href="#">Сабо</a>
                  </li>
                  <li className="text-sm mb-2">
                    <a href="#">Сандалии</a>
                  </li>
                  <li className="text-sm mb-2">
                    <a href="#">Сапого</a>
                  </li>
                  <li className="text-sm mb-2">
                    <a href="#">Сноубутсы</a>
                  </li>
                  <li className="text-sm mb-2">
                    <a href="#">Тапочки</a>
                  </li>
                  <li className="text-sm mb-2">
                    <a href="#">Школьная обувь</a>
                  </li>
                  <li className="text-sm mb-2">
                    <a href="#">Штепанцы</a>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="mb-3">АКССЕСУАРЫ</h3>
                <ul>
                  <li className="text-sm mb-2">
                    <a href="#">Зонты</a>
                  </li>
                  <li className="text-sm mb-2">
                    <a href="#">Игрушки</a>
                  </li>
                  <li className="text-sm mb-2">
                    <a href="#">Маски и антисептики</a>
                  </li>
                  <li className="text-sm mb-2">
                    <a href="#">Нижнее белье</a>
                  </li>
                  <li className="text-sm mb-2">
                    <a href="#">Очки</a>
                  </li>
                  <li className="text-sm mb-2">
                    <a href="#">Панамы, кепки</a>
                  </li>
                  <li className="text-sm mb-2">
                    <a href="#">Пинетки</a>
                  </li>
                  <li className="text-sm mb-2">
                    <a href="#">Подарки</a>
                  </li>
                  <li className="text-sm mb-2">
                    <a href="#">Рукавицы</a>
                  </li>
                  <li className="text-sm mb-2">
                    <a href="#">Рюкзаки и сумки</a>
                  </li>
                  <li className="text-sm mb-2">
                    <a href="#">Термобелье</a>
                  </li>
                  <li className="text-sm mb-2">
                    <a href="#">Шапки</a>
                  </li>
                  <li className="text-sm mb-2">
                    <a href="#">Шарфы, манишки</a>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="mb-3">АКТУАЛЬНОЕ</h3>
                <ul>
                  <li className="text-sm mb-2">
                    <a href="#">Зонты</a>
                  </li>
                  <li className="text-sm mb-2">
                    <a href="#">Игрушки</a>
                  </li>
                  <li className="text-sm mb-2">
                    <a href="#">Маски и антисептики</a>
                  </li>
                  <li className="text-sm mb-2">
                    <a href="#">Нижнее белье</a>
                  </li>
                  <li className="text-sm mb-2">
                    <a href="#">Очки</a>
                  </li>
                  <li className="text-sm mb-2">
                    <a href="#">Панамы, кепки</a>
                  </li>
                  <li className="text-sm mb-2">
                    <a href="#">Пинетки</a>
                  </li>
                  <li className="text-sm mb-2">
                    <a href="#">Подарки</a>
                  </li>
                  <li className="text-sm mb-2">
                    <a href="#">Рукавицы</a>
                  </li>
                  <li className="text-sm mb-2">
                    <a href="#">Рюкзаки и сумки</a>
                  </li>
                  <li className="text-sm mb-2">
                    <a href="#">Термобелье</a>
                  </li>
                  <li className="text-sm mb-2">
                    <a href="#">Шапки</a>
                  </li>
                  <li className="text-sm mb-2">
                    <a href="#">Шарфы, манишки</a>
                  </li>
                </ul>
              </div>
              <div>
                <img
                  className="max-w-[400px] mb-4"
                  src="https://picsum.photos/400/300?random=1"
                  alt="photo"
                />
                <a href="/">
                  <span className="text-sm font-bold">Наш выбор</span>
                  <h3 className="text-lg">
                    Одежда и обувь для зимних видов спорта
                  </h3>
                  <i className="fa text-xl fa-arrow-right-long mt-3 text-primary"></i>
                </a>
              </div>
            </div>
          </div>
        </li>
        <li className="py-3 dropdown-link px-5">
          <a href="#">
            Девочки <i className="fa fa-caret-down"></i>
          </a>
          <div className="w-full hidden bg-white absolute top-full start-0 dropdown-link__menu">
            <div className="container flex justify-between gap-2 font-normal border-t-2 py-3">
              <div>
                <h3 className="mb-3">Девочки</h3>
                <ul>
                  <li className="text-sm mb-2">
                    <a href="#">Брюки</a>
                  </li>
                  <li className="text-sm mb-2">
                    <a href="#">Комбинезоны</a>
                  </li>
                  <li className="text-sm mb-2">
                    <a href="#">Комплекты</a>
                  </li>
                  <li className="text-sm mb-2">
                    <a href="#">Конверты</a>
                  </li>
                  <li className="text-sm mb-2">
                    <a href="#">Купальники, плавки</a>
                  </li>
                  <li className="text-sm mb-2">
                    <a href="#">Куртки</a>
                  </li>
                  <li className="text-sm mb-2">
                    <a href="#">Мамам и папам</a>
                  </li>
                  <li className="text-sm mb-2">
                    <a href="#">Одежда для дождя</a>
                  </li>
                  <li className="text-sm mb-2">
                    <a href="#">Пальто</a>
                  </li>
                  <li className="text-sm mb-2">
                    <a href="#">Полукомбинезоны</a>
                  </li>
                  <li className="text-sm mb-2">
                    <a href="#">Софтшелл</a>
                  </li>
                  <li className="text-sm mb-2">
                    <a href="#">Флис</a>
                  </li>
                  <li className="text-sm mb-2">
                    <a href="#">Футболки, толстовки</a>
                  </li>
                  <li className="text-sm mb-2">
                    <a href="#">Школьная форма</a>
                  </li>
                  <li className="text-sm mb-2">
                    <a href="#">Шорты, брюки</a>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="mb-3">ОБУВЬ</h3>
                <ul>
                  <li className="text-sm mb-2">
                    <a href="#">Ботинки</a>
                  </li>
                  <li className="text-sm mb-2">
                    <a href="#">Кеды</a>
                  </li>
                  <li className="text-sm mb-2">
                    <a href="#">Кроссовки</a>
                  </li>
                  <li className="text-sm mb-2">
                    <a href="#">Мокасины</a>
                  </li>
                  <li className="text-sm mb-2">
                    <a href="#">Обусь для взрослых</a>
                  </li>
                  <li className="text-sm mb-2">
                    <a href="#">Резиновые сапоги</a>
                  </li>
                  <li className="text-sm mb-2">
                    <a href="#">Сабо</a>
                  </li>
                  <li className="text-sm mb-2">
                    <a href="#">Сандалии</a>
                  </li>
                  <li className="text-sm mb-2">
                    <a href="#">Сапого</a>
                  </li>
                  <li className="text-sm mb-2">
                    <a href="#">Сноубутсы</a>
                  </li>
                  <li className="text-sm mb-2">
                    <a href="#">Тапочки</a>
                  </li>
                  <li className="text-sm mb-2">
                    <a href="#">Школьная обувь</a>
                  </li>
                  <li className="text-sm mb-2">
                    <a href="#">Штепанцы</a>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="mb-3">АКССЕСУАРЫ</h3>
                <ul>
                  <li className="text-sm mb-2">
                    <a href="#">Зонты</a>
                  </li>
                  <li className="text-sm mb-2">
                    <a href="#">Игрушки</a>
                  </li>
                  <li className="text-sm mb-2">
                    <a href="#">Маски и антисептики</a>
                  </li>
                  <li className="text-sm mb-2">
                    <a href="#">Нижнее белье</a>
                  </li>
                  <li className="text-sm mb-2">
                    <a href="#">Очки</a>
                  </li>
                  <li className="text-sm mb-2">
                    <a href="#">Панамы, кепки</a>
                  </li>
                  <li className="text-sm mb-2">
                    <a href="#">Пинетки</a>
                  </li>
                  <li className="text-sm mb-2">
                    <a href="#">Подарки</a>
                  </li>
                  <li className="text-sm mb-2">
                    <a href="#">Рукавицы</a>
                  </li>
                  <li className="text-sm mb-2">
                    <a href="#">Рюкзаки и сумки</a>
                  </li>
                  <li className="text-sm mb-2">
                    <a href="#">Термобелье</a>
                  </li>
                  <li className="text-sm mb-2">
                    <a href="#">Шапки</a>
                  </li>
                  <li className="text-sm mb-2">
                    <a href="#">Шарфы, манишки</a>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="mb-3">АКТУАЛЬНОЕ</h3>
                <ul>
                  <li className="text-sm mb-2">
                    <a href="#">Зонты</a>
                  </li>
                  <li className="text-sm mb-2">
                    <a href="#">Игрушки</a>
                  </li>
                  <li className="text-sm mb-2">
                    <a href="#">Маски и антисептики</a>
                  </li>
                  <li className="text-sm mb-2">
                    <a href="#">Нижнее белье</a>
                  </li>
                  <li className="text-sm mb-2">
                    <a href="#">Очки</a>
                  </li>
                  <li className="text-sm mb-2">
                    <a href="#">Панамы, кепки</a>
                  </li>
                  <li className="text-sm mb-2">
                    <a href="#">Пинетки</a>
                  </li>
                  <li className="text-sm mb-2">
                    <a href="#">Подарки</a>
                  </li>
                  <li className="text-sm mb-2">
                    <a href="#">Рукавицы</a>
                  </li>
                  <li className="text-sm mb-2">
                    <a href="#">Рюкзаки и сумки</a>
                  </li>
                  <li className="text-sm mb-2">
                    <a href="#">Термобелье</a>
                  </li>
                  <li className="text-sm mb-2">
                    <a href="#">Шапки</a>
                  </li>
                  <li className="text-sm mb-2">
                    <a href="#">Шарфы, манишки</a>
                  </li>
                </ul>
              </div>
              <div>
                <img
                  className="max-w-[400px] mb-4"
                  src="https://picsum.photos/400/300?random=2"
                  alt="photo"
                />
                <a href="/">
                  <span className="text-sm font-bold">Наш выбор</span>
                  <h3 className="text-lg">
                    Одежда и обувь для зимних видов спорта
                  </h3>
                  <i className="fa text-xl fa-arrow-right-long mt-3 text-primary"></i>
                </a>
              </div>
            </div>
          </div>
        </li>
        <li className="py-3 dropdown-link px-5">
          <a href="#">
            Сезоны <i className="fa fa-caret-down"></i>
          </a>
          <div className="w-full hidden bg-white absolute top-full start-0 dropdown-link__menu">
            <div className="container flex justify-between gap-2 font-normal border-t-2 py-3">
              <div>
                <h3 className="mb-3">Сезоны</h3>
                <ul>
                  <li className="text-sm mb-2">
                    <a href="#">Брюки</a>
                  </li>
                  <li className="text-sm mb-2">
                    <a href="#">Комбинезоны</a>
                  </li>
                  <li className="text-sm mb-2">
                    <a href="#">Комплекты</a>
                  </li>
                  <li className="text-sm mb-2">
                    <a href="#">Конверты</a>
                  </li>
                  <li className="text-sm mb-2">
                    <a href="#">Купальники, плавки</a>
                  </li>
                  <li className="text-sm mb-2">
                    <a href="#">Куртки</a>
                  </li>
                  <li className="text-sm mb-2">
                    <a href="#">Мамам и папам</a>
                  </li>
                  <li className="text-sm mb-2">
                    <a href="#">Одежда для дождя</a>
                  </li>
                  <li className="text-sm mb-2">
                    <a href="#">Пальто</a>
                  </li>
                  <li className="text-sm mb-2">
                    <a href="#">Полукомбинезоны</a>
                  </li>
                  <li className="text-sm mb-2">
                    <a href="#">Софтшелл</a>
                  </li>
                  <li className="text-sm mb-2">
                    <a href="#">Флис</a>
                  </li>
                  <li className="text-sm mb-2">
                    <a href="#">Футболки, толстовки</a>
                  </li>
                  <li className="text-sm mb-2">
                    <a href="#">Школьная форма</a>
                  </li>
                  <li className="text-sm mb-2">
                    <a href="#">Шорты, брюки</a>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="mb-3">ОБУВЬ</h3>
                <ul>
                  <li className="text-sm mb-2">
                    <a href="#">Ботинки</a>
                  </li>
                  <li className="text-sm mb-2">
                    <a href="#">Кеды</a>
                  </li>
                  <li className="text-sm mb-2">
                    <a href="#">Кроссовки</a>
                  </li>
                  <li className="text-sm mb-2">
                    <a href="#">Мокасины</a>
                  </li>
                  <li className="text-sm mb-2">
                    <a href="#">Обусь для взрослых</a>
                  </li>
                  <li className="text-sm mb-2">
                    <a href="#">Резиновые сапоги</a>
                  </li>
                  <li className="text-sm mb-2">
                    <a href="#">Сабо</a>
                  </li>
                  <li className="text-sm mb-2">
                    <a href="#">Сандалии</a>
                  </li>
                  <li className="text-sm mb-2">
                    <a href="#">Сапого</a>
                  </li>
                  <li className="text-sm mb-2">
                    <a href="#">Сноубутсы</a>
                  </li>
                  <li className="text-sm mb-2">
                    <a href="#">Тапочки</a>
                  </li>
                  <li className="text-sm mb-2">
                    <a href="#">Школьная обувь</a>
                  </li>
                  <li className="text-sm mb-2">
                    <a href="#">Штепанцы</a>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="mb-3">АКССЕСУАРЫ</h3>
                <ul>
                  <li className="text-sm mb-2">
                    <a href="#">Зонты</a>
                  </li>
                  <li className="text-sm mb-2">
                    <a href="#">Игрушки</a>
                  </li>
                  <li className="text-sm mb-2">
                    <a href="#">Маски и антисептики</a>
                  </li>
                  <li className="text-sm mb-2">
                    <a href="#">Нижнее белье</a>
                  </li>
                  <li className="text-sm mb-2">
                    <a href="#">Очки</a>
                  </li>
                  <li className="text-sm mb-2">
                    <a href="#">Панамы, кепки</a>
                  </li>
                  <li className="text-sm mb-2">
                    <a href="#">Пинетки</a>
                  </li>
                  <li className="text-sm mb-2">
                    <a href="#">Подарки</a>
                  </li>
                  <li className="text-sm mb-2">
                    <a href="#">Рукавицы</a>
                  </li>
                  <li className="text-sm mb-2">
                    <a href="#">Рюкзаки и сумки</a>
                  </li>
                  <li className="text-sm mb-2">
                    <a href="#">Термобелье</a>
                  </li>
                  <li className="text-sm mb-2">
                    <a href="#">Шапки</a>
                  </li>
                  <li className="text-sm mb-2">
                    <a href="#">Шарфы, манишки</a>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="mb-3">АКТУАЛЬНОЕ</h3>
                <ul>
                  <li className="text-sm mb-2">
                    <a href="#">Зонты</a>
                  </li>
                  <li className="text-sm mb-2">
                    <a href="#">Игрушки</a>
                  </li>
                  <li className="text-sm mb-2">
                    <a href="#">Маски и антисептики</a>
                  </li>
                  <li className="text-sm mb-2">
                    <a href="#">Нижнее белье</a>
                  </li>
                  <li className="text-sm mb-2">
                    <a href="#">Очки</a>
                  </li>
                  <li className="text-sm mb-2">
                    <a href="#">Панамы, кепки</a>
                  </li>
                  <li className="text-sm mb-2">
                    <a href="#">Пинетки</a>
                  </li>
                  <li className="text-sm mb-2">
                    <a href="#">Подарки</a>
                  </li>
                  <li className="text-sm mb-2">
                    <a href="#">Рукавицы</a>
                  </li>
                  <li className="text-sm mb-2">
                    <a href="#">Рюкзаки и сумки</a>
                  </li>
                  <li className="text-sm mb-2">
                    <a href="#">Термобелье</a>
                  </li>
                  <li className="text-sm mb-2">
                    <a href="#">Шапки</a>
                  </li>
                  <li className="text-sm mb-2">
                    <a href="#">Шарфы, манишки</a>
                  </li>
                </ul>
              </div>
              <div>
                <img
                  className="max-w-[400px] mb-4"
                  src="https://picsum.photos/400/300?random=3"
                  alt="photo"
                />
                <a href="/">
                  <span className="text-sm font-bold">Наш выбор</span>
                  <h3 className="text-lg">
                    Одежда и обувь для зимних видов спорта
                  </h3>
                  <i className="fa text-xl fa-arrow-right-long mt-3 text-primary"></i>
                </a>
              </div>
            </div>
          </div>
        </li>
        <li className="py-3 dropdown-link px-5">
          <a href="#">
            Бренды <i className="fa fa-caret-down"></i>
          </a>
          <div className="w-full hidden bg-white absolute top-full start-0 dropdown-link__menu">
            <div className="container flex justify-between gap-2 font-normal border-t-2 py-3">
              <div>
                <h3 className="mb-3">Бренды</h3>
                <ul>
                  <li className="text-sm mb-2">
                    <a href="#">Брюки</a>
                  </li>
                  <li className="text-sm mb-2">
                    <a href="#">Комбинезоны</a>
                  </li>
                  <li className="text-sm mb-2">
                    <a href="#">Комплекты</a>
                  </li>
                  <li className="text-sm mb-2">
                    <a href="#">Конверты</a>
                  </li>
                  <li className="text-sm mb-2">
                    <a href="#">Купальники, плавки</a>
                  </li>
                  <li className="text-sm mb-2">
                    <a href="#">Куртки</a>
                  </li>
                  <li className="text-sm mb-2">
                    <a href="#">Мамам и папам</a>
                  </li>
                  <li className="text-sm mb-2">
                    <a href="#">Одежда для дождя</a>
                  </li>
                  <li className="text-sm mb-2">
                    <a href="#">Пальто</a>
                  </li>
                  <li className="text-sm mb-2">
                    <a href="#">Полукомбинезоны</a>
                  </li>
                  <li className="text-sm mb-2">
                    <a href="#">Софтшелл</a>
                  </li>
                  <li className="text-sm mb-2">
                    <a href="#">Флис</a>
                  </li>
                  <li className="text-sm mb-2">
                    <a href="#">Футболки, толстовки</a>
                  </li>
                  <li className="text-sm mb-2">
                    <a href="#">Школьная форма</a>
                  </li>
                  <li className="text-sm mb-2">
                    <a href="#">Шорты, брюки</a>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="mb-3">ОБУВЬ</h3>
                <ul>
                  <li className="text-sm mb-2">
                    <a href="#">Ботинки</a>
                  </li>
                  <li className="text-sm mb-2">
                    <a href="#">Кеды</a>
                  </li>
                  <li className="text-sm mb-2">
                    <a href="#">Кроссовки</a>
                  </li>
                  <li className="text-sm mb-2">
                    <a href="#">Мокасины</a>
                  </li>
                  <li className="text-sm mb-2">
                    <a href="#">Обусь для взрослых</a>
                  </li>
                  <li className="text-sm mb-2">
                    <a href="#">Резиновые сапоги</a>
                  </li>
                  <li className="text-sm mb-2">
                    <a href="#">Сабо</a>
                  </li>
                  <li className="text-sm mb-2">
                    <a href="#">Сандалии</a>
                  </li>
                  <li className="text-sm mb-2">
                    <a href="#">Сапого</a>
                  </li>
                  <li className="text-sm mb-2">
                    <a href="#">Сноубутсы</a>
                  </li>
                  <li className="text-sm mb-2">
                    <a href="#">Тапочки</a>
                  </li>
                  <li className="text-sm mb-2">
                    <a href="#">Школьная обувь</a>
                  </li>
                  <li className="text-sm mb-2">
                    <a href="#">Штепанцы</a>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="mb-3">АКССЕСУАРЫ</h3>
                <ul>
                  <li className="text-sm mb-2">
                    <a href="#">Зонты</a>
                  </li>
                  <li className="text-sm mb-2">
                    <a href="#">Игрушки</a>
                  </li>
                  <li className="text-sm mb-2">
                    <a href="#">Маски и антисептики</a>
                  </li>
                  <li className="text-sm mb-2">
                    <a href="#">Нижнее белье</a>
                  </li>
                  <li className="text-sm mb-2">
                    <a href="#">Очки</a>
                  </li>
                  <li className="text-sm mb-2">
                    <a href="#">Панамы, кепки</a>
                  </li>
                  <li className="text-sm mb-2">
                    <a href="#">Пинетки</a>
                  </li>
                  <li className="text-sm mb-2">
                    <a href="#">Подарки</a>
                  </li>
                  <li className="text-sm mb-2">
                    <a href="#">Рукавицы</a>
                  </li>
                  <li className="text-sm mb-2">
                    <a href="#">Рюкзаки и сумки</a>
                  </li>
                  <li className="text-sm mb-2">
                    <a href="#">Термобелье</a>
                  </li>
                  <li className="text-sm mb-2">
                    <a href="#">Шапки</a>
                  </li>
                  <li className="text-sm mb-2">
                    <a href="#">Шарфы, манишки</a>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="mb-3">АКТУАЛЬНОЕ</h3>
                <ul>
                  <li className="text-sm mb-2">
                    <a href="#">Зонты</a>
                  </li>
                  <li className="text-sm mb-2">
                    <a href="#">Игрушки</a>
                  </li>
                  <li className="text-sm mb-2">
                    <a href="#">Маски и антисептики</a>
                  </li>
                  <li className="text-sm mb-2">
                    <a href="#">Нижнее белье</a>
                  </li>
                  <li className="text-sm mb-2">
                    <a href="#">Очки</a>
                  </li>
                  <li className="text-sm mb-2">
                    <a href="#">Панамы, кепки</a>
                  </li>
                  <li className="text-sm mb-2">
                    <a href="#">Пинетки</a>
                  </li>
                  <li className="text-sm mb-2">
                    <a href="#">Подарки</a>
                  </li>
                  <li className="text-sm mb-2">
                    <a href="#">Рукавицы</a>
                  </li>
                  <li className="text-sm mb-2">
                    <a href="#">Рюкзаки и сумки</a>
                  </li>
                  <li className="text-sm mb-2">
                    <a href="#">Термобелье</a>
                  </li>
                  <li className="text-sm mb-2">
                    <a href="#">Шапки</a>
                  </li>
                  <li className="text-sm mb-2">
                    <a href="#">Шарфы, манишки</a>
                  </li>
                </ul>
              </div>
              <div>
                <img
                  className="max-w-[400px] mb-4"
                  src="https://picsum.photos/400/300?random=4"
                  alt="photo"
                />
                <a href="/">
                  <span className="text-sm font-bold">Наш выбор</span>
                  <h3 className="text-lg">
                    Одежда и обувь для зимних видов спорта
                  </h3>
                  <i className="fa text-xl fa-arrow-right-long mt-3 text-primary"></i>
                </a>
              </div>
            </div>
          </div>
        </li>
        <li className="py-3 px-5">
          <a href="#">Доставка</a>
        </li>
        <li className="py-3 dropdown-link px-5">
          <a href="#">
            Помощь <i className="fa fa-caret-down"></i>
          </a>
          <div className="w-full hidden bg-white absolute top-full start-0 dropdown-link__menu">
            <div className="container flex justify-between gap-2 font-normal border-t-2 py-3">
              <div>
                <h3 className="mb-3">Помощь</h3>
                <ul>
                  <li className="text-sm mb-2">
                    <a href="#">Брюки</a>
                  </li>
                  <li className="text-sm mb-2">
                    <a href="#">Комбинезоны</a>
                  </li>
                  <li className="text-sm mb-2">
                    <a href="#">Комплекты</a>
                  </li>
                  <li className="text-sm mb-2">
                    <a href="#">Конверты</a>
                  </li>
                  <li className="text-sm mb-2">
                    <a href="#">Купальники, плавки</a>
                  </li>
                  <li className="text-sm mb-2">
                    <a href="#">Куртки</a>
                  </li>
                  <li className="text-sm mb-2">
                    <a href="#">Мамам и папам</a>
                  </li>
                  <li className="text-sm mb-2">
                    <a href="#">Одежда для дождя</a>
                  </li>
                  <li className="text-sm mb-2">
                    <a href="#">Пальто</a>
                  </li>
                  <li className="text-sm mb-2">
                    <a href="#">Полукомбинезоны</a>
                  </li>
                  <li className="text-sm mb-2">
                    <a href="#">Софтшелл</a>
                  </li>
                  <li className="text-sm mb-2">
                    <a href="#">Флис</a>
                  </li>
                  <li className="text-sm mb-2">
                    <a href="#">Футболки, толстовки</a>
                  </li>
                  <li className="text-sm mb-2">
                    <a href="#">Школьная форма</a>
                  </li>
                  <li className="text-sm mb-2">
                    <a href="#">Шорты, брюки</a>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="mb-3">ОБУВЬ</h3>
                <ul>
                  <li className="text-sm mb-2">
                    <a href="#">Ботинки</a>
                  </li>
                  <li className="text-sm mb-2">
                    <a href="#">Кеды</a>
                  </li>
                  <li className="text-sm mb-2">
                    <a href="#">Кроссовки</a>
                  </li>
                  <li className="text-sm mb-2">
                    <a href="#">Мокасины</a>
                  </li>
                  <li className="text-sm mb-2">
                    <a href="#">Обусь для взрослых</a>
                  </li>
                  <li className="text-sm mb-2">
                    <a href="#">Резиновые сапоги</a>
                  </li>
                  <li className="text-sm mb-2">
                    <a href="#">Сабо</a>
                  </li>
                  <li className="text-sm mb-2">
                    <a href="#">Сандалии</a>
                  </li>
                  <li className="text-sm mb-2">
                    <a href="#">Сапого</a>
                  </li>
                  <li className="text-sm mb-2">
                    <a href="#">Сноубутсы</a>
                  </li>
                  <li className="text-sm mb-2">
                    <a href="#">Тапочки</a>
                  </li>
                  <li className="text-sm mb-2">
                    <a href="#">Школьная обувь</a>
                  </li>
                  <li className="text-sm mb-2">
                    <a href="#">Штепанцы</a>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="mb-3">АКССЕСУАРЫ</h3>
                <ul>
                  <li className="text-sm mb-2">
                    <a href="#">Зонты</a>
                  </li>
                  <li className="text-sm mb-2">
                    <a href="#">Игрушки</a>
                  </li>
                  <li className="text-sm mb-2">
                    <a href="#">Маски и антисептики</a>
                  </li>
                  <li className="text-sm mb-2">
                    <a href="#">Нижнее белье</a>
                  </li>
                  <li className="text-sm mb-2">
                    <a href="#">Очки</a>
                  </li>
                  <li className="text-sm mb-2">
                    <a href="#">Панамы, кепки</a>
                  </li>
                  <li className="text-sm mb-2">
                    <a href="#">Пинетки</a>
                  </li>
                  <li className="text-sm mb-2">
                    <a href="#">Подарки</a>
                  </li>
                  <li className="text-sm mb-2">
                    <a href="#">Рукавицы</a>
                  </li>
                  <li className="text-sm mb-2">
                    <a href="#">Рюкзаки и сумки</a>
                  </li>
                  <li className="text-sm mb-2">
                    <a href="#">Термобелье</a>
                  </li>
                  <li className="text-sm mb-2">
                    <a href="#">Шапки</a>
                  </li>
                  <li className="text-sm mb-2">
                    <a href="#">Шарфы, манишки</a>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="mb-3">АКТУАЛЬНОЕ</h3>
                <ul>
                  <li className="text-sm mb-2">
                    <a href="#">Зонты</a>
                  </li>
                  <li className="text-sm mb-2">
                    <a href="#">Игрушки</a>
                  </li>
                  <li className="text-sm mb-2">
                    <a href="#">Маски и антисептики</a>
                  </li>
                  <li className="text-sm mb-2">
                    <a href="#">Нижнее белье</a>
                  </li>
                  <li className="text-sm mb-2">
                    <a href="#">Очки</a>
                  </li>
                  <li className="text-sm mb-2">
                    <a href="#">Панамы, кепки</a>
                  </li>
                  <li className="text-sm mb-2">
                    <a href="#">Пинетки</a>
                  </li>
                  <li className="text-sm mb-2">
                    <a href="#">Подарки</a>
                  </li>
                  <li className="text-sm mb-2">
                    <a href="#">Рукавицы</a>
                  </li>
                  <li className="text-sm mb-2">
                    <a href="#">Рюкзаки и сумки</a>
                  </li>
                  <li className="text-sm mb-2">
                    <a href="#">Термобелье</a>
                  </li>
                  <li className="text-sm mb-2">
                    <a href="#">Шапки</a>
                  </li>
                  <li className="text-sm mb-2">
                    <a href="#">Шарфы, манишки</a>
                  </li>
                </ul>
              </div>
              <div>
                <img
                  className="max-w-[400px] mb-4"
                  src="https://picsum.photos/400/300?random=5"
                  alt="photo"
                />
                <a href="/">
                  <span className="text-sm font-bold">Наш выбор</span>
                  <h3 className="text-lg">
                    Одежда и обувь для зимних видов спорта
                  </h3>
                  <i className="fa text-xl fa-arrow-right-long mt-3 text-primary"></i>
                </a>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
