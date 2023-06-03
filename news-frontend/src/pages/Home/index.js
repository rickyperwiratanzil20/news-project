import React from 'react'
import { NewsItem, Button, Gap } from '../../components';
import {useNavigate} from 'react-router-dom';
import './home.scss';

const Home = () => {
    const navigate = useNavigate();
    return (
        <div className='home-page-wrapper'>
            <div className='create-wrapper'>
                <Button title="Create News" onClick={() => navigate('/create-news')}/>
            </div>
            <Gap height={20}/>
            <div className='content-wrapper'>
                <NewsItem/>
                <NewsItem/>
                <NewsItem/>
                <NewsItem/>
            </div>
            <div className='pagination'>
                <Button title="Previous" />
                <Gap width={20}/>
                <Button title="Next"/>
            </div>
            <Gap height={20}/>
        </div>
    )
}

export default Home;
