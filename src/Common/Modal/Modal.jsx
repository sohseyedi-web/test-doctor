import React from "react";
import { MdClose } from "react-icons/md";
import { useModal } from "../../Context/ModalProvider";
import Back from "../Back/Back";

import "./Modal.scss";

const Modal = () => {
  const { modal, closeModal } = useModal();

  return (
    <>
      <Back />
      {modal ? (
        <div className="box animate__animated animate__fadeInDownBig">
          <span className="box-close" onClick={closeModal}>
            <MdClose size={32} />
          </span>
          <div className="box-details">
            <div className="box-details__title">ورود و ثبت نام</div>
            <form className="box-details__form">
              <label htmlFor="mobile">شماره موبایل خود را وارد کنید</label>
              <input
                type="text"
                name="mobile"
                id="mobile"
                autocomplete="off"
                placeholder="..."
              />
              <input type="submit" value="ارسال کد" />
            </form>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Modal;
