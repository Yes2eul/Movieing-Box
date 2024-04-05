"use client";

import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const GlobalStyle = createGlobalStyle`
  ${reset}
  * {
    box-sizing: border-box;
  }

  html, body { 
    margin: 0
    padding: 0
  }

  ul, ol {
    list-style: none;
  } 

  button {
    all: unset;
    cursor: pointer;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`;
