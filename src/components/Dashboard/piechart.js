import React, { useState, useEffect } from 'react';
import { PieChart } from 'react-minimal-pie-chart';
import './piechart.css';
import { ShipsID } from '../../extras/ShipsId';
const PieChartDisplay = () => {
  let shipsData = require('../../JsonData/final_AIS_data.json');
  const [chartData, setChartData] = useState({
    data: [
      { title: 'Unspecified Ships', value: 0, color: '#000000' },
      { title: 'Fishing', value: 0, color: '#800080' },
      { title: 'Tugs and Special Craft', value: 0, color: '#a52a2a' },
      { title: 'High Speed Craft', value: 0, color: '#4b0082' },
      { title: 'Passenger Vessels', value: 0, color: '#008080' },
      { title: 'Pleasure Craft', value: 0, color: '#008000' },
      { title: 'Tankers', value: 0, color: '#ffa500' },
      { title: 'Cargo Vessel', value: 0, color: '#ff0000' },
    ],
    buttons: [1, 1, 1, 1, 1, 1, 1, 1],
    datavalues: [10, 15, 20, 20, 30, 20, 20, 40],
    datatext: [
      'Unspecified Ships',
      'Fishing',
      'Tugs & Special Craft',
      'High Speed Craft',
      'Passenger Vessels',
      'Pleasure Craft',
      'Tankers',
      'Cargo Vessel',
    ],
  });
  useEffect(() => {
    let getIndex = {
      'Unspecified Ships': 0,
      Fishing: 1,
      'Tugs & Special Craft': 2,
      'High Speed Craft': 3,
      'Passenger Vessels': 4,
      'Pleasure Craft': 5,
      Tankers: 6,
      'Cargo Vessel': 7,
    };

    let cnt = chartData.data;
    ShipsID.forEach((ship) => {
      let category = shipsData['Vessel Filter'][ship];
      const categoryId = getIndex[category];
      cnt[categoryId]['value'] = cnt[categoryId]['value'] + 1;
    });
    setChartData({
      ...chartData,
      data: cnt,
    });
  }, []);
  const handleClick = (id) => {
    let tempdata = chartData.data;
    let tempbuttons = chartData.buttons;
    let tempdatatext = chartData.datatext;

    if (tempbuttons[id] === 1) {
      tempbuttons[id] = 0;
      tempdata[id]['value'] = 0;
      tempdatatext[id] = <s> {tempdata[id]['title']} </s>;
    } else {
      tempbuttons[id] = 1;
      tempdata[id]['value'] = chartData.datavalues[id];
      tempdatatext[id] = tempdata[id]['title'];
    }
    setChartData({
      ...chartData,
      buttons: tempbuttons,
      data: tempdata,
    });
  };

  return (
    <div
      className='card text-center mx-auto my-2 shadow-sm'
      style={{ width: `90%` }}
    >
      <h5 className='card-header'>Curent Conditions</h5>
      <h6 className='card-title mb-2 text-muted'>(156/156) vessels</h6>
      <div className='card-body'>
        <div className='piechartdiv card-img'>
          <PieChart
            data={chartData.data}
            radius={PieChart.defaultProps.radius - 7}
            paddingAngle={1}
            segmentsShift={1}
          />
          ;
        </div>
        <div className='buttons card-text'>
          <button
            className='colorbutton'
            style={{ backgroundColor: '#000000' }}
          ></button>
          <button className='mybutton' onClick={() => handleClick(0)}>
            {chartData.datatext[0]}
          </button>
          <button
            className='colorbutton'
            style={{ backgroundColor: '#800080' }}
          ></button>
          <button className='mybutton' onClick={() => handleClick(1)}>
            {chartData.datatext[1]}
          </button>{' '}
          <br />
          <button
            className='colorbutton'
            style={{ backgroundColor: '#a52a2a' }}
          ></button>
          <button className='mybutton' onClick={() => handleClick(2)}>
            {chartData.datatext[2]}
          </button>{' '}
          <br />
          <button
            className='colorbutton'
            style={{ backgroundColor: '#4b0082' }}
          ></button>
          <button className='mybutton' onClick={() => handleClick(3)}>
            {chartData.datatext[3]}
          </button>{' '}
          <br />
          <button
            className='colorbutton'
            style={{ backgroundColor: '#008080' }}
          ></button>
          <button className='mybutton' onClick={() => handleClick(4)}>
            {chartData.datatext[4]}
          </button>{' '}
          <br />
          <button
            className='colorbutton'
            style={{ backgroundColor: '#008000' }}
          ></button>
          <button className='mybutton' onClick={() => handleClick(5)}>
            {chartData.datatext[5]}
          </button>
          <button
            className='colorbutton'
            style={{ backgroundColor: '#ffa500' }}
          ></button>
          <button className='mybutton' onClick={() => handleClick(6)}>
            {chartData.datatext[6]}
          </button>{' '}
          <br />
          <button
            className='colorbutton'
            style={{ backgroundColor: '#ff0000' }}
          ></button>
          <button className='mybutton' onClick={() => handleClick(7)}>
            {chartData.datatext[7]}
          </button>
        </div>
      </div>
    </div>
  );
};

export default PieChartDisplay;
