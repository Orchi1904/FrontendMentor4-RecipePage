import UList from "./UList";

type Props = {
  total: string;
  preparation: string;
  cooking: string;
};

function PrepTime({ total, preparation, cooking }: Props) {
  const itemArr = [
    { title: "Total", text: total },
    { title: "Preparation", text: preparation },
    { title: "Cooking", text: cooking },
  ];

  return (
    <div className="bg-rose-white rounded-xl p-6 my-[30px]">
      <h2 className="font-outfitBold text-dark-raspberry text-lg">
        Preparation time
      </h2>

      <UList itemArr={itemArr} markerColor="text-dark-raspberry" />
    </div>
  );
}

export default PrepTime;
