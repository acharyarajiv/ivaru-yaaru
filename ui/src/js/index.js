import 'css/index.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import Header from 'js/component/header';
import Person from 'js/component/person/index';
import Footer from 'js/component/footer';

ReactDOM.render(<Header />, document.getElementById('header'));
ReactDOM.render(<Person />, document.getElementById('content'));
ReactDOM.render(<Footer />, document.getElementById('footer'));
