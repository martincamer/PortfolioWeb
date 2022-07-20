import React, { useEffect, useState } from "react";
import styled from "styled-components";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  FaGithub,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
  FaBars,
} from "react-icons/fa";
import { MdClose } from "react-icons/md";
import "../scss/_nav.scss";

export const Navbar = () => {
  const [click, setClick] = useState(false);
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <Header>
      {/* Menu Desktop Sitio Web */}
      <Nav>
        <div className="logo__header">
          <h1
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-delay="1200"
          >
            Martin <span>Camer</span>.
          </h1>
        </div>
        <div
          className="nav__header"
          data-aos="fade-left"
          data-aos-duration="1250"
          data-aos-delay="1500"
        >
          <div className="nav__list">
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
          <div className="nav__icons">
            <ul>
              <li>
                <a href="#">
                  <FaGithub style={{ fontSize: "1.46rem", color: "#2b2b2b" }} />
                </a>
              </li>

              <li>
                <a href="#">
                  <FaTwitter
                    style={{ fontSize: "1.46rem", color: "#439bff" }}
                  />
                </a>
              </li>

              <li>
                <a href="#">
                  <FaLinkedin
                    style={{ fontSize: "1.46rem", color: "#094fa0" }}
                  />
                </a>
              </li>

              <li>
                <a href="#">
                  <FaInstagram
                    style={{ fontSize: "1.46rem", color: "#fd1d1d" }}
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="hamburguer-menu" onClick={() => setClick(!click)}>
          {!click ? (
            <FaBars style={{ fontSize: "1.26rem", color: "#e70faa" }} />
          ) : (
            <MdClose style={{ fontSize: "1.74rem", color: "#e70faa" }} />
          )}
        </div>
      </Nav>

      {/* Menu Desktop Sitio Web */}

      {/* Menu Mobile de mi sitio web */}
      <>
        {click ? (
          <NavMobile>
            <div
              className="mobile__list"
              data-aos="fade-right"
              data-aos-duration="1000"
              data-aos-delay="1000"
            >
              <div className="title__mobile">
                <span className="span__one">
                  Martin <span className="camer__span">Camer</span>.
                </span>
                <br />
                <span className="span__two">Front-End Developer</span>
              </div>
              <ul>
                <li>
                  <a href="#">Home</a>
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
            <div className="mobile__icons">
              <ul>
                <li>
                  <a href="#">
                    <FaGithub
                      style={{
                        fontSize: "1.9rem",
                        color: "white",
                      }}
                    />
                  </a>
                </li>

                <li>
                  <a href="#">
                    <FaTwitter
                      style={{
                        fontSize: "1.9rem",
                        color: "white",
                      }}
                    />
                  </a>
                </li>

                <li>
                  <a href="#">
                    <FaLinkedin
                      style={{
                        fontSize: "1.9rem",
                        color: "white",
                      }}
                    />
                  </a>
                </li>

                <li>
                  <a href="#">
                    <FaInstagram
                      style={{
                        fontSize: "1.9rem",
                        color: "white",
                      }}
                    />
                  </a>
                </li>
              </ul>
            </div>
          </NavMobile>
        ) : (
          setClick
        )}
      </>
      {/* Nenu de mi sitio web */}
    </Header>
  );
};

const Header = styled.header`
  width: 100%;
  max-width: 100%;
  display: flex;
  justify-content: center;
  position: fixed;
  z-index: 1;
  background-color: #f5f5f5;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  width: 1440px;
  max-width: calc(100% - 20px);
  height: 5rem;
  max-height: 100%;
  margin: 0 auto;
  padding: 0px 1rem;
`;

const NavMobile = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 6rem;
  position: absolute;
  left: auto;
  top: 5rem;
  height: 100%;
  max-height: 100%;
  max-width: calc(100% - 0px);
  width: 100%;
  background-color: #191919;
  box-sizing: border-box;
  position: fixed;
  animation: animacionMenu 1s;
  @keyframes animacionMenu {
    0% {
      transform: translateX(-200px);
    }
    100% {
      transform: translateX(0px);
    }
  }
`;
