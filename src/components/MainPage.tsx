import React, { useEffect, useState } from "react";
import { Meal } from "../types";
import { Link } from "react-router-dom";

const MainPage = () => {
  const [meals, setMeals] = useState<Meal[]>();
  const [searchTerm, setSearchTerm] = useState<string | undefined>();

  async function getMeals() {
    try {
      const url = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${searchTerm}`;
      const response = await fetch(url);
      const data = await response.json();
      setMeals(data.meals);
      console.log(data);
    } catch (err) {
      throw err;
    }
  }

  useEffect(() => {
    getMeals();
  }, []);

  return (
    <main>
      <section>
        <input
          id="ingredient-search"
          name="ingredient-search"
          aria-label="ingredient-search"
          placeholder="Search for a main ingredient"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button
          onClick={(e) => (searchTerm === "" ? e.preventDefault() : getMeals())}
        >
          Search
        </button>
      </section>
      <section>
        {meals ? (
          meals?.map((meal: Meal) => (
            <Link to={`recipe/${meal.idMeal}`} key={meal.idMeal}>
              <button>
                <img
                  alt={meal.strMeal}
                  src={`${meal.strMealThumb}/preview`}
                  width={150}
                  height={150}
                />
                <h2>{meal.strMeal}</h2>
              </button>
            </Link>
          ))
        ) : (
          <div>No results found, please type the full Ingredient name!</div>
        )}
      </section>
    </main>
  );
};

export default MainPage;
