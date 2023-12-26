import { createGlobalStyle } from "styled-components";

export const colors = {
  lightRed: "#E66767",
  beige: "#FFF8F2",
  white: "#FFFFFF",
  darkBeige: "#FFEBD9"
};

export const GlobalCss = createGlobalStyle`
  * {
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
    list-style: none;
  }

  body {
    background-color: ${colors.beige};
    color: ${colors.lightRed};
  }

  .container {
    max-width: 1024px;
    width: 100%;
    margin: 0px auto;
  }
`;
