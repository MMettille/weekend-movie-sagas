import {useSelector} from 'react-redux';
import {useHistory} from 'react-router-dom';
// Imports needed from material-ui for the Card
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

function Details() {

    const details = useSelector(store => store.movieDetails)
    const history = useHistory();
    console.log(details)

    const handleClick = () => {
        console.log('returning to list');
        history.push('/')
    }
    return(
        <div>
        <Card>
            <CardActionArea>
                <img src={details.poster} alt={details.title} />
                <CardContent>
                    <Typography gutterBottom variant="h4" component="h2">{details.title}</Typography>
                    <Typography gutterBottom variant="h5" component="h3">{details.genres}</Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {details.description}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
        <Button size="large" onClick={handleClick}>Return to List</Button>
        </div>
    )
}

export default Details;