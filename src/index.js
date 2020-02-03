import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import CV from './App';
import Data from './data';
import './i18next/i18n';
import Loading from "../src/components/loading/loading";


ReactDOM.render(<Suspense fallback={<Loading />}><CV {...Data} /></Suspense>, global.document.getElementById('root'));

