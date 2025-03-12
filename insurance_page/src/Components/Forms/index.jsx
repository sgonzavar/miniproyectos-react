import styled from "@emotion/styled";
import PropTypes from 'prop-types'

import { useState } from "react";
import { calculateMarquee, getDifferenceYear, getPlan } from '../../Helper/PriceHelper.js'

const FieldContainer = styled.section`
  display: flex;
  margin-bottom: 1rem;
  align-items: center;
`

const LabelTitle = styled.label`
  flex: 0 0 100px;
  text-transform: capitalize;
`

const SelectElement = styled.select`
  display: block;
  width: 100%;
  padding: 1rem;
  border: 1px solid #e1e1e1;
  border-radius: 8px;
  -webkit-appearance: none;
`

const InputRadio = styled.input`
  margin: 0 1rem;
`

const SendButton = styled.button`
  background-color: #dc143c;
  font-size: 16px;
  width: 100%;
  padding: 1rem;
  color: #fff;
  text-transform: uppercase;
  font-weight: bold;
  border: none;
  border-radius: 8px;
  box-shadow: 0px 0px 17px -6px #dc143c;
  transition: background-color 0.3s ease;
  margin-top: 2rem;

  &:hover {
    background-color: #dc143c97;
    cursor: pointer;
  }
`

const Error = styled.section`
  background-color: red;
  color: white;
  padding: 1rem;
  width: 100%;
  text-align: center;
  margin-bottom: 2rem;
  border-radius: 8px;
`

export const FormsInsurance = ({ setSummary, setCharger }) => {

  let baseResult  = 2000
  const [error, setError] = useState(false)
  const [data, setData] = useState({
    marquee: "",
    year: "",
    plan: "",
  });

  //extraer datos
  const { marquee, year, plan } = data;

  //leer datos del formulario y colocarlos en el state
  const getData = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };
  
  const priceInsusance = e => {
    e.preventDefault()

    if(marquee.trim() === '' || year.trim() === '' || plan.trim() === ''){
      setError(true)
      return
    }

    setError(false)
    const difference = getDifferenceYear(year)
    baseResult -= ((difference * 3 ) * baseResult) / 100

    baseResult = calculateMarquee(marquee) * baseResult

    let incrementPlan = getPlan(plan)
    baseResult = parseFloat(incrementPlan * baseResult).toFixed(2)

    setCharger(true)
    setTimeout(() => {
      setCharger(false) 
      setSummary({
        quote: Number(baseResult),
        data
      })
    }, 2000)

  }
  
  return (
    <form
      onSubmit={priceInsusance}
    >

      {
        error ? <Error>Todos los campos son obligatorios</Error> : null
      }

      <FieldContainer>
        <LabelTitle htmlFor="marquee">marca:</LabelTitle>
        <SelectElement name="marquee" value={marquee} onChange={getData}>
          <option value="">-- Seleccione --</option>
          <option value="americano">Americano</option>
          <option value="europeo">Europeo</option>
          <option value="asiatico">Asiatico</option>
        </SelectElement>
      </FieldContainer>

      <FieldContainer>
        <LabelTitle htmlFor="year">año:</LabelTitle>
        <SelectElement name="year" value={year} onChange={getData}>
          <option value="">-- Seleccione --</option>
          <option value="2029">2029</option>
          <option value="2028">2028</option>
          <option value="2027">2027</option>
          <option value="2026">2026</option>
          <option value="2025">2025</option>
          <option value="2024">2024</option>
          <option value="2023">2023</option>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
          <option value="2018">2018</option>
          <option value="2017">2017</option>
          <option value="2016">2016</option>
          <option value="2015">2015</option>
          <option value="2014">2014</option>
          <option value="2013">2013</option>
          <option value="2012">2012</option>
        </SelectElement>
      </FieldContainer>

      <FieldContainer>
        <LabelTitle htmlFor="plan">plan:</LabelTitle>
        <InputRadio
          type="radio"
          checked={plan === "basic"}
          name="plan"
          value="basic"
          onChange={getData}
        />
        Basico
        <InputRadio
          type="radio"
          checked={plan === "complete"}
          name="plan"
          value="complete"
          onChange={getData}
        />
        Completo
      </FieldContainer>

      <SendButton type="submit">Cotizar</SendButton>
    </form>
  );
};

FormsInsurance.propTypes = {
  setSummary: PropTypes.func.isRequired,
  setCharger: PropTypes.func.isRequired
}
