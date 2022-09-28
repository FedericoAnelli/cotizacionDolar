
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const NewsArticle = ({ title, contentSnippet, fuente, pubDate }) => {

    return (
        <Card sx={{ maxWidth: 345, margin: "10%" }}>
            <CardHeader
                title={title}
                subheader={pubDate}
            />
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                       {contentSnippet}
                </Typography>
            <p>Fuente: {fuente}</p>
            </CardContent>
        </Card>
    );
    }

export default NewsArticle;