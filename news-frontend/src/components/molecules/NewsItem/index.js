import React from 'react';
import {RegisterBg} from '../../../assets';
import './newsItem.scss';
import {useNavigate} from 'react-router-dom';
import Button from './../../atoms/Button/index';

const NewsItem = () => {
  const navigate = useNavigate();
  return(
    <div className='news-item'>
      <img className='image-thumb' src={RegisterBg} alt="post"/>
      <div className='content-detail'>
        <p className='title'>Title News</p>
        <p className='author'>Author - Date Post</p>
        <p className='boduy'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat, ullam! Debitis, laboriosam aliquam! Eaque aut dolores cupiditate perferendis ipsum neque, vero animi fuga reiciendis dolore porro. Libero exercitationem cumque necessitatibus!</p>
        <Button title="View Detail" onClick={() => navigate('/detail-news')} />
      </div>
    </div>
  )
}

export default NewsItem;
