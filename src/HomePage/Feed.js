import React, { useEffect, useState } from "react";
import "./Feed.css";
import CreateIcon from "@mui/icons-material/Create";
import InputOption from "./InputOption";
import ImageIcon from "@mui/icons-material/Image";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import EventNoteIcon from "@mui/icons-material/EventNote";
import CalendarViewDayIcon from "@mui/icons-material/CalendarViewDay";
import Post from "./Post";
import { db } from "../Firebase";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import FlipMove from "react-flip-move";
import { Avatar } from "@mui/material";

function Feed() {
  const user = useSelector(selectUser);
  const [input, setInput] = useState("");
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    db.collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) =>
        setPosts(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        )
      );
  }, []);

  const sendPost = (e) => {
    e.preventDefault();

    db.collection("posts").add({
      name: user.displayName,
      desc: user.email,
      msg: input,
      photoUrl: user.photoUrl || "",
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setInput("");
  };
  return (
    <div className="feed">
      <div className="feed_inputContainer">
        <div className="feed_input">
          <form>
          <Avatar style={{cursor:"pointer"}} src={user.photoUrl} className='sidebar_avatar'>{user?.email[0]}</Avatar>
           
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              type="text"
              placeholder="Start a post"
            />

            <button onClick={sendPost} type="submit">
              Send
            </button>
            <CreateIcon />
          </form>
        </div>

        <div className="feed_inputOption">
          <InputOption Icon={ImageIcon} title="Images" color="#2DA5DA" />
          <InputOption
            Icon={SubscriptionsIcon}
            title="Videos"
            color="#ED7524"
          />
          <InputOption Icon={EventNoteIcon} title="Events" color="#FEC810" />
          <InputOption
            Icon={CalendarViewDayIcon}
            title="Write Article"
            color="#213755"
          />
        </div>
      </div>
      <hr style={{margin: "18px"}}/>
      <FlipMove>
        {posts.map(({ id, data: { name, desc, msg, photoUrl } }) => (
          <Post
            key={id}
            name={name}
            desc={desc}
            msg={msg}
            photoUrl={photoUrl}
          />
        ))}
      </FlipMove>
    </div>
  );
}

export default Feed;
