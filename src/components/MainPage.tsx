import React, { useEffect, useState } from "react";
import { Meal } from "../types";
import Search from "./Search";
import MealList from "./MealList";

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
        <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <button
          onClick={(e) => (searchTerm === "" ? e.preventDefault() : getMeals())}
        >
          Search
        </button>
      </section>
      <section>
        <MealList mealList={meals} />
      </section>
    </main>
  );
};

export default MainPage;
