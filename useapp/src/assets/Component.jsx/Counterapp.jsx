import { Button, Typography } from '@mui/material'
import React, { useState } from 'react'

const Counterapp = () => {
    var[val,changeval]=useState(0)
    const increment = () =>{
        changeval(val+1)
    }
    const decrement =()=>{
        changeval(val-1)
    }
  return (
    <div><br>
    </br><br />
       <Typography variant='h5'>Count:{val}</Typography><br /><br />
        <Button  variant='contained' color='success' onClick={increment}>+</Button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Button  variant='contained' color='error' onClick={decrement}>-</Button>
    </div>
  )
}

export default Counterapp 