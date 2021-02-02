import React, { useState } from 'react';
import MapEmbedd from './MapEmbedd';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import DashboardMain from '../Dashboard/DashboardMain';
import alertDetail from '../Dashboard/alertDetail';
import { Navbar, Dropdown, DropdownButton, Form } from 'react-bootstrap';
const MainPage = () => {
  const [categoryStates, setCategoryStates] = useState({
    'Unspecified Ships': true,
    Fishing: true,
    'Tugs & Special Craft': true,
    'High Speed Craft': true,
    'Passenger Vessels': true,
    'Pleasure Craft': true,
    Tankers: true,
    'Cargo Vessel': true,
  });
  return (
    <div className='container-fluid m-0 p-0'>
      <div className='row flex-grow-1'>
        <div className='col-lg-8 p-0'>
          <Navbar
            className='row'
            style={{ background: '#ADD8E6' }}
            variant='dark'
          >
            <DropdownButton id='dropdown-basic-button' title='Dropdown button'>
              {/* <Dropdown.Item> */}
              <Form.Check type='checkbox' label='Unspecified Ships' />
              {/* </Dropdown.Item> */}
            </DropdownButton>
          </Navbar>
          <MapEmbedd />
        </div>
        <div
          className='col-lg-4 p-0'
          style={{ maxHeight: '800px', overflowY: 'scroll' }}
        >
          <Router>
            <Switch>
              <Route exact path='/' component={DashboardMain} />
              <Route exact path='/alert-detail/:id' component={alertDetail} />
            </Switch>
          </Router>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
