import React, { useState } from "react";
import Button from "../UI/Button";
import styles from "./CreateUser.module.css";

const CreateUser = (props) => {
  const [inputName, setInputName] = useState("");
  const [inputAge, setInputAge] = useState("");

  const onInputName = (evt) => {
    const inputText = evt.target.value;
    setInputName(inputText);
  };

  const onInputAge = (evt) => {
    const inputText = evt.target.value;
    setInputAge(inputText);
  };

  const onFormSubmit = (evt) => {
    evt.preventDefault();
    if (inputName.trim().length === 0 || inputAge.trim().length === 0) {
      props.onWrongInput("Эти поля не должны быть пустыми");
      return;
    }
    if (+inputAge < 0) {
      props.onWrongInput("Возраст должен быть больше 0");
      return;
    }
    const currentInput = {
      name: inputName,
      age: inputAge
    };
    props.onAddUser(currentInput);
    setInputName("");
    setInputAge("");
  };

  return (
    <React.Fragment>
      <form className={styles.input} onSubmit={onFormSubmit}>
        <label>Имя</label>
        <input type="text" onChange={onInputName} value={inputName}></input>
        <label>Возраст</label>
        <input type="number" onChange={onInputAge} value={inputAge}></input>
        <Button title={"Добавить пользователя"} type={"submit"} />
      </form>
    </React.Fragment>
  );
};

export default CreateUser;
