const Alerts = (props) => {
    let alertsList = [{
            msg: 'Two boats docked for a long time',
            lat: 8.320702647232439,
            lng: 77.99709305044445,
        },{
            msg: 'Ship stationary for a week',
            lat: 8.320702647232439,
            lng: 77.99709305044445,
        },{
            msg: 'Big vessel without any AIS signature',
            lat: 8.320702647232439,
            lng: 77.99709305044445,
        },{
            msg: 'Boats docks for a long time',
            lat: 8.320702647232439,
            lng: 77.99709305044445,
        },{
            msg: 'Boats docks for a long time',
            lat: 8.320702647232439,
            lng: 77.99709305044445,
        },{
            msg: 'Boats docks for a long time',
            lat: 8.320702647232439,
            lng: 77.99709305044445,
        },
      ];
    return <>
        <h2 style={{fontSize: '1.5em'}}>Alerts: </h2>
        <div class="row justify-content-md-center">
            {alertsList.map(alert =>{
                return <div class="card my-2 shadow-sm" style={{width: `90%`}}>
                    <div class="card-body">
                        <h5 class="card-title">{alert.msg}</h5>
                        <p class="card-text">({alert.lat}, {alert.lng})</p>
                    </div>
                </div>
            })}
        </div>
    </>
};

export default Alerts;