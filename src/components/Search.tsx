import React from "react";

interface SearchProps {
  searchTerm?: string;
  setSearchTerm: (string: string) => void;
}

const Search = ({ searchTerm, setSearchTerm }: SearchProps) => {
  return (
    <input
      id="ingredient-search"
      name="ingredient-search"
      aria-label="ingredient-search"
      placeholder="Search for a main ingredient"
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
    />
  );
};

export default Search;
