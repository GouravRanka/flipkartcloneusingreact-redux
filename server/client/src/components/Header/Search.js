import {  makeStyles,alpha, InputBase } from "@material-ui/core"
import SearchIcon from '@material-ui/icons/Search';
const usestyle=makeStyles((theme) =>(
    {
        search: {
            // position: 'relative',
            borderRadius: 2,
            backgroundColor: "#fff",
        
            marginLeft: 20,
            // marginRight: theme.spacing(2),
height:"40px",
            width: '100%',
            display:"flex",
            [theme.breakpoints.up('sm')]: {
              marginLeft: 10,
              width: '38%',
              color:"black",
           
              
            },
        },
        searchIcon: {
           
            height: '100%',
         
            pointerEvents: 'none',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color:"blue",
            paddingTop:"1px"
            
          },
          inputRoot: {
            // color: 'inherit',
            width:"100%",
            fontSize:"unset",
            [theme.breakpoints.down('sm')]:  
            {
width:"100%",

            }
          },
          inputInput: {
            paddingLeft:"12px"
            
            // vertical padding + font size from searchIcon
     
            
        }
    }
))
const Search = ()=>

{
    const classes=usestyle();
    return(
        <div className={classes.search}>
        
        <InputBase
          placeholder="Search for products,brands and more"
          classes={{
            root: classes.inputRoot,
            input: classes.inputInput,
          }}
          inputProps={{ 'aria-label': 'search' }}
        />
        <div className={classes.searchIcon}>
          <SearchIcon fontSize="large" />
        </div>
      </div>
    )
}

export default Search