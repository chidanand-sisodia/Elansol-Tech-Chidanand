import React, { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './Login.css';

function Login() {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const { email, password } = formData;

    const onChange = e => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const navigate = useNavigate();

    const onSubmit = e => {
        e.preventDefault();
        // Placeholder validation: In a real app, you'd check these credentials against the database.
        if (email === "user@gmail.com" && password === "password") {
            console.log("credentials : " ,formData);
            alert("Login Successful!");
            
            // Redirect to a different page on successful login, e.g., user dashboard
            navigate('/');
        } else {
            console.log("credentials : " ,formData);
            alert("Invalid credentials!");
        }
    };

    return (
        <div className="login-container">
            <div className='login-box'>
                <h2>Login</h2>
                <Form onSubmit={e => onSubmit(e)}>
                    <Form.Group className="mb-3">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control
                            type="email"
                            placeholder="Enter email"
                            name="email"
                            value={email}
                            onChange={e => onChange(e)}
                            required
                        />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type="password"
                            placeholder="Password"
                            name="password"
                            value={password}
                            onChange={e => onChange(e)}
                            required
                        />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Log In
                    </Button>
                </Form>
            </div>
        </div>
    );
}

export default Login;
