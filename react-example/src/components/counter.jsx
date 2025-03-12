import React, { Fragment, useState } from "react";

const Counter = () => {

    const [numbers, setNumber] = useState(0);

    const grow = () => {
        setNumber( numbers + 1 );    
    }

    const lower = () => {
        setNumber( numbers - 1 );    
    }

    return (
        <Fragment>
            <h2>Cantidad del contador: { numbers }</h2>
            <button onClick={grow}  type="button" className="btn btn-info me-2">
                Aumentar
            </button>
            <button onClick={lower} type="button" className="btn btn-warning me-2">
                Disminuir
            </button>
        </Fragment>
    );
};

export default Counter;