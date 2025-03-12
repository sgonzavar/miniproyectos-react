import React from 'react'
import ReactDOM from 'react-dom/client'
import { HooksApp } from './HooksApp'
import { Counter } from './01-useState/Counter'
import './index.css'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <HooksApp /> */}
    <Counter />
  </React.StrictMode>,
)
