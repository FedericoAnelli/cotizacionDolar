import { useState, useEffect } from 'react';
import NewsArticle from '../NewsArticle/NewsArticle';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import CircularProgress from '@mui/material/CircularProgress';
import './NewsFeedContainer.css';
let Parser = require('rss-parser')

const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };


const NewsFeedContainer = () => {
    const [news, setNews] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    let parser = new Parser();
    
    useEffect(() => {
        const fetchNews = async () => {
        try {
            setError(null);
            setNews(null);
            setLoading(true);
            let response = await parser.parseURL('https://www.perfil.com/feed/economia')
            setNews(response);
        } catch (e) {
            setError(e);
        }
        setLoading(false);
        };
        fetchNews();
    }, []);
    
    if (loading) return <CircularProgress />;
    if (error) return <p>Error</p>;
    if (!news || news.length === 0) return <CircularProgress />;
    return (
            <Carousel className='carouselCustomization' responsive={responsive} swipeable={true} draggable={true}>
                {news.items?.map((item, index) => (
                    <NewsArticle key={index} title={item.title} contentSnippet={item.contentSnippet} fuente="Editorial Perfil" pubDate={item.pubDate}/>
                ))}
            </Carousel>
            );
};

export default NewsFeedContainer;


