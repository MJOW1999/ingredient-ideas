import React from "react";
import { styled } from "styled-components";
import { FONT, SPACING } from "../theme";

interface SearchProps {
  searchTerm?: string;
  setSearchTerm: (string: string) => void;
}

const Search = ({ searchTerm, setSearchTerm }: SearchProps) => {
  return (
    <Input
      id="ingredient-search"
      name="ingredient-search"
      aria-label="ingredient-search"
      placeholder="Search for a main ingredient"
      value={searchTerm}
      onChange={(e: { target: { value: string } }) =>
        setSearchTerm(e.target.value)
      }
    />
  );
};

const Input = styled.input`
  font-size: ${FONT.small}px;
  border-radius: ${SPACING.compact}px;
  text-overflow: ellipsis;

  @media (min-width: 1024px) {
    font-size: ${FONT.xxLarge}px;
  }
`;

export default Search;
