import styled from "@emotion/styled";
import PropTypes from 'prop-types'

import { capitaliceWord } from "../../Helper/PriceHelper";

const SummaryContainer = styled.div`
    padding: 1rem;
    text-align: center;
    background-color: #00838f;
    color: #fff;
    margin-top: 1rem;
`


export const Summary = ({ data }) => {

    const {marquee, year, plan} = data

    if(marquee === '' || year === '' || plan === '') return null

  return (
    <SummaryContainer>
        <section>
            <h2>Resumen de cotizacion</h2> 
            <ul>
                <li>Marca: <span>{ capitaliceWord(marquee) }</span></li>
                <li>Plan: <span>{capitaliceWord(plan)}</span></li>
                <li>Año: <span>{year}</span></li>
            </ul>
        </section>
    </SummaryContainer>
  )
}

Summary.propTypes = {
    data: PropTypes.object.isRequired
}

