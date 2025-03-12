import { useState } from "react"
import styled from '@emotion/styled'

import { FormsInsurance } from "./Components/Forms"
import { Header } from './Components/Header'
import { Summary } from "./Components/Summary"
import { Result } from "./Components/Result"
import { Spinner } from "./Components/Spinner"


const ContainerApp = styled.div`
  max-width: 900px;
  margin: 0 auto;
`

const ContainerForm = styled.div`
  background-color: white;
  padding: 3rem;
`

const App = () => {

  const [charger, setCharger] = useState(false)
  const [summary, setSummary] = useState({
    quote: 0,
    data: {
      brand: '',
      year: '',
      plan: ''
    }
  })

  const {data, quote} = summary

  return (
    <ContainerApp>
      <Header title='Cotizador De Seguros' />
      <ContainerForm>
        <FormsInsurance setSummary={setSummary} setCharger={setCharger} />
        
        {charger ? <Spinner /> : null}      

        <Summary data={data} />

        {!charger ? <Result quote={quote} /> : null}
      </ContainerForm>
    </ContainerApp>
  )
}

export default App