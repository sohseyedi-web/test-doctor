import "./Services.scss";
const Services = () => {
  return (
    <section className="services">
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
      </div>
    </section>
  );
};

export default Services;
