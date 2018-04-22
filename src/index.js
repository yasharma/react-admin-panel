import './bootstrap';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App.jsx';
import {store, history} from './store/configureStore';
import registerServiceWorker from './registerServiceWorker';

// Custom stylesheet
import './assets/css/style.css';

ReactDOM.render(
  	<Provider store={store}>
    	<App history={history} />
  	</Provider>,
  	document.getElementById('root')
);
registerServiceWorker();
