import React from 'react';
import MapEmbedd from './MapEmbedd';

const MainPage = () => {
  return (
    <section className='container-fluid px-0'>
      <div className='row'>
        <div className='col-lg-8'>
          <MapEmbedd />
        </div>
      </div>
    </section>
  );
};

export default MainPage;
