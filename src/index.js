import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './app/components/navigation/App';
import * as serviceWorker from './serviceWorker';
import configureStore from "./app/state/store";
import {Provider} from "react-redux";
import 'bootstrap/dist/css/bootstrap.min.css';

const reduxStore = configureStore(window.REDUX_INITIAL_DATA);

ReactDOM.render(
    <React.StrictMode>
        <Provider store={reduxStore}>
            <App />
        </Provider>
    </React.StrictMode>,
    document.getElementById('root'));

// To work offline and load faster, change unregister() to register()
serviceWorker.unregister();
