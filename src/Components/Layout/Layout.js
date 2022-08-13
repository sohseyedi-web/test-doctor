import React, { useState } from "react";
import Navbar from "./Navbar/Navbar";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Services from "./Services/Services";
import Contact from "./Contact/Contact";
import Accordion from "./Accordion/Accordion";

const Layout = () => {
  const [lang, setLang] = useState(false);

  return (
    <>
      <Navbar lang={lang} setLang={setLang} />
      <Header />
      <Services />
      <Accordion />
      <Contact />
      <Footer />
    </>
  );
};

export default Layout;
