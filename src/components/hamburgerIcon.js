import React from "react";
import styled from "styled-components";

const MenuIconWrapper = styled.div`
  width: 30px;
  height: 22px;
  position: relative;
  transform: rotate(0deg);
  transition: 0.5s ease-in-out;
  cursor: pointer;
  display: none;

  @media (max-width: 1000px) {
    display: block;
  }

  span {
    display: block;
    position: absolute;
    height: 2px;
    width: 100%;
    background: #333;
    border-radius: 9px;
    opacity: 1;
    left: 0;
    transform: rotate(0deg);
    transition: 0.25s ease-in-out;

    &:nth-child(1) {
      top: ${(props) => (props.hamburgerOpen ? "9px" : "0px")};
      transform: ${(props) =>
        props.hamburgerOpen ? "rotate(135deg)" : "none"};
    }

    &:nth-child(2) {
      top: 9px;
      opacity: ${(props) => (props.hamburgerOpen ? "0" : "1")};
    }

    &:nth-child(3) {
      top: ${(props) => (props.hamburgerOpen ? "9px" : "18px")};
      transform: ${(props) =>
        props.hamburgerOpen ? "rotate(-135deg)" : "none"};
    }
  }
`;

const HamburgerIcon = ({ hamburgerOpen, setHamburgerOpen }) => {
  return (
    <MenuIconWrapper
      hamburgerOpen={hamburgerOpen}
      onClick={() => setHamburgerOpen(!hamburgerOpen)}
    >
      <span></span>
      <span></span>
      <span></span>
    </MenuIconWrapper>
  );
};

export default HamburgerIcon;
