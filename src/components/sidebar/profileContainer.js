import React, { Component, useState } from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import Switch from "react-switch";

function ProfileContainer(props) {
  const { t, i18n } = useTranslation();
  const [language, setLanguage] = useState(false)

  const renderProfilePicture = (imagePath) => {
    if (imagePath) {
      return (<img className="profile" src={imagePath} alt="" style={{ maxWidth: 185 }} />);
    }
    return null;
  }

  const changeLanguage = ( checked, event, id) => {
    setLanguage(!language)
    if (language) {
      i18n.changeLanguage('en')      
    } else {
      i18n.changeLanguage('pt-BR')      

    }
  }

  return (
    <div className="profile-container">
      {/* <Switch checked={language} onChange={changeLanguage} className="name"></Switch> */}
      {renderProfilePicture(props.imagePath)}
      <h1 className="name" style={{ fontSize: 25 }}>{props.name}</h1>
      <h3 className="tagline"> {props.title} </h3>
    </div>
  );

}

export default ProfileContainer

ProfileContainer.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  imagePath: PropTypes.string
};

ProfileContainer.defaultProps = {
  imagePath: null
};
