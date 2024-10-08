import { AboutImage1, AboutImage2, AboutImage3, AboutImage4, AboutImage5 } from "../assets"

const About = () => {
  return (
    <div className="bg-[#F7F8F7]">
      <div className="container flex justify-center items-center py-10">
        <ul className="flex justify-center gap-12 items-center">
          <li className="flex justify-center flex-col items-center gap-2">
            <img src={AboutImage1} alt="about image" />
            <p className="font-[800] text-sm">Шоу-рум с хитами продаж!</p>
          </li>
          <li className="flex justify-center flex-col items-center gap-2">
            <img src={AboutImage2} alt="about image" />
            <p className="font-[800] text-sm">Гарантия качества!</p>
          </li>
          <li className="flex justify-center flex-col items-center gap-2">
            <img src={AboutImage3} alt="about image" />
            <p className="font-[800] text-sm">Нам доверяют!</p>
          </li>
          <li className="flex justify-center flex-col items-center gap-2">
            <img src={AboutImage4} alt="about image" />
            <p className="font-[800] text-sm">Возврат и обмен без проблем!</p>
          </li>
          <li className="flex justify-center flex-col items-center gap-2">
            <img src={AboutImage5} alt="about image" />
            <p className="font-[800] text-sm">С нами выгодно!</p>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default About