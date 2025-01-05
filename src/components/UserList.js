import React from "react";

const UserList = () => {
  const userList = ["tyest", "jjhjk", "kjhgh", "lkjhghj", "kjhghj"];
  return (
    <div>
      {userList.map((item, index) => {
        return <p key={index}>{item}</p>;
      })}
    </div>
  );
};

export default UserList;
