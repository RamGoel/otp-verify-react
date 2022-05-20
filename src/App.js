import React from 'react';
import { BrowserRouter, Link, Routes, Route } from 'react-router-dom';
import './style.css';
import HomePage from './components/HomePage';
import OtpPage from './components/OtpPage';
export default function App() {
  return (
    // <BrowserRouter>
    //   <Routes>
    //     <Route path="/" element={<HomePage />}>
    //       <Route path="verify" element={<OtpPage />}> </Route>
    //     </Route>
    //   </Routes>
    // </BrowserRouter>
    <OtpPage />
  );
}
