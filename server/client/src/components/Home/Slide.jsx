import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import React from 'react'
// import { products } from '../../../../server/constants/Product';
// import { products } from '../../constants/db';
import { makeStyles,Box,Typography,Button,Divider } from '@material-ui/core';
import { useSelector,useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import Countdown from 'react-countdown';

const usestyle= makeStyles(
    {
       image: {
height:150
        },
        component:
        {
            marginTop:10,
            background:"#ffffff"
        },
        deal:
        {
            padding:"15px 20px",
            display:"flex",
            alignItems:"center"
        },
        dealtext:
        {
            fontSize:"20px",
            fontWeight:"600px",
            lineHeight:"32px",
            marginRight:"20px",
            
        },
        timer:
        {
            color:"#7f7f7f",
            marginLeft:"10px"
        
        },
        button:
        {
            marginLeft:"auto",
            padding:"10px",
            fontSize:10
        },
        text:
        {
            fontSize:"14px"
        },
        wrapper:
        {
            padding:"35px 15px"
        }
    }
)
const responsive = {

    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5
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
const Slide = ({timer,title,products})=>
{const timerURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/timer_a73398.svg';



const renderer = ({hours,minutes,seconds})=>
{
    return <span className={classes.timer} >{hours}:{minutes}:{seconds} Left</span>;
}

    const classes=usestyle();
    return(


        <Box className={classes.component} >
            <Box className={classes.deal} >
            <Typography className={classes.dealtext} >{title}</Typography>
            {
                timer &&
                <>
            <img style={{width:24}} src={timerURL} alt="" />
            <Countdown date={Date.now() + 5.04e+7 } renderer={renderer} />
            </>
}
<Button className={classes.button} variant="contained" color="primary" >View All</Button>
            </Box>
            <Divider />
        <Carousel responsive={responsive}
        infinite={true}
        draggable={false}
        swipeable={false}
        centerMode={true}
        autoPlay={true}
        keyBoardControl={true}
        removeArrowOnDeviceType={["tablet", "mobile"]}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
        containerClass="carousel-container"
        
        >
            
            {
              Array.isArray(products) &&  products.map(product =>(
                    <Link to={`product/${product.id}`}>
                    <Box textAlign="center" className={classes.wrapper} >
                        {/* box also has a prop called text align  */}
                    <img className={classes.image} src={product.url} alt="" />
                    <Typography className={classes.text} style={{fontWeight:"600"}}>{product.title.shortTitle}</Typography>
                    <Typography className={classes.text} style={{color:"blue"}} >{product.discount} </Typography>
                    <Typography className={classes.text} style={{opacity:0.6}} >{product.tagline}</Typography>
                    </Box>
                    </Link>
                ))
            }
      
      </Carousel>
      </Box>
    )
}
export default Slide