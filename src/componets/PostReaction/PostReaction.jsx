import "./postReaction.css";

function PostReaction({ Icon, title, color }) {
  return (
    <div className="post__reaction">
      <Icon style={{ color: color }} />
      <p>{title}</p>
    </div>
  );
}

export default PostReaction;
