import styles from "./UserList.module.css";

const UserList = (props) => {
  return (
    <div className={styles.users}>
      <ul>
        {props.users.map((user) => {
          return (
            <li key={Math.random()}>
              {user.name} - {user.age} лет
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default UserList;
