import Image, { StaticImageData } from "next/image";

type Props = {
  title: string;
  description: string;
  image: StaticImageData;
};

function Header({ title, description, image }: Props) {
  return (
    <div>
      <div className="max-w-[636px] mx-auto">
        <Image
          className="w-full h-auto tablet:h-[300px] img-full-w:rounded-xl"
          src={image}
          width="0"
          height="0"
          alt="Recipe image"
        />
      </div>
      <h1 className="font-youngSerif text-[38px] leading-none mt-8 tablet:mt-11 mb-[26px] mx-[29px] max-w-[636px] tablet:mx-auto text-dark-charcoal">
        {title}
      </h1>
      <p className="font-outfitRegular mx-[30px] max-w-[636px] tablet:mx-auto">
        {description}
      </p>
    </div>
  );
}

export default Header;
