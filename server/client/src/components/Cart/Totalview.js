import React from 'react'
import { Box,Typography,makeStyles } from '@material-ui/core'
import { useState,useEffect } from 'react';
import Cart from './Cart';
const usestyle=makeStyles(
    {
      component:  {
width:"25vw",
background:"white",
marginLeft:"15px"
        },
        header:
        {
            padding:"15px 24px",
            borderBottom:"1px solid #f0f0f0"
        },
        container:
        {
            padding:"15px 24px",
            '& > *':
            {
                marginTop:"20px",
                fontSize:"14px"

            }
        },
        price:
        {
            float:"right"
        },
        totalamount:
        {
            fontWeight:600,
            fontSize:18,
            borderTop:"1px dashed #e0e0e0 ",
            borderBottom:"1px dashed #e0e0e0 ",
            padding:"20px 0"
        }
    }
)
export default function Totalview({CartItems}) {
    const classes=usestyle();
    const [price,setPrice]=useState(0)
    const [discount,setDiscount]=useState(0)
    useEffect(() => {
        totalAmount()
      
    }, [CartItems])

    const totalAmount = () => {
        let price = 0, discount = 0;
        console.log(CartItems);
        CartItems.map(CartItems => (
            price += CartItems.price.mrp,
            discount += (CartItems.price.mrp - CartItems.price.cost) 
        ))
        setPrice(price);
        setDiscount(discount);
    }
    return (
     <Box className={classes.component}>
       <Box className={classes.header}>
         <Typography>Price Details</Typography>
         </Box> 

        <Box className={classes.container} >
         <Typography>price({CartItems.length}) <span className={classes.price}>₹{price}</span></Typography>  
          <Typography>discount <span className={classes.price}>₹{discount}</span></Typography> 
          <Typography>delivery charge <span className={classes.price}>₹40</span></Typography> 
          <Typography className={classes.totalamount}>Total amount <span className={classes.price}>{price-discount}</span></Typography> 
          <Typography style={{color:"green"}}>You will save ₹{discount-40} </Typography> 
         </Box> 
     </Box>
    )
}
