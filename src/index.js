import React from 'react';
import ReactDOM from 'react-dom';
import CV from './App';
import Data from './data';
import './i18next/i18n';


ReactDOM.render(<CV {...Data} />, global.document.getElementById('root'));

