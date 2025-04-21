import React from 'react'
import { Link } from 'react-router-dom'

import '../styles/InitView.css';

const InitView = () => {
  return (
    <div className="App">
      <header className="App-header">
        <div className="App-logo" />
        <p>
          This is <code>THE BEST</code> technical TEST
        </p>
        <Link  className="App-link" to="/login">Lets do it</Link>
      </header>
    </div>
  )
}

export default InitView