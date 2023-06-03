import React from 'react';
import {RegisterBg} from '../../assets';
import './detailNews.scss';
import Link from './../../components/atoms/Link/index';
import {useNavigate, useParams} from 'react-router-dom';

const DetailNews = () => {
  const navigate = useNavigate();
  return(
      <div className='detail-news-wrapper'>
          <img className='img-cover' src={RegisterBg} alt="thumb"/>
          <p className='news-title'>Title News</p>
          <p className='news-author'>Author - Date Post</p>
          <p className='news-body'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, saepe iure culpa laborum quam ex modi tenetur. Odio quibusdam dignissimos nisi voluptatibus mollitia, veritatis quidem! Voluptatum nulla aperiam asperiores quam?</p>
          <Link title="Kembali" onClick={() => navigate('/')} />
      </div>
  )
}

export default DetailNews;
