import { Avatar } from "@material-ui/core";
import {
  BusinessCenter,
  Chat,
  Home,
  Notifications,
  Search,
  SupervisorAccount,
} from "@material-ui/icons";
import HeaderOption from "../HeaderOption/HeaderOption";
import "./header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="header__left">
        <img src="./assets/linkedin.jpeg" alt="" />
        <div className="header__search">
          <Search />
          <input type="text" />
        </div>
      </div>
      <div className="header__right">
        <HeaderOption Icon={Home} title={"Home"} />
        <HeaderOption Icon={SupervisorAccount} title={"My Networks"} />
        <HeaderOption Icon={BusinessCenter} title={"Jobs"} />
        <HeaderOption Icon={Chat} title={"Messaging"} />
        <HeaderOption Icon={Notifications} title={"Notifications"} />
        <HeaderOption avatar={Avatar} title={""} />
      </div>
    </div>
  );
};

export default Header;
