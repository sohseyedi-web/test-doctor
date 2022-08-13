// import React from "react";
// import "./Footer.scss";

// const Footer = () => {
//   return (
//     <footer classNameName="footer" dir="rtl">
//       <div className="footer-content container ">
//         <div className="footer-content__item">
//           <h6>دکتردکتر</h6>
//           <a href="/" className="footer-content__item-link">
//             وبلاگ
//           </a>
//           <a href="/" className="footer-content__item-link">
//             امور مشتریان
//           </a>
//           <a href="/" className="footer-content__item-link">
//             تماس با ما
//           </a>
//           <a href="/" className="footer-content__item-link">
//             فرصت شغلی
//           </a>
//         </div>
//         <div className="footer-content__item">
//           <h6>بیماران</h6>
//           <a href="/" className="footer-content__item-link">
//             دانلود اپ
//           </a>
//           <a href="/" className="footer-content__item-link">
//             نسخه وب
//           </a>
//           <a href="/" className="footer-content__item-link">
//             سوالات متداول
//           </a>
//           <a href="/" className="footer-content__item-link">
//             باشگاه دکتر
//           </a>
//         </div>
//         <div className="footer-content__item">
//           <h6>پزشکان</h6>
//           <a href="/" className="footer-content__item-link">
//             دانلود اپ
//           </a>
//           <a href="/" className="footer-content__item-link">
//             نسخه وب
//           </a>
//           <a href="/" className="footer-content__item-link">
//             سوالات متداول
//           </a>
//           <a href="/" className="footer-content__item-link">
//             باشگاه پزشکان
//           </a>
//         </div>
//         <div className="footer-content__item">
//           <h6>کسب و کار ها</h6>
//           <a href="/" className="footer-content__item-link">
//             پنل سازمانی
//           </a>
//           <a href="/" className="footer-content__item-link">
//             خرید اعتبار
//           </a>
//           <a href="/" className="footer-content__item-link">
//             قوانین
//           </a>
//           <a href="/" className="footer-content__item-link">
//             همکاری با ما
//           </a>
//         </div>
//         <div className="footer-content__item">
//           <h6>شبکه های اجتماعی</h6>
//           <a href="/" className="footer-content__item-link">
//             توییتر
//           </a>
//           <a href="/" className="footer-content__item-link">
//             اینستاگرام
//           </a>
//           <a href="/" className="footer-content__item-link">
//             لینکدین
//           </a>
//           <a href="/" className="footer-content__item-link">
//             ایمیل
//           </a>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

import React from "react";
FiPhone;
import {
  FiMapPin,
  FiMail,
  FiTwitter,
  FiFacebook,
  FiInstagram,
  FiLinkedin,
  FiPhone,
} from "react-icons/fi";
import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="footer" dir="rtl">
      <div className="container footer-container">
        <div className="footer-container__left">
          <h5 className="footer-container__left-title">دکتردکتر</h5>
          <div className="footer-container__left-items">
            <div className="footer-container__left-items__detail">
              <span className="footer-container__left-items__detail-icon">
                <FiMapPin size={26} />
              </span>
              <span className="footer-container__left-items__detail-text">
                خارج : آمریکا . شمال . مرکز
              </span>
            </div>
            <div className="footer-container__left-items__detail">
              <span className="footer-container__left-items__detail-icon">
                <FiMapPin size={26} />
              </span>
              <span className="footer-container__left-items__detail-text">
                ایران : تهران . تهران . جنوب
              </span>
            </div>
            <div className="footer-container__left-items__detail">
              <span className="footer-container__left-items__detail-icon">
                <FiPhone size={26} />
              </span>
              <span className="footer-container__left-items__detail-text">
                1234668974
              </span>
            </div>
          </div>
        </div>
        <div className="footer-container__right">
          <div className="footer-container__right-social">
            <a href="/">
              <FiTwitter size={28} />
            </a>
            <a href="/">
              <FiLinkedin size={28} />
            </a>
            <a href="/">
              <FiInstagram size={28} />
            </a>
            <a href="/">
              <FiFacebook size={28} />
            </a>
            <a href="/">
              <FiMail size={28} />
            </a>
          </div>

          <div className="footer-container__right-email">
            <input type="email" placeholder="ایمیل خود را وارد کنید" />
            <button>عضویت</button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
