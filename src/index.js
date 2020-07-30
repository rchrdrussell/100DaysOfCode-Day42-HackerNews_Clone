import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import App from './components/App';
import GlobalStyles from './styles/globals';
import configureStore from './store';
import { Provider } from 'react-redux';


const renderApp = () => {
	const store = configureStore({});

	if(process.env.NODE_ENV !== 'production'){
		console.log("Initial State ->");
		console.log(store.getState());
	}

	ReactDOM.render(
		<Provider store={store}>
		<div>
		  <GlobalStyles />
		  <App />
		</div>
		</Provider>,
		document.getElementById('root')
	);
};

renderApp();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
