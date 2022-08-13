import "./Header.scss";
import Head from "../../Assets/Header.svg";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header className="header">
      <div className="container header-container">
        <div className="header-container__right">
          <img src={Head} />
        </div>
        <div className="header-container__left">
          <div className="header-container__left-title">دکتردکتر، نوبت دهی آنلاین</div>
          <p className="header-container__left-subtitle">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است
          </p>
          <Link to={"/"} className="header-container__left-btn"> -- ثبت نوبت</Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
