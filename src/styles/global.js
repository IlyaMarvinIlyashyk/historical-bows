import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  :root {
    --golden-rod: #B68F40;
    --white: #fff;
    --darker-grey: #263333;
    --linen: #fff2e6;
    --grey: #4c5454;
  }
  html {
    background: var(--linen);
    font-size: 10px;
  }

  body {
    font-size: 2rem;
  }

  fieldset {
    border-color: rgba(0,0,0,0.1);
    border-width: 1px;
  }

  button {
    ${"" /* background: var(--red); */}
    color: white;
    border: 0;
    padding: 0.6rem 1rem;
    border-radius: 2px;
    cursor: pointer;
    --cast: 2px;
    ${"" /* box-shadow: var(--cast) var(--cast) 0 var(--grey); */}
    text-shadow: 0.5px 0.5px 0 rgba(0,0,0,0.2);
    transition: all 0.2s;
    &:hover {
      --cast: 4px;
    }
  }

  /* Scrollbar Styles */
  ${
    "" /* body::-webkit-scrollbar {
    width: 12px;
  }
  html {
    scrollbar-width: thin;
    scrollbar-color: var(--red) var(--white);
  }
  body::-webkit-scrollbar-track {
    background: var(--white);
  }
  body::-webkit-scrollbar-thumb {
    background-color: var(--red) ;
    border-radius: 6px;
    border: 3px solid var(--white);
  }

  hr {
    border: 0;
    height: 8px;
    background-image: url(${stripes});
    background-size: 1500px;
  } */
  }

  img {
    max-width: 100%;
  }

`;

export default GlobalStyles;
