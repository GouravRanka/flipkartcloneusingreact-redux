import {Box, Typography,Table,TableBody,TableCell,TableHead,Button, TableRow} from "@material-ui/core"
import { makeStyles } from "@material-ui/core";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import FlashOnIcon from '@material-ui/icons/FlashOn';
import React from 'react'
import { AddToCart } from "../../redux/actions/CartAction";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { payUsingPaytm } from "../../service/api";
import { post } from "../../utils/paytm";
const usestyle= makeStyles(
    {
       leftContainer: {
padding:"40px 0 0 80px"
        },
        image:
        {
          padding:"15px 20px "  ,
          width:"90%"
        },
        button1:
        {
            background:"#FF9933",
            color:"white",
            width:"46%",
            height:"50px",
            marginRight:"10px"
        },
        button2:
        {
            background:"#fb641b",
            color:"white",
            width:"46%",
            height:"50px",
            marginRight:"10px"
        }
    }
)

export default function ActionItem({product}) {
const history=useHistory()
const classes=usestyle();
const dispatch=useDispatch();
const addtocart = ()=>
{
    dispatch(AddToCart(product.id))
    history.push('/cart')

}
const buyNow = async () => {
    console.log("hari om")
    let response = await payUsingPaytm({ amount: 500, email: 'rankagaurav123@gmail.com'});
    var information = {
        action: 'https://securegw-stage.paytm.in/order/process',
        params: response    
    }
    post(information);
}
    return (
        <>
     <Box className={classes.leftContainer}>
         <img className={classes.image} src={product.detailUrl} alt="" /> <br/>
     
     <Button className={classes.button1} variant="contained" onClick={()=> addtocart() }>
         <ShoppingCartIcon style={{marginRight:"6px"}}/>
Add to cart
     </Button>
     <Button onClick={()=>buyNow()} className={classes.button2}  variant="contained">
         <FlashOnIcon style={{marginRight:"6px"}} />
Buy Now
     </Button>
     </Box>
     </>
    )
}
