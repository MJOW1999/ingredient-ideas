import React from "react";
import { Link } from "react-router-dom";
import { styled } from "styled-components";
import { Meal } from "../types";
import { SPACING, COLORS } from "../theme";

const MealCard = ({ meal }: { meal: Meal }) => {
  return (
    <Card>
      <MealLink to={`recipe/${meal.idMeal}`} key={meal.idMeal}>
        <MealImage
          alt={meal.strMeal}
          src={`${meal.strMealThumb}/preview`}
          width={100}
          height={100}
        />
        <MealTitle>{meal.strMeal}</MealTitle>
      </MealLink>
    </Card>
  );
};

const Card = styled.article`
  display: flex;
  justify-content: center;
  width: 200px;
  height: 200px;
  background-color: ${COLORS.purpleDark};
  border: 1px solid ${COLORS.border};
  border-radius: ${SPACING.compact}px;

  @media (min-width: 768px) {
    width: 250px;
    height: 250px;
  }
`;

const MealLink = styled(Link)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  color: ${COLORS.altText};
`;

const MealImage = styled.img`
  border-radius: 50%;

  @media (min-width: 768px) {
    width: 150px;
    height: 150px;
  }
`;

const MealTitle = styled.h2`
  text-align: center;
  margin: 0 2.5%;
`;

export default MealCard;
