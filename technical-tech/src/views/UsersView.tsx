import React, { useState, useEffect  } from 'react';
import Axios from 'axios';


const UsersView: React.FC = () => {

  const [users, setUsers] = useState('');

  useEffect(() => {
    Axios({
      url: "https://reqres.in/api/users"
    })
    .then((response) => {
      setUsers(response.data.data);
    })
    .catch((error) => {
      console.log(error);
    });
  },[setUsers]); 
  
  return (
    <>
      <div>UsersView</div>
      <ul>
        {/* { users.map(({id, name}: any) => {
               return <li key={id}>{name}</li>;
            });
        } */}
      </ul>
    </>
  )
}

export default UsersView