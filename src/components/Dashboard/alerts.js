import { useHistory } from 'react-router-dom';

const Alerts = (props) => {
  let alertsList = require('../../JsonData/alerts.json');
  const history = useHistory();
  return (
    <>
      <h2 style={{ fontSize: '1.5em' }} className='pl-4 font-weight-bold'>
        Alerts:{' '}
      </h2>
      <div className='row justify-content-center'>
        {alertsList.map((alert) => {
          return (
            <div
              className='card my-2 shadow-sm rounded'
              style={{ width: `90%`, cursor: 'pointer' }}
              onClick={() => history.push(`/alert-detail/${alert.id}`)}
            >
              <div className='card-body'>
                <h5 className='card-title' style={{ fontSize: '1em' }}>
                  {alert.msg}
                </h5>
                <p className='card-text'>
                  ({alert.lat}, {alert.lng})
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Alerts;
