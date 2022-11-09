import "./app.css";
import Header from "./componets/Header/Header";
import Sidebar from "./componets/Sidebar/Sidebar";
import Feed from "./componets/Feed/Feed";
import Widget from "./componets/Widget/Widget";

function App() {
  return (
    <div className="app">
      {/* Header */}
      <Header />

      {/* Main */}
      <div className="app__body">
        <Sidebar />
        <Feed />
        <Widget />
      </div>
    </div>
  );
}

export default App;
