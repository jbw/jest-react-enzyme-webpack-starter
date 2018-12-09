import React from 'react';
import ReactDOM from 'react-dom';

import DefaultLayout from './layouts/default';
import LoginPage from './pages/login';

ReactDOM.render(
  <DefaultLayout>
    <LoginPage />
  </DefaultLayout>,
  document.getElementById('index'),
);
