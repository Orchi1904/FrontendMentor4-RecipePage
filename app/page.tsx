import Header from "@/components/Header";
import Ingredients from "@/components/Ingredients";
import Instructions from "@/components/Instructions";
import Nutrition from "@/components/Nutrition";
import PrepTime from "@/components/PrepTime";

const ingredients = [
  { text: "2-3 large eggs" },
  { text: "Salt, to taste" },
  { text: "Pepper, to taste" },
  { text: "1 tablespoon of butter or oil" },
  { text: "Optional fillings: cheese, diced vegetables, cooked meats, herbs" },
];

const instructions = [
  {
    title: "Beat the eggs",
    text: "In a bowl, beat the eggs with a pinch of salt and pepper until they are well mixed. You can add a tablespoon of water or milk for a fluffier texture.",
  },
  {
    title: "Heat the pan",
    text: "Place a non-stick frying pan over medium heat and add butter or oil.",
  },
  {
    title: "Cook the omelette",
    text: "Once the butter is melted and bubbling, pour in the eggs. Tilt the pan to ensure the eggs evenly coat the surface.",
  },
  {
    title: "Add fillings (optional)",
    text: "When the eggs begin to set at the edges but are still slightly runny in the middle, sprinkle your chosen fillings over one half of the omelette.",
  },
  {
    title: "Fold and serve",
    text: "As the omelette continues to cook, carefully lift one edge and fold it over the fillings. Let it cook for another minute, then slide it onto a plate.",
  },
  {
    title: "Enjoy",
    text: "Serve hot, with additional salt and pepper if needed.",
  },
];

export default function Home() {
  return (
    <main>
      <Header />
      <div className="mx-[32px]">
        <PrepTime
          total="Approximately 10 minutes"
          preparation="5 minutes"
          cooking="5 minutes"
        />
        <Ingredients ingredientsArr={ingredients} />
        <hr className="text-light-grey my-[30px]" />
        <Instructions instructionsArr={instructions} />
        <hr className="text-light-grey my-[30px]" />
        <Nutrition />
      </div>
    </main>
  );
}
