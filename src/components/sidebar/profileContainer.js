import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import Switch from "react-switch";

function ProfileContainer(props) {
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.languages[0]
  const [language, setLanguage] = useState(currentLanguage.includes('pt') ? false : true)

  const renderProfilePicture = (imagePath) => {
    if (imagePath) {
      return (<img className="profile" src={imagePath} alt="" style={{ maxWidth: 185 }} />);
    }
    return null;
  }

  const changeLanguage = (checked, event, id) => {
    setLanguage(checked)
    if (language) {
      i18n.changeLanguage('pt-BR')
    } else {
      i18n.changeLanguage('en')
    }
  }

  return (    
    <div className="profile-container">
      <div className="d-flex justify-content-center">
        <p className="pr-3"> { t('LanguageDetails.portuguese') } </p>
        <Switch offColor={'#888'} onColor={'#1E90FF'} checkedIcon={false} uncheckedIcon={false} height={22} width={50} checked={language} onChange={changeLanguage} className="name"></Switch>
        <p className="pl-3"> { t('LanguageDetails.english') } </p>
      </div>

      {renderProfilePicture(props.imagePath)}
      <h1 className="name" style={{ fontSize: 25 }}>{t('ProfileDetails.name')}</h1>
      <h3 className="tagline"> {t('ProfileDetails.title')} </h3>
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
