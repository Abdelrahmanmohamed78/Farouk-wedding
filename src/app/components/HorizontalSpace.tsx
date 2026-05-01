import Image from "next/image";

function HorizontalSpace() {
  return (
    <div className="py-10">
      <Image
        className="w-40 mx-auto"
        width={200}
        height={200}
        src={"/flowerImage.svg"}
        alt="flower image"
      ></Image>
    </div>
  );
}

export default HorizontalSpace;
