import React, { Fragment } from 'react'
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom'

//components
import Admin from './Admin';
import Home from './Home';
import Login from './Login';


const Menu = () => {
    return (
        <Fragment>
            <Router>
                <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                               <Link className="nav-link" to="/">Home</Link>
                            </li>
                            <li class="nav-item">
                                <Link className="nav-link" to="/admin">Admin</Link>
                            </li>
                            <li class="nav-item">
                                <Link className="nav-link" to="login">Login</Link>
                            </li>                          
                        </ul>
                    </div>
                </nav>

                <Switch>
                    <Route exact path="/" component={Home} ></Route>
                    <Route path="/admin" component={Admin} ></Route>
                    <Route path="/login" component={Login} ></Route>
                </Switch>
            </Router>
        </Fragment>
    )
}

export default Menu
