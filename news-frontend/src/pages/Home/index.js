import React, {useState, useEffect}from 'react'
import { NewsItem, Button, Input, Gap } from '../../components';
import './home.scss';

const Home = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [keyword, setKeyword] = useState('');

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
      fetch('https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=lGZzX8N9NY9hRIUyQqUHF45vszb7ar07')
        .then(response => response.json())
        .then(data => resolve(data))
        .catch(error => reject(error));
    });
  };

  const searchAPI = async () => {
    try {
      const response = await fetch(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${keyword}&api-key=lGZzX8N9NY9hRIUyQqUHF45vszb7ar07`);
      const data = await response.json();
      setNews(data.response.docs);
    } catch (error) {
      console.log(error);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className='home-page-wrapper'>

      {/* <div className='create-wrapper'>
          <Button title="Create News" onClick={() => navigate('/create-news')}/>
      </div> */}

      <div className="search-container">
        <Input
          placeholder="Search"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
        />
        <Gap width={20}/>
        <Button onClick={searchAPI} title="GO"/>
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
