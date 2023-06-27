import { useState, useEffect } from 'react'
import Form from './Components/Form'
import Date from './Components/Date'

const App = () => {

  let initialDates = JSON.parse(localStorage.getItem('dates'))
  if(!initialDates){
    initialDates = []
  }

  const [allDates, setAllDates] = useState(initialDates)

  const allDatesCreator = date => {
    setAllDates([
      ...allDates,
      date
    ])
  }

  const handleDeleteDateForId = id => {
    const filterDates  = allDates.filter(date => date.id !== id)
    setAllDates(filterDates)
  }

  // add to localstorage
  useEffect(()  => {
    if(initialDates){
      localStorage.setItem('dates', JSON.stringify(allDates))
    } else {
      localStorage.setItem('dates', JSON.stringify([]))
    }
  }, [allDates])

  return (
    <>
      <h1>veterinary administration</h1>
      <div className="container">
        <div className="row">
          <div className="one-half column datePets">
            <Form dates={ allDatesCreator }/>
          </div>
          <div className="one-half column">

            { allDates.length === 0 ? <h2>no dates</h2> 
            : <h2>manage your appointments</h2> }
            
            { allDates.map(date => (
              <Date 
                date={date}  
                key={date.id} 
                deleteDate={handleDeleteDateForId}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default App