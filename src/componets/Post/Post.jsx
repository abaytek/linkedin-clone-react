import "./post.css";
import { Avatar } from "@material-ui/core";
import ThumbUp from "@material-ui/icons/ThumbUp";
import Comment from "@material-ui/icons/Comment";
import Share from "@material-ui/icons/Share";
import Send from "@material-ui/icons/Send";
import PostReaction from "../PostReaction/PostReaction";
import { forwardRef } from "react";

const Post = forwardRef(({ name, description, message, photoUrl }, ref) => {
  return (
    <div ref={ref} className="post">
      <div className="post__info">
        <Avatar />
        <div className="post__infoName">
          <h3>{name}</h3>
          <p>{description}</p>
        </div>
      </div>
      <div className="post__body">
        <img className="post__img" src={photoUrl} alt="" />
        <p>{message.toString()}</p>
      </div>
      <div className="post__reactions">
        <PostReaction Icon={ThumbUp} title="Like" color="" />
        <PostReaction Icon={Comment} title="Comment" color="" />
        <PostReaction Icon={Share} title="Share" color="" />
        <PostReaction Icon={Send} title="Send" color="" />
      </div>
    </div>
  );
});

export default Post;
