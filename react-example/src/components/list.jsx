import React, { Fragment, useState } from "react";

const List = () => {
    const [number, setNumber] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9]);

    return (
        <Fragment>
            <ul>
                {number.map( (item, index, parent) => 
                    <li key={index}>{item}</li>
                    // console.log("parent", parent);
                )}
            </ul>
        </Fragment>
    );
};

export default List;
