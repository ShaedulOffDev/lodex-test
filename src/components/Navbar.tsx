import { Link } from "react-router-dom";
import { Heart, Logo, MagnifyingGlass, ShoppingBag } from "../assets";
import { useState } from "react";

const Navbar = () => {
  const [ad, setAd] = useState(true)
  const [mobNav, setMobNav] = useState(false);
  const [mobDropDown, setMobDropDown] = useState({
    mal: false,
    dev: false,
    sez: false,
    bre: false,
    dos: false,
    pom: false,
  });

  const activeHandler = (name: string, bool: boolean) => {
    setMobDropDown({
      mal: false,
      dev: false,
      sez: false,
      bre: false,
      dos: false,
      pom: false,
    });
    setMobDropDown((prev) => ({ ...prev, [name]: bool }));
  };
  return (
    <div className="relative">
      <div className={`w-full py-2 bg-pink text-center max-md:text-start ${!ad && 'hidden'}`}>
        <div className="container max-md:max-w-none relative pe-[50px]">
          <p className="text-sm">
            🍁 Осенние и зимние новинки одежды и обуви, которые мы уже получили.
            Смотрите
          </p>
          <button className="absolute -translate-y-1/2 end-2 text-xl top-1/2" onClick={() => setAd(false)}>
            <i className="fa fa-close"></i>
          </button>
        </div>
      </div>
      <div className="w-full max-md:hidden py-2 bg-[#F7F8F7] text-sm">
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
      <div className="w-full container max-md:max-w-none max-md:p-0 max-md:pt-3 max-md:border-b-0 border-b-2 flex max-md:flex-col justify-between items-center">
        <div className="max-md:order-1">
          <a className="block text-lg font-semibold" href="tel: +7(495)7887750">
            +7 (495) 788-77-50
          </a>
          <a
            className="text-sm max-md:hidden text-gray-400"
            href="https://wa.me/74957887750"
          >
            или напишите нам <i className="fab text-green-500 fa-whatsapp"></i>
          </a>
        </div>
        <a
          className="relative bottom-3 max-md:bottom-0 max-md:order-0"
          href="/"
        >
          <img src={Logo} className="max-w-[284px] w-full" alt="logo" />
        </a>
        <div className="hidden max-md:block text-center py-3">
          <div className="text-lg">
            <span>
              <i className="fa fa-location-dot"></i> Шоурум
            </span>{" "}
            <span className="text-gray-500">| м. Филевский парк</span>
          </div>
          <p className="text-gray-500 text-sm">Ежедневно c 10 до 20</p>
        </div>
        <div className="max-md:order-3 max-md:mt-3 max-md:bg-gray-100 max-md:px-5 max-md:py-3 flex justify-between max-md:w-full">
          <button className="max-md:block hidden text-3xl" onClick={() => setMobNav(true)}>
            <i className="fa fa-bars"></i>
          </button>
          <div className="flex items-center gap-6 ">
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
      </div>
      <ul className="container max-md:hidden text-md font-bold flex justify-center navbar">
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
              <div className="max-lg:hidden">
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
              <div className="max-lg:hidden">
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
              <div className="max-lg:hidden">
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
              <div className="max-lg:hidden">
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
              <div className="max-lg:hidden">
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
      <div
        className={`fixed px-5 z-[999999] w-full shadow-lg max-w-[300px] top-0 bottom-0 start-0 bg-white ${
          !mobNav && "hidden"
        }`}
      >
        <button className="mt-3" onClick={() => setMobNav(false)}>
          <i className="fa fa-close text-3xl"></i>
        </button>
        <div className="mt-5">
          <div
            className="flex justify-between items-center"
            onClick={() => activeHandler("mal", !mobDropDown.mal)}
          >
            <h3 className="text-xl font-bold">Мальчики</h3>
            {mobDropDown.mal ? (
              <span className="block w-[18px] h-[3px] bg-light-green2"></span>
            ) : (
              <i className="fa fa-plus text-xl text-secondary"></i>
            )}
          </div>
          <ul className={`mt-3 border-b pb-3 ${!mobDropDown.mal && "hidden"}`}>
            <li className="mb-2">
              <Link to="/">Одежда</Link>
            </li>
            <li className="mb-2">
              <Link to="/">Обувь</Link>
            </li>
            <li className="mb-2">
              <Link to="/">Аксессуары</Link>
            </li>
            <li className="mb-2">
              <Link to="/">Актуальное</Link>
            </li>
          </ul>
        </div>
        <div className="mt-5">
          <div
            className="flex justify-between items-center"
            onClick={() => activeHandler("dev", !mobDropDown.dev)}
          >
            <h3 className="text-xl font-bold">Девочки</h3>
            {mobDropDown.dev ? (
              <span className="block w-[18px] h-[3px] bg-light-green2"></span>
            ) : (
              <i className="fa fa-plus text-xl text-secondary"></i>
            )}
          </div>
          <ul className={`mt-3 border-b pb-3 ${!mobDropDown.dev && "hidden"}`}>
            <li className="mb-2">
              <Link to="/">Одежда</Link>
            </li>
            <li className="mb-2">
              <Link to="/">Обувь</Link>
            </li>
            <li className="mb-2">
              <Link to="/">Аксессуары</Link>
            </li>
            <li className="mb-2">
              <Link to="/">Актуальное</Link>
            </li>
          </ul>
        </div>
        <div className="mt-5">
          <div
            className="flex justify-between items-center"
            onClick={() => activeHandler("sez", !mobDropDown.sez)}
          >
            <h3 className="text-xl font-bold">Сезоны</h3>
            {mobDropDown.sez ? (
              <span className="block w-[18px] h-[3px] bg-light-green2"></span>
            ) : (
              <i className="fa fa-plus text-xl text-secondary"></i>
            )}
          </div>
          <ul className={`mt-3 border-b pb-3 ${!mobDropDown.sez && "hidden"}`}>
            <li className="mb-2">
              <Link to="/">Одежда</Link>
            </li>
            <li className="mb-2">
              <Link to="/">Обувь</Link>
            </li>
            <li className="mb-2">
              <Link to="/">Аксессуары</Link>
            </li>
            <li className="mb-2">
              <Link to="/">Актуальное</Link>
            </li>
          </ul>
        </div>
        <div className="mt-5">
          <div
            className="flex justify-between items-center"
            onClick={() => activeHandler("bre", !mobDropDown.bre)}
          >
            <h3 className="text-xl font-bold">Бренды</h3>
            {mobDropDown.bre ? (
              <span className="block w-[18px] h-[3px] bg-light-green2"></span>
            ) : (
              <i className="fa fa-plus text-xl text-secondary"></i>
            )}
          </div>
          <ul className={`mt-3 border-b pb-3 ${!mobDropDown.bre && "hidden"}`}>
            <li className="mb-2">
              <Link to="/">Одежда</Link>
            </li>
            <li className="mb-2">
              <Link to="/">Обувь</Link>
            </li>
            <li className="mb-2">
              <Link to="/">Аксессуары</Link>
            </li>
            <li className="mb-2">
              <Link to="/">Актуальное</Link>
            </li>
          </ul>
        </div>
        <div className="mt-5">
          <div
            className="flex justify-between items-center"
            onClick={() => activeHandler("dos", !mobDropDown.dos)}
          >
            <h3 className="text-xl font-bold">Доставка</h3>
            {mobDropDown.dos ? (
              <span className="block w-[18px] h-[3px] bg-light-green2"></span>
            ) : (
              <i className="fa fa-plus text-xl text-secondary"></i>
            )}
          </div>
          <ul className={`mt-3 border-b pb-3 ${!mobDropDown.dos && "hidden"}`}>
            <li className="mb-2">
              <Link to="/">Одежда</Link>
            </li>
            <li className="mb-2">
              <Link to="/">Обувь</Link>
            </li>
            <li className="mb-2">
              <Link to="/">Аксессуары</Link>
            </li>
            <li className="mb-2">
              <Link to="/">Актуальное</Link>
            </li>
          </ul>
        </div>
        <div className="mt-5">
          <div
            className="flex justify-between items-center"
            onClick={() => activeHandler("pom", !mobDropDown.pom)}
          >
            <h3 className="text-xl font-bold">Помощь</h3>
            {mobDropDown.pom ? (
              <span className="block w-[18px] h-[3px] bg-light-green2"></span>
            ) : (
              <i className="fa fa-plus text-xl text-secondary"></i>
            )}
          </div>
          <ul className={`mt-3 border-b pb-3 ${!mobDropDown.pom && "hidden"}`}>
            <li className="mb-2">
              <Link to="/">Одежда</Link>
            </li>
            <li className="mb-2">
              <Link to="/">Обувь</Link>
            </li>
            <li className="mb-2">
              <Link to="/">Аксессуары</Link>
            </li>
            <li className="mb-2">
              <Link to="/">Актуальное</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
