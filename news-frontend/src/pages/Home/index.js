import React, {useState, useEffect}from 'react'
import { NewsItem, Button, Input, Gap } from '../../components';
import './home.scss';

const Home = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [keyword, setKeyword] = useState('');
  const [filter, setFilter] = useState({
    date: '',
    category: '',
    source: '',
  });
  
  const baseUrlNYT = 'https://api.nytimes.com/svc/search/v2/articlesearch.json';
  const apiKeyNYT = 'api-key=lGZzX8N9NY9hRIUyQqUHF45vszb7ar07';

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

  const filterData = async () => {
    try {
      const { date, category } = filter;
      let filterUrl = baseUrlNYT;

      if (date !== '') {
        filterUrl += `?fq=pub_date:${date}`;
        if (category !== '') {
          filterUrl += ` AND news_desk:${category}`;
        }
      } else if(category !== ''){
        filterUrl += `?fq=news_desk:${category}`;
      }

      const response = await fetch(`${filterUrl}&${apiKeyNYT}`);
      const data = await response.json();
      setNews(data.response.docs);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchData = () => {
    return new Promise((resolve, reject) => {
      fetch(`${baseUrlNYT}?${apiKeyNYT}`)
        .then(response => response.json())
        .then(data => resolve(data))
        .catch(error => reject(error));
    });
  };

  const searchAPI = async () => {
    try {
      const response = await fetch(`${baseUrlNYT}?q=${keyword}&${apiKeyNYT}`);
      const data = await response.json();
      setNews(data.response.docs);
    } catch (error) {
      console.log(error);
    }
  };

  const handleFilterChange = (event) => {
    const { name, value } = event.target;
    setFilter((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className='home-page-wrapper'>
      <div className="filter-container">
        <div className="filter-row">
          <label>Date:</label>
          <input
            type="text"
            name="date"
            value={filter.date}
            onChange={handleFilterChange}
            placeholder="YYYY-MM-DD"
          />
        </div>

        <div className="filter-row">
          <label>Category:</label>
          <select name="category" value={filter.category} onChange={handleFilterChange}>
            <option value="">--Select Your Category--</option>
            <option value="Books">Books</option>
            <option value="Booming">Booming</option>
            <option value="Business">Business</option>
          </select>
        </div>

        <div className="filter-row">
          <label>Source:</label>
          <select name="source" value={filter.source} onChange={handleFilterChange}>
            <option value="">--Select Your Source--</option>
            <option value="sumber1">New York Time</option>
            <option value="sumber2">The Guarians</option>
            <option value="sumber3">Sumber 3</option>
          </select>
        </div>
        <Button onClick={filterData} title="GO"/>
      </div>

      <div className="content-container">
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

        <Gap height={20}/>
      </div>
    </div>
  )
}

export default Home;
