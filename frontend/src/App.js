import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UserList from './components/UserList';
import UserForm from './components/UserForm';
import UserDetail from './components/UserDetail';
import './styles/main.scss';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<UserList />} />
                <Route path="/new" element={<UserForm />} />
                <Route path="/edit/:id" element={<UserForm />} />
                <Route path="/users/:id" element={<UserDetail />} />
            </Routes>
        </Router>
    );
};

export default App;
