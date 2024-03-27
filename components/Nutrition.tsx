type Props = {
  calories: number;
  carbs: number;
  protein: number;
  fat: number;
};

function Nutrition({ calories, carbs, protein, fat }: Props) {
  return (
    <div>
      <h2 className="font-youngSerif text-nutmeg text-[28px] mb-2">
        Nutrition
      </h2>
      <p className="font-outfitRegular mb-6">
        The table below shows nutritional values per serving without the
        additional fillings.
      </p>
      <div>
        <div className="font-outfitRegular flex">
          <span className="flex-1 pl-8">Calories</span>
          <span className="font-outfitBold flex-1 pr-4 text-nutmeg">
            {calories}kcal
          </span>
        </div>
        <hr className="text-light-grey my-3" />
        <div className="font-outfitRegular flex">
          <span className="flex-1 pl-8">Carbs</span>
          <span className="font-outfitBold flex-1 pr-4 text-nutmeg">
            {carbs}g
          </span>
        </div>
        <hr className="text-light-grey my-3" />
        <div className="font-outfitRegular flex">
          <span className="flex-1 pl-8">Protein</span>
          <span className="font-outfitBold flex-1 pr-4 text-nutmeg">
            {protein}g
          </span>
        </div>
        <hr className="text-light-grey my-3" />
        <div className="font-outfitRegular flex">
          <span className="flex-1 pl-8">Fat</span>
          <span className="font-outfitBold flex-1 pr-4 text-nutmeg">
            {fat}g
          </span>
        </div>
      </div>
    </div>
  );
}

export default Nutrition;
