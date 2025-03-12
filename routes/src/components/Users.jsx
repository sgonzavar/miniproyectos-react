import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'


const Users = () => {

    const [users, setUsers] = useState([]);

    const getUsers = async () => {
        const res = await axios.get("https://jsonplaceholder.typicode.com/users");
        const initUsers = await res.data;
        setUsers(initUsers);
    }

    useEffect(() => {
        getUsers();
    }, []);

    return (
        <div className="container">
            <h1>Users</h1>
            {
                users.map((item) => (
                    <div className="row" key={item.id}>
                        <div className="col-4">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">Users: {item.username}</h5>
                                    <Link className="btn btn-primary"
                                        to={`/user/${item.id}`}
                                    >Got to..</Link>
                                </div>
                            </div>

                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default Users
