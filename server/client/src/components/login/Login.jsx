import { Dialog, DialogContent, makeStyles, Box, Typography, TextField, Button } from "@material-ui/core"
import { useState } from "react"

// import { Link } from "react-router-dom"
import {authenticateSignup,authenticateLogin} from "../../service/api.js"
const usestyle = makeStyles(
    {
        container: {
            height: "80vh",
            width: "50vw",
            overflow: "hidden"
        },
        leftbox:
        {
            backgroundImage: `url(${'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png'})`,
            height: "80vh",
            width: "45vh",
            backgroundRepeat: "no-repeat",
            background: "#2874f0",
            backgroundPosition: "center 85%",
            paddingTop: "0px",
            paddingLeft: 0

        },
        logintypography:
        {
            fontWeight: "bold",
            fontSize: "33px",
            color: "white",
            padding: "38px 0 0 29px"
        },
        getaccesstypography:
        {
            color: "#dbdbdb",
            paddingLeft: "30px",
            fontSize: "24px",
            paddingTop: "10px",
            marginRight: "8px"
        },
        boxes:
        {
            display: "flex"
        },
        rightbox:
        {
            padding: "25px 35px",
            display: "flex",
            flexDirection: "column",
            flex: 1,
            '&>*':
            {
                marginTop: "20px"
            }
        }
        ,
        typography1:
        {
            color: "grey"
        },
        span:
        {
            color: "blue"
        },
        loginbutton:
        {
            fontSize: "20px",
            backgroundColor: "#fb641b",
            height: "65px",
            textTransform: "none",
            color: "white"
        }
        ,
        requestbutton:
        {
            color: 'blue',
            padding: "20px",
            fontWeight: "600"
        },
        typography2:
        {
            paddingLeft: "50%",
            color: "#878787"
        },
        typography3:
        {
            paddingLeft: "20%",
            marginTop: "100px",
            color: "blue",
            cursor: "pointer"
        }
    }
)


const Login = ({ open, setOpen,setAccount }) => {
 

const initialvalue={
   login: {
view:'Login',
heading:'Login',
subheading:'Get access to your orders,wishlist and recommendation'
    },
    signup:
    {
        view:'Signup',
heading:'Signup',
subheading:'Looks like you are new here '

    }

}
const signupintialvalues={
    firstname:'',
    lastname:'',
    username:'',
    phone:'',
    email:'',
    password:''
}
const loginintialvalues={

    username:'',
 
    password:''
}
const [error,setError]=useState(false)
const [account, togglesAccount] = useState(initialvalue.login)
const signupuser =  async()=>
{
    let response= await authenticateSignup(signup);
    if(!response) return;
    setAccount(signup.username)
    handleclose();


}

    const toggleAccount = () => {
        togglesAccount(initialvalue.signup)
    
    }
 const [Login, setLogin] = useState(loginintialvalues)
    const [signup, setSignup] = useState(signupintialvalues)
    const oninputchange = (e)=>
    {
        setSignup({...signup,[e.target.name]:e.target.value})
        // console.log(signup);

        // isme square bracket isliye lgaya kyuki ise apn direct object ke variable ko access kr pa rhe h 

    }
    const onvaluechange = (e)=>
    {
        setLogin({...Login,[e.target.name]:e.target.value})
        // console.log(signup);

        // isme square bracket isliye lgaya kyuki ise apn direct object ke variable ko access kr pa rhe h 

    }
    const loginuser = async()=>
    {
        let response=await authenticateLogin(Login)
      
        if(!response){
      
            // handleclose();
            setError(true)
        }else{
            handleclose();
        setAccount(Login.username)
        }
    }

    const classes = usestyle();
    const handleclose = () => {
        setOpen(false)
        togglesAccount(initialvalue.login)
    }

    return (
        <Dialog
            open={open} onClose={handleclose}

        >

            <DialogContent className={classes.container}>
                <Box className={classes.boxes}>
                    <Box className={classes.leftbox} >
                        <Typography className={classes.logintypography}>{account.heading}</Typography>
                        <Typography className={classes.getaccesstypography}>{account.subheading} </Typography>

                    </Box>

                    {account.view==='Login' ?
                        <Box className={classes.rightbox}>
                            <TextField onChange={(e)=> onvaluechange(e)} name="username" label="Enter Email/Mobile Number" ></TextField>

                            <TextField onChange={(e)=> onvaluechange(e)} name="password"  label="Enter Password" ></TextField>
                         
                            
                            <Typography className={classes.typography1}>By continuing, you agree to Flipkart's <span className={classes.span}>Terms of Use </span>  and <span className={classes.span}>Privacy Policy </span> </Typography>
                             <Button onClick={()=> loginuser()} variant="contained" className={classes.loginbutton}>Login</Button>
                             {error && <Typography style={{color:"red"}}>invalid user name and passweord</Typography>}
                           
                           
                            
                            
                            <Typography className={classes.typography2}>OR</Typography>
                            <Button variant="outlined" className={classes.requestbutton}>Request OTP</Button>

                            <Typography onClick={() => toggleAccount()} className={classes.typography3}>New to Flipkart? Create an account</Typography>

                        </Box>
                        :
                        <Box className={classes.rightbox}>
                            <TextField onChange={(e)=> oninputchange(e)} name="firstname" label="First Name" ></TextField>
                            <TextField onChange={(e)=> oninputchange(e)} name="lastname" label="Last Name" ></TextField>
                            <TextField onChange={(e)=> oninputchange(e)} name="username" label="Username" ></TextField>
                            <TextField onChange={(e)=> oninputchange(e)} name="phone" label="phone" ></TextField>
                            <TextField onChange={(e)=> oninputchange(e)} name="email" label="email" ></TextField>
                            <TextField onChange={(e)=> oninputchange(e)} name="password"  label="Create Password" ></TextField>
                            <Typography  className={classes.typography1}>By continuing, you agree to Flipkart's <span className={classes.span}>Terms of Use </span>  and <span className={classes.span}>Privacy Policy </span> </Typography>
                            <Button onClick={()=> signupuser()} variant="contained" className={classes.loginbutton}>Signup</Button>
                            <Typography className={classes.typography2}>OR</Typography>
                            <Button variant="outlined" className={classes.requestbutton}>Request OTP</Button>


                    

                        </Box>
                    }


                </Box>
            </DialogContent>
        </Dialog>





    )

}

export default Login