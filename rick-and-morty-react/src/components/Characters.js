import React, {useState, useEffect} from 'react';

const Characters = () => {
    
    //estados
    const [character, setCharacter] = useState([])    

    useEffect(() => {        
        fetch("https://rickandmortyapi.com/api/character")
            .then(response => response.json())
            .then(data => setCharacter(data.results))              
    }, [])

    return ( 
        <div className="container">
            <div className="characters">
                {
                    character.map(item => (                        
                        <div className="layout" key={item.id}>
                            <img src={item.image} alt={item.name} />
                            <div className="character">
                                <h2 className="name">{item.name}</h2>
                                <p className="status">{item.status}</p>
                                <p className="species">{item.species}</p>
                                <p className="gender">{item.gender}</p>                                
                            </div>
                        </div>
                    ))                  
                }
            </div>
        </div>
     );
}
 
export default Characters;