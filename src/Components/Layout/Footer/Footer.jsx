import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <footer classNameName="footer" dir="rtl">
      <div className="container footer-content">
        <div className="footer-content__item">
          <h6>دکتردکتر</h6>
          <a href="/" className="footer-content__item-link">
            وبلاگ
          </a>
          <a href="/" className="footer-content__item-link">
            امور مشتریان
          </a>
          <a href="/" className="footer-content__item-link">
            تماس با ما
          </a>
          <a href="/" className="footer-content__item-link">
            فرصت شغلی
          </a>
        </div>
        <div className="footer-content__item">
          <h6>بیماران</h6>
          <a href="/" className="footer-content__item-link">
            دانلود اپ
          </a>
          <a href="/" className="footer-content__item-link">
            نسخه وب
          </a>
          <a href="/" className="footer-content__item-link">
            سوالات متداول
          </a>
          <a href="/" className="footer-content__item-link">
            باشگاه دکتر
          </a>
        </div>
        <div className="footer-content__item">
          <h6>پزشکان</h6>
          <a href="/" className="footer-content__item-link">
            دانلود اپ
          </a>
          <a href="/" className="footer-content__item-link">
            نسخه وب
          </a>
          <a href="/" className="footer-content__item-link">
            سوالات متداول
          </a>
          <a href="/" className="footer-content__item-link">
            باشگاه پزشکان
          </a>
        </div>
        <div className="footer-content__item">
          <h6>کسب و کار ها</h6>
          <a href="/" className="footer-content__item-link">
            پنل سازمانی
          </a>
          <a href="/" className="footer-content__item-link">
            خرید اعتبار
          </a>
          <a href="/" className="footer-content__item-link">
            قوانین
          </a>
          <a href="/" className="footer-content__item-link">
            همکاری با ما
          </a>
        </div>
        <div className="footer-content__item">
          <h6>شبکه های اجتماعی</h6>
          <a href="/" className="footer-content__item-link">
            توییتر
          </a>
          <a href="/" className="footer-content__item-link">
            اینستاگرام
          </a>
          <a href="/" className="footer-content__item-link">
            لینکدین
          </a>
          <a href="/" className="footer-content__item-link">
            ایمیل
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
