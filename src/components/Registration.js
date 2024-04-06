import React, { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import {useNavigate} from 'react-router-dom';
import './Registration.css'; 

function Registration() {
    const navigate=useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        dob: '',
        email: '',
        password: '',
        confirmPassword: ''
    });
    const { name, dob, email, password, confirmPassword } = formData;

    const onChange = e => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const onSubmit = e => {
        e.preventDefault();
        if (password !== confirmPassword) {
            alert("Passwords don't match");
            // Add any additional feedback to the user here (e.g., toast notification)
        } else {
            console.log('SUCCESS', formData);
            alert("Registration Successfull..!")
            navigate('/login');
            // Here you will later add the code to send data to your Node.js backend
        }
    };

    return (
    <div className="container justify-content-md-center">
        <div className='registration-box' >
            <h2>Register</h2>
            <Form onSubmit={e => onSubmit(e)}>
                <Form.Group className="mb-3">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter your name"
                        name="name"
                        value={name}
                        onChange={e => onChange(e)}
                        required
                    />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Date of Birth</Form.Label>
                    <Form.Control
                        type="date"
                        name="dob"
                        value={dob}
                        onChange={e => onChange(e)}
                        required
                    />
                </Form.Group>

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

                <Form.Group className="mb-3">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Confirm Password"
                        name="confirmPassword"
                        value={confirmPassword}
                        onChange={e => onChange(e)}
                        required
                    />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Register
                </Button>
                <div className="mt-3">
                    Already have an account? <Link to="/login">Log in</Link>
                </div>
            </Form>
        </div>
        </div>
    );
}

export default Registration;
