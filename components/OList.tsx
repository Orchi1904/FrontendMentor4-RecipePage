import { ListItem } from "@/types";

type Props = {
  itemArr: ListItem[];
  markerColor?: string;
};

function OList({ itemArr, markerColor }: Props) {
  return (
    <ol className="list-inside font-outfitRegular ml-2">
      {itemArr.map((item, index) => (
        <li className="flex pt-2" key={index}>
          <span className={`font-outfitBold ${markerColor}`}>{index+1}.</span>
          <span className="ml-[19px]">
            <span className="font-outfitBold text-wenge-brown">
              {item.title}
            </span>
            {item.title ? ": " : ""}
            {item.text}
          </span>
        </li>
      ))}
    </ol>
  );
}

export default OList;
