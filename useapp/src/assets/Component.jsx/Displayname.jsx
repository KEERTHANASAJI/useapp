import { Button ,Typography} from '@mui/material'
import React, { useEffect, useState } from 'react'

const Displayname = () => {
    var[val,changeval]=useState()
    const react =()=>{
        changeval("React")
    }
    const angular =()=>{
        changeval("Angular")
    }
    const vue =()=>{
        changeval("Vue")
    }
    useEffect(()=>{
        angular()
    },[]
)
  return (
    <div>
        <br>
    </br><br />
       <Typography variant='h6'>Welcome to:{val} </Typography><br /><br />
        <Button  variant='contained' color='success' onClick={react}>React</Button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Button  variant='contained' color='error'onClick={angular}>Angular</Button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Button  variant='contained' color='success' onClick={vue }>Vue</Button>
    </div>
  )
}

export default Displayname