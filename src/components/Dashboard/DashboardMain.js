import React from 'react';
import Alerts from './alerts';
import PieChartDisplay from './piechart';
import { Navbar } from 'react-bootstrap';

const DashboardMain = () => {
  return (
    <div>
      <Navbar style={{ background: '#9fa8da' }} variant='dark' sticky='top'>
        <Navbar.Brand
          className='text-capitalize font-weight-bold'
          style={{ textAlign: 'left', color: 'black' }}
        >
          <img
            src='https://img.icons8.com/material/24/000000/dashboard-layout.png'
            className='mr-3'
          />{' '}
          Dashboard
        </Navbar.Brand>
      </Navbar>
      <div className='my-4 px-3'>
        <PieChartDisplay />
        <br />
        <Alerts />
      </div>
    </div>
  );
};

export default DashboardMain;
