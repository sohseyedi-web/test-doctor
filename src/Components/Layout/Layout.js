import React, { useState } from "react";
import Navbar from "./Navbar/Navbar";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Services from "./Services/Services";
import Accordion from "./Accordion/Accordion";

const Layout = () => {
  const [lang, setLang] = useState(false);

  return (
    <div className="animate__animated animate__backInDown">
      <Navbar lang={lang} setLang={setLang} />
      <Header />
      <Services />
      <Accordion />
      <Footer />
    </div>
  );
};

export default Layout;
