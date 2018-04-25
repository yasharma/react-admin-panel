import React, { Component } from 'react';
import { Router } from './routes';

// BEGIN VENDOR CSS-->
import './assets/css/bootstrap.css';

//<!-- font icons-->
import './assets/fonts/icomoon.css';

//<!-- BEGIN ROBUST CSS-->
import './assets/css/bootstrap-extended.css';
import './assets/css/app.css';
import './assets/css/colors.css';

//<!-- BEGIN Page Level CSS-->
import './assets/css/vertical-menu.css';
import './assets/css/vertical-overlay-menu.css';
import './assets/css/palette-gradient.css';

// Custom stylesheet
import './assets/css/style.css';

import { login } from 'routes/pathname';
import { matchPathname } from 'lib/Helper';

class App extends Component {
  componentDidMount() {
    const {
      location: { pathname }
    } = this.props.history;
    //login --- vertical-layout vertical-menu 1-column  blank-page blank-page

    // other - vertical-layout vertical-menu 2-columns  fixed-navbar
    if (matchPathname(pathname, login)) {
      document.body.classList.remove('fixed-navbar', '2-columns');
      document.body.classList.add('blank-page', '1-columns');
      document.body.dataset.col = '1-column';
    } else {
      if (!document.body.classList.contains('2-columns')) {
        document.body.classList.remove('blank-page', '1-columns');
        document.body.classList.add('fixed-navbar', '2-columns');
        document.body.dataset.col = '1-column';
      }
    }
  }
  render() {
    const { history } = this.props;
    return <Router history={history} />;
  }
}

export default App;
