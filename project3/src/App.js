import { useState } from "react";
import AddUser from "./components/Users/AddUser/AddUser";
import UsersList from "./components/Users/UserList/UsersList";
function App() {
  const [usersList, setUsersList] = useState([]);
  const addUserHandler = (uName, uAge) => {
    setUsersList( (prevState) => {
      return [...prevState, {name: uName, age: uAge, id: Math.random().toString()}];
    })
  }
  const deleteUserhandler = (userId) => {
    setUsersList((prevUsers) => {
      const updatedUsers = prevUsers.filter(user => user.id !== userId);
      return updatedUsers;
    })
  };
  return (
    <>
      <AddUser onAddUser={addUserHandler}/>
      <UsersList users={usersList} onDeleteUser={deleteUserhandler}/>
    </>
  );
}

export default App;
