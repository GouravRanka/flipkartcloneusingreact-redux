import React from 'react'
import { makeStyles,Box,Typography,Card,CardContent,Button } from "@material-ui/core"
import clsx from 'clsx'
import GroupButtons from './GroupButtons'

const usestyle=makeStyles(
    {
       component: {
display:"flex",
borderRadius:0,
border:"1px solid #f0f0f0"
        },
        leftcomponent:
        {
margin:"20px",
display:"flex",
flexDirection:"column"
        },
        rightcomponents:
        {
marginTop:"20px"
        },
        smalltext:
        {
            fontSize:14
        },
        greytextcolor:
        {
            color:"#878787"
        },
        cost:
        {
            fontSize:"20px",
            fontWeight:"600"
        },
        image:
        {
width:"110px",
height:"110px"

        },
        remove:
        {
            marginTop:"2px",
            fontSize:16
        }
    }
)
 const CartItem = ({CartItems,removeitemfromcart}) => {
     const classes=usestyle();
     
     const fassured = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png'
    return (
      
      <>
     <Card className={classes.component}>
         <Box className={classes.leftcomponent}>
              <img className={classes.image} src={CartItems.url} alt="" />
              <GroupButtons/>
         </Box>
         <Box className={classes.rightcomponents}>
<Typography>{CartItems.title.longTitle}</Typography>
<Typography className={clsx(classes.smalltext,classes.greytextcolor)} style={{marginTop:"10px"}}>Seller:40500
<span> <img style={{width:77,marginLeft:18}}  src={fassured} alt="" /></span>
</Typography>

<Typography style={{margin:"20px 0"}}>
    <span className={classes.cost}>₹{CartItems.price.cost}</span> &nbsp; &nbsp; &nbsp;&nbsp;
    <span className={classes.greytextcolor}><strike>₹{CartItems.price.mrp}</strike></span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <span style={{color:"#388E3C"}}>{CartItems.price.discount}off</span>
</Typography>
<Button onClick={()=> removeitemfromcart(CartItems.id)}  className={classes.remove}>Remove</Button>

         </Box>
     </Card>
      </>
    )
}

export default CartItem