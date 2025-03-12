import React, { Fragment, useState} from 'react';

const Forms = () => {

    const [name, setName] = useState();
    const [age, setAge] = useState();

    const validate = (e) => {
        e.preventDefault();
        console.log("click al boton");
        if(!name.trim()) {
            console.log("el nombre esta vacio");
            return
        }

        if(!age.trim()) {
            console.log("la edad esta vacio");
            return
        }
    }

    return (
        <Fragment>
            <form onSubmit={validate} className="form-group container mt-5">
                <div className="row position-relative">
                    <div className="col-8 mt-5 position-absolute top-50 start-50 translate-middle">
                        <h1>Forms..</h1>
                        <input 
                            className="form-control mb-2" 
                            placeholder="Name" 
                            type="text" 
                            onChange={(e) => {setName(e.target.value)}}
                        />
                        <input 
                            className="form-control mb-2" 
                            placeholder="Age"
                            type="text"  
                            onChange={(e) => {setAge(e.target.value)}}
                        />
                        <input className="btn btn-info form-control" type="submit" />
                    </div>
                </div>
            </form>
        </Fragment>
    );
};

export default Forms;