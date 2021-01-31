import React from 'react';
import MapEmbedd from './MapEmbedd';
import NavBar from '../Dashboard/navbar';
import PieChartDisplay from '../Dashboard/piechart';

const MainPage = () => {
  return (
    <section className='container-fluid px-0'>
      <div className='row'>
        <div className='col-lg-8'>
          <MapEmbedd />
        </div>
        <div className='col-lg-4'>
          <NavBar />
          <PieChartDisplay />
        </div>
      </div>
    </section>
  );
};

export default MainPage;
