import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withTranslation } from 'react-i18next';

class ContactDetailsTranslated extends Component {
  renderListItem(className, data, iconName, type) {
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
  render() {
    const { t } = this.props;
    return (      
      <div className="contact-container container-block">
        <ul className="list-unstyled contact-list">
          {this.renderListItem('email', t('ContactDetails.email'), 'fa-envelope', 'email')}
          {this.renderListItem('phone', t('ContactDetails.phoneNumber'), 'fa-phone', 'phone')}
          {this.renderListItem('website', t('ContactDetails.website'), 'fa-globe', 'link')}
          {this.renderListItem('linkedin', t('ContactDetails.linkedin'), 'fa-linkedin', 'link')}
          {this.renderListItem('github', t('ContactDetails.github'), 'fa-github', 'link')}
        </ul>
      </div>
    );
  }
}
const ContactDetails = withTranslation()(ContactDetailsTranslated)

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
