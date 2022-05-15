import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App'
import 'bootstrap/dist/css/bootstrap.min.css';
import {createStore} from "redux";
import reminders from './store/reducers'
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const store = createStore(reminders)

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
    <Routes>
        <Route path="/" element={<App/>}/>
    </Routes>
    </Provider>
</BrowserRouter>
,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
