import React from 'react'
import { Stack } from '@mui/material';
import { Link } from 'react-router-dom';

import SearchBar from './SearchBar';

const Navbar = () => {
  return (
    <Stack 
    direction="row" 
    alignItems="center" 
    p={2} 
    sx={{ position: 'sticky', background: '#000', top: 0, justifyContent: 'space-between'}}
    >
      <Link to="/" style={{ display: 'flex', alignItems: 'center' }}>
        <img src={'https://cdn-icons-png.flaticon.com/512/3670/3670147.png'} alt="logo" height={45} />
      </Link>
      <SearchBar  />
    </Stack>
  )
}

export default Navbar