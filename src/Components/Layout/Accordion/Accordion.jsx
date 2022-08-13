import React, { useState } from "react";
import { FiArrowDownCircle } from "react-icons/fi";
import "./Accordion.scss";

const Accordion = () => {
  const [selected, setSelected] = useState(null);

  const activeAccordion = (index) => {
    if (selected === index) return setSelected(null);

    setSelected(index);
  };

  return (
    <div className="accordion" dir="rtl">
      <div className="container">
        <div className="accordion-title">چگونه نوبت خود را ثبت کنیم؟</div>
        <div className="accordion-content">
          <div
            className={
              selected === 1
                ? "accordion-content__list active-list"
                : "accordion-content__list"
            }
            onClick={() => activeAccordion(1)}
          >
            <div className="accordion-content__list-head">
              <div className="accordion-content__list-head__title">
                ثبت نام در سایت
              </div>
              <span
                className={
                  selected === 1
                    ? "accordion-content__list-head__icon active-icon"
                    : "accordion-content__list-head__icon"
                }
              >
                <FiArrowDownCircle size={26} />
              </span>
            </div>
            <div
              className={
                selected === 1
                  ? "accordion-content__list-body active-body"
                  : "accordion-content__list-body"
              }
            >
              <p className="accordion-content__list-body__text">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله
                در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد
                نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد
                کتابهای زیادی در شصت و سه درصد گذشته حال و آینده شناخت فراوان
                جامعه و متخصصان را می طلبد
              </p>
            </div>
          </div>
          <div
            className={
              selected === 2
                ? "accordion-content__list active-list"
                : "accordion-content__list"
            }
            onClick={() => activeAccordion(2)}
          >
            <div className="accordion-content__list-head">
              <div className="accordion-content__list-head__title">
                تکمیل مشخصات فردی
              </div>
              <span
                className={
                  selected === 2
                    ? "accordion-content__list-head__icon active-icon"
                    : "accordion-content__list-head__icon"
                }
              >
                <FiArrowDownCircle size={26} />
              </span>
            </div>
            <div
              className={
                selected === 2
                  ? "accordion-content__list-body active-body"
                  : "accordion-content__list-body"
              }
            >
              <p className="accordion-content__list-body__text">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله
                در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد
                نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد
                کتابهای زیادی در شصت و سه درصد گذشته حال و آینده شناخت فراوان
                جامعه و متخصصان را می طلبد
              </p>
            </div>
          </div>
          <div
            className={
              selected === 3
                ? "accordion-content__list active-list"
                : "accordion-content__list"
            }
            onClick={() => activeAccordion(3)}
          >
            <div className="accordion-content__list-head">
              <div className="accordion-content__list-head__title">
                انتخاب خدمات مورد نظر
              </div>
              <span
                className={
                  selected === 3
                    ? "accordion-content__list-head__icon active-icon"
                    : "accordion-content__list-head__icon"
                }
              >
                <FiArrowDownCircle size={26} />
              </span>
            </div>
            <div
              className={
                selected === 3
                  ? "accordion-content__list-body active-body"
                  : "accordion-content__list-body"
              }
            >
              <p className="accordion-content__list-body__text">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله
                در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد
                نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد
                کتابهای زیادی در شصت و سه درصد گذشته حال و آینده شناخت فراوان
                جامعه و متخصصان را می طلبد
              </p>
            </div>
          </div>
          <div
            className={
              selected === 4
                ? "accordion-content__list active-list"
                : "accordion-content__list"
            }
            onClick={() => activeAccordion(4)}
          >
            <div className="accordion-content__list-head">
              <div className="accordion-content__list-head__title">
                تعیین وقت برای بیمار
              </div>
              <span
                className={
                  selected === 4
                    ? "accordion-content__list-head__icon active-icon"
                    : "accordion-content__list-head__icon"
                }
              >
                <FiArrowDownCircle size={26} />
              </span>
            </div>
            <div
              className={
                selected === 4
                  ? "accordion-content__list-body active-body"
                  : "accordion-content__list-body"
              }
            >
              <p className="accordion-content__list-body__text">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله
                در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد
                نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد
                کتابهای زیادی در شصت و سه درصد گذشته حال و آینده شناخت فراوان
                جامعه و متخصصان را می طلبد
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
