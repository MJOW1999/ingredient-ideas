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

  &:hover {
    background-color: ${COLORS.purpleLight};
  }

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
  color: ${COLORS.light};
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
  margin: ${SPACING.compact}px 2.5%;
  font-size: 1em;

  @media (min-width: 768px) {
    padding: 2px 0;
  }
`;

export default MealCard;
