import React, { useState } from "react";
import "../scss/_reset.scss";
import { ContactForm } from "./ContactForm";
import { IntroPortfolio } from "./IntroPortfolio";
import { Modal } from "./Modal";
import { Navbar } from "./Navbar";
import { SectionFooter } from "./SectionFooter";
import { SectionProjects } from "./SectionProjects";
import { SectionStack } from "./SectionStack";

export const Index = () => {
  const [estado1, setEstado1] = useState(false);
  return (
    <div>
      <Navbar />
      <IntroPortfolio />
      <SectionStack />
      <SectionProjects />
      <ContactForm estado2={estado1} estadoModal2={setEstado1} />
      {estado1 ? (
        <Modal estado={estado1} estadoModal={setEstado1} />
      ) : (
        setEstado1
      )}
      <SectionFooter />
    </div>
  );
};
