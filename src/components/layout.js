import React from "react";
import Nav from "./nav";
import Footer from "./footer";
import "normalize.css";
import GlobalStyles from "../styles/global";
import Typography from "../styles/typography";
import styled from "styled-components";

const SiteBorderStyles = styled.div`
  max-width: 1980px;
  margin: 0 auto 4rem auto;
`;

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyles />
      <Typography />
      <SiteBorderStyles>
        <Nav />
        {children}
        <Footer />
      </SiteBorderStyles>
    </>
  );
};

export default Layout;
