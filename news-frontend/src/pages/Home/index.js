import React, {useState, useEffect}from 'react'
import { NewsItem, Button, Gap } from '../../components';
import {useNavigate} from 'react-router-dom';
import './home.scss';

const Home = () => {
    const navigate = useNavigate();
    const [news, setNews] = useState([]);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      fetchData()
        .then(data => {
          setNews(data.response.docs);
          setLoading(false);
        })
        .catch(error => {
          console.log(error);
          setLoading(false);
        });
    }, []);
  
    const fetchData = () => {
      return new Promise((resolve, reject) => {
        // Menggunakan fetch API untuk mengambil data dari API
        fetch('https://api.nytimes.com/svc/search/v2/articlesearch.json?fq=news_desk:(cars)&api-key=lGZzX8N9NY9hRIUyQqUHF45vszb7ar07')
          .then(response => response.json())
          .then(data => resolve(data))
          .catch(error => reject(error));
      });
    };
  
    if (loading) {
      return <div>Loading...</div>;
    }

    return (
        <div className='home-page-wrapper'>
            <div className='create-wrapper'>
                <Button title="Create News" onClick={() => navigate('/create-news')}/>
            </div>
            <Gap height={20}/>
            <div className='content-wrapper'>
            {news.map((nws, index) => (
                <NewsItem
                    key={index}
                    title={nws.abstract}
                    author={nws.source}
                    date={nws.pub_date}
                    content={nws.lead_paragraph}
                />
            ))}
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
