import React, { useState } from "react";
import "./Modal.css";
import { IoMdClose } from "react-icons/io";

const Modal = () => {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);

    if (!modal) {
      document.body.classList.add("active-modal");
    } else {
      document.body.classList.remove("active-modal");
    }
  };

  return (
    <>
      <button className="btn-modal" onClick={toggleModal}>
        ข้อมูลเพิ่มเติม
      </button>

      {modal && (
        <div className="modal-container">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <h2>Information</h2>
            <p className="info-text">ชื่อจริง : จีระวิชทย์</p>
            <p className="info-text">นามสกุล : ตรีสุคนธ์</p>
            <p className="info-text">ชื่อเล่น : จีโน่</p>
            <p className="info-text">อายุ : 21 ปี</p>
            <button className="close-modal" onClick={toggleModal}>
              <IoMdClose />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
