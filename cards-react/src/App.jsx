import { useState } from 'react'
import { DndContext, closestCenter } from '@dnd-kit/core'
import { SortableContext, verticalListSortingStrategy, arrayMove } from '@dnd-kit/sortable'
import Testimony from './components/Testimony'
import './styles/App.css'
import data from './data/data.json'

function App() {
  const [testimony, setTestimony] = useState(data.testimony)

  const handleDragEnd = (event) => {
    const { active, over } = event
    if (!active.id !== over.id) {
      setTestimony((testimony) => {  
        const oldIndex = testimony.findIndex((item) => item.id === active.id);  
        const newIndex = testimony.findIndex((item) => item.id === over.id);
        return arrayMove(testimony, oldIndex, newIndex)
      })
    }
  }

  return (
      <div className="App">
        <div className="content-initial">
          <DndContext
            collisionDetection={closestCenter}
            onDragEnd={handleDragEnd}
          >
          <h1>Esto es lo que dicen nuestros alumnos sobre freeCodeCamp:</h1>
            <SortableContext 
              items={testimony}
              strategy={verticalListSortingStrategy}
            >
              { testimony.map((itemTesty, index) => (
                <div className='items-testimony' key={index}>
                  <Testimony 
                    testimonyId={itemTesty.id}
                    name={itemTesty.name}
                    image={itemTesty.image}
                    country={itemTesty.country}
                    job={itemTesty.job}
                    company={itemTesty.company}
                    note={itemTesty.note}
                  />
              </div>
              ))}
            </SortableContext>
          </DndContext>
        </div>
      </div>
  )
}

export default App