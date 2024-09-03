import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import './UserForm.scss';
const UserForm = ()=>{

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        address: '',
        doctorName: ''
    });
    const navigate = useNavigate();
    const { id } = useParams();


    useEffect(()=>{
        if(id)
        {
            axios.get(`http://localhost:4000/api/users/${id}`)
            .then(response => setFormData(response.data))
            .catch(error => console.log(error));
        }},[id]);


        const handleChange = (e) => {
            setFormData({ ...formData, [e.target.name]: e.target.value });
        };

        const handleSubmit =(e)=>{
            e.preventDefault();
            if (id) {
                axios.patch(`http://localhost:4000/api/users/${id}`, formData)
                .then(() => navigate('/'))
                .catch(error => console.log(error));
            }else{
                axios.post('http://localhost:4000/api/users', formData)
                .then(() => navigate('/'))
                .catch(error => console.log(error));
            }
        };

        return (
           
            <form onSubmit={handleSubmit}>
            <input name="name" value={formData.name} onChange={handleChange} placeholder="Name" required />
            <input name="email" value={formData.email} onChange={handleChange} placeholder="Email" required />
            <input name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone" required />
            <input name="address" value={formData.address} onChange={handleChange} placeholder="Address" required />
            <input name="doctorName" value={formData.doctorName} onChange={handleChange} placeholder="Doctor Name" required />
            <button type="submit">Submit</button>
        </form>

        );
};

export default UserForm;