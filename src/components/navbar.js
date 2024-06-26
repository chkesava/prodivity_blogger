import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { Link } from 'react-router-dom';


import './index.css'

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <Link to="/">
            <img src='https://res.cloudinary.com/dvzei06gf/image/upload/v1719416286/rr9cmrjz6fx04g6ztggn.jpg' className='image' alt='logo'/>
            </Link>
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Prodivity Blogger
          </Typography>
          <Link to="/add"><Button variant="contained" color="success">Add new post</Button></Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
}