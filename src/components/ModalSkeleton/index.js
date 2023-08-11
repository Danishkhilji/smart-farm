import React from "react";
import { Modal } from "react-bootstrap";
const ModalSkeleton = ({
  show,
  setShow,
  children,
  width,
  height,
  borderRadius = "10px",
  top,
  header,
}) => {
  return (
    <>
      <style>
        {`
        .modal-content{
          border-radius:${borderRadius};
          overflow:hidden;
        }
        .modal-body{
          padding:0;
        }
        .btn-close:focus{
          box-shadow:none;
        }
        .modal.show .modal-dialog {
         transform: none;
         top: ${top || "10%"};
        }
        .modal-content{
          width:100%;
        }
        .modal-dialog  {
          max-width:${width || "100%"} !important;
          height:${height || "auto"}};
          margin: auto;
        }
        `}
      </style>
      <Modal
        show={show}
        onHide={() => {
          setShow(false);
        }}
        className={`modal-adjust-wrapper`}
      >
        {children}
      </Modal>
    </>
  );
};

export default ModalSkeleton;
