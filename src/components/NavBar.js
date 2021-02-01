import React from 'react';
import { Navbar } from 'react-bootstrap';
const NavBar = () => {
  return (
    <div>
      <Navbar className='row' style={{ background: '#3F51B5' }} variant='dark'>
        <Navbar.Brand
          className='text-capitalize mx-auto font-weight-bold'
          href='#home'
        >
          Team 8 - ASEAN Furry Cats
        </Navbar.Brand>
      </Navbar>
    </div>
  );
};

export default NavBar;
