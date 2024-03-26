import { ListItem } from "@/types";
import UList from "./UList";

type Props = {
  ingredientsArr: ListItem[];
};

function Ingredients({ ingredientsArr }: Props) {
  return (
    <div>
      <h2 className="font-youngSerif text-nutmeg text-[28px] mb-2">
        Ingredients
      </h2>
      <UList itemArr={ingredientsArr} markerColor="text-nutmeg" />
    </div>
  );
}

export default Ingredients;
