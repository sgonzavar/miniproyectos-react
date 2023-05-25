import Testimony from './components/Testimony'
import './styles/App.css'
import data from './data/data.json'

function App() {

  return (
    <div className="App">
      <div className="content-initial">
        <h1>Esto es lo que dicen nuestros alumnos sobre freeCodeCamp:</h1>
        <ul>
          { data.testimony.map((testimony, index) => (
              <li key={index}>
              <Testimony 
                name={testimony.name}
                image={testimony.image}
                country={testimony.country}
                job={testimony.job}
                company={testimony.company}
                note={testimony.note}
              />
            </li>
            ))}
        </ul>
      </div>
    </div>
  )
}

export default App