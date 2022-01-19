import { useSelector } from "react-redux"
import { useEffect } from "react"
import { makeStyles, Box, Typography,Button } from "@material-ui/core"
import { useDispatch } from 'react-redux'
import { payUsingPaytm } from "../../service/api"
import { post } from "../../utils/paytm"

import { removefromcart } from "../../redux/actions/CartAction"
import Totalview from "./Totalview"
import Emptycart from "./Emptycart"
import CartItem from "./CartItem"

const usestyle = makeStyles(
    {
        component: {
            marginTop: "65px",
            padding: "30px 135px",
            display: "flex"
        },
        leftComponent:
        {
            width: "67%"
        },
        header:
        {
            padding: "15px 24px ",
            background: "#fff"
        },
        placeorder:
        {
background:"#fb641b",
color:"white",
width:"250px",
height:"50px",
display:"flex",
marginLeft:"auto"
        },
        bottom:
        {
padding:"14px 22px",
background:"#fff",
borderTop:"1px solid #f0f0f0",
boxShadow:"0 -2px 10px 0 rgb(0 0 0 /10%)"
        }
    }
)
const Cart = () => {
    const dispatch = useDispatch();
    const classes = usestyle();
    const { CartItems } = useSelector(state => state.cart)
    useEffect(() => {


    })
    const buyNow = async () => {
        console.log("hari om")
        let response = await payUsingPaytm({ amount: 500, email: 'rankagaurav123@gmail.com'});
        var information = {
            action: 'https://securegw-stage.paytm.in/order/process',
            params: response    
        }
        post(information);
    }
    const removeitemfromcart = (id) => {
        dispatch(removefromcart(id))
    }
    return (
        <>
            {
                CartItems.length ?

                <Box className={classes.component}>

                        <Box className={classes.leftComponent}>
                            <Box className={classes.header}>
                                <Typography style={{ fontSize: "18px", fontWeight: "600px" }}>My cart({CartItems.length})</Typography>
                            </Box>
                            {
                                CartItems.map(CartItems =>
                                (
                                    
                                    <CartItem CartItems={CartItems} removeitemfromcart={removeitemfromcart} />
                                ))
                            }
                            <Box className={classes.bottom}>
                                <Button onClick={()=>buyNow()} className={classes.placeorder}>Place order</Button>
                            </Box>
                        </Box>












                        <Box className={classes.rightComponent}>
                            <Totalview CartItems={CartItems} />
                        </Box>

                    </Box>







                    : <Emptycart/>


            }
        </>
    )
}
export default Cart