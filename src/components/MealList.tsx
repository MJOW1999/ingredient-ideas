import React from "react";
import { Meal } from "../types";
import MealCard from "./MealCard";

interface MealListProps {
  mealList?: Meal[];
}

const MealList = ({ mealList }: MealListProps) => {
  return (
    <main>
      {mealList ? (
        mealList?.map((meal: Meal) => <MealCard meal={meal} />)
      ) : (
        <div>No results found, please type the full Ingredient name!</div>
      )}
    </main>
  );
};

export default MealList;
