import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Recipe } from "../types";
import styled from "styled-components";
import { COLORS, FONT, SPACING } from "../theme";

const RecipePage = () => {
  const params = useParams();
  const [recipeData, setRecipeData] = useState<Recipe>();
  const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.id}`;
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <RecipeWrapper>
      {recipeData?.strSource ? (
        <RecipeTitle>
          <TitleLink href={recipeData.strSource}>
            {recipeData?.strMeal}
          </TitleLink>
        </RecipeTitle>
      ) : (
        <TitleNoLink>{recipeData?.strMeal}</TitleNoLink>
      )}
      <RecipeImage
        alt={recipeData?.strMeal}
        src={`${recipeData?.strMealThumb}/preview`}
        width={250}
        height={250}
      />
      <RecipeDescription>
        Of {recipeData?.strArea} origin, this {recipeData?.strCategory} recipe
        is a great choice!{" "}
      </RecipeDescription>

      {recipeData?.strDrinkAlternate && (
        <h4>Goes well with {recipeData.strDrinkAlternate}</h4>
      )}
      <article>
        <SectionTitle>Ingredients</SectionTitle>
        <IngredientsList>
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
        </IngredientsList>
      </article>
      <article>
        <SectionTitle>Instructions</SectionTitle>
        <Instructions>
          <i>{recipeData?.strInstructions}</i>
        </Instructions>
        {recipeData?.strYoutube && (
          <YouTubeText>
            Alternatively there are{" "}
            <YouTubeLink href={recipeData.strYoutube}>
              YouTube Instructions
            </YouTubeLink>
          </YouTubeText>
        )}
      </article>
    </RecipeWrapper>
  );
};

const RecipeWrapper = styled.main`
  width: 80vw;
  margin: 0 auto;
`;

const RecipeTitle = styled.h1`
  text-align: center;
`;
const TitleNoLink = styled(RecipeTitle)`
  color: ${COLORS.altText};
`;
const TitleLink = styled.a`
  color: ${COLORS.altText};
`;

const RecipeImage = styled.img`
  display: flex;
  margin: 0 auto;
  border: 1px solid ${COLORS.border};
  border-radius: ${SPACING.compact}px;

  @media (min-width: 768px) {
    width: 300px;
    height: 300px;
  }

  @media (min-width: 1024px) {
    width: 325px;
    height: 325px;
  }
`;

const RecipeDescription = styled.h3`
  @media (min-width: 768px) {
    font-size: ${FONT.large}px;
    text-align: center;
    margin-top: ${SPACING.grand}px;
  }

  @media (min-width: 1024px) {
    font-size: ${FONT.xLarge}px;
  }
`;

const SectionTitle = styled.h3`
  text-decoration: underline;
  text-decoration-color: purple;
  font-size: ${FONT.medium}px;

  @media (min-width: 768px) {
    font-size: ${FONT.large}px;
  }

  @media (min-width: 1024px) {
    font-size: ${FONT.xLarge}px;
  }
`;

const IngredientsList = styled.ol`
  font-size: ${FONT.small}px;

  @media (min-width: 768px) {
    font-size: ${FONT.medium}px;
  }

  @media (min-width: 1024px) {
    font-size: ${FONT.large}px;
  }
`;

const Instructions = styled.p`
  font-size: ${FONT.small}px;
  line-height: 1.2;

  @media (min-width: 768px) {
    font-size: ${FONT.medium}px;
    line-height: 1.5;
    word-spacing: 2px;
  }

  @media (min-width: 1024px) {
    font-size: ${FONT.large}px;
  }
`;

const YouTubeText = styled.h4`
  @media (min-width: 768px) {
    font-size: ${FONT.medium}px;
  }

  @media (min-width: 1024px) {
    font-size: ${FONT.large}px;
  }
`;

const YouTubeLink = styled.a`
  color: ${COLORS.altText};
`;

export default RecipePage;
