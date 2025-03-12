import React from 'react'
import { useParams } from 'react-router-dom'

const Inicio = () => {

    const {name, id, age} = useParams();

    return (
        <div>
            <h1>Pagina de inicio de: {name}</h1>
            <h3>Con una edad de : {age}</h3>
            <h6>Su id es : {id}</h6>
        </div>
    )
}

export default Inicio
