import React, { useState, useRef } from "react";
import classes from "./AddUser.module.css";
import Card from "../../UI/Card";
import Button from "../../UI/Button";
import ErrorModal from "../../UI/ErrorModal";

const AddUser = (props) => {
  const userInputRef = useRef();
  const ageInputRef = useRef();
  // const [enteredUsername, setEnteredUsername] = useState("");
  // const [enteredAge, setEnteredAge] = useState("");
  const [error, setError] = useState();

  // const usernameHandler = (event) => {
  //   setEnteredUsername(event.target.value);
  // };
  // const ageHandler = (event) => {
  //   setEnteredAge(event.target.value);
  // };
  const addUserHandler = (event) => {
    event.preventDefault();
    const enteredName = userInputRef.current.value;
    const enteredUserAge = ageInputRef.current.value;
    if (enteredName.trim().length === 0 || enteredUserAge.trim().length === 0) {
      setError({
        title: "Invalid input!",
        message: "Please enter a valid input (non-empty input).",
      });
      return;
    }
    if (+enteredUserAge < 1) {
      setError({
        title: "Invalid Age!",
        message: "Please enter a valid age ( > 0).",
      });
      return;
    }
    props.onAddUser(enteredName, enteredUserAge);
    // // console.log(enteredUsername, enteredAge);
    // setEnteredAge("");
    // setEnteredUsername("");
    userInputRef.current.value = "";
    ageInputRef.current.value = "";
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username:</label>
          <input
            id="username"
            type="text"
            // onChange={usernameHandler}
            // value={enteredUsername}
            ref={userInputRef}
            autoComplete="off"
          />
          <label htmlFor="age">Age (in Years):</label>
          <input
            id="age"
            type="number"
            // onChange={ageHandler}
            // value={enteredAge}
            ref={ageInputRef}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </>
  );
};

export default AddUser;
