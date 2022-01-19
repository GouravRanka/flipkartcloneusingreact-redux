import { AppBar, Toolbar, Box, makeStyles, Typography,Menu,MenuItem } from "@material-ui/core"

import { useState } from "react";
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';
import { BrowserRouter, Route, Link } from "react-router-dom";


const usestyle=makeStyles(
    {
      menu:  {
marginTop:"40px"
        }
    }
)

const Profile = ({ account,setAccount }) => {
    const [open, setOpen] = useState(false)
    const classes=usestyle();
const handleClose = ()=>
{
    setOpen(false)
}
const handleclick = (event)=>
{
    setOpen(event.currentTarget)
}
const logout= ()=>
{
    setAccount('');
}
    return (
        <>
       <Link style={{textDecoration:"none",color:"#FFFFFF",cursor:"pointer"}} onClick={handleclick}> <Typography style={{marginTop:"4px"}}>{account}</Typography></Link>
       <Menu className={classes.menu}
  id="simple-menu"
  anchorEl={open}
  keepMounted
  open={Boolean(open)}
  onClose={handleClose}
>
  <MenuItem onClick={()=>{handleClose(); logout();}}>
  <PowerSettingsNewIcon />
  Logout
  </MenuItem>
   
 
</Menu>


    
    </>
    )

}
export default Profile