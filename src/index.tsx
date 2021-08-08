import './index.css';
import reportWebVitals from './reportWebVitals';

import React from 'react';
import ReactDOM from 'react-dom';
import { PDFViewer } from '@react-pdf/renderer';
import MyResume from './MyResume';


const App = () => {
  return (
    <PDFViewer className="pdf_viewer">
      <MyResume />
    </PDFViewer>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
