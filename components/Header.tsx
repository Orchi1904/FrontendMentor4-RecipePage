import Image, { StaticImageData } from "next/image";

type Props = {
  title: string,
  description: string,
  image: StaticImageData
}

function Header({title, description, image}: Props) {
  return (
    <div className="max-w-[636px] sm:mx-auto">
      <div>
        <Image
          className="w-full h-auto sm:rounded-xl"
          src={image}
          width="0"
          height="0"
          alt="Recipe image"
        />
      </div>
      <h1 className="font-youngSerif text-[38px] leading-none mt-8 mb-[30px] mx-[29px] sm:mx-0">
        {title}
      </h1>
      <p className="font-outfitRegular mx-[30px] sm:mx-0">
        {description}
      </p>
    </div>
  );
}

export default Header;
