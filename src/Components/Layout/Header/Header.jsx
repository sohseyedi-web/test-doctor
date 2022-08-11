import "./Header.scss";
import Head from "../../Assets/Header.svg";
const Header = () => {
  return (
    <header className="header">
      <div className="container header-container">
        <div className="header-container__left">
          <div className="header-container__left-title">نوبت دهی آنلاین</div>
          <div className="header-container__left-title">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است</div>
            <div>ثبت نوبت</div>
        </div>
        <div className="header-container__right">
          <img src={Head} />
        </div>
      </div>
    </header>
  );
};

export default Header;
