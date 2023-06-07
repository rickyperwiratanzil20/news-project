import React from 'react';
import {RegisterBg} from '../../assets';
import './detailNews.scss';
import Link from './../../components/atoms/Link/index';
import {useNavigate, useLocation} from 'react-router-dom';

const DetailNews = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const receivedData = location.state?.data || {};

  return(
      <div className='detail-news-wrapper'>
          <img className='img-cover' src={receivedData.image} alt="thumb"/>
          <p className='news-title'>{receivedData.title}</p>
          <p className='news-author'>{receivedData.author} - {receivedData.date}</p>
          <p className='news-body'>{receivedData.content}</p>
          <Link title="Back" onClick={() => navigate('/')} />
      </div>
  )
}

export default DetailNews;
