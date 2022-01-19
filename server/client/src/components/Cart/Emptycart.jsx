import React from 'react'
import {Box,Button,makeStyles, Typography} from "@material-ui/core"
import { useHistory } from 'react-router'
const usestyle=makeStyles(
    {
      component:  {
margin:"80px 140px",
width:"80%",
background:"#fff",
height:"65vh"
        },
        image:
        {
width:"15%"
        },
        container:
        {
            textAlign:"center",
            paddingTop:"70px",
            '& > *':
            {
                marginTop:"10px"
            }
        },
        button:
        {
            background:"blue",
            color:"white",
            width:"200px",
            height:"55px",
            marginTop:"20px"
        }
    }
)
 const Emptycart = () => {
    const classes=usestyle();
    const history=useHistory()
    const shopnow= ()=>
    {
        history.push("/")
    }
    
    const emptycarturl = 'https://rukminim1.flixcart.com/www/800/800/promos/16/05/2019/d438a32e-765a-4d8b-b4a6-520b560971e8.png?q=90';
    return (
 <Box className={classes.component} >
     <Box className={classes.container}>
     <img src={emptycarturl} alt="" className={classes.image} />
     <Typography>Your cart is empty</Typography>
     <Typography>Add itmes to it now</Typography>
     <Button onClick={()=> shopnow()} className={classes.button} variant="contained">Shop now</Button>


     </Box>
 </Box>
    )
}
export default Emptycart
