import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Nav from "./Project_Layout/Nav";
import Header from "./Project_Section/header";
import MyServices from "./Project_Section/MyServices";
import SpecialSkills from "./Project_Section/SpecialSkills";
import ProjectSec from "./Project_Section/Project_Sec";
import ContactSec from "./Project_Section/ContactSec";
import Footer from "./Project_Layout/Footer";
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
