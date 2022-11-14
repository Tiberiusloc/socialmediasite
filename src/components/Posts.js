import React from "react";
import PropTypes from "prop-types";
import Profile from "./Profile";
import tomprof from "./../img/tomprof.png";

const allPosts = [
  {
  name: "Ted Gold",
  img: <img src={tomprof} alt="generic profile picture"/>,
  post: "Wow Carlbook is so cool way better than facebook ew"
},
{
  name: "Skylan Lew",
  img: <img src={tomprof} alt="generic profile picture"/>,
  post: "Call of booty is my only duty"
},
{
  name: "Kelly Bruce",
  img: <img src={tomprof} alt="generic profile picture"/>,
  about: "I like mushrooms and all that",
  post: "Hi, I just got Carlbook"
}
]

function PostDisplay() {
  return(
    <React.Fragment>
      <form>
        <label for="postinput">
        <input for="postinput" type="text" value="What's Happening?"/>
        </label>
        <input type="submit" value="Post"/>
      </form>
      {allPosts.map((user, index) =>
      <Profile name ={user.name}
      img={user.img}
      post={user.post}
      key={index}/>
      )}
      </React.Fragment>
  );
}

export default PostDisplay;