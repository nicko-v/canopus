import 'animate.css/animate.min.css';

import './main.scss';

import './images/favicons/favicon.ico';
import './images/favicons/favicon-16x16.png';
import './images/favicons/favicon-32x32.png';
import './images/favicons/favicon-96x96.png';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';

import CssBaseline from '@material-ui/core/CssBaseline';
import { MuiThemeProvider } from '@material-ui/core/styles';

import App from './containers/app';

import theme from './theme';
import rootReducer from './reducers/index';
import rootSaga from './sagas/index';


const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));


sagaMiddleware.run(rootSaga);


ReactDOM.render(
	<Provider store={store}>
		<BrowserRouter>
			<MuiThemeProvider theme={theme}>
				<CssBaseline />
				<App />
			</MuiThemeProvider>
		</BrowserRouter>
	</Provider>,
	document.getElementById('root'));