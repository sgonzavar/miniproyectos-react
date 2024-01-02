import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import { TaskPage } from './pages/TaskPage'
import { TaskformPage } from './pages/TaskformPage'
import { Navigation } from './components/Navigation'
import { Toaster } from 'react-hot-toast'

const App = () => {
  return (
    <BrowserRouter>    
      <div className="container mx-auto">
        <Navigation/>
        <Routes>
          <Route path='/' element={<Navigate to={'/tasks'}/>}  />
          <Route path='/tasks' element={<TaskPage/>} />
          <Route path='/tasks/:id' element={<TaskformPage/>} />
          <Route path='/tasks-create' element={<TaskformPage/>} />
        </Routes>
        <Toaster/>
      </div>
    </BrowserRouter>
  )
}

export default App