import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, Button } from '@material-ui/core';
import SearchBar from './SearchBar';
import {navBarStyles, imageStyles} from '../assets/styles/sharedStyles'


function NavBar() {
    const classes_ = navBarStyles();
    const classes = imageStyles();
    
     const [images, setImages] = useState([])
     const [input, setInput] = useState("")
  
    useEffect(() => {
      
    }, [])
  
    const handleSubmit = (e) => {
     
    }
  
    const handleChange = (e) => {
      setInput(e.target.value)
    }
  
  return (
    <AppBar className={classes_.navBar}>
      <Toolbar>
        <Button><a href="/"> Idea Book </a>
        </Button>
        <SearchBar input={input} handleChange={handleChange} handleSubmit={handleSubmit}/>
        <Button><a href="/"> Upload </a>
        </Button>
      </Toolbar> 
    </AppBar>  
  );
}

export default NavBar;
