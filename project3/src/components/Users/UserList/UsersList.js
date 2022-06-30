import React from "react";
import Card from "../../UI/Card";
import UserListItem from "../UserListItem/UserListItem";
import classes from "./UsersList.module.css";

const UsersList = (props) => {
  const deleteUserHandler = (userId) => {
    props.onDeleteUser(userId);
  };
  return (
    <Card className={classes.users}>
      <ul>
        {props.users.map((user) => (
          <UserListItem key={user.id} id={user.id} onDelete={deleteUserHandler}>
            {user.name} ({user.age} years old.)
          </UserListItem>
        ))}
      </ul>
    </Card>
  );
};

export default UsersList;
