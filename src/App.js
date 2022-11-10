import "./app.css";
import Header from "./componets/Header/Header";
import Sidebar from "./componets/Sidebar/Sidebar";
import Feed from "./componets/Feed/Feed";
import Widget from "./componets/Widget/Widget";
import Login from "./componets/Login/Login";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "./componets/features/userSlice";
import { useEffect } from "react";
import { auth } from "./componets/firebase";

function App() {
  const { user } = useSelector(selectUser);
  const dispatch = useDispatch();
  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        //user is logged in
        dispatch(
          login({
            email: userAuth.email,
            uid: userAuth.uid,
            displayName: userAuth.displayName,
            photoUrl: userAuth.photoURL,
          })
        );
      } else {
        //user is logged out
        dispatch(logout());
      }
    });
  });
  return (
    <div className="app">
      <Header />
      {!user ? (
        <Login />
      ) : (
        <div className="app__body">
          <Sidebar />
          <Feed />
          <Widget />
        </div>
      )}
    </div>
  );
}

export default App;
