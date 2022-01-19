import React from 'react'
import { useState } from 'react'
import { Button,ButtonGroup,makeStyles } from '@material-ui/core'
const usestyle=makeStyles(
    {
       component: {
marginTop:20
        },
        button:
        {

        }
    }
)
 const GroupButtons = () => {
     const [value, setValue] = useState(1)
     const classes=usestyle();
     const valueincrease = ()=>
     {
        
         setValue(value=>value+1);
     }
     const valuedecrease = ()=>
     {
         setValue(value=>value-1);
     }
     return(
         <ButtonGroup className={classes.component}>
             <Button onClick={()=> valuedecrease()} disabled={value===1} className={classes.button}>-</Button>
             <Button>{value}</Button>
             <Button onClick={()=> valueincrease()} className={classes.button}>+</Button>
         </ButtonGroup>
     )
 
}

export default GroupButtons