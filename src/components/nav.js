import { Link } from "gatsby";
import React, { useState, useCallback, useEffect, useRef } from "react";
import HamburgerIcon from "./hamburgerIcon";
import styled from "styled-components";

const navItems = [
  {
    name: "about",
    sublinks: [
      { label: "Biography", link: "/about/#biography" },
      { label: "References", link: "/about/#refereces" },
      { label: "Choosing a Bow", link: "/about/#choosing-a-bow" },
      { label: "Recommendations", link: "/about/#recommendations" },
      { label: "Fiddlesticks", link: "/about/#fiddlesticks" },
      { label: "A Bow for Mozart", link: "/about/#a-bow-for-mozart" },
    ],
  },
  {
    name: "materials",
    sublinks: [
      { label: "Swartzia", link: "/materials/#swartzia" },
      { label: "Satiné-Cacique", link: "/materials/#satiné-cacique" },
      { label: "Snakewood", link: "/materials/#snakewood" },
      { label: "Pernambuco", link: "/materials/#pernambuco" },
      { label: "Ebony and Ivory", link: "/materials/#ebony-and-ivory" },
      { label: "Alternatives", link: "/materials/#alternatives" },
    ],
  },
  {
    name: "bows",
    sublinks: [
      { label: "Baroque", link: "/bows/#baroque" },
      { label: "Classical", link: "/bows/#classical" },
      { label: "Modern", link: "/bows/#modern" },
    ],
  },
];

const NavWrapper = styled.nav`
  height: 8rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0rem 4rem;
  background: var(--linen);
  position: fixed;
  z-index: 10;
  width: calc(100% - 8rem);
  max-width: calc(1980px - 12rem);
  text-transform: lowercase;
  align-items: center;
  transition: height 0.2s ease, opacity 0.2s ease;
  border-bottom: 1px solid black;

  /* @media (max-width: 1000px) {
    height: 100vh;
    align-items: flex-start;

    ul {
      position: absolute;
      flex-direction: column;
    }
  } */

  &.nav-hide {
    height: 0;
    opacity: 0;
  }

  .name-link {
    padding: 0 2rem;
    font-family: "Seaweed Script";
    font-size: 3rem;
    text-transform: none;
  }

  ul,
  .name-link {
    display: flex;
    justify-content: space-around;
    margin: 0;
    align-items: center;

    > li {
      padding: 3rem 2rem;
    }
  }

  .second-nav {
    align-items: center;
    display: flex;
    justify-content: flex-end;
    left: 0;
    position: absolute;
    right: 0;
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.2s ease;
    top: 100%;
    padding: 0 6rem;
    height: 8rem;
    z-index: 2;

    > li {
      padding: 4.5rem 2rem;
      z-index: 2;
    }

    &.active {
      opacity: 1;
      visibility: visible;
    }

    &.not-active {
      opacity: 0;
      visibility: hidden;
    }
  }

  .second-nav-wrapper {
    display: flex;
    padding: 0;

    > div {
      padding: 3rem 2rem;
      z-index: 1;
    }

    &::after {
      content: "";
      width: 100%;
      height: 0;
      position: absolute;
      left: 0;
      right: 0;
      top: calc(100% + 1px);
      background: var(--linen);
      transition: height 0.2s ease;
      z-index: -10;
    }

    &:hover::after,
    &:focus-within::after {
      height: calc(8rem + 1px);
      border-bottom: 1px solid black;
    }
  }

  a:not(.name-link) {
    position: relative;
    padding: 2rem 0;
    letter-spacing: 1.5px;
    cursor: pointer;

    &:after {
      content: "";
      position: absolute;
      width: 100%;
      height: 4px;
      background-color: var(--golden-rod);
      bottom: 20%;
      right: 0;
      transform-origin: right;
      transform: scaleX(0);
      transition: transform 0.3s ease-in-out;
    }
    &:hover:after,
    &:focus:after {
      transform-origin: left;
      transform: scaleX(1);
    }
  }
`;

const Nav = () => {
  const [activeMenu, setActiveMenu] = useState(null);
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const navRef = useRef();

  const handleMenuInteraction = useCallback((menuName, isActive) => {
    setActiveMenu(isActive ? menuName : null);
  }, []);
  const handleScroll = useCallback(() => {
    const offset = window.scrollY;
    const navbar = navRef.current;
    const threshold = 10;

    setLastScrollTop((prevScrollTop) => {
      const diff = Math.abs(offset - prevScrollTop);
      if (diff < threshold) {
        return prevScrollTop;
      }

      if (offset > 80) {
        if (offset > prevScrollTop) {
          navbar.classList.add("nav-hide");
        } else {
          navbar.classList.remove("nav-hide");
        }
        return offset;
      }
      return prevScrollTop;
    });
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  const handleBlur = useCallback((menuName, e) => {
    if (!e.currentTarget.contains(e.relatedTarget)) {
      setActiveMenu(null);
    }
  }, []);

  return (
    <NavWrapper ref={navRef}>
      <Link className="name-link" to="/">
        Stephen Marvin
      </Link>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li className="second-nav-wrapper">
          {navItems.map((item) => (
            <div
              role="button"
              tabIndex="-1"
              key={item.name}
              onMouseEnter={() => handleMenuInteraction(item.name, true)}
              onMouseLeave={() => handleMenuInteraction(item.name, false)}
              onFocus={() => handleMenuInteraction(item.name, true)}
              onBlur={(e) => handleBlur(item.name, e)}
            >
              <Link
                to={`/${item.name}`}
                aria-expanded={activeMenu === item.name ? "true" : "false"}
              >
                {item.name}
              </Link>
              <ul
                className={`second-nav ${
                  activeMenu === item.name ? "active" : "not-active"
                }`}
              >
                {item.sublinks.map((link) => (
                  <li key={link.label}>
                    <Link to={link.link}>{link.label}</Link>
                  </li>
                ))}
              </ul>
              <div className="second-nav-background"></div>
            </div>
          ))}
        </li>
        <li>
          <Link to="/prices">Prices</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
      <HamburgerIcon />
    </NavWrapper>
  );
};

export default Nav;
