import "./news.css";

function News({ Icon, highlight, username, followers }) {
  return (
    <div className="news">
      <Icon className="icon" />
      <div className="followers">
        <h3>{highlight}</h3>
        <p>
          {username} - {followers} followers
        </p>
      </div>
    </div>
  );
}

export default News;
