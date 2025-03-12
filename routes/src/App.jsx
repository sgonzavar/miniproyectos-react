import React from 'react';
import { BrowserRouter as Router, 
    Route,
    Link, 
    Routes } from 'react-router-dom'

//components/
// import Inicio from './components/Inicio'
// import Base from './components/Base'
import Users from './components/Users'
import User from './components/User'

function App() {
    return (
        <Router>
            <Link to="/">Usuarios</Link>

            <Routes>
                <Route exact path="/" element={<Users />} />
                <Route path="/user/:id" element={<User/>} /> 
            </Routes>
        </Router>
    );
}

export default App;
