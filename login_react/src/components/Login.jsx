import React, { useState } from 'react'

//firebase
import { auth } from '../storages/firebaseconfig'

const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [msgError, setMsgError] = useState(null);

    const enrollUser = (e) => {
        e.preventDefault();
        auth.createUserWithEmailAndPassword(email, password)
            .then(answer => alert('Usuario Registrado'))
            .catch(error => {
                if(error.code === 'auth/weak-password') {
                    setMsgError(error.message);
                }
                if(error.code === 'auth/invalid-email') {
                    setMsgError(error.message);
                }
            })            
    }

    const singInLogin = () => {
        auth.signInWithEmailAndPassword(email, password)
            .then( (answer) => console.log(answer))
            .catch( (error) => {
                console.log(error);
                if( error.code === "auth/wrong-password") {
                    setMsgError(error.message);
                }
            })
    }

    return (
        <div className="row">
            <div className="col"></div>
            <div className="col">
            <form onSubmit={enrollUser}  className="mt-4">
              <div className="form-group">
                <label for="InputEmail">Email address</label>
                <input 
                    type="text" 
                    className="form-control" 
                    id="InputEmail" 
                    aria-describedby="emailHelp"
                    onChange={(e) => {setEmail(e.target.value);}}
                />
                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
              </div>
              <div className="form-group">
                <label for="InputPassword">Password</label>
                <input 
                    type="password" 
                    className="form-control" 
                    id="InputPassword"
                    onChange={(e) => {setPassword(e.target.value);}}
                />
              </div>
              <button type="submit" className="btn btn-info btn-block mb-2">Registrar Usuario</button>
            </form>
            <button 
                className="btn btn-dark btn-block"
                onClick={singInLogin}
            >
                Iniciar Sesión
            </button>
            {
                msgError != null ? 
                <div className="alert alert-danger mt-4" role="alert">
                    {msgError}
                </div> : <samp></samp>

              
            }
            </div>
            <div className="col"></div>
        </div>
    )
}

export default Login
