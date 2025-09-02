import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Nav from "./Nav";
import Header from "./header";
import MyServices from "./MyServices";
import SpecialSkills from "./SpecialSkills";
import ProjectSec from "./Project_Sec";
import ContactSec from "./ContactSec";
import Footer from "./Footer";
function App() {
  return (
    <>
      <Nav />
      <Header />
      <section id="service" />
      <MyServices />
      <section id="skills" />
      <SpecialSkills />
      <section id="projects" />
      <ProjectSec />
      <section className="contact" />
      <ContactSec />
      <Footer />
    </>
  );
}

export default App;
