import React, { useState } from "react";
import styled from "styled-components";
import JavasCript from "../assets/img/icons/javascript.svg";
import ReactImg from "../assets/img/icons/react.svg";
import Git from "../assets/img/icons/git.svg";
import Github from "../assets/img/icons/github.svg";
import Css from "../assets/img/icons/css.svg";
import Html from "../assets/img/icons/html.svg";
import Sass from "../assets/img/icons/sass.svg";
import Tailwind from "../assets/img/icons/tailwind.svg";
import Vscode from "../assets/img/icons/vscode.svg";
import Cib from "../assets/img/icons/cib.svg";
import "../scss/sectionStack.scss";
const images = [
  JavasCript,
  ReactImg,
  Git,
  Github,
  Css,
  Html,
  Sass,
  Tailwind,
  Vscode,
  Cib,
];

export const SectionStack = () => {
  const [imagenes] = useState(images);
  return (
    <SectionTwo>
      <div className="section__two">
        <div className="sectiontwo__title">
          <h2>My Tech Stack</h2>
        </div>
        <div className="sectiontwo__paragraph">
          <p>
            Technologies that I have been using in my projects and works
            recently
          </p>
        </div>
      </div>

      <div className="section__two__flex">
        {imagenes.map((imagenes) => (
          <div>
            <img src={imagenes} alt="" />
          </div>
        ))}
      </div>
    </SectionTwo>
  );
};

const SectionTwo = styled.section`
  width: 1440px;
  max-width: calc(100% - 20px);
  padding: 0px 20px;
  margin-top: 150px;
  margin-bottom: 150px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 4rem;
`;
