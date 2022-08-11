import React, { useState } from 'react'
import Navbar from './Navbar/Navbar';
import Header from './Header/Header';
import Footer from './Footer/Footer';

const Layout = () => {
  const [lang, setLang] = useState(false);

  return (
    <>
        <Navbar lang={lang} setLang={setLang}/>
        <Header/>
        <Footer/>
    </>
  )
}

export default Layout