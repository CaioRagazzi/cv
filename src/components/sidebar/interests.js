import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

function LanguageDetails() {
  const { t } = useTranslation();

  return (
    <div className="languages-container container-block">
      <h2 className="container-block-title">{ t('InterestsDetails.title') }</h2>
      <ul className="list-unstyled interests-list">
        <li>
          { t('InterestsDetails.1') }
        </li>
        <li>
          { t('InterestsDetails.2') }
        </li>
        <li>
          { t('InterestsDetails.3') }
        </li>
        <li>
          { t('InterestsDetails.4') }
        </li>
        <li>
          { t('InterestsDetails.5') }
        </li>
      </ul>
    </div>
  );

}

export default LanguageDetails

LanguageDetails.propTypes = {
  list: PropTypes.arrayOf(PropTypes.string).isRequired,
  title: PropTypes.string.isRequired
};

