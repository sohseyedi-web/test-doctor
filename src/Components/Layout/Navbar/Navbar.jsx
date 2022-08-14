import { Link } from "react-router-dom";
import { MdOutlineLanguage } from "react-icons/md";
import "./Navbar.scss";
import { useModal } from "../../../Context/ModalProvider";
import Modal from "../../../Common/Modal/Modal";

const Navbar = () => {
  const { openModal } = useModal();
  return (
    <nav className="navs" dir="rtl">
      <div className="container navs-container">
        <div className="navs-container__right">
          <h3 className="navs-container__right-logo">دکتردکتر</h3>
          <div className="navs-container__right-links">
            <Link to={"/"}>خانه</Link>
            <Link to={"/"}>بلاگ</Link>
            <Link to={"/"}>درباره ما</Link>
            <Link to={"/"}>تماس با ما</Link>
          </div>
        </div>
        <div className="navs-container__left">
          <button onClick={openModal} className="navs-container__left-auth">
            ورود / ثبت نام
          </button>
          <Modal />
          <Link to={"/"} className="navs-container__left-lang">
            English
            <MdOutlineLanguage size={24} />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
