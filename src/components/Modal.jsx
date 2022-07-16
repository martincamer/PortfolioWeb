import React, { useEffect } from "react";
import { MdClose } from "react-icons/md";
import styled from "styled-components";
import "../scss/modal.scss";
import AOS from "aos";
import "aos/dist/aos.css";

export const Modal = ({ estado, estadoModal }) => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <>
      {estado && (
        <ModalAuto>
          <ModalContenido
            data-aos="zoom-out-right"
            data-aos-duration="1000"
            data-aos-delay="1200"
          >
            <div className="modal__title">
              <h2>Message Send.</h2>
            </div>
            <div className="modal_paragraph">
              <p>
                Thank you very much for contacting me. I'll send you a message.
              </p>
            </div>
            <div className="close" onClick={() => estadoModal(!estado)}>
              <MdClose style={{ fontSize: "2.2rem", color: "#e70faa" }} />
            </div>

            <div className="button__modal">
              <div onClick={() => estadoModal(!estado)}>
                <a>Close</a>
              </div>
              <div onClick={() => estadoModal(!estado)}>
                <a>to accept</a>
              </div>
            </div>
          </ModalContenido>
        </ModalAuto>
      )}
    </>
  );
};

const ModalAuto = styled.div`
  width: 100%;
  height: 100%;
  background-color: #6161614e;
  position: fixed;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0px 20px;
`;

const ModalContenido = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 3rem;
  flex-direction: column;
  width: 600px;
  height: 400px;
  border-radius: 30px;
  background-color: #ffff;
  padding: 20px;
  position: relative;
`;
