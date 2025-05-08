import { createGlobalStyle } from "styled-components";

const COLORS = {
  PRIMARY: "#142F4D",
  PRIMARY_LIGHT: "#619ACF",
  PRIMARY_DARK: "#244870",
  SECONDARY: "#F3F6FC",
  WHITE: "#FFFFFF",
  GREY: "#515568",
  GREY_DARK: "#223143",
  GREY_LIGHT: "#E5E7EB",
  HEADING_BLUE: "#80BFFA",
  DESCRIPTION_BLUE: "#C3DDF4",
};
export interface Theme {
  colors: {
    primary: string;
    primary_light: string;
    primary_dark: string;
    secondary: string;
    white: string;
    grey: string;
    grey_dark: string;
    grey_light: string;
    heading_blue: string;
    description_blue: string;
  };
}

export const theme: Theme = {
  colors: {
    primary: COLORS.PRIMARY,
    primary_light: COLORS.PRIMARY_LIGHT,
    primary_dark: COLORS.PRIMARY_DARK,
    secondary: COLORS.SECONDARY,
    white: COLORS.WHITE,
    grey: COLORS.GREY,
    grey_dark: COLORS.GREY_DARK,
    grey_light: COLORS.GREY_LIGHT,
    heading_blue: COLORS.HEADING_BLUE,
    description_blue: COLORS.DESCRIPTION_BLUE,
  },
};
export const GlobalStyle = createGlobalStyle`
 *{
    box-sizing: border-box;
    font-family: "Work Sans", "Inter";
    color: #142F4D;
  }
  html { 
    width: 100vw;
  }
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    min-height:100vh;
    overflow:hidden;
  } 

  h1 {
    margin: 0;
    padding: 0;
  }
  h2 {
    margin: 40px 0 24px 0;
    font-size: 1.25rem;
    font-weight: 500;
  }
  p {
    margin: 0;
    padding: 0;
  }
  a {
    text-decoration: none;
    :hover{
      color: inherit;
    }
  }
  button {
    outline: none;
    text-decoration: none;
    display: block;
    border: none;
    background-color: transparent;
    cursor: pointer;
  }
`;

export const device = {
  mobileS: `(max-width: 320px)`,
  mobileM: `(max-width: 425px)`,
  mobileL: `(max-width: 788px)`,
  mobileXL: `(max-width: 1025px)`,
};
