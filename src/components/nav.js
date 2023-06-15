import { Link } from "gatsby";
import React, { useState, useCallback, useEffect, useRef } from "react";
import HamburgerIcon from "./hamburgerIcon";
import styled from "styled-components";
import ExpandIcon from "./expandIcon";

const navItems = [
  {
    name: "about",
    sublinks: [
      { label: "All about", link: "/about", mobileOnly: true },
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
      { label: "All Materials", link: "/materials", mobileOnly: true },
      { label: "Swartzia", link: "/materials/#swartzia" },
      { label: "Satiné-Cacique", link: "/materials/#satiné-cacique" },
      { label: "Snakewood", link: "/materials/#snakewood" },
      { label: "Pernambuco", link: "/materials/#pernambuco" },
      { label: "Ebony & Ivory", link: "/materials/#ebony-and-ivory" },
      { label: "Alternatives", link: "/materials/#alternatives" },
    ],
  },
  {
    name: "bows",
    sublinks: [
      { label: "All Bows", link: "/bows", mobileOnly: true },
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
  padding: 0rem 6rem;
  background: var(--linen);
  position: fixed;
  z-index: 10;
  width: calc(100% - 12rem);
  max-width: calc(1980px - 12rem);
  text-transform: lowercase;
  align-items: center;
  transition: height 0.2s ease, opacity 0.2s ease;
  border-bottom: 1px solid black;

  &.nav-hide {
    height: 0;
    opacity: 0;
  }

  &.hamburger-open {
    height: 100%;

    ul {
      display: flex;
    }
  }

  ul {
    display: flex;
    justify-content: space-around;
    margin: 0;
    align-items: center;

    > li {
      padding: 3rem 2rem;

      &:last-of-type {
        padding-right: 0;
      }
    }
  }

  .name-hamburger-wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 6rem;
    border-bottom: ${(props) =>
      props.hamburgerOpen ? "1px solid black" : "none"};
  }

  .name-link {
    padding: 0 2rem;
    font-family: "Seaweed Script";
    font-size: clamp(2.5rem, 2vw, 4.25rem);
    text-transform: none;
  }

  .second-nav-wrapper {
    display: flex;
    padding: 0;

    > div {
      padding: 3rem 2rem;
      z-index: 1;
    }

    .second-nav-background {
      width: 100%;
      height: 0;
      position: absolute;
      left: 0;
      right: 0;
      top: calc(100% + 1px);
      background: var(--linen);
      transition: height 0.2s ease;
      z-index: -10;

      &.active {
        height: calc(8rem + 1px);
        border-bottom: 1px solid black;
      }
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
    opacity: 0;
    visibility: hidden;

    > li {
      padding: 4.5rem 2rem;
      z-index: 2;
    }

    &.active {
      opacity: 1;
      visibility: visible;
    }
  }

  a:not(.name-hamuburger-wrapper .name-link) {
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

  @media (max-width: 1000px) {
    height: 6rem;
    align-items: flex-start;
    padding: 0rem 2rem;
    width: calc(100% - 4rem);
    overflow: ${(props) => (props.hamburgerOpen ? "auto" : "hidden")};

    ul {
      display: none;
      flex-direction: column;
      position: absolute;
      top: 6rem;
      align-items: flex-start;
      padding: 0;
      font-size: 4rem;
      width: calc(100% - 4rem);

      > li {
        padding: 1.5rem 0rem;
        width: 100%;
      }
    }

    a.name-link.name-link.name-link.name-link {
      padding: 0;
    }

    .second-nav-wrapper {
      flex-direction: column;

      > div {
        padding: 1.5rem 0rem;
        z-index: 1;
        width: calc(100% - 4rem);
        position: relative;

        .expand-icon-wrapper {
          position: absolute;
          right: 0;
          top: 30%;
          cursor: pointer;
        }
      }
    }

    .second-nav {
      padding: 0;
      font-size: 2.25rem;
      top: 15px;
      align-items: flex-start;
      width: calc(100vw - 8rem);
      height: 100%;
      position: absolute;

      > li {
        padding: 1.5rem 0rem;
        z-index: 2;
      }

      &.active {
        position: relative;
        border-top: 1px solid black;
        border-bottom: 1px solid black;
        padding: 1rem 0;

        + .expand-icon-wrapper {
          top: 23px;

          div > :nth-child(2) {
            transform: rotate(0deg);
          }
        }
      }
    }
  }
`;

const Nav = () => {
  const [activeSubMenuName, setActiveSubMenuName] = useState(null);
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [hamburgerOpen, setHamburgerOpen] = useState(false);
  const [isHamburgerBreakpoint, setIsHamburgerBreakpoint] = useState(false);
  const navRef = useRef();

  useEffect(() => {
    document.body.style.overflow = hamburgerOpen ? "hidden" : "unset";
  }, [hamburgerOpen]);

  useEffect(() => {
    const checkWindowWidth = () => {
      window.innerWidth < 1000
        ? setIsHamburgerBreakpoint(true)
        : setIsHamburgerBreakpoint(false);
    };

    checkWindowWidth();

    window.addEventListener("resize", (e) => {
      if (e.target.innerWidth >= 1000) {
        setHamburgerOpen(false);
        setActiveSubMenuName(null);
        setIsHamburgerBreakpoint(false);
      } else {
        setIsHamburgerBreakpoint(true);
      }
    });

    return () => {
      window.removeEventListener("resize", checkWindowWidth);
    };
  }, [isHamburgerBreakpoint]);

  const handleMenuInteraction = useCallback(
    (menuName, isActive) => {
      if (!isHamburgerBreakpoint) {
        setActiveSubMenuName(isActive ? menuName : null);
      }
    },
    [isHamburgerBreakpoint]
  );

  const handleClickMenuInteraction = useCallback(
    (menuName, e) => {
      if (isHamburgerBreakpoint) {
        if (activeSubMenuName === null || activeSubMenuName !== menuName) {
          setActiveSubMenuName(menuName);
        } else {
          setActiveSubMenuName(null);
        }
      }
    },
    [isHamburgerBreakpoint, activeSubMenuName]
  );

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

  const handleBlur = useCallback(
    (menuName, e) => {
      if (
        !e.currentTarget.contains(e.relatedTarget) &&
        !isHamburgerBreakpoint
      ) {
        setActiveSubMenuName(null);
      }
    },
    [isHamburgerBreakpoint]
  );

  return (
    <NavWrapper
      ref={navRef}
      className={hamburgerOpen && `hamburger-open`}
      hamburgerOpen={hamburgerOpen}
    >
      <span className={isHamburgerBreakpoint && "name-hamburger-wrapper"}>
        <Link className="name-link" to="/">
          Stephen Marvin
        </Link>
        <HamburgerIcon
          setHamburgerOpen={setHamburgerOpen}
          hamburgerOpen={hamburgerOpen}
          className="hamburger-icon"
        />
      </span>
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
              onClick={(e) => handleClickMenuInteraction(item.name, e)}
            >
              <Link
                to={isHamburgerBreakpoint ? `` : `/${item.name}`}
                aria-expanded={
                  activeSubMenuName === item.name ? "true" : "false"
                }
              >
                {item.name}
              </Link>
              <ul
                className={`second-nav ${
                  activeSubMenuName === item.name && "active"
                }`}
              >
                {item.sublinks
                  .filter((link) => isHamburgerBreakpoint || !link.mobileOnly)
                  .map((link) => (
                    <li key={link.label}>
                      <Link to={link.link}>{link.label}</Link>
                    </li>
                  ))}
              </ul>
              <span className="expand-icon-wrapper">
                <ExpandIcon />
              </span>
            </div>
          ))}
          <span
            className={`second-nav-background ${
              activeSubMenuName !== null && !isHamburgerBreakpoint && "active"
            }`}
          ></span>
        </li>
        <li>
          <Link to="/prices">Prices</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </NavWrapper>
  );
};

export default Nav;
