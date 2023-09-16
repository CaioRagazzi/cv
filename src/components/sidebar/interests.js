import PropTypes from "prop-types";
import React from "react";
import { useTranslation } from "react-i18next";

function LanguageDetails() {
  const { t } = useTranslation();

  return (
    <div className="container-block">
      <div className="skills">
        <h2 className="container-block-title">{t("InterestsDetails.title")}</h2>
        <ul className="skillset">
          <li className="item">{t("InterestsDetails.1")}</li>
          <li className="item">{t("InterestsDetails.2")}</li>
          <li className="item">{t("InterestsDetails.3")}</li>
          <li className="item">{t("InterestsDetails.4")}</li>
          <li className="item">{t("InterestsDetails.5")}</li>
        </ul>
      </div>
    </div>
  );
}

export default LanguageDetails;

LanguageDetails.propTypes = {
  list: PropTypes.arrayOf(PropTypes.string).isRequired,
  title: PropTypes.string.isRequired,
};
