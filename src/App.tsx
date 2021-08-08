import './App.css';
import React from 'react';
import { PDFViewer } from '@react-pdf/renderer';
import MyResume from './MyResume';


function App() {
  return (
    <PDFViewer className="pdf_viewer">
      <MyResume />
    </PDFViewer>
  );
}

export default App;
