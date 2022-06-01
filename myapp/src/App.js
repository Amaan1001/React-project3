import { useState } from "react";

import DisplayUser from "./components/Users/DisplayUser";

import User from "./components/Users/User";
const App = () => {
  const [userList, setuserList] = useState([]);
  const newUserHandler = (uName, uAge, uGender) => {
    setuserList((prevUsers) => {
      return [
        ...prevUsers,
        {
          name: uName,
          age: uAge,
          gender: uGender,
          id: Math.random().toString(),
        },
      ];
    });
  };

  return (
    <div>
      <User onAddUser={newUserHandler} />
      <DisplayUser users={userList} />
    </div>
  );
};

export default App;
