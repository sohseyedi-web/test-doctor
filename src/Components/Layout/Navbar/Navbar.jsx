import { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss";

const Navbar = ({ lang, setLang }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <nav className="navs" dir={lang ? "ltr" : "rtl"}>
      <div className="container navs-container">
        {lang ? (
          <>
            <h2>Logo</h2>
            <div className="navs-container__links">
              <Link to={"/"} className={"navs-container__links-auth"}>
                User Account
              </Link>
              <div className="navs-container__links-lang">
                <div
                  className="navs-container__links-lang__btn"
                  onClick={() => setIsActive(!isActive)}
                >
                  English
                </div>
                {isActive && (
                  <div className="navs-container__links-lang__items">
                    <div
                      className="navs-container__links-lang__items-text"
                      onClick={() => {
                        setLang(false);
                        setIsActive(false);
                      }}
                    >
                      Persian
                    </div>
                  </div>
                )}
              </div>
            </div>
          </>
        ) : (
          <>
            <h2>لوگو</h2>
            <div className="navs-container__links">
              <div className="navs-container__links-lang">
                <div
                  className="navs-container__links-lang__btn"
                  onClick={() => setIsActive(!isActive)}
                >
                  فارسی
                </div>
                {isActive && (
                  <div className="navs-container__links-lang__items">
                    <div
                      className="navs-container__links-lang__items-text"
                      onClick={() => {
                        setLang(true);
                        setIsActive(false);
                      }}
                    >
                      انگلیسی
                    </div>
                  </div>
                )}
              </div>
              <Link to={"/"} className="navs-container__links-auth">
                حساب کاربری
              </Link>
            </div>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
