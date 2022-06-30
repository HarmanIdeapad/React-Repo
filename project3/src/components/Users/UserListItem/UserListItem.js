import React from "react";
import classes from './UserListItem.module.css'

const UserListItem = (props) => {
  const deleteHandler = () => {
    props.onDelete(props.id);
  };
  return <li className={classes.listItem} onClick={deleteHandler}>{props.children}</li>;
};

export default UserListItem;
