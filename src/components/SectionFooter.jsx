import React from "react";
import styled from "styled-components";
import { FaGithub, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";
import "../scss/sectionFooter.scss";
export const SectionFooter = () => {
  return (
    <Footer>
      <div className="footer__one">
        <div className="logo__header">
          <h1>
            Martin <span>Camer</span>.
          </h1>
        </div>

        <div className="footer__contact">
          <div className="footer__phone">
            <p>+3462693961</p>
          </div>
          <div className="footer__gmail">
            <p>martincamer011@gmail.com</p>
          </div>
          <div className="redes__footer">
            <ul>
              <li>
                <a href="#">
                  <FaGithub style={{ fontSize: "2.2rem", color: "#2b2b2b" }} />
                </a>
              </li>

              <li>
                <a href="#">
                  <FaTwitter style={{ fontSize: "2.2rem", color: "#439bff" }} />
                </a>
              </li>

              <li>
                <a href="#">
                  <FaLinkedin
                    style={{ fontSize: "2.2rem", color: "#094fa0" }}
                  />
                </a>
              </li>

              <li>
                <a href="#">
                  <FaInstagram
                    style={{ fontSize: "2.2rem", color: "#fd1d1d" }}
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <hr className="hr__footer" />
      <div className="footer__two">
        <div className="nav__footer">
          <ul>
            <li>
              <a href="#" className="home">
                Home
              </a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Tech Stack</a>
            </li>
            <li>
              <a href="#">Projects</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
        <div className="content__footer">
          <p>
            Designed and built by <span>Martin Camer</span> with Love & Coffe
          </p>
        </div>
      </div>
    </Footer>
  );
};

const Footer = styled.footer`
  width: 1220px;
  max-width: calc(100% - 20px);
  height: 100%;
  padding: 0px 20px;
  margin: 0 auto;
  margin-top: 150px;
  margin-bottom: 150px;
`;
