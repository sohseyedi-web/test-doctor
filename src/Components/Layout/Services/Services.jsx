import "./Services.scss";
import { Link } from "react-router-dom";
import Doctor from "../../Assets/Doctor.svg";
import Bimar from "../../Assets/Bimar.svg";
const Services = () => {
  return (
    <section className="services" dir="rtl">
      <div className="container services-container">
        <div className="services-container__title">
          ارایه میدیم
          <h1>دکتردکتر</h1>
          خدماتی که ما در
        </div>
        <div className="services-container__box">
          <div className="services-container__box-item">
            <div className="services-container__box-item__title">
              نوبت دهی آنلاین
            </div>
            <p className="services-container__box-item__subtitle">
              با روز و ساعات انتخابی
            </p>
          </div>
          <div className="services-container__box-item">
            <div className="services-container__box-item__title">
              ویزیت آنلاین
            </div>
            <p className="services-container__box-item__subtitle">
              با بیش از 100 دکتر
            </p>
          </div>
          <div className="services-container__box-item">
            <div className="services-container__box-item__title">
              مشاوره آنلاین
            </div>
            <p className="services-container__box-item__subtitle">
              به همراه مشاورین تخصصی
            </p>
          </div>
          <div className="services-container__box-item">
            <div className="services-container__box-item__title">ثبت نسخه</div>
            <p className="services-container__box-item__subtitle">
              تحت پوشش همه بیمه ها
            </p>
          </div>
          <div className="services-container__box-item">
            <div className="services-container__box-item__title">
              بلاگ پزشکی
            </div>
            <p className="services-container__box-item__subtitle">
              آخرین اخبار از علم پزشکی
            </p>
          </div>
        </div>
        <div className="services-container__wrap">
          <div className="services-container__wrap-details">
            <div className="services-container__wrap-details__text">
              <p className="services-container__wrap-details__text-sub">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله
                در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد
                نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد
              </p>
              <Link
                to={"/"}
                className="services-container__wrap-details__text-link"
              >
                عضویت پزشکان
              </Link>
            </div>
            <div className="services-container__wrap-details__img">
              <img src={Doctor} alt="" />
            </div>
          </div>
          <div className="services-container__wrap-details">
            <div className="services-container__wrap-details__img">
              <img src={Bimar} alt="" />
            </div>
            <div className="services-container__wrap-details__text">
              <p className="services-container__wrap-details__text-sub">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله
                در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد
                نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد
              </p>
              <Link
                to={"/"}
                className="services-container__wrap-details__text-link"
              >
                نوبت دهی آنلاین
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
