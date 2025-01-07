import React from "react";
import "./Sidebar.css";
const SideBar = () => {
  return (
    <div className="sidebar">
      <div className="profile">
        <img
          src="https://images.unsplash.com/photo-1612222869049-d8ec83637a3c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bG9nb3xlbnwwfHwwfHx8MA%3D%3D"
          alt="profile"
        />
      </div>
      <ul>
        <li>Home</li>
        <li>Profile</li>
        <li>Messages</li>
        <li>Settings</li>
        <li>Logout</li>
      </ul>
    </div>
  );
};

export default SideBar;
