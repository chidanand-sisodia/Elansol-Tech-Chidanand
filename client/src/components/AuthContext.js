import React, { createContext, useContext, useEffect, useState } from 'react';
import axios from 'axios';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')));

    useEffect(() => {
        // This effect runs when the component mounts and whenever the user state changes.
        // It updates localStorage with the current user state.
        localStorage.setItem('user', JSON.stringify(user));
    }, [user]);

    const login = async (formData, onSuccess, onError) => {
        try {
            const response = await axios.post('http://localhost:5000/auth/login', formData);
            setUser({ email: response.data.user.email });

            // Optionally, if your backend sends a token, store it in localStorage
            // localStorage.setItem('token', response.data.token);

            onSuccess();
        } catch (error) {
            console.error("Login failed:", error.response ? error.response.data.message : error.message);
            onError();
        }
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem('user');
        // Also remove the token from localStorage if you're using token-based authentication
        // localStorage.removeItem('token');
    };

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
