import React from 'react';
import MapEmbedd from './MapEmbedd';
import PieChartDisplay from '../Dashboard/piechart';
import Alerts from '../Dashboard/alerts';
import { Navbar } from 'react-bootstrap';

const MainPage = () => {
  return (
    <div className='container-fluid m-0 p-0 vh-100 vw-100'>
      <div className="col vh-100 vw-100">
        <Navbar className="row vw-100" style={{ background: '#3F51B5' }} variant='dark'>
          <Navbar.Brand
            className='text-capitalize mx-auto font-weight-bold'
            href='#home'
          >
            Team 8 - ASEAN Furry Cats
          </Navbar.Brand>
        </Navbar>
        <div className='row vw-100'>
          <div className='col-lg-9 p-0'>
            <MapEmbedd />
          </div>
          <div className='col-lg-3 p-0 h-100'>
            <Navbar style={{ background: '#9fa8da'}} variant='dark'>
              <Navbar.Brand
                className='text-capitalize mx-auto font-weight-bold'
                style={{ textAlign: 'left', color:'black' }}
              >
                DashBoard
              </Navbar.Brand>
            </Navbar>
            <div className="my-4 mx-1 overflow-auto ">
              <PieChartDisplay />
              <Alerts />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
