import { createGlobalStyle } from "styled-components";

const Typography = createGlobalStyle`

  html {
    color: var(--darker-grey);
    font-family: "EB Garamond"
  }
  li {
    list-style: none;
  }
  p, li {
    letter-spacing: 0.5px;
  }
  h1,h2,h3,h4,h5,h6 {
    font-weight: normal;
    margin: 0;
  }
  a {
    color: var(--darker-grey);
    text-decoration:none;
    &:hover,
    &:focus {
      color: var(--grey)
    }
  }
`;

export default Typography;
