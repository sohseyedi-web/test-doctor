import React, { useState } from "react";

const Services = () => {
  const [selected, setSelected] = useState(null);

    const activeAccordion = (index) => {
        if (selected === index) return setSelected(null)

        setSelected(index)
    }
  return (
    <section className="servcies">
      <div className="container services-container">
        <div className="services-container__title">
          خدماتی که ما در <h1>دکتردکتر</h1> ارایه میدیم
        </div>
        <div className="services-container__box">
          <div className="services-container__box-item">
              
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
