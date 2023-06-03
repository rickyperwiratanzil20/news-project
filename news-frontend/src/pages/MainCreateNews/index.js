import React from 'react';
import { Footer, Header } from '../../components';
import { Routes, Route } from 'react-router-dom';
import CreateNews from '../CreateNews/index';

const MainCreateNews = () => {
  return(
    <div className='main-app-wrapper'>
        <Header/>
        <div className='content-wrapper'>
          <Routes>
              <Route index element={<CreateNews />} />
          </Routes>
        </div>
        <Footer/>
    </div>
  )
}

export default MainCreateNews;
