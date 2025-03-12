import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const User = (props) => {

    const { id } = useParams();

    const [users, setUsers] = useState([]);

    const getUsers = async () => {
        const res = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
        const initUsers = await res.data;
        setUsers(initUsers);
    }

    useEffect(() => {
        getUsers();
    }, []);

    return (
        <div className="row container">
            <div className="col-6">

                <div class="card" style={{ width: "18rem;" }}>
                    <div class="card-body">
                        <h6 class="card-title">{users.username}</h6>
                        <h1>{users.name}</h1>   
                        <p>{users.email}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default User
