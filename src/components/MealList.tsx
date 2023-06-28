import React from "react";
import { Meal } from "../types";
import MealCard from "./MealCard";
import styled from "styled-components";
import { FONT, SPACING } from "../theme";

interface MealListProps {
  mealList?: Meal[];
}

const MealList = ({ mealList }: MealListProps) => {
  return (
    <main>
      {mealList ? (
        <Grid>
          {mealList?.map((meal: Meal) => (
            <MealCard key={meal.idMeal} meal={meal} />
          ))}
        </Grid>
      ) : (
        <NoResults>
          No results found, please type the full Ingredient name!
        </NoResults>
      )}
    </main>
  );
};

const Grid = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${SPACING.moderate}px;

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    width: 70vw;
    margin: 0 auto;
    align-items: center;
    gap: ${SPACING.moderate}px;
    max-width: 500px;
  }

  @media (min-width: 1024px) {
    grid-template-columns: 1fr 1fr 1fr;
    gap: ${SPACING.moderate + SPACING.compact}px;
    margin-top: ${SPACING.grand}px;
    max-width: 750px;
  }
  @media (min-width: 1440px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: ${SPACING.moderate}px;
    max-width: 940px;
  }
`;

const NoResults = styled.section`
  font-size: ${FONT.small}px;
  width: 80vw;
  margin: 0 auto;
  text-align: center;

  @media (min-width: 768px) {
    font-size: ${FONT.large}px;
  }
`;

export default MealList;
