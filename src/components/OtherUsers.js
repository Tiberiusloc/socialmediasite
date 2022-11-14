import React from "react";
import Profile from "./Profile";
import tomprof from "./../img/tomprof.png";

const otherUsers = [
  { name: "Tim Empey",
  img: <img src={tomprof} alt="generic profile picture"/>,
  profilelink: <a href="profile">profile</a>
},
{ name: "Shaniza Lingle",
img: <img src={tomprof} alt="generic profile picture"/>,
profilelink: <a href="profile">profile</a>
},
{ name: "Shiesty Sam",
img: <img src={tomprof} alt="generic profile picture"/>,
profilelink: <a href="profile">profile</a>
}
]

function OtherUsersDisplay(){
  return (
    <React.Fragment>
      <h3>Others Users You May Know:</h3>
      {otherUsers.map((user, index) =>
      <Profile name ={user.name}
      img={user.img}
      profilelink={user.profilelink}
      key={index}/>
      )}
    </React.Fragment>
  )
}

export default OtherUsersDisplay;