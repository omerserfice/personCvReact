import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import Index from './Router/Index';
import store from './Redux/store';
import {Provider} from 'react-redux';
 
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <Suspense fallback={false}>
    <Index/>
    </Suspense>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
