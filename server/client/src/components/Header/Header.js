import { AppBar, Toolbar, Box, makeStyles, Typography } from "@material-ui/core"
import { BrowserRouter, Route, Link,Switch,theme } from "react-router-dom";
import Search from "./Search" 
import Button from "./Button"
const usestyle = makeStyles((theme)=>(
    {
        header:
        {
            background: "#2874f0",
            height: "65px",
            marginLeft:"10px"
        },
       
        
        logourl: {
            widht: "75px",
            height: "27px",
            marginTop:"6px"
       


        },
        subURL:
        {
            height: "10px",
            marginTop: "6px",
            marginLeft: "2px"}
    
      ,
        exploreplus:
        {
            display: "flex",
            fontStyle: "italic",
            fontSize: "14px",
            [theme.breakpoints.down('sm')]:  
            {
fontSize:"10px"
            }
        }
        ,
        explore:
        {
        fontSize:"14px",
        [theme.breakpoints.down('sm')]:  
        {
// marginLeft:"14px",
fontSize:"8px"
        }
        }
      ,
      plus:
      {
        color: "yellow",
        fontSize:"16px" ,
        [theme.breakpoints.down('sm')]:  
        {
fontSize:"10px"
        }
      }
      ,
        container:
        {
            marginLeft: "12%",
            lineHeight:"",
            textDecoration:"none",
            color:"#fff"
           
        
        }

    }
)
)




const logoURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png';
const subURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png';

const Header = () => {
    const classes = usestyle();
    return (

        <AppBar position="fixed" className={classes.header} >
            <Toolbar>
                <Link to='/' className={classes.container}>
                    <img className={classes.logourl} src={logoURL} alt="" />


                    <Box className={classes.exploreplus}>
                        <Typography className={classes.explore} >Explore <Box className={classes.plus} component="span" >Plus </Box>  </Typography>
                        <img className={classes.subURL} src={subURL} alt="" />
                    </Box>
                </Link>
            <Search/>
            <Button/>
            </Toolbar>
        </AppBar>

    )
}
export default Header