import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

function LanguageDetails() {
  const { t } = useTranslation();

  return (
    <div className="languages-container container-block">
      <h2 className="container-block-title" key="lang_header">{ t('LanguagesDetails.title') }</h2>
      <ul className="list-unstyled interests-list" key="lang_list">
        <li>
          { t('LanguagesDetails.portuguese.title') }
          <span className="lang-desc">  ({ t('LanguagesDetails.portuguese.level') })</span>
        </li>
        <li>
          { t('LanguagesDetails.english.title') }
          <span className="lang-desc">  ({ t('LanguagesDetails.english.level') })</span>
        </li>
      </ul>
    </div>
  );

}

export default LanguageDetails

LanguageDetails.propTypes = {
  list: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  title: PropTypes.string.isRequired
};

