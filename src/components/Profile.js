import React from "react";
import PropTypes from "prop-types";

function Profile(props){
  return (
    <React.Fragment>

      <h3>{props.name}</h3>
      <h4>{props.img}</h4>
      <p>{props.profilelink}</p>
      <p>{props.post}</p>
      <div className="row">
      <p>{props.tweetcount}</p>
      <p>{props.followers}</p>
      <p>{props.following}</p>
      </div>
      <hr />
      <p><em>{props.about}</em></p>

    </React.Fragment>
  )
}

Profile.propTypes = {
  name: PropTypes.string.isRequired,
  img: PropTypes.string,
  about: PropTypes.string,
  tweetcount: PropTypes.number,
  following: PropTypes.number,
  followers: PropTypes.number,
  post: PropTypes.string,
  profilelink: PropTypes.string
}

export default Profile;