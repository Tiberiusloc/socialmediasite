import React from "react";
import Profile from "./Profile";
import tomprof from "./../img/tomprof.png";

const allUsers = [
  {
  name: "Ted Gold",
  img: <img src={tomprof} alt="generic profile picture"/>,
  about: "About me: I like basketball and Texas T",
  tweetcount:"Tweets " + 0,
  following: "Following " + 12,
  followers: "Followers " + 50
}
]

function UserDisplay(){
  return (
    <React.Fragment>
      {allUsers.map((user, index) =>
      <Profile name ={user.name}
      img={user.img}
      about={user.about}
      tweetcount={user.tweetcount}
      following={user.following}
      followers={user.followers}
      key={index}/>
      )}
    </React.Fragment>
  );
}

export default UserDisplay;