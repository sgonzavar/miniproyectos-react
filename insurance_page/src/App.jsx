import FormsInsurance from "./Components/Forms"
import Header from "./Components/Header"


import styled from '@emotion/styled'


const ContainerApp = styled.div`
  max-width: 900px;
  margin: 0 auto;
`

const ContainerForm = styled.div`
  background-color: white;
  padding: 3rem;
`

const App = () => {
  return (

    <ContainerApp>
      <Header title='Cotizador De Seguros' />
      <ContainerForm>
        <FormsInsurance />
      </ContainerForm>
    </ContainerApp>
  )
}

export default App