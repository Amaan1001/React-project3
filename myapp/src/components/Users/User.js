import { useState } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import styles from "./User.module.css";
import ErrorModal from "../UI/ErrorModal";

const User = (props) => {
  const [enterUsername, setenterUsername] = useState("");
  const [enterAge, setenterAge] = useState("");
  const [enterGender, setenterGender] = useState("");
  const [error, seterror] = useState();

  const submitHandler = (event) => {
    event.preventDefault();
    if (
      enterUsername.trim().length === 0 ||
      enterAge.trim().length === 0 ||
      enterGender.trim().length === 0
    ) {
      seterror({
        title: "Invalid Input",
        message: "Please enter your name age and gender!",
      });
      return;
    }
    if (+enterAge < 1) {
      seterror({
        title: "Invalid Age",
        message: "Please enter a valid age",
      });
      return;
    }

    props.onAddUser(enterUsername, enterAge, enterGender);
    setenterUsername("");
    setenterAge("");
    setenterGender("");
  };
  const addUserNameHandler = (event) => {
    setenterUsername(event.target.value);
  };
  const addUserAgeHandler = (event) => {
    setenterAge(event.target.value);
  };
  const addUserGenderHandler = (event) => {
    setenterGender(event.target.value);
  };

  const confirmHandler = () => {
    seterror(null);
  };
  return (
    <div>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={confirmHandler}
        />
      )}
      <Card className={styles.input}>
        <form onSubmit={submitHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            value={enterUsername}
            onChange={addUserNameHandler}
          />

          <label htmlFor="age">Age</label>
          <input
            id="age"
            type="number"
            value={enterAge}
            onChange={addUserAgeHandler}
          />

          <label htmlFor="gender">Gender</label>
          <input
            id="gender"
            type="text"
            value={enterGender}
            onChange={addUserGenderHandler}
          />

          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
};

export default User;
