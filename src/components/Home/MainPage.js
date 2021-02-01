import React from 'react';
import MapEmbedd from './MapEmbedd';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import DashboardMain from '../Dashboard/DashboardMain';
import alertDetail from '../Dashboard/alertDetail';

const MainPage = () => {
  return (
    <div className='container-fluid m-0 p-0'>
      <div className='row'>
        <div className='col-lg-8 p-0'>
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
