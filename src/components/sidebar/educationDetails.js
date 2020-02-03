import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

function EducationDetails() {
  const { t } = useTranslation();

  return (
    <div className="education-container container-block">
      <h2 className="container-block-title">{t("EducationDetails.title")}</h2>
      <div className="item">
        <h5 className="meta">{t("EducationDetails.school")}</h5>
        <h4 className="degree">{t("EducationDetails.name")}</h4>
        <div className="time">{t("EducationDetails.date")}</div>
      </div>
    </div>
  );

}

export default EducationDetails

EducationDetails.propTypes = {
  list: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  title: PropTypes.string.isRequired
};

