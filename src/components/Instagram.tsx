import { InstagramImage } from "../assets";

const Instagram = () => {
  return (
    <div className="mt-5">
      <div className="text-center text-3xl max-md:text-xl max-sm:text-md font-[900] relative container">
        <span className="w-full z-[-1] top-1/2 absolute start-0 bg-gray-200 h-[2px] -translate-y-1/2 block"></span>
        <h2 className="z-[1] bg-white inline-block px-2">
          Мы в инстаграм
          <a className="ms-2 text-primary" href="https://instagram.com/dinomama.ru">@dinomama.ru</a>
        </h2>
      </div>
      <div className="max-w-[1920px] mx-auto mt-5">
        <img className="w-full object-contain" src={InstagramImage} alt="instagram" />
      </div>
    </div>
  );
};

export default Instagram;
