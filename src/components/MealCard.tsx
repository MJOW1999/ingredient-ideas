import React from "react";
import { Link } from "react-router-dom";
import { Meal } from "../types";

const MealCard = ({ meal }: { meal: Meal }) => {
  return (
    <article>
      <Link to={`recipe/${meal.idMeal}`} key={meal.idMeal}>
        <img
          alt={meal.strMeal}
          src={`${meal.strMealThumb}/preview`}
          width={150}
          height={150}
        />
        <h2>{meal.strMeal}</h2>
      </Link>
    </article>
  );
};

export default MealCard;
