import React from "react";

const AboutPage = () => {
  return (
    <>
      <p>I am the about page</p>
      <div class="fixed-nav">
        <ul>
          <li class="is-active">
            <a href="#stage1">Biography and Interests</a>
          </li>
          <li>
            <a href="#stage2">Who Owns Marvin Bows?</a>
          </li>
          <li>
            <a href="#stage3">Recommendations</a>
          </li>
          <li>
            <a href="#stage4">Dignissimos Sed</a>
          </li>
        </ul>
      </div>
    </>
  );
};

export const Head = () => <title>About</title>;

export default AboutPage;
