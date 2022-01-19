import {ImageURL} from "../../constants/db"
import {Box} from "@material-ui/core"
import { mergeClasses,makeStyles } from "@material-ui/styles"
const usestyle=makeStyles({
   container: {
display:"flex",
marginTop:20,
justifyContent:"space-between"
    }
})


const MidSection= ()=>
{const coronaURL = 'https://rukminim1.flixcart.com/flap/3006/433/image/4789bc3aefd54494.jpg?q=50';

    const classes=usestyle();
    return(
        <>
        <Box className={classes.container}>
            {
                ImageURL.map(image =>(
                    <img style={{width:"33%"}} src={image} alt="" />
                ))
            }
        </Box>
        <Box>
            <img style={{width:"100%",marginTop:"10px"}} src={coronaURL} alt="" />
        </Box>
        </>
    )
}
export default MidSection