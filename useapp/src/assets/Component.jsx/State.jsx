import { Button, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

const State = () => {
    var[name,setname]=useState("Anu")
    var[val,changeval]=useState() 
    const handleinput =(e) =>{
         console.log(e.target.value)
          setname(e.target.value)
    }
      
    const print = () =>{
        
        changeval(name)
    }
  return (
    <div>
        
        <Typography variant='h5'>
        <h3>Welcome {val}</h3>
        </Typography>
        <TextField variant='outlined'
        onChange={handleinput} label='Enter name'/>
    <br /><br />
    <Button  variant='contained' onClick={print}>Enter</Button>
    </div>
  )
}

export default State