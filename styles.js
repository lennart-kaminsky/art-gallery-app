import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: system-ui;
  }

  ul{
    list-style: none;
  padding: 0;
  }

  li {
    text-decoration: none;

  }
`;
