import { PiStarFourFill } from "react-icons/pi";
import { arefRuqaa, greatVibes } from "../layout";
import Overlay from "./Overlay";
import Video from "./Video";
import { IoIosArrowDown } from "react-icons/io";
import Audio from "./Audio";


function LandingPage({ weddingDate }: {weddingDate: Date}) {
  return (
    <div className="py-10 relative z-1">
      <Audio></Audio>
      <Video></Video>
      <Overlay></Overlay>
      <h3
        className={`text-3xl text-white mb-7 ${arefRuqaa.className}`}
        data-aos="fade-up"
        data-aos-anchor-placement="center-center"
      >
        بسم الله الرحمن الرحيم
      </h3>
      <h3
        className="uppercase font-bold tracking-wider mb-10 text-white"
        data-aos="fade-up"
        data-aos-anchor-placement="center-center"
      >
        We&apos;re getting married
      </h3>
      <div
        className={`couple-name flex flex-col gap-10 mb-10 text-white ${greatVibes.className}`}
        data-aos="fade-up"
        data-aos-anchor-placement="center-center"
      >
        <span className={`block text-5xl sm:text-8xl`}>Farouk</span>
        <span className={`block text-5xl sm:text-8xl`}>&</span>
        <span className={`block text-5xl sm:text-8xl`}>Menna</span>
      </div>
      <p className={`mt-10 mb-7 text-3xl ${arefRuqaa.className} text-gray-200`}>
        فى الدنيا والآخرة
      </p>
      <p
        className={`mt-10 mb-7 text-sm tracking-widest font-semibold italic text-gray-200`}
      >
        In this world and the next
      </p>
      <div className="start-image flex justify-center items-center gap-2">
        <span className="w-25 h-0.5 bg-gray-300 block"></span>
        <PiStarFourFill className="text-white text-[17px]" />
        <span className="w-25 h-0.5 bg-gray-300 block"></span>
      </div>
      <h3 className="text-4xl text-white font-bold mt-10 italic">
        <span>
          {weddingDate.getDate() > 9
            ? weddingDate.getDate()
            : "0" + weddingDate.getDate()}
        </span>{" "}
        <span>{weddingDate.toLocaleString("en-US", { month: "long" })}</span>{" "}
        <span>{weddingDate.getFullYear()}</span>
      </h3>
      <IoIosArrowDown className="mt-10 mx-auto text-gray-300 text-2xl animated-arrow" />
    </div>
  );
}

export default LandingPage;
