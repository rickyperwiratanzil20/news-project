import React from 'react';
import { Footer, Header } from '../../components';
import { Routes, Route } from 'react-router-dom';
import DetailNews from './../DetailNews/index';

const MainDetailNews = () => {
  return(
    <div className='main-app-wrapper'>
        <Header/>
        <div className='content-wrapper'>
          <Routes>
              <Route index element={<DetailNews/>} />
          </Routes>
        </div>
        <Footer/>
    </div>
  )
}

export default MainDetailNews;
