import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.css';
import './assets/theme/styles.css';
import { useTranslation } from 'react-i18next';
import Career from './components/career';
import Sidebar from './components/sidebar';
import Experiences from './components/experiences';
import Projects from './components/projects';
import Tags from './components/tags';

function CV(props) {
  const {
    experiences,
    projects,
    tags,
    profile
  } = props;

  const { t } = useTranslation();

  const renderExperiencesSection = () => {
    if (experiences) {
      return (<Experiences {...props.experiences} />);
    }
    return null;
  };

  const renderProjectsSection = () => {
    if (projects) {
      return (<Projects {...props.projects} />);
    }
    return null;
  };

  const renderTags = () => {
    if (tags) {
      return (<Tags {...props.tags} />);
    }
    return null;
  };

  const renderOpenSourcePart = () => {
    return (<div />);
  };

  const renderCareerProfile = () => {
    const innerContent = (<div className="summary" dangerouslySetInnerHTML={{ __html: t('CareerDetails.html') }} />);
    return (
      <Career
        icon="user"
        title={t('CareerDetails.title')}
      >
        {innerContent}
      </Career>
    );
  };

  return (
    <div className="wrapper">
      <Sidebar
        {...profile}
      />
      <div className="main-wrapper">
        {renderCareerProfile()}
        {renderExperiencesSection()}
        {renderTags()}
        {renderOpenSourcePart()}
      </div>
    </div>
  );
}

export default CV;
