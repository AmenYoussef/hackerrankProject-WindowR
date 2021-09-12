import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './componet/navbarCom';
import HeaderInfo from './componet/headerComp';
import Prodact from './componet/prodact';
import reportWebVitals from './reportWebVitals';
ReactDOM.render(
  <React.StrictMode>
    <Header />
    <HeaderInfo />
    <Prodact />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
