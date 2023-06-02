import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import styled from "styled-components";

const HomePageStyles = styled.div`
  div.hero {
    position: relative;
    h1 {
      position: absolute;
      top: 0;
      bottom: 0;
      right: 0;
      left: 0;
      color: var(--linen);
      display: flex;
      align-items: center;
      z-index: 1;
      letter-spacing: 2px;
      font-size: calc(3.5vw + 2.5rem);
      &:first-child {
        left: 6rem;
        bottom: 8.5vw;
      }
      &:nth-child(2) {
        justify-content: center;
        right: 55%;
      }
    }
  }

  .hero-body {
    margin: 10rem 6rem;
    display: flex;
    justify-content: space-around;

    h2 {
      text-transform: uppercase;
    }

    .gatsby-image-wrapper {
      width: 25%;
    }

    div {
      width: calc(20px + 20vw);
    }
  }
`;

const HomePage = () => {
  return (
    <HomePageStyles>
      <div className="hero">
        <h1>Historical</h1>
        <h1>Bows</h1>
        <StaticImage
          style={{ height: "100vh" }}
          alt="A viola bow"
          src="../images/hero.jpg"
        />
      </div>
      <div className="hero-body">
        <StaticImage src="../images/old_headshot.jpeg" alt="" />
        <div>
          <h2>Hello, I'm Stephen</h2>
          <p>
            For over 40 years I have studied surviving historical bow examples,
            sometimes called original or period bows. I reproduce them with
            careful attention to the crafting techniques and materials employed.
            When making early model bows, I make close copies, but take account
            of the natural variation found in extant examples of a particular
            model or historical variation within the work of a known maker.
          </p>
        </div>
      </div>
      <div className="hero-body">
        <StaticImage src="../images/old_bows_tip.jpeg" alt="" />
        <div>
          <p>
            On these pages you can see near life-size photographs of Baroque
            Bows, including long and short "sonata bows" and special bows for
            viola d'amore, viol and bass (violone). See also Classical Bows,
            (sometimes called Transitional Bows) my reproductions of the work of
            Meauchand and the early work of Tourte and his contemporaries from
            France; members of the Dodd family and the Betts shop in England. I
            have also found exquisite early examples of Italian and German
            classical bows, previously unidentified. Currently I am making a few
            very special Modern bows, designed after the later work of Tourte,
            Lafleur and Eury, and finally some stronger Peccatte models.
          </p>
        </div>
      </div>
      <div className="hero-body">
        <div>
          <p>
            Working with bows made before 1800 requires research and extensive
            study. I have visited many museums and private collections, and use
            well seasoned wood species found in the original examples. I have
            lectured on the history of bows and bowmaking, and my collection of
            woods used historically for bowmaking is on display at conventions
            and workshops.
          </p>
          <p>
            You are encouraged to peruse the photographs and explore the links
            to baroque bow and instrument makers and related craftsmen. I
            appreciate comments, and questions are always welcome. See my
            contact page or e-mail me at:
          </p>
        </div>
        <StaticImage src="../images/old_bows_end.jpeg" alt="" />
      </div>
    </HomePageStyles>
  );
};

export const Head = () => <title>Home</title>;

export default HomePage;
