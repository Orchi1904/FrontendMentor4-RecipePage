import { ListItem } from "@/types";
import OList from "./OList";

type Props = {
  instructionsArr: ListItem[];
};

function Instructions({ instructionsArr }: Props) {
  return (
    <div>
      <h2 className="font-youngSerif text-nutmeg text-[28px] mb-1">
        Instructions
      </h2>
      <OList itemArr={instructionsArr} markerColor="text-nutmeg"/>
    </div>
  );
}

export default Instructions;
