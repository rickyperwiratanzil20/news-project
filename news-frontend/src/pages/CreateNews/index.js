import React from 'react';
import {Button, Gap, Input, Link, TextArea, Upload} from '../../components';
import {useNavigate} from 'react-router-dom';
import './createNews.scss';

const CreateNews = () => {
  const navigate = useNavigate();
  return(
      <div className='news-post'>
        <Link title="Kembali" onClick={() => navigate('/')}/>
        <p className='title'>Create News</p>
        <Input label="Post Title"/>
        <Upload/>
        <TextArea/>
        <Gap height={20}/>
        <div className='button-action'>
          <Button title="Save" />
        </div>
      </div>
  )
}

export default CreateNews;
