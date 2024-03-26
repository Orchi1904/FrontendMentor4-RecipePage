import Image from "next/image";
import recipeImage from "@/assets/images/image-omelette.jpeg";

function Header() {
  return (
    <div>
      <Image
        className="w-full h-auto"
        src={recipeImage}
        width="0"
        height="0"
        alt="Recipe image"
      />
      <h1 className="font-youngSerif text-[38px] leading-none mx-[30px] mt-8 mb-[30px]">Simple Omlette Recipe</h1>
      <p className="font-outfitRegular mx-[30px]">
        An easy and quick dish, perfect for any meal. This classic omelette
        combines beaten eggs cooked to perfection, optionally filled with your
        choice of cheese, vegetables, or meats.
      </p>
    </div>
  );
}

export default Header;
