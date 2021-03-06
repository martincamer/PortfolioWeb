import React from "react";
import styled from "styled-components";
import "../scss/_introPortfolio.scss";
import Typewriter from "typewriter-effect";
export const IntroPortfolio = () => {
  return (
    <Section>
      <Content>
        <div className="content__one">
          <p>
            <span>Hi</span>👋, My name is Martin, And I am a web design
            enthusiast with a strong detail orientation and creativity.
            <Typewriter
              options={{
                autoStart: true,
                loop: true,
                delay: 200,
                strings: ["Software Developer FrontEnd."],
              }}
            />
          </p>

          <a href="#">Contact</a>
        </div>
        <div className="content__two">
          <div className="imageEffecto"></div>
        </div>
      </Content>
    </Section>
  );
};

const Section = styled.section`
  width: 1220px;
  max-width: calc(100% - 20px);
  height: 100%;
  margin: 0 auto;
  padding: 0px 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
`;

const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 6fr);
  grid-template-rows: auto;
  column-gap: 10rem;
  gap: 5rem;
  justify-content: center;
  justify-items: center;
  align-content: center;
  max-width: 100%;
  width: 100%;
  margin-top: 150px;
  margin-bottom: 150px;
  @media screen and (max-width: 1000px) {
    grid-template-columns: repeat(1, 100%);
  }
`;
