import React from 'react';
import Section from './shared/section';
import { useTranslation } from 'react-i18next';

function Tags() {
  const { t } = useTranslation();

  const renderListItem = (item, i) => {
    return (
      <li className="item" key={`tag_item_${i}`}>
        {item}
      </li>
    );
  }

  return (
    <Section
      className="tags-section"
      icon={'rocket'}
      id="tags"
      title={ t('SkiilsDetails.title') }
    >
      <div className="skills">
        <ul className="skillset">
          <li className="item">
            { t('SkiilsDetails.1') }
          </li>
          <li className="item">
            { t('SkiilsDetails.2') }
          </li>
          <li className="item">
            { t('SkiilsDetails.3') }
          </li>
          <li className="item">
            { t('SkiilsDetails.4') }
          </li>
          <li className="item">
            { t('SkiilsDetails.5') }
          </li>
          <li className="item">
            { t('SkiilsDetails.6') }
          </li>
          <li className="item">
            { t('SkiilsDetails.7') }
          </li>
          <li className="item">
            { t('SkiilsDetails.8') }
          </li>
          <li className="item">
            { t('SkiilsDetails.9') }
          </li>
          <li className="item">
            { t('SkiilsDetails.10') }
          </li>
          <li className="item">
            { t('SkiilsDetails.11') }
          </li>
          <li className="item">
            { t('SkiilsDetails.12') }
          </li>
          <li className="item">
            { t('SkiilsDetails.13') }
          </li>
          <li className="item">
            { t('SkiilsDetails.14') }
          </li>
          <li className="item">
            { t('SkiilsDetails.15') }
          </li>
          <li className="item">
            { t('SkiilsDetails.16') }
          </li>
          <li className="item">
            { t('SkiilsDetails.17') }
          </li>
          <li className="item">
            { t('SkiilsDetails.18') }
          </li>
          <li className="item">
            { t('SkiilsDetails.19') }
          </li>
          <li className="item">
            { t('SkiilsDetails.20') }
          </li>
          <li className="item">
            { t('SkiilsDetails.21') }
          </li>
          <li className="item">
            { t('SkiilsDetails.22') }
          </li>
          <li className="item">
            { t('SkiilsDetails.23') }
          </li>
          <li className="item">
            { t('SkiilsDetails.24') }
          </li>
        </ul>
      </div>
    </Section>
  );

}

export default Tags
