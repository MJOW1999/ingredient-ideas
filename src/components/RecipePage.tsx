import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Recipe } from "../types";

const RecipePage = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  //const { id }: { id: string } = useParams();
  const [recipeData, setRecipeData] = useState<Recipe>();
  const url = "https://www.themealdb.com/api/json/v1/1/lookup.php?i=52940";
  async function getRecipe() {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setRecipeData(data.meals[0]);
    } catch (err) {
      throw err;
    }
  }

  useEffect(() => {
    getRecipe();
  }, []);

  if (recipeData && recipeData.strYoutube) {
    let ytStr = recipeData.strYoutube.split("");
    let ytId = ytStr[ytStr.length - 1];
    console.log(ytId);
  }

  return (
    <main>
      {recipeData?.strSource ? (
        <h1>
          <a href={recipeData.strSource}>{recipeData?.strMeal}</a>
        </h1>
      ) : (
        <h1>{recipeData?.strMeal}</h1>
      )}
      <img
        alt={recipeData?.strMeal}
        src={`${recipeData?.strMealThumb}/preview`}
        width={150}
        height={150}
      />
      <h2>{recipeData?.strArea} Food</h2>
      <h3>Meal Type: {recipeData?.strCategory}</h3>
      {recipeData?.strDrinkAlternate && (
        <h4>Goes well with {recipeData.strDrinkAlternate}</h4>
      )}
      <article>
        <h3>Ingredients</h3>
        <ol>
          {recipeData?.strIngredient1 && (
            <li>
              <b>{recipeData?.strIngredient1}</b> (
              <i>{recipeData?.strMeasure1}</i>)
            </li>
          )}
          {recipeData?.strIngredient2 && (
            <li>
              <b>{recipeData?.strIngredient2}</b> (
              <i>{recipeData?.strMeasure2}</i>)
            </li>
          )}
          {recipeData?.strIngredient3 && (
            <li>
              <b>{recipeData?.strIngredient3}</b> (
              <i>{recipeData?.strMeasure3}</i>)
            </li>
          )}
          {recipeData?.strIngredient4 && (
            <li>
              <b>{recipeData?.strIngredient4}</b> (
              <i>{recipeData?.strMeasure4}</i>)
            </li>
          )}
          {recipeData?.strIngredient5 && (
            <li>
              <b>{recipeData?.strIngredient5}</b> (
              <i>{recipeData?.strMeasure5}</i>)
            </li>
          )}
          {recipeData?.strIngredient6 && (
            <li>
              <b>{recipeData?.strIngredient6}</b> (
              <i>{recipeData?.strMeasure6}</i>)
            </li>
          )}
          {recipeData?.strIngredient7 && (
            <li>
              <b>{recipeData?.strIngredient7}</b> (
              <i>{recipeData?.strMeasure7}</i>)
            </li>
          )}
          {recipeData?.strIngredient8 && (
            <li>
              <b>{recipeData?.strIngredient8}</b> (
              <i>{recipeData?.strMeasure8}</i>)
            </li>
          )}
          {recipeData?.strIngredient9 && (
            <li>
              <b>{recipeData?.strIngredient9}</b> (
              <i>{recipeData?.strMeasure9}</i>)
            </li>
          )}
          {recipeData?.strIngredient10 && (
            <li>
              <b>{recipeData?.strIngredient10}</b> (
              <i>{recipeData?.strMeasure10}</i>)
            </li>
          )}
          {recipeData?.strIngredient11 && (
            <li>
              <b>{recipeData?.strIngredient11}</b> (
              <i>{recipeData?.strMeasure11}</i>)
            </li>
          )}
          {recipeData?.strIngredient12 && (
            <li>
              <b>{recipeData?.strIngredient12}</b> (
              <i>{recipeData?.strMeasure12}</i>)
            </li>
          )}
          {recipeData?.strIngredient13 && (
            <li>
              <b>{recipeData?.strIngredient13}</b> (
              <i>{recipeData?.strMeasure13}</i>)
            </li>
          )}
          {recipeData?.strIngredient14 && (
            <li>
              <b>{recipeData?.strIngredient14}</b> (
              <i>{recipeData?.strMeasure14}</i>)
            </li>
          )}
          {recipeData?.strIngredient15 && (
            <li>
              <b>{recipeData?.strIngredient15}</b> (
              <i>{recipeData?.strMeasure15}</i>)
            </li>
          )}
          {recipeData?.strIngredient16 && (
            <li>
              <b>{recipeData?.strIngredient16}</b> (
              <i>{recipeData?.strMeasure16}</i>)
            </li>
          )}
          {recipeData?.strIngredient17 && (
            <li>
              <b>{recipeData?.strIngredient17}</b> (
              <i>{recipeData?.strMeasure17}</i>)
            </li>
          )}
          {recipeData?.strIngredient18 && (
            <li>
              <b>{recipeData?.strIngredient18}</b> (
              <i>{recipeData?.strMeasure18}</i>)
            </li>
          )}
          {recipeData?.strIngredient19 && (
            <li>
              <b>{recipeData?.strIngredient19}</b> (
              <i>{recipeData?.strMeasure19}</i>)
            </li>
          )}
          {recipeData?.strIngredient20 && (
            <li>
              <b>{recipeData?.strIngredient20}</b> (
              <i>{recipeData?.strMeasure20}</i>)
            </li>
          )}
        </ol>
      </article>
      <article>
        <h3>Instructions</h3>
        <p>
          <i>{recipeData?.strInstructions}</i>
        </p>
        {recipeData?.strYoutube && (
          <h5>
            Alternatively there are{" "}
            <a href={recipeData.strYoutube}>YouTube Instructions</a>
          </h5>
        )}
      </article>
    </main>
  );
};

export default RecipePage;
