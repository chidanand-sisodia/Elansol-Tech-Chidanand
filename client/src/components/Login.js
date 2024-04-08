import React, { useState } from 'react';
import { Form, Button, Alert,Row, Col } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';
import { useAuth } from './AuthContext';

import loginBg from './images/bg3.jpg';
import userLogo from './images/user.256x256.png'

function Login() {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        
    });

    // State to store and display error messages
    const [errorMessage, setErrorMessage] = useState('');

    const { login } = useAuth();
    const navigate = useNavigate();

    const onChange = e => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const onSubmit = e => {
        e.preventDefault();
        login(formData, () => navigate('/dashboard'), () => 
            // This is where you'd handle errors more specifically if you wish
            setErrorMessage("Failed to login. Please check your credentials and try again.")
        );
    };

    return (
        <div className="login-container">
            <div className='login-box' style={{ backgroundImage: `url(${loginBg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>

           
                <h2>Login</h2>
                <img src={userLogo} alt="User" style={{ width: '80px', marginLeft: 'auto', marginRight: 'auto', display: 'block' }} />
                <Form onSubmit={e => onSubmit(e)}>
                    <Form.Group className="mb-3">
                        <Form.Label>Email address</Form.Label>
                        
                        <Form.Control
                            type="email"
                            placeholder="Enter email"
                            name="email"
                            value={formData.email}
                            onChange={onChange}
                            required
                            
                        />
                        
                        
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type="password"
                            placeholder="Password"
                            name="password"
                            value={formData.password}
                            onChange={onChange}
                            required
                        />
                    </Form.Group>
                    {/* Remember Me Checkbox and Forgot Password */}
                    <Row className="align-items-center">
                        <Col xs={6}>
                            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="Remember me" name="rememberMe" checked={formData.rememberMe} onChange={onChange} />
                            </Form.Group>
                        </Col>
                        <Col xs={6} className="text-end">
                            <Link to="#" className="forgot-password-link">Forgot password?</Link>
                        </Col>
                    </Row>



                    {errorMessage && <Alert variant="danger">{errorMessage}</Alert>} {/* Displaying dynamic errors */}

                    <Button className='submit-btn' type="submit">
                        Log In
                    </Button>
                </Form>
                
            </div>
        </div>
    );
}

export default Login;

