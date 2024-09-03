import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './UserList.scss';
const UserList = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:4000/api/users')
            .then(response => setUsers(response.data))
            .catch(error => console.log(error));
    }, []);

    const handleDelete = (id) => {
        axios.delete(`http://localhost:4000/api/users/${id}`)
            .then(() => setUsers(users.filter(user => user._id !== id)))
            .catch(error => console.log(error));
    };

    return (
        <div>
            <Link to="/new">Add New User</Link>
            <ul>
                {users.map(user => (
                    <li key={user._id}>
                        {user.name} - {user.email}
                        <Link to={`/users/${user._id}`}>View</Link>
                        <Link to={`/edit/${user._id}`}>Edit</Link>
                        <button onClick={() => handleDelete(user._id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default UserList;
