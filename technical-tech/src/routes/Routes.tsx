import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";

import InitView from '../views/InitView'
import LoginView from '../views/LoginView';
import Error404View from '../views/Error404View';
import CreateUserView from '../views/CreateUserView';
import UserView from '../views/UsersView';

import '../styles/Routes.css'

const Routes: React.FC = () => {
    return (
        <>
           <Router>
            <Switch>
                    <Route exact path="/">
                        <InitView />
                    </Route>
                    <Route path="/login">
                        <LoginView />
                    </Route>      
                    <Route path="/create">
                        <CreateUserView />
                    </Route>
                    <Route path="/user">
                        <UserView />
                    </Route>  
                    <Route>
                        <Error404View />
                    </Route>                                                           
                </Switch>
            </Router> 
        </>
    )
}

export default Routes