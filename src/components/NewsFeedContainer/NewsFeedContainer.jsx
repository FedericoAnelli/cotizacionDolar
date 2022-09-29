import { useState, useEffect, Suspense, lazy } from 'react';
import NewsArticle from '../NewsArticle/NewsArticle';
import "react-multi-carousel/lib/styles.css";
import CircularProgress from '@mui/material/CircularProgress';
import './NewsFeedContainer.css';
import {Adsense} from '@ctrl/react-adsense';
import Grid from '@mui/material/Grid';
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
    const [newsPagina12, setNewsPagina12] = useState([]);
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
            let responsePagina12 = await parser.parseURL('https://rss.app/feeds/4aSAExYWoCTQR3Tf.xml')
            setNews(responsePerfil);
            setNewsClarin(responseClarin);
            setNewsPagina12(responsePagina12);
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
            
            <Grid container spacing={2} sx={{p: 5, textAlign: "left" }}>
              
                {newsClarin.items?.map((itemClarin, index) => (
                <Grid item xs={12} sm={6} md={4} lg={3}>
                    <Suspense fallback={<CircularProgress />}>
                    <NewsArticle key={index} title={itemClarin.title} image={cutImage(itemClarin.content)} contentSnippet={itemClarin.contentSnippet} fuente="Clarín" pubDate={itemClarin.pubDate}/>
                    </Suspense>
                </Grid>
                ))}
                
                {newsPagina12.items?.map((itemPagina12, index) => (
                <Grid item xs={12} sm={6} md={4} lg={3}>
                    <Suspense fallback={<CircularProgress />}>
                    <NewsArticle key={index} title={itemPagina12.title} image={cutImage(itemPagina12.content)} contentSnippet={itemPagina12.contentSnippet} fuente="Página 12" pubDate={itemPagina12.pubDate}/>
                    </Suspense>
                </Grid>
                ))}

                {news.items?.map((item, index) => (
                  <Grid item xs={12} sm={6} md={4} lg={3}>
                    <Suspense fallback={<CircularProgress />}>
                      <NewsArticle key={index} title={item.title} image={cutImage(item.content)} contentSnippet={item.contentSnippet} fuente="Editorial Perfil" pubDate={item.pubDate}/>
                    </Suspense>
                  </Grid>
                ))}

              <Adsense
              client="ca-pub-4864391857426149"
              style={{ width: '100%' }}
              slot="7953644771"
              format="auto"
              />
            </Grid>

            );
};

export default NewsFeedContainer;


