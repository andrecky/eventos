import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from "react-router-dom";

let render = () => {
    ReactDOM.render(
        <BrowserRouter >
            <App />
        </BrowserRouter>, document.getElementById('root'));
}
render();
// store.subscribe(render)

serviceWorker.unregister();