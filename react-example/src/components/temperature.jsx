import React, { Fragment, useState} from 'react';

const Temperature = () => {

    const [temp, setTemp] = useState(19);
    
    const up = () => {
        setTemp(temp + 0.5); 
    }

    const down = () => {
        setTemp(temp - 0.5); 
    }

    return (
        <Fragment>
            <div className="mb-5">
                <h2>La temperatura es {temp}</h2>
                <p>{ temp > 20.5 ? 'Hace calor': 'Hace frio'}</p>
                <button onClick={up} type="button" className="btn btn-primary me-2">Up</button>
                <button onClick={down} type="button" className="btn btn-secondary me-2">Down</button>
            </div>
        </Fragment>
    );
}

export default Temperature;
