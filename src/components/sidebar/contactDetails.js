import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

function ContactDetails(props) {
  const { t, i18n } = useTranslation();
  
  const renderListItem = (className, data, iconName, type) => {
    if (!data) { return null; }
    let href = data;
    switch (type) {
      case 'email':
        href = `mailto: ${data}`;
        break;
      case 'phone':
        href = `tel:${data}`;
        break;
    }
    return (
      <li className={className}>
        <i className={`fa ${iconName}`} />
        <a href={`//${href}`} target="_blank"> {data} </a>
      </li>
    );
  }

  return (
    <div className="contact-container container-block">
      <ul className="list-unstyled contact-list">
        {renderListItem('email', t('ContactDetails.email'), 'fa-envelope', 'email')}
        {renderListItem('phone', t('ContactDetails.phoneNumber'), 'fa-phone', 'phone')}
        {renderListItem('website', t('ContactDetails.website'), 'fa-globe', 'link')}
        {renderListItem('linkedin', t('ContactDetails.linkedin'), 'fa-linkedin', 'link')}
        {renderListItem('github', t('ContactDetails.github'), 'fa-github', 'link')}
      </ul>
    </div>
  );

}

export default ContactDetails

ContactDetails.propTypes = {
  mail: PropTypes.string.isRequired,
  phoneNumber: PropTypes.string,
  website: PropTypes.string,
  linkedin: PropTypes.string,
  github: PropTypes.string,
  twitter: PropTypes.string,
};

ContactDetails.defaultProps = {
  phoneNumber: null,
  website: null,
  linkedin: null,
  github: null,
  twitter: null
};
