
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import './NewsArticle.css';

const NewsArticle = ({ title, contentSnippet, image, fuente, pubDate }) => {

    return (
        <Card raised={true} sx={{ maxWidth: "100%", height: "99%", position: "relative"}}>

            <CardHeader
                title= {<h5 className='titulares'>{  title }</h5>}
                subheader= {<p className='fechaPublicacion'>{pubDate}</p>}
            />
                <CardMedia
                component="img"
                height="194"
                image={image}
                alt={title}
            />
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                       {contentSnippet ? contentSnippet : "Noticia en desarrollo"}
                </Typography>
            <p className='source'>Fuente: {fuente}</p>
            </CardContent>

        </Card>
    );
    }

export default NewsArticle;