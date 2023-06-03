import React from 'react';
import { Routes, Route } from "react-router-dom";
import { Footer, Header } from '../../components';
import Home from './../Home/index';
import './mainApp.scss';

const MainApp = () => {
  return(
      <div className='main-app-wrapper'>
          <Header/>
          <div className='content-wrapper'>
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
          </div>
          <Footer/>
      </div>
  )
}

export default MainApp;
