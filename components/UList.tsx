import { ListItem } from "@/types";

type Props = {
  itemArr: ListItem[];
  markerColor?: string;
};

function UList({ itemArr, markerColor }: Props) {
  return (
    <ul className="list-inside font-outfitRegular ml-2">
      {itemArr.map((item, index) => (
        <li className="flex items-center pt-3" key={index}>
          <span className={`font-outfitBold ${markerColor}`}>&#x2022;</span>
          <span className="ml-6">
            <span className="font-outfitBold text-wenge-brown">
              {item.title}
            </span>
            {item.title ? ": " : ""}
            {item.text}
          </span>
        </li>
      ))}
    </ul>
  );
}

export default UList;
