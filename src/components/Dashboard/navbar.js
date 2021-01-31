import React from 'react';
import { Navbar } from 'react-bootstrap';

const NavBar = () => {
  return (
    <div>
      <Navbar style={{ background: '#9fa8da'}} variant='dark'>
        <Navbar.Brand
          className='text-capitalize mx-auto font-weight-bold'
          style={{ textAlign: 'left', color:'black' }}
        >
          DashBoard
        </Navbar.Brand>
      </Navbar>
    </div>
  );
};

export default NavBar;
