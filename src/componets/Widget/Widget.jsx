import News from "../News/News";
import AddCircle from "@material-ui/icons/AddCircle";
import "./widget.css";

const newsInfo = [
  {
    id: 1,
    username: "abaysew",
    highlight: "Left Over Things in the world",
    follower: "20k",
    Icon: AddCircle,
  },
  {
    id: 2,
    username: "abel",
    highlight: "Amazing innovetions of 2022",
    follower: "20k",
    Icon: AddCircle,
  },
  {
    id: 3,
    username: "habte",
    highlight: "10 mistakes in software engineering",
    follower: "20k",
    Icon: AddCircle,
  },
  {
    id: 4,
    username: "habte",
    highlight: "10 mistakes in software engineering",
    follower: "20k",
    Icon: AddCircle,
  },
  {
    id: 5,
    username: "zola",
    highlight: "10 mistakes in software engineering",
    follower: "20k",
    Icon: AddCircle,
  },
];

function Widget() {
  return (
    <div className="widget">
      <div className="widget__heading">
        <h3>Linkedin News</h3>
        <img className="img__circle" src="./assets/bg.jpg" alt="" />
      </div>
      {newsInfo.map((info) => (
        <News
          key={info.id}
          username={info.username}
          highlight={info.highlight}
          Icon={info.Icon}
          followers={info.follower}
        />
      ))}
    </div>
  );
}

export default Widget;
