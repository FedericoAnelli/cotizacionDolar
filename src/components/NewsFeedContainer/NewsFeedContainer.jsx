import { useState, useEffect, Suspense, lazy } from 'react';
import NewsArticle from '../NewsArticle/NewsArticle';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import CircularProgress from '@mui/material/CircularProgress';
import './NewsFeedContainer.css';
import {Adsense} from '@ctrl/react-adsense';
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
    const [newsClarin, setNewsClarin] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    let parser = new Parser();
    
    const cutImage = (content) => {
        let image = content.match(/<img[^>]+src="([^">]+)"/g);
        if (image) {
            image = image[0].split('"')[1];
        }
        return image;
    }

    useEffect(() => {
        const fetchNews = async () => {
        try {
            setError(null);
            setNews(null);
            setLoading(true);
            let responsePerfil = await parser.parseURL('https://www.perfil.com/feed/economia')
            let responseClarin = await parser.parseURL('https://rss.app/feeds/SoMasYosEiGxQvfI.xml')
            console.log(responseClarin);
            setNews(responsePerfil);
            setNewsClarin(responseClarin);
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
            <div>
            <Carousel className='carouselCustomization' responsive={responsive} swipeable={true} draggable={true}>
                {news.items?.map((item, index) => (
                  <Suspense fallback={<CircularProgress />}>
                    <NewsArticle key={index} title={item.title} image={cutImage(item.content)} contentSnippet={item.contentSnippet} fuente="Editorial Perfil" pubDate={item.pubDate}/>
                  </Suspense>
                ))}
            </Carousel>

            <Adsense
              client="ca-pub-4864391857426149"
              style={{ width: '100%' }}
              slot="7953644771"
              format="auto"
              />

            <Carousel className='carouselCustomization' responsive={responsive} swipeable={true} draggable={true}>
                {newsClarin.items?.map((itemClarin, index) => (
                    <Suspense fallback={<CircularProgress />}>
                    <NewsArticle key={index} title={itemClarin.title} image={cutImage(itemClarin.content)} contentSnippet={itemClarin.contentSnippet} fuente="Clarín" pubDate={itemClarin.pubDate}/>
                    </Suspense>
                ))}
            </Carousel>

            <Adsense
              client="ca-pub-4864391857426149"
              style={{ width: '100%' }}
              slot="7953644771"
              format="auto"
              />

            </div>
            );
};

export default NewsFeedContainer;


