import React from 'react';
import {RegisterBg} from '../../../assets';
import './newsItem.scss';
import {useNavigate} from 'react-router-dom';
import Button from './../../atoms/Button/index';

const NewsItem = ({ title, author, date, content, image }) => {
  const navigate = useNavigate();
  const sendDataToReceiver = () => {
    const data = {
      title: title,
      author: author,
      date: date,
      content: content,
      image: image
    }
    navigate('/detail-news', { state: { data } });
  };

  return(
    <div className='news-item'>
      <img className='image-thumb' src={image} alt="post"/>
      <div className='content-detail'>
        <p className='title'>{title}</p>
        <p className='author'>{author} - {date}</p>
        <p className='body'>{content}</p>
        <Button title="View Detail" onClick={sendDataToReceiver} />
      </div>
    </div>
  )
}

export default NewsItem;
