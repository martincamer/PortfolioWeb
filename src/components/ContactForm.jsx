import React, { useState } from "react";
import styled from "styled-components";
import "../scss/sectionFormulary.scss";
import { FaInstagram, FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";
export const ContactForm = ({ estado2, estadoModal2 }) => {
  return (
    <Form>
      <div className="form-title-paragraph">
        <div className="formulary__title">
          <div>
            <h2>Contact Us.</h2>
          </div>
        </div>
        <div className="formulary__paragraph">
          <p>If you want to consult me ​​send me a message.</p>
        </div>
      </div>
      <form className="formulary">
        <div className="form__msg">
          <label htmlFor="">First Name</label>
          <input type="text" placeholder="First Name" />
        </div>
        <div className="form__msg">
          <label htmlFor="">Last Name</label>
          <input placeholder="Last Name" type="text" />
        </div>

        <div className="form__msg">
          <label htmlFor="">Email</label>
          <input placeholder="Email" type="email" />
        </div>

        <div className="form__msg">
          <label htmlFor="">Phone Number</label>
          <input placeholder="Phone Number" type="Number" />
        </div>

        <div className="send__message">
          <a onClick={() => estadoModal2(!estado2)}>Send Message</a>
        </div>

        <div className="social__workings">
          <ul>
            <li>
              <a href="#">
                <FaGithub style={{ fontSize: "2rem", color: "#ffff" }} />
              </a>
            </li>

            <li>
              <a href="#">
                <FaTwitter style={{ fontSize: "2rem", color: "#ffff" }} />
              </a>
            </li>

            <li>
              <a href="#">
                <FaLinkedin style={{ fontSize: "2rem", color: "#ffff" }} />
              </a>
            </li>

            <li>
              <a href="#">
                <FaInstagram style={{ fontSize: "2rem", color: "#ffff" }} />
              </a>
            </li>
          </ul>
        </div>
      </form>
    </Form>
  );
};

const Form = styled.section`
  width: 1220px;
  max-width: calc(100% - 20px);
  margin: 0 auto;
  padding: 0px 10px;
  margin-top: 150px;
  margin-bottom: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 3.5rem;
`;
