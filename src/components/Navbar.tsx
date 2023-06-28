import styled from "styled-components";
import { COLORS, FONT, SPACING } from "../theme";

const Navbar = () => {
  return (
    <StyledNav>
      <a href="/">
        <b>Ingredient Ideas</b>
      </a>
    </StyledNav>
  );
};

const StyledNav = styled.nav`
  @import url("https://fonts.googleapis.com/css2?family=Roboto:ital,wght@1,700&display=swap");

  display: flex;
  justify-content: left;
  position: sticky;
  top: 0;
  padding: ${SPACING.normal}px;
  margin-bottom: ${SPACING.normal}px;
  text-decoration: none;
  width: 100vw;
  background: ${COLORS.purpleLight};

  a {
    font-family: "Roboto", sans-serif;
    text-decoration: none;
    color: ${COLORS.altText};
    font-style: italic;
    &:hover,
    &:focus {
      color: ${COLORS.light};
    }
  }

  @media (min-width: 1024px) {
    position: relative;
    font-size: ${FONT.large}px;
    padding: ${SPACING.grand}px;
  }
`;

export default Navbar;
