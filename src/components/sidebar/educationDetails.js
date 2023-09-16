import PropTypes from "prop-types";
import React from "react";
import { useTranslation } from "react-i18next";

function EducationDetails() {
  const { t } = useTranslation();

  return (
    <div className="education-container container-block">
      <h2 className="container-block-title">{t("EducationDetails.1.title")}</h2>
      <div className="item">
        <h5 className="meta">{t("EducationDetails.1.school")}</h5>
        <h4 className="degree">{t("EducationDetails.1.name")}</h4>
        <div className="time">{t("EducationDetails.1.date")}</div>
      </div>

      <div className="item">
        <h5 className="meta">{t("EducationDetails.2.school")}</h5>
        <h4 className="degree">{t("EducationDetails.2.name")}</h4>
        <div className="time">{t("EducationDetails.2.date")}</div>
      </div>
    </div>
  );
}

export default EducationDetails;

EducationDetails.propTypes = {
  list: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  title: PropTypes.string.isRequired,
};
