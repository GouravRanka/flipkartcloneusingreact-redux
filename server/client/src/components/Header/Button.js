import {  Box, makeStyles, Typography,Button,Badge } from "@material-ui/core"
import { BrowserRouter, Route, Link } from "react-router-dom";
import { useState } from "react";
import { useContext } from "react";
import { LoginContext } from "../../context/ContextProvider";
import { useSelector } from "react-redux";
import Login from "../login/Login";
import Profile from "./Profile.jsx"
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
const usestyle=makeStyles({
   loginbutton: {
background:"white",
color:"",
width:"120px",
borderRadius:1,
fontWeight:"600",
textTransform:"none",
fontSize:"20px",
'&:hover': {
    
    backgroundColor: 'black',
    color: '#3c52b2',
},

    },
 

    buttons:
    {
        margin:"0 20px 0 7%",
        display:"flex",
        alignItems:"center",
        textDecoration:"none",
        
        '& > *':
        {
            marginRight:"50px"
        }
    },
    cart:
    {
        display:"flex",
        textDecoration:"none"
       
    },
    cart_typography:
    {
        fontSize:"20px",
        marginLeft:10,
        color:"#fff"
        
    }
})

 const Buttons = ()=>

{ 
    const {CartItems} =useSelector(state=>state.cart)
    const { account, setAccount } = useContext(LoginContext);
 
    
    const [open, setOpen] =useState(false);
    const classes=usestyle();
   const openlogindialog= ()=>
   {
setOpen(true)
   }
return(
    <>
    <Box className={classes.buttons}>

        {
       account?<Profile account={account} setAccount={setAccount}/>:
    <Button onClick={()=>openlogindialog()}  className={classes.loginbutton}>Login</Button>
        }
        
    <Typography style={{fontSize:"20px"}}>More</Typography>
   <Link to='/cart' className={classes.cart}>
    <Badge badgeContent={CartItems.length} style={{color:"white"}}  color="primary">
    <ShoppingCartIcon style={{marginTop:"2px"}}/>
</Badge>


    
 <Typography className={classes.cart_typography}>Cart</Typography> 
   </Link>
   </Box>
   <Login open={open} setOpen={setOpen} setAccount={setAccount}/>
    </>
)
}

export default Buttons