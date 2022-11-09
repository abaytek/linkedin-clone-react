import React from "./feed.css";
import CreateIcon from "@material-ui/icons/Create";
import Image from "@material-ui/icons/Image";
import Subscription from "@material-ui/icons/Subscriptions";
import EventNote from "@material-ui/icons/EventNote";
import Calendar from "@material-ui/icons/CalendarViewDayTwoTone";
import FeedInputOptions from "../FeedInputOptions/FeedInputOptions";
import Post from "../Post/Post";

function Feed() {
  return (
    <div className="feed">
      <div className="feed__inputContainer">
        <div className="feed__input">
          <CreateIcon />
          <form className="feed__form">
            <input type="text" />
            <button>send</button>
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
      <Post />
      <Post />
      <Post />
    </div>
  );
}

export default Feed;
