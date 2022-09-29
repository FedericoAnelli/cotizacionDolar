
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import ShareIcon from '@mui/icons-material/Share';
import { CardActions } from '@mui/material';
import IconButton from '@mui/material/IconButton';
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
            <CardContent className='contentBody'>
                <Typography variant="body2" color="text.secondary">
                       {contentSnippet ? contentSnippet : "Noticia en desarrollo"}
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
            {/*
                <IconButton aria-label="share" sx={{position: "absolute", bottom: 0, left: 0}}>
                    <ShareIcon />
                </IconButton>
            */}
                <p className='source'>Fuente: {fuente}</p>
            </CardActions>
        </Card>
    );
    }

export default NewsArticle;