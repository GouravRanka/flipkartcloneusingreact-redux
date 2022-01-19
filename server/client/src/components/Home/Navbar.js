import { Box, makeStyles, Typography,Grid } from '@material-ui/core';
import { navData } from '../../constants/db';

const useStyle = makeStyles(theme => ({
    component: {
        display: 'flex',
        justifyContent: 'space-between',
        margin: '55px 130px 0 130px',
        overflowX: 'overlay',
    
        [theme.breakpoints.down('md')]: {
            margin: "0 0 0 0",
            
            
        },
        [theme.breakpoints.down('sm')]: {
            margin: "0 0 0 35%",
            
            
        }
    },
    container: {
        padding: '12px 8px',
        textAlign: 'center'
    },
    image: {
        width: 80,
        // height:"
        // border:"1px solid grey",3
        borderRadius:"20px"
    },
    text: {
        fontSize: 14,
        fontWeight: 600,
        fontFamily: 'inherit'
    }
}));

const NavBar = () => {
    const classes = useStyle();
    return (
        <Box className={classes.component}>
            {
                navData.map(temp => (
                    <Box className={classes.container}>
                        <img src={temp.url} alt="" className={classes.image} />
                        <Typography className={classes.text}>{temp.text}</Typography>
                    </Box>
                ))
            }
        </Box>
    )
}

export default NavBar;
