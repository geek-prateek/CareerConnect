import React from "react";
import "./Profile.css";
import { Avatar } from "@mui/material";
import cover from "../Images/cover.png";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import CategoryIcon from "@mui/icons-material/Category";

function Profile() {
  const user = useSelector(selectUser);
  return (
    <div className="profile">
      <div className="profile_top">
        <img src={cover} alt="cover" />
        <div className="margin">
          <Avatar
            src={user.photoUrl}
            style={{ width: "150px", height: "150px" }}
            className="profile_avatar"
          >
            {user?.email[0]}
          </Avatar>

          <h1>
          {user.displayName} <span>(He/Him)</span>
          </h1>
          <h2>{user.email}</h2>
          
          <a href="/contact">Contact info</a>
          <br />
          <a href="">392 followers . 374 connections</a>
          <div className="btn">
            <button className="goal">Add goal</button>
            <button className="pic">Add profile section</button>
            <button className="more">More</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
