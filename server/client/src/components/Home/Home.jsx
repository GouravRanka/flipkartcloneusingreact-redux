import NavBar from "./Navbar"
import Banner from "./Banner"
import Slide from "./Slide";
import { Box, makeStyles, Typography } from '@material-ui/core';
import { useSelector,useDispatch } from 'react-redux';
import { getProducts as ListProducts } from '../../redux/actions/productactions';
import { useEffect } from "react";
import MidSection from "./MidSection";

const usestyle=makeStyles(
    {
       container : {
padding:"10px",
background:"#F2F2F2"
        },
        rightbox:
        {
            margin:"10px 0 0 12px"

        }
    }
)

const Home = ()=>
{ 
    const adURL = 'https://rukminim1.flixcart.com/flap/464/708/image/633789f7def60050.jpg?q=70';

    const classes = usestyle();
    {const timerURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/timer_a73398.svg';
const {products}=useSelector(state => state.getProducts)
const dispatch=useDispatch()
useEffect(()=>
{
dispatch(ListProducts())
},[dispatch])
    return(
        <>
        <NavBar/>
        <Box className={classes.container}  >
        <Banner/>
        </Box>

        <Box style={{display:"flex"}}>
        <Box style={{width:"83%"}} >
        <Slide timer={true} title="deal of the day" products={products}/>
        </Box>
        
        <Box className={classes.rightbox}>

    <img style={{width:"230px"}} src={adURL} alt="" />
        </Box>
</Box>
<MidSection/>

<Slide timer={false}  title="suggested itmes" products={products} /> 
<Slide timer={false} title="deal of the day" products={products}  />
<Slide  timer={false} title="deal of the day" products={products}   />

        </>
    )
}
}
export default Home