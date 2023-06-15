import React from "react";
import styled from "styled-components";

const MenuIconWrapper = styled.div`
  width: 25px;
  height: 25px;
  position: relative;
  transform: rotate(0deg);
  transition: 0.5s ease-in-out;
  display: none;
  pointer-events: none;

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
    transform: rotate(90deg);
    transition: 0.25s ease-in-out;
    top: 50%;

    &:nth-child(1) {
      transform: rotate(0deg);
    }
  }
`;

const ExpandIcon = () => {
  return (
    <MenuIconWrapper>
      <span></span>
      <span></span>
    </MenuIconWrapper>
  );
};

export default ExpandIcon;
