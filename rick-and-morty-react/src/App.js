import React, {Fragment} from 'react';
import Header from './components/Header';
import Characters from './components/Characters';
import './styles/normalize.css'
import './styles/main.sass'
import './components/Header.css'

const App = () => {
    return ( // fragment para encapsular todo el componente
        <Fragment>             
            <Header title="Rick and Morty API" />
            <Characters />
        </Fragment>
     );
}
 
export default App;