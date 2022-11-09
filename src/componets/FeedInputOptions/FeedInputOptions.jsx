import "./feedInputOptions.css";

function FeedInputOptions({ Icon, title, color }) {
  return (
    <div className="inputOptions">
      <Icon style={{ color: color }} />
      <p>{title}</p>
    </div>
  );
}

export default FeedInputOptions;
