import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import './UserDetail.scss';

const UserDetail = () => {
    const { id } = useParams();
    const [user, setUser] = useState(null);

    useEffect(() => {
        axios.get(`http://localhost:4000/api/users/${id}`)
            .then(response => setUser(response.data))
            .catch(error => console.log(error));
    }, [id]);

    if (!user) return <div>Loading...</div>;

    return (
        <div>
            <h1>{user.name}</h1>
            <p>Email: {user.email}</p>
            <p>Phone: {user.phone}</p>
            <p>Address: {user.address}</p>
            <p>Doctor: {user.doctorName}</p>
            <Link to="/">Back to Users</Link>
        </div>
    );
};

export default UserDetail;
