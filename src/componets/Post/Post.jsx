import "./post.css";
import { Avatar } from "@material-ui/core";
import ThumbUp from "@material-ui/icons/ThumbUp";
import Comment from "@material-ui/icons/Comment";
import Share from "@material-ui/icons/Share";
import Send from "@material-ui/icons/Send";
import PostReaction from "../PostReaction/PostReaction";

function Post() {
  return (
    <div className="post">
      <div className="post__info">
        <Avatar />
        <div className="post__infoName">
          <h3>Abaysew Tekle</h3>
          <p>Software engineer</p>
        </div>
      </div>
      <div className="post__body">
        <img className="post__img" src="./assets/bg.jpg" alt="" />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
          quibusdam officiis ipsum expedita amet repellendus eos asperiores sunt
          explicabo deleniti dolorum quia voluptas recusandae eum, maxime
          voluptatum nemo facilis tenetur excepturi nam vero! Modi odio commodi,
          sit aut itaque dolore quam quod eaque velit fuga cumque adipisci nobis
          ex ab error laudantium necessitatibus corrupti dicta maiores alias
          consectetur. Quis doloremque accusantium impedit aliquam maiores
          incidunt, minus cupiditate deserunt quibusdam accusamus enim eum
          veritatis, nesciunt perspiciatis dolor sint molestias. Ratione,
          officia possimus. Mollitia suscipit, beatae dolorem, molestias non eum
          illo cupiditate ipsum aliquid atque maxime expedita, commodi error ex
          deleniti voluptatem.
        </p>
      </div>
      <div className="post__reactions">
        <PostReaction Icon={ThumbUp} title="Like" color="" />
        <PostReaction Icon={Comment} title="Comment" color="" />
        <PostReaction Icon={Share} title="Share" color="" />
        <PostReaction Icon={Send} title="Send" color="" />
      </div>
    </div>
  );
}

export default Post;
