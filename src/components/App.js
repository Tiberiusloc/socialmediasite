import React from "react";
import Header from "./Header";
import PostDisplay from "./Posts";
import Profile from "./Profile";
import UserDisplay from "./User";
import OtherUsersDisplay from "./OtherUsers";


function App() {
  return (
    <React.Fragment>
      <Header />
      <div className="mainprof">
      <UserDisplay />
      </div>
      <div className="posts">
      <PostDisplay />
      </div>
      <div className="otherusers">
      <OtherUsersDisplay />
      </div>
    </React.Fragment>
  )
}

export default App;
