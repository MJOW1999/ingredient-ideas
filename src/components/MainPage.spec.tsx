import React from "react";
import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import MainPage from "./MainPage";

describe("MainPage component", () => {
  render(<MainPage />);

  const searchInput = screen.getByRole("textbox", {
    name: "ingredient-search",
  });
  const searchButton = screen.getByRole("button", { name: "Search" });
  const intro = screen.getByText(
    /So you don't know what meal to make with your spare ingredients/i
  );

  it("should render correctly", () => {
    expect(searchInput).toBeInTheDocument();
    expect(searchButton).toBeInTheDocument();
    expect(intro).toBeInTheDocument();
  });

  it("should take text input", () => {
    fireEvent.change(searchInput, { target: { value: "apple" } });
    fireEvent.click(searchButton);
    expect(searchInput).toHaveValue("apple");
  });
});
