import React from "react";

import './Profile.css'
import downArrowIcon from './downArrow.PNG'

const Profile = () => {
  return (
    <div className="user__profile">
      <div>
        <p className="user__profile-name">Shahaban Abdullah</p>
        <p className="user__profile-role">Super Admin</p>
      </div>
      <img
        className="user__profile-dropdown"
        src={downArrowIcon}
        alt="Profile dropdown"
      />
    </div>
  );
};

export default Profile;
