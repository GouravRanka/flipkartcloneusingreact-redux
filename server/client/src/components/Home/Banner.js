import Carousel from 'react-material-ui-carousel'
import { Paper, Button,makeStyles } from '@material-ui/core'
import { bannerData } from '../../constants/db';
import { BrowserRouter, Route, Link,Switch } from "react-router-dom";
const usestyle=makeStyles(theme=>(
    {
        image:
        {
            width:"100vw",
            height:"40vh"
        },
        [theme.breakpoints.down('sm')]: {
            // objectFit:"cover"    
            
        },
    }
)
)
const Banner = () =>
{
    const classes=usestyle();
    return(
        
        <Carousel 
        animation="slide"
        indicators={false}
        navButtonsAlwaysVisible={true}
        cycleNavigation={true}

        >
        {
            
            bannerData.map(data   => (
                <img className={classes.image} src={data} alt="" />
            ) )
        }
    </Carousel>
    )
}
export default Banner