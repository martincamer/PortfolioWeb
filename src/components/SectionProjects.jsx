import React from "react";
import { FaCodeBranch, FaGithub } from "react-icons/fa";
import styled from "styled-components";
import "../scss/sectionProjects.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const SectionProjects = () => {
  return (
    <Section>
      <div className="SectionProjects__one">
        <div className="title__projects">
          <h2>Projects</h2>
        </div>
        <div className="paragraph__projects">
          <p>Projects made with React Stack</p>
        </div>
      </div>

      <div className="grid">
        <Card>
          <div className="card__img">
            <img src="https://s3-alpha-sig.figma.com/img/c58f/84a0/6b364f1d268c5f396af9f68e95fa8167?Expires=1658707200&Signature=hmkNrqjp3LRd92-uyJJ1eD4hLAHkmlWh3rC5Cg3--J6XDfEMq4~nE6TBslhF6j64MrNEHRDT37YNfepgVQ7bUFZHaqb5z0sMJkqhlPrhEy8T3D7yAn5r7in7qyVJFfUXE9X5TOoJEbAq~8l7oZpUMlbjRrq2GaSMArH7UVjB1V271wEc2b5YmzOXbq6QLN0TdXhsRJ1eVYJXIo9PclfAT1M1alWKSZXR3SDCr93MLFvleKHQYiADbw-nK2a7FT8xnOl4WigiG0mEJHyhHfcO5nZ~eauh5knbpNpQdWo2m7NIvQlUQvWdQp4ufihFwspJJOGy5vQBSzdjwGJtD4emPw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" />
          </div>
          <div className="content_card">
            <div className="title__Card">
              <p>Project React 2022 Shop</p>
            </div>
            <div className="parrafo">
              <p>
                This is sample project description random things are here in
                description This is sample project lorem ipsum generator for
                dummy content
              </p>
            </div>
            <div className="parrafo__title">
              Tech stack : HTML , JavaScript, SASS, React
            </div>
            <div className="icons__card">
              <div className="icon__one">
                <FaCodeBranch style={{ fontSize: "1.4rem" }} />
                <p>Live Preview</p>
              </div>
              <div className="icon__two">
                <FaGithub style={{ fontSize: "2rem" }} />
                <a href="#">View Code</a>
              </div>
            </div>
          </div>
        </Card>
        <Card>
          <div className="card__img">
            <img src="https://s3-alpha-sig.figma.com/img/c58f/84a0/6b364f1d268c5f396af9f68e95fa8167?Expires=1658707200&Signature=hmkNrqjp3LRd92-uyJJ1eD4hLAHkmlWh3rC5Cg3--J6XDfEMq4~nE6TBslhF6j64MrNEHRDT37YNfepgVQ7bUFZHaqb5z0sMJkqhlPrhEy8T3D7yAn5r7in7qyVJFfUXE9X5TOoJEbAq~8l7oZpUMlbjRrq2GaSMArH7UVjB1V271wEc2b5YmzOXbq6QLN0TdXhsRJ1eVYJXIo9PclfAT1M1alWKSZXR3SDCr93MLFvleKHQYiADbw-nK2a7FT8xnOl4WigiG0mEJHyhHfcO5nZ~eauh5knbpNpQdWo2m7NIvQlUQvWdQp4ufihFwspJJOGy5vQBSzdjwGJtD4emPw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" />
          </div>
          <div className="content_card">
            <div className="title__Card">
              <p>Project React 2022 Shop</p>
            </div>
            <div className="parrafo">
              <p>
                This is sample project description random things are here in
                description This is sample project lorem ipsum generator for
                dummy content
              </p>
            </div>
            <div className="parrafo__title">
              Tech stack : HTML , JavaScript, SASS, React
            </div>
            <div className="icons__card">
              <div className="icon__one">
                <FaCodeBranch style={{ fontSize: "1.4rem" }} />
                <p>Live Preview</p>
              </div>
              <div className="icon__two">
                <FaGithub style={{ fontSize: "2rem" }} />
                <a href="#">View Code</a>
              </div>
            </div>
          </div>
        </Card>
        <Card>
          <div className="card__img">
            <img src="https://s3-alpha-sig.figma.com/img/c58f/84a0/6b364f1d268c5f396af9f68e95fa8167?Expires=1658707200&Signature=hmkNrqjp3LRd92-uyJJ1eD4hLAHkmlWh3rC5Cg3--J6XDfEMq4~nE6TBslhF6j64MrNEHRDT37YNfepgVQ7bUFZHaqb5z0sMJkqhlPrhEy8T3D7yAn5r7in7qyVJFfUXE9X5TOoJEbAq~8l7oZpUMlbjRrq2GaSMArH7UVjB1V271wEc2b5YmzOXbq6QLN0TdXhsRJ1eVYJXIo9PclfAT1M1alWKSZXR3SDCr93MLFvleKHQYiADbw-nK2a7FT8xnOl4WigiG0mEJHyhHfcO5nZ~eauh5knbpNpQdWo2m7NIvQlUQvWdQp4ufihFwspJJOGy5vQBSzdjwGJtD4emPw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" />
          </div>
          <div className="content_card">
            <div className="title__Card">
              <p>Project React 2022 Shop</p>
            </div>
            <div className="parrafo">
              <p>
                This is sample project description random things are here in
                description This is sample project lorem ipsum generator for
                dummy content
              </p>
            </div>
            <div className="parrafo__title">
              Tech stack : HTML , JavaScript, SASS, React
            </div>
            <div className="icons__card">
              <div className="icon__one">
                <FaCodeBranch style={{ fontSize: "1.4rem" }} />
                <p>Live Preview</p>
              </div>
              <div className="icon__two">
                <FaGithub style={{ fontSize: "2rem" }} />
                <a href="#">View Code</a>
              </div>
            </div>
          </div>
        </Card>
        <Card>
          <div className="card__img">
            <img src="https://s3-alpha-sig.figma.com/img/c58f/84a0/6b364f1d268c5f396af9f68e95fa8167?Expires=1658707200&Signature=hmkNrqjp3LRd92-uyJJ1eD4hLAHkmlWh3rC5Cg3--J6XDfEMq4~nE6TBslhF6j64MrNEHRDT37YNfepgVQ7bUFZHaqb5z0sMJkqhlPrhEy8T3D7yAn5r7in7qyVJFfUXE9X5TOoJEbAq~8l7oZpUMlbjRrq2GaSMArH7UVjB1V271wEc2b5YmzOXbq6QLN0TdXhsRJ1eVYJXIo9PclfAT1M1alWKSZXR3SDCr93MLFvleKHQYiADbw-nK2a7FT8xnOl4WigiG0mEJHyhHfcO5nZ~eauh5knbpNpQdWo2m7NIvQlUQvWdQp4ufihFwspJJOGy5vQBSzdjwGJtD4emPw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" />
          </div>
          <div className="content_card">
            <div className="title__Card">
              <p>Project React 2022 Shop</p>
            </div>
            <div className="parrafo">
              <p>
                This is sample project description random things are here in
                description This is sample project lorem ipsum generator for
                dummy content
              </p>
            </div>
            <div className="parrafo__title">
              Tech stack : HTML , JavaScript, SASS, React
            </div>
            <div className="icons__card">
              <div className="icon__one">
                <FaCodeBranch style={{ fontSize: "1.4rem" }} />
                <p>Live Preview</p>
              </div>
              <div className="icon__two">
                <FaGithub style={{ fontSize: "2rem" }} />
                <a href="#">View Code</a>
              </div>
            </div>
          </div>
        </Card>
        <Card>
          <div className="card__img">
            <img src="https://s3-alpha-sig.figma.com/img/c58f/84a0/6b364f1d268c5f396af9f68e95fa8167?Expires=1658707200&Signature=hmkNrqjp3LRd92-uyJJ1eD4hLAHkmlWh3rC5Cg3--J6XDfEMq4~nE6TBslhF6j64MrNEHRDT37YNfepgVQ7bUFZHaqb5z0sMJkqhlPrhEy8T3D7yAn5r7in7qyVJFfUXE9X5TOoJEbAq~8l7oZpUMlbjRrq2GaSMArH7UVjB1V271wEc2b5YmzOXbq6QLN0TdXhsRJ1eVYJXIo9PclfAT1M1alWKSZXR3SDCr93MLFvleKHQYiADbw-nK2a7FT8xnOl4WigiG0mEJHyhHfcO5nZ~eauh5knbpNpQdWo2m7NIvQlUQvWdQp4ufihFwspJJOGy5vQBSzdjwGJtD4emPw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" />
          </div>
          <div className="content_card">
            <div className="title__Card">
              <p>Project React 2022 Shop</p>
            </div>
            <div className="parrafo">
              <p>
                This is sample project description random things are here in
                description This is sample project lorem ipsum generator for
                dummy content
              </p>
            </div>
            <div className="parrafo__title">
              Tech stack : HTML , JavaScript, SASS, React
            </div>
            <div className="icons__card">
              <div className="icon__one">
                <FaCodeBranch style={{ fontSize: "1.4rem" }} />
                <p>Live Preview</p>
              </div>
              <div className="icon__two">
                <FaGithub style={{ fontSize: "2rem" }} />
                <a href="#">View Code</a>
              </div>
            </div>
          </div>
        </Card>

        <Card>
          <div className="card__img">
            <img src="https://s3-alpha-sig.figma.com/img/c58f/84a0/6b364f1d268c5f396af9f68e95fa8167?Expires=1658707200&Signature=hmkNrqjp3LRd92-uyJJ1eD4hLAHkmlWh3rC5Cg3--J6XDfEMq4~nE6TBslhF6j64MrNEHRDT37YNfepgVQ7bUFZHaqb5z0sMJkqhlPrhEy8T3D7yAn5r7in7qyVJFfUXE9X5TOoJEbAq~8l7oZpUMlbjRrq2GaSMArH7UVjB1V271wEc2b5YmzOXbq6QLN0TdXhsRJ1eVYJXIo9PclfAT1M1alWKSZXR3SDCr93MLFvleKHQYiADbw-nK2a7FT8xnOl4WigiG0mEJHyhHfcO5nZ~eauh5knbpNpQdWo2m7NIvQlUQvWdQp4ufihFwspJJOGy5vQBSzdjwGJtD4emPw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" />
          </div>
          <div className="content_card">
            <div className="title__Card">
              <p>Project React 2022 Shop</p>
            </div>
            <div className="parrafo">
              <p>
                This is sample project description random things are here in
                description This is sample project lorem ipsum generator for
                dummy content
              </p>
            </div>
            <div className="parrafo__title">
              Tech stack : HTML , JavaScript, SASS, React
            </div>
            <div className="icons__card">
              <div className="icon__one">
                <FaCodeBranch style={{ fontSize: "1.4rem" }} />
                <p>Live Preview</p>
              </div>
              <div className="icon__two">
                <FaGithub style={{ fontSize: "2rem" }} />
                <a href="#">View Code</a>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </Section>
  );
};

const Section = styled.section`
  width: 1440px;
  max-width: calc(100% - 20px);
  height: 100%;
  max-height: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 3rem;
  padding: 0px 20px;
  margin-top: 150px;
  margin-bottom: 150px;
`;

const Card = styled.div`
  width: 80%;
  max-width: 100%;
  min-width: 100%;
  height: 100%;
  max-height: 100%;
  background-color: #ffff;
  border-radius: 20px 20px 5px 5px;
  box-shadow: 10px 10px 20px 4px #4b4b4b45;
`;
