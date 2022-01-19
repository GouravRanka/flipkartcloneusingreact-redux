import { useSelector,useDispatch } from "react-redux"
import { useEffect } from "react";
import { getProductDetails  } from "../../redux/actions/productactions";
import {Box, Typography,Table,TableBody,TableCell,TableHead, TableRow} from "@material-ui/core"
import { makeStyles } from "@material-ui/core";
import clsx from 'clsx'
import ActionItem from "./ActionItem";
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
// import { getProductDetailsReducer } from "../../redux/reducers/productReducer"
const usestyle=makeStyles(
    {
        component:{
marginTop:"65px",
background:"#F2F2F2"
        },
        container:{
margin:"0 80px",
background:"#FFF",
display:"flex"
            },
            rightContainer:
            {
                marginTop:"50px",
                '& > *':
                {
                    marginTop:"10px"
                }
              
            },
            smalltext:
            {
fontSize:"14px",
verticalAlign:"baseline",
'& > *':
{
    fontSize:14,
    marginTop:10
}
            },
            greytextcolor:
            {
                color:"#878787"
            },
            price:
            {
                fontWeight:"600px",
                fontSize:"28px"
            },
            badge:
            {
                fontSize:14,
                color:"green",
                marginRight:"10px"
            }
    }
)
const DetailView = ({match})=>
{
    const sellerURL = 'https://rukminim1.flixcart.com/lockin/774/185/images/CCO__PP_2019-07-14.png?q=50';
    const fassured = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png'
    const date=new Date(new Date().getTime()+(5*24*60*60*1000))

    const classes=usestyle();
const {product}=useSelector(state=>state.getProductDetails)


const dispatch = useDispatch();




useEffect(() => {
    dispatch(getProductDetails(match.params.id));
 }, ['dispatch']  ) 

return(
    <Box className={classes.component}>
        {product && Object.keys(product).length && 
    <Box className={classes.container}>
    <Box style={{minWidth:"40%"}}>
<ActionItem product={product}/>
    </Box>


    <Box className={classes.rightContainer}>
<Typography>{product.title.longTitle}</Typography>
<Typography className={clsx(classes.smalltext , classes.greytextcolor)}>3.71,873 ratings and 208 reviews
<span><img style={{width:77,marginLeft:18}} src={fassured} alt="" /></span>
</Typography>
<Typography>
    <span className={classes.price}>₹{product.price.cost}</span> &nbsp; &nbsp; &nbsp; 
    <span className={classes.greytextcolor}> <strike>₹{product.price.mrp}</strike></span> &nbsp; &nbsp; &nbsp; 
    <span style={{color:"green"}}>{product.price.discount}</span>&nbsp; &nbsp; &nbsp; 
</Typography>

<Typography style={{marginTop:"20px",fontWeight:600}}>Available offers</Typography>
<Box className={classes.smalltext}>

<Typography><LocalOfferIcon className={classes.badge}/>Special PriceGet extra 25% off (price inclusive of discount)T&C</Typography>

<Typography><LocalOfferIcon className={classes.badge}/>Bank Offer5% Unlimited Cashback on Flipkart Axis Bank Credit CardT&C</Typography>

<Typography><LocalOfferIcon className={classes.badge}/>Bank Offer20% off on 1st txn with Amex Network Cards issued by ICICI Bank,IndusInd Bank,SBI Cards and MobikwikT&C</Typography>

<Typography><LocalOfferIcon className={classes.badge}/>Bank Offer10% Off on Bank of Baroda Mastercard debit card first time transaction, Terms and Condition apply</Typography>
</Box>

<Table>

<TableBody>

<TableRow className={classes.smalltext}>
    <TableCell className={classes.greytextcolor}>Delivery</TableCell>
    <TableCell style={{fontWeight:800}}>{date.toDateString()} | ₹40(Delivery charge)

</TableCell>
</TableRow>
<TableRow className={classes.smalltext}>
    <TableCell className={classes.greytextcolor}>warranty</TableCell>
    <TableCell>No warranty</TableCell>
</TableRow>
<TableRow className={classes.smalltext}>
    <TableCell className={classes.greytextcolor}>seller
        
    </TableCell>
    <TableCell  className={classes.smalltext}>
        <span style={{color:"#2874f0"}}>Gourav</span>
        <Typography>GST invoice available</Typography>
        <Typography>10 days replacement policyt</Typography>
        <Typography>view more seller starting from ₹ 300

</Typography>
    </TableCell>
</TableRow>

<TableRow className={classes.smalltext}>
    <TableCell colSpan={2}>
        <img style={{width:390}} src={sellerURL} alt="" />
    </TableCell>
   \
</TableRow>
<TableRow className={classes.smalltext}>
    <TableCell className={classes.greytextcolor}>Description</TableCell>
    <TableCell>{product.description}</TableCell>
</TableRow>

</TableBody>






</Table>
    </Box>

    </Box>
}
    </Box>
)
}
export default DetailView