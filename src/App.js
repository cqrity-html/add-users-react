import React, { useState } from "react";
import CreateUser from "./components/Users/CreateUser";
import ErrorModal from "./components/UI/ErrorModal";
import UserList from "./components/Users/UserList";

const USERS = [
  {
    name: "Иван",
    age: 18
  }
];

const App = () => {
  const [userList, setUserList] = useState(USERS);
  const [errorMessage, setErrorMessage] = useState("");
  const [isModalOpened, setIsModalOpened] = useState(false);

  const onAddUser = (user) => {
    setUserList((prevUsers) => [user, ...prevUsers]);
  };

  const onWrongInput = (message) => {
    setIsModalOpened(true);
    setErrorMessage(message);
  };

  const onModalClose = () => {
    setIsModalOpened(false);
  };

  return (
    <React.Fragment>
      <CreateUser
        users={USERS}
        onAddUser={onAddUser}
        onWrongInput={onWrongInput}
      />
      <UserList users={userList} />
      <ErrorModal
        errorMessage={errorMessage}
        isModalOpened={isModalOpened}
        closeModal={onModalClose}
      />
    </React.Fragment>
  );
};

export default App;
