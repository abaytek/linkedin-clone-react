import { Avatar } from "@material-ui/core";
import {
  BusinessCenter,
  Chat,
  Home,
  Notifications,
  Search,
  SupervisorAccount,
} from "@material-ui/icons";
import { useDispatch } from "react-redux";
import { logout } from "../features/userSlice";
import { auth } from "../firebase";

import HeaderOption from "../HeaderOption/HeaderOption";
import "./header.css";

const Header = () => {
  const dispatch = useDispatch();
  const logoutOfApp = async () => {
    await auth.signOut();
    dispatch(logout);
  };
  return (
    <div className="header">
      <div className="header__left">
        <img src="./assets/linkedin.jpeg" alt="" />
        <div className="header__search">
          <Search className="header__icon" />
          <input type="text" placeholder="Search" />
        </div>
      </div>
      <div className="header__right">
        <HeaderOption Icon={Home} title={"Home"} />
        <HeaderOption Icon={SupervisorAccount} title={"My Networks"} />
        <HeaderOption Icon={BusinessCenter} title={"Jobs"} />
        <HeaderOption Icon={Chat} title={"Messaging"} />
        <HeaderOption Icon={Notifications} title={"Notifications"} />
        <HeaderOption onClick={logoutOfApp} avatar={Avatar} title={""} />
      </div>
    </div>
  );
};

export default Header;
