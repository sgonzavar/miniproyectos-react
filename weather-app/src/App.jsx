import React, { useEffect, useState } from 'react'
import { Header } from './Components/Header'
import { Form } from './Components/Form'
import './styles/App.css'

const App = () => {


  const [consult, setConsult] = useState(false)
  const [search, setSearch] = useState({
    city: '',
    country: ''
})

  const { city , country} = search

  useEffect(() => {
    console.log(city)
  },[consult])

  return (
    <div className='weather-app'>
      <Header title='Clima React App' />

      <div className="container  mx-auto px-4">
        <div className="grid grid-cols-2 gap-2 mt-11">

          <div> <Form search={search} setSearch={setSearch} setConsult={setConsult}/></div>
          <div>2</div>
        </div>
      </div>
    </div >
  )
}

export default App
