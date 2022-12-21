import React from "react";
import Button from "./Button";
import styles from "./ErrorModal.module.css";
import ReactDOM from "react-dom";

const Modal = (props) => {
  return (
    <div
      className={styles.modal}
      style={{ display: props.isModalOpened ? "block" : "none" }}
    >
      <div className={styles.header}>
        <h2>Некорреткный ввод</h2>
      </div>
      <div className={styles.content}>
        <p>{props.errorMessage}</p>
        <div className={styles.actions}>
          <Button
            title={"Закрыть"}
            type={"button"}
            onClick={props.closeModal}
          />
        </div>
      </div>
    </div>
  );
};

const Backdrop = (props) => {
  return (
    <div
      className={props.isModalOpened ? `${styles["backdrop"]}` : ""}
      onClick={props.closeModal}
    ></div>
  );
};

const ErrorModal = (props) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Backdrop
          isModalOpened={props.isModalOpened}
          closeModal={props.closeModal}
        />,
        document.getElementById("backdrop")
      )}
      {ReactDOM.createPortal(
        <Modal
          errorMessage={props.errorMessage}
          isModalOpened={props.isModalOpened}
          closeModal={props.closeModal}
        />,
        document.getElementById("modal")
      )}
    </React.Fragment>
  );
};

export default ErrorModal;
