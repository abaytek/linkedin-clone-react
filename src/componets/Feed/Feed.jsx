import React, { useEffect, useState } from "react";
import "./feed.css";
import CreateIcon from "@material-ui/icons/Create";
import Image from "@material-ui/icons/Image";
import Subscription from "@material-ui/icons/Subscriptions";
import EventNote from "@material-ui/icons/EventNote";
import Calendar from "@material-ui/icons/CalendarViewDayTwoTone";
import FeedInputOptions from "../FeedInputOptions/FeedInputOptions";
import Post from "../Post/Post";
import { db } from "../firebase.js";
import { serverTimestamp } from "firebase/firestore";
import { selectUser } from "../features/userSlice";
import { useSelector } from "react-redux";
import FlipMove from "react-flip-move";

function Feed() {
  const { user } = useSelector(selectUser);
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

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const sendPost = (e) => {
    e.preventDefault();
    db.collection("posts").add({
      name: user.displayName,
      description: user.email,
      message: input,
      photoUrl: user.photoUrl || "",
      timestamp: serverTimestamp(),
    });
    setInput("");
  };
  return (
    <div className="feed">
      <div className="feed__inputContainer">
        <div className="feed__input">
          <CreateIcon />
          <form className="feed__form">
            <input type="text" defaultValue={input} onChange={handleChange} />
            <button onClick={sendPost} type="submit">
              Send
            </button>
          </form>
        </div>
        <div className="feed__inputOptions">
          <FeedInputOptions Icon={Image} title={"Image"} color="#70B5F9" />
          <FeedInputOptions
            Icon={Subscription}
            title={"Video"}
            color="#e7a33e"
          />
          <FeedInputOptions Icon={EventNote} title={"Event"} color="#c0c8cd" />
          <FeedInputOptions
            Icon={Calendar}
            title={"Write articles"}
            color="#7fc15e"
          />
        </div>
      </div>

      <FlipMove>
        {posts.map(({ id, data: { name, description, message, photoUrl } }) => (
          <Post
            key={id}
            name={name}
            description={description}
            message={message}
            photoUrl={photoUrl}
          />
        ))}
      </FlipMove>
    </div>
  );
}

export default Feed;
