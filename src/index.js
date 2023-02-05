import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter as Router} from "react-router-dom";
import './index.css';
import App from "./App";
import 'bootstrap/dist/css/bootstrap.min.css';
import store from './Redux/store'
import {Provider} from "react-redux";
import 'react-toastify/dist/ReactToastify.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <Provider store={store}>
      <Router>
          <App />
      </Router>
      </Provider>
  </React.StrictMode>
);
