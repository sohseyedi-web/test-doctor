
import { Link } from "react-router-dom";
import "./Navbar.scss";

const Navbar = ({lang, setLang}) => {

  return (
    <nav className="navs" dir={lang ? "ltr" : "rtl"}>
      <div className="container navs-container">
        {lang ? (
          <>
            <h2>Logo</h2>
            <div className="navs-container__links">
              <Link to={"/"} className={"navs-container__links-auth"}>
                Account
              </Link>
              <div className={"navs-container__links-lang"}>
                <span onClick={() => setLang(false)}>persian</span>
                <span onClick={() => setLang(true)}>english</span>
              </div>
            </div>
          </>
        ) : (
          <>
            <h2>لوگو</h2>
            <div className="navs-container__links">
              <Link to={"/"} className="navs-container__links-auth">
                حساب کاربری
              </Link>
              <div className="navs-container__links-lang">
                <span onClick={() => setLang(false)}>فارسی</span>
                <span onClick={() => setLang(true)}>انگلیسی</span>
              </div>
            </div>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
