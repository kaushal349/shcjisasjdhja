import React, { useState, useEffect } from 'react';
import { Navbar } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

const AlertDetail = (props) => {
  console.log(props);
  const history = useHistory();
  useEffect(() => {
    let alertsList = require('../../JsonData/alerts.json');
    let filteredArray = alertsList.filter(function (itm) {
      return itm.id == props.match.params.id;
    });
    console.log(filteredArray);
    setData({
      msg: filteredArray[0].msg,
      xcor: filteredArray[0].lat,
      ycor: filteredArray[0].lng,
    });
  }, []);
  const [data, setData] = useState({
    msg: 'loading',
    xcor: 'loading',
    ycor: 'loading',
  });

  let { msg, xcor, ycor } = data;

  return (
    <div>
      <Navbar style={{ background: '#9fa8da' }} variant='dark'>
        <Navbar.Brand
          className='text-capitalize font-weight-bold'
          style={{ textAlign: 'left', color: 'black' }}
        >
          <img
            src='https://img.icons8.com/metro/26/000000/circled-left.png'
            className='mr-3'
            style={{ cursor: 'pointer' }}
            onClick={() => history.goBack()}
          />{' '}
          Alert Detail
        </Navbar.Brand>
      </Navbar>
      <div className='pt-5 px-3'>
        <h3 className='font-weight-bold'>{msg}</h3>
        <div className='mt-4'>
          <span>
            <span className='font-weight-bold'>Lat : </span> {xcor}
          </span>
          <br style={{ height: '25px' }} />
          <span>
            <span className='font-weight-bold'>Lng : </span> {ycor}
          </span>
        </div>
      </div>
    </div>
  );
};

export default AlertDetail;
