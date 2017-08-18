import 'css/index.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import Summary from 'js/container/summary';
import AppRouter from 'js/approuter';
import { PageType } from 'constant/pagetype';

ReactDOM.render(
  <AppRouter>
    <Summary page={PageType.SUMMARY} />
  </AppRouter>,
  document.getElementById('content'));
