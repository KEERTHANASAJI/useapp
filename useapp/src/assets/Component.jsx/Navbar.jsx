import { AppBar,  Button,  Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <AppBar sx={{
            background: 'rgb(59,3,99)',
            background: 'linear-gradient(133deg, rgba(59,3,99,1) 7%, rgba(120,23,189,1) 85%)'
        }}>
            <Toolbar>
                <Typography variant='h6'>
                    Useapp
                </Typography>
               
              <Link to='/use'>  <div id="bu">
                    <Button  variant='contained'color='inherit' >State</Button>
              </div></Link>
              &nbsp; &nbsp;
              <Link to='/c'>  
                    <Button  variant='contained'color='inherit' >Counter</Button>
              </Link>
              &nbsp; &nbsp;
              <Link to='/d'>  
                    <Button  variant='contained' color='inherit'>Display</Button>
              </Link>
            </Toolbar>
        </AppBar>
    </div>
  )
}

export default Navbar