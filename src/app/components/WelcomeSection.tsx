import Image from "next/image";
import MainHeader from "./MainHeader";

function WelcomeSection() {
  return (
    <section className="py-60 relative bg-[#f9f6f1] px-5" data-aos="fade-up" data-aos-anchor-placement="top-center">
      <Image
        className="absolute top-6 left-[50%] translate-x-[-50%] w-40"
        width={200}
        height={200}
        src={"/flowerImage.svg"}
        alt="flower image"
      ></Image>
      <MainHeader>Welcome!</MainHeader>
      <p className="text-[#835D2F] text-2xl leading-loose w-full md:w-170 mx-auto my-15">
        We joyfully invite you to celebrate the beginning of our forever. Here
        you&apos;ll find everything you need for our special day.
      </p>
      <Image
        className="absolute bottom-6 left-[50%] translate-x-[-50%] w-40"
        width={200}
        height={200}
        src={"/flowerImage.svg"}
        alt="flower image"
      ></Image>
    </section>
  );
}

export default WelcomeSection;
