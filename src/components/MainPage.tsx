import React, { useEffect, useState } from "react";
import { styled } from "styled-components";
import { Meal } from "../types";
import Search from "./Search";
import MealList from "./MealList";
import { FONT, SPACING, COLORS } from "./../theme";

const MainPage = () => {
  const [meals, setMeals] = useState<Meal[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");

  async function getMeals(searchTerm: string) {
    if (searchTerm.length) {
      try {
        const url = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${searchTerm}`;
        const response = await fetch(url);
        const data = await response.json();
        setMeals(data.meals);
        return data.meals;
      } catch (err) {
        throw err;
      }
    }
  }

  useEffect(() => {
    getMeals("chicken");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <main>
      <Intro>
        So you don't know what meal to make with your spare ingredients, worry
        not because{" "}
        <b>
          <i>Ingredient Ideas</i>
        </b>{" "}
        is here!
      </Intro>

      <SearchWrapper>
        <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <SearchButton onClick={() => getMeals(searchTerm)}>Search</SearchButton>
      </SearchWrapper>
      <section>
        <MealList mealList={meals} />
      </section>
    </main>
  );
};

const SearchWrapper = styled.section`
  display: flex;
  justify-content: center;
  gap: ${SPACING.normal}px;
  margin-bottom: ${SPACING.normal}px;

  @media (min-width: 768px) {
    margin-bottom: ${SPACING.normal * 2}px;
  }

  @media (min-width: 1024px) {
    font-size: ${FONT.small}px;
    padding: ${SPACING.moderate}px;
    gap: ${SPACING.normal}px;
  }
`;

const SearchButton = styled.button`
  border-radius: ${SPACING.compact}px;
  border-color: ${COLORS.border};
  font-size: ${FONT.small}px;
  background: none;
  &:hover,
  &:focus {
    border-color: transparent;
    background-color: ${COLORS.light};
  }
  @media (min-width: 1024px) {
    font-size: 24px;
  }
`;

const Intro = styled.header`
  font-size: ${FONT.medium}px;
  width: 80vw;
  margin: 0 auto ${SPACING.normal}px auto;
  text-align: center;

  @media (min-width: 1024px) {
    font-size: ${FONT.large}px;
  }
`;

export default MainPage;
