import React from "react";
import UserContext from "../context/UserContext";
import { useContext } from "react";

const UserInfo = () => {
  const user = useContext(UserContext);
  return (
    <div>
      <h1>{user}</h1>
    </div>
  );
};

export default UserInfo;
