import React, {useState, useEffect}from 'react'
import { NewsItem, Button, Input, Gap } from '../../components';
import {useNavigate} from 'react-router-dom';
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
  const navigate = useNavigate();

  const options = [
    { value: 'Booming', label: 'Booming' },
    { value: 'Business Day', label: 'Business Day' },
    { value: 'Business', label: 'Business' },
    { value: 'Cars', label: 'Cars' },
    { value: 'Circuits', label: 'Circuits' },
    { value: 'Classifieds', label: 'Classifieds' },
    { value: 'Connecticut', label: 'Connecticut' },
    { value: 'Crosswords & Games', label: 'Crosswords & Games' },
    { value: 'Culture', label: 'Culture' },
    { value: 'DealBook', label: 'DealBook' },
    { value: 'Dining', label: 'Dining' },
    { value: 'Editorial', label: 'Editorial' },
    { value: 'Education', label: 'Education' },
    { value: 'Energy', label: 'Energy' },
    { value: 'Entrepreneurs', label: 'Entrepreneurs' },
    { value: 'Environment', label: 'Environment' },
    { value: 'Escapes', label: 'Escapes' },
    { value: 'Fashion & Style', label: 'Fashion & Style' },
    { value: 'Fashion', label: 'Fashion' },
    { value: 'Favorites', label: 'Favorites' },
    { value: 'Financial', label: 'Financial' },
    { value: 'Flight', label: 'Flight' },
    { value: 'Food', label: 'Food' },
    { value: 'Foreign', label: 'Foreign' },
    { value: 'Generations', label: 'Generations' },
    { value: 'Giving', label: 'Giving' },
    { value: 'Global Home', label: 'Global Home' },
    { value: 'Health & Fitness', label: 'Health & Fitness' },
    { value: 'Health', label: 'Health' },
    { value: 'Home & Garden', label: 'Home & Garden' },
    { value: 'Home', label: 'Home' },
    { value: 'Jobs', label: 'Jobs' },
    { value: 'Key', label: 'Key' },
    { value: 'Letters', label: 'Letters' },
    { value: 'Long Island', label: 'Long Island' },
    { value: 'Magazine', label: 'Magazine' },
    { value: 'Market Place', label: 'Market Place' },
    { value: 'Media', label: 'Media' },
    { value: "Men's Health", label: "Men's Health" },
    { value: 'Metro', label: 'Metro' },
    { value: 'Metropolitan', label: 'Metropolitan' },
    { value: 'Movies', label: 'Movies' },
    { value: 'Museums', label: 'Museums' },
    { value: 'National', label: 'National' },
    { value: 'Nesting', label: 'Nesting' },
    { value: 'Obits', label: 'Obits' },
    { value: 'Obituaries', label: 'Obituaries' },
    { value: 'Obituary', label: 'Obituary' },
    { value: 'OpEd', label: 'OpEd' },
    { value: 'Opinion', label: 'Opinion' },
    { value: 'Outlook', label: 'Outlook' },
    { value: 'Personal Investing', label: 'Personal Investing' },
    { value: 'Personal Tech', label: 'Personal Tech' },
    { value: 'Play', label: 'Play' },
    { value: 'Politics', label: 'Politics' },
    { value: 'Regionals', label: 'Regionals' },
    { value: 'Retail', label: 'Retail' },
    { value: 'Retirement', label: 'Retirement' },
    { value: 'Science', label: 'Science' },
    { value: 'Small Business', label: 'Small Business' },
    { value: 'Society', label: 'Society' },
    { value: 'Sports', label: 'Sports' },
    { value: 'Style', label: 'Style' },
    { value: 'Sunday Business', label: 'Sunday Business' },
    { value: 'Sunday Review', label: 'Sunday Review' },
    { value: 'Sunday Styles', label: 'Sunday Styles' },
    { value: 'T Magazine', label: 'T Magazine' },
    { value: 'T Style', label: 'T Style' },
    { value: 'Technology', label: 'Technology' },
    { value: 'Teens', label: 'Teens' },
    { value: 'Television', label: 'Television' },
    { value: 'The Arts', label: 'The Arts' },
    { value: 'The Business of Green', label: 'The Business of Green' },
    { value: 'The City Desk', label: 'The City Desk' },
    { value: 'The City', label: 'The City' },
    { value: 'The Marathon', label: 'The Marathon' },
    { value: 'The Millennium', label: 'The Millennium' },
    { value: 'The Natural World', label: 'The Natural World' },
    { value: 'The Upshot', label: 'The Upshot' },
    { value: 'The Weekend', label: 'The Weekend' },
    { value: 'The Year in Pictures', label: 'The Year in Pictures' },
    { value: 'Theater', label: 'Theater' },
    { value: 'Then & Now', label: 'Then & Now' },
    { value: 'Thursday Styles', label: 'Thursday Styles' },
    { value: 'Times Topics', label: 'Times Topics' },
    { value: 'Travel', label: 'Travel' },
    { value: 'U.S.', label: 'U.S.' },
    { value: 'Universal', label: 'Universal' },
    { value: 'Upshot', label: 'Upshot' },
    { value: 'UrbanEye', label: 'UrbanEye' },
    { value: 'Vacation', label: 'Vacation' },
    { value: 'Washington', label: 'Washington' },
    { value: 'Wealth', label: 'Wealth' },
    { value: 'Weather', label: 'Weather' },
    { value: 'Week in Review', label: 'Week in Review' },
    { value: 'Week', label: 'Week' },
    { value: 'Weekend', label: 'Weekend' },
    { value: 'Westchester', label: 'Westchester' },
    { value: 'Wireless Living', label: 'Wireless Living' },
    { value: "Women's Health", label: "Women's Health" },
    { value: 'Working', label: 'Working' },
    { value: 'Workplace', label: 'Workplace' },
    { value: 'World', label: 'World' },
    { value: 'Your Money', label: 'Your Money' }
  ];

  if(localStorage.getItem('isLoggedIn') !== 'true'){
    navigate('/login')
  }
  
  const baseUrlNYT = 'https://newsapi.org/v2';
  const apiKeyNYT = 'apiKey=7089041004f54e54995f19c8c025dd15';

  useEffect(() => {
    fetchData()
      .then(data => {
        setNews(data.articles);
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
      let filterUrl = `${baseUrlNYT}/everything`;

      if(category !== ''){
        filterUrl += `?q=${category}`;
        if (date !== '') {
          filterUrl += `&from=${date}`;
        }
      }

      console.log(`${filterUrl}&${apiKeyNYT}`);
      const response = await fetch(`${filterUrl}&${apiKeyNYT}`);
      const data = await response.json();
      setNews(data.articles);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchData = () => {
    return new Promise((resolve, reject) => {
      fetch(`${baseUrlNYT}/top-headlines?country=us&${apiKeyNYT}`)
        .then(response => response.json())
        .then(data => resolve(data))
        .catch(error => reject(error));
    });
  };

  const searchAPI = async () => {
    try {
      const response = await fetch(`${baseUrlNYT}/everything?q=${keyword}&${apiKeyNYT}`);
      const data = await response.json();
      setNews(data.articles);
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
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>

        <div className="filter-row">
          <label>Source:</label>
          <select name="source" value={filter.source} onChange={handleFilterChange}>
            <option value="">--Select Your Source--</option>
            <option value="sumber1">New York Time</option>
            <option value="sumber2">The Guarians</option>
            <option value="sumber3">OpenNews</option>
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
            image={nws.urlToImage}
            title={nws.title}
            author={nws.source.name}
            date={nws.publishedAt}
            content={nws.description}
          />
        ))}
        </div>

        <Gap height={20}/>
      </div>
    </div>
  )
}

export default Home;
