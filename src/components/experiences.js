import React from "react";
import { useTranslation } from "react-i18next";

function Experiences() {
  const { t } = useTranslation();

  return (
    <section className="experieces-section" id="experiences">
      <h2 className="section-title">
        <i className="fa fa-briefcase" />
        {t("ExperiencesDetails.title")}
      </h2>
      <div className="item pb-3">
        <div className="meta">
          <div className="upper-row">
            <h3 className="job-title">{t("ExperiencesDetails.7.title")}</h3>
            <div className="time">{t("ExperiencesDetails.7.date")}</div>
          </div>
          <div className="company">
            <a href={t("ExperiencesDetails.7.companyLink")} target="_blank">
              {" "}
              {t("ExperiencesDetails.7.company")}{" "}
            </a>{" "}
            {""}
          </div>
        </div>
        <div className="details">
          <p
            dangerouslySetInnerHTML={{
              __html: t("ExperiencesDetails.7.description"),
            }}
          />
        </div>
      </div>

      <div className="item pb-3">
        <div className="meta">
          <div className="upper-row">
            <h3 className="job-title">{t("ExperiencesDetails.6.title")}</h3>
            <div className="time">{t("ExperiencesDetails.6.date")}</div>
          </div>
          <div className="company">
            <a href={t("ExperiencesDetails.6.companyLink")} target="_blank">
              {" "}
              {t("ExperiencesDetails.6.company")}{" "}
            </a>{" "}
            {""}
          </div>
        </div>
        <div className="details">
          <p
            dangerouslySetInnerHTML={{
              __html: t("ExperiencesDetails.6.description"),
            }}
          />
        </div>
      </div>

      <div className="item pb-3">
        <div className="meta">
          <div className="upper-row">
            <h3 className="job-title">{t("ExperiencesDetails.5.title")}</h3>
            <div className="time">{t("ExperiencesDetails.5.date")}</div>
          </div>
          <div className="company">
            <a href={t("ExperiencesDetails.5.companyLink")} target="_blank">
              {" "}
              {t("ExperiencesDetails.5.company")}{" "}
            </a>{" "}
            {""}
          </div>
        </div>
        <div className="details">
          <p
            dangerouslySetInnerHTML={{
              __html: t("ExperiencesDetails.5.description"),
            }}
          />
        </div>
      </div>

      <div className="item pb-3">
        <div className="meta">
          <div className="upper-row">
            <h3 className="job-title">{t("ExperiencesDetails.1.title")}</h3>
            <div className="time">{t("ExperiencesDetails.1.date")}</div>
          </div>
          <div className="company">
            <a href={t("ExperiencesDetails.1.companyLink")} target="_blank">
              {" "}
              {t("ExperiencesDetails.1.company")}{" "}
            </a>{" "}
            {""}
          </div>
        </div>
        <div className="details">
          <p
            dangerouslySetInnerHTML={{
              __html: t("ExperiencesDetails.1.description"),
            }}
          />
        </div>
      </div>

      <div className="item pb-3">
        <div className="meta">
          <div className="upper-row">
            <h3 className="job-title">{t("ExperiencesDetails.2.title")}</h3>
            <div className="time">{t("ExperiencesDetails.2.date")}</div>
          </div>
          <div className="company">
            <a href={t("ExperiencesDetails.2.companyLink")} target="_blank">
              {" "}
              {t("ExperiencesDetails.2.company")}{" "}
            </a>{" "}
            {""}
          </div>
        </div>
        <div className="details">
          <p
            dangerouslySetInnerHTML={{
              __html: t("ExperiencesDetails.2.description"),
            }}
          />
        </div>
      </div>

      <div className="item pb-3">
        <div className="meta">
          <div className="upper-row">
            <h3 className="job-title">{t("ExperiencesDetails.3.title")}</h3>
            <div className="time">{t("ExperiencesDetails.3.date")}</div>
          </div>
          <div className="company">
            <a href={t("ExperiencesDetails.3.companyLink")} target="_blank">
              {" "}
              {t("ExperiencesDetails.3.company")}{" "}
            </a>{" "}
            {""}
          </div>
        </div>
        <div className="details">
          <p
            dangerouslySetInnerHTML={{
              __html: t("ExperiencesDetails.3.description"),
            }}
          />
        </div>
      </div>

      <div className="item pb-3">
        <div className="meta">
          <div className="upper-row">
            <h3 className="job-title">{t("ExperiencesDetails.4.title")}</h3>
            <div className="time">{t("ExperiencesDetails.4.date")}</div>
          </div>
          <div className="company">
            <a href={t("ExperiencesDetails.4.companyLink")} target="_blank">
              {" "}
              {t("ExperiencesDetails.4.company")}{" "}
            </a>{" "}
            {""}
          </div>
        </div>
        <div className="details">
          <p
            dangerouslySetInnerHTML={{
              __html: t("ExperiencesDetails.4.description"),
            }}
          />
        </div>
      </div>
    </section>
  );
}

export default Experiences;
