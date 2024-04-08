import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./Registration.css";
import axios from "axios";
import loginBg from './images/bg3.jpg';

function Registration() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    dob: "",
    email: "",
    gender:"",
    password: "",
    confirmPassword: "",
    
  });
  const { name, dob, email, gender,password, confirmPassword } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords don't match");
      // Add any additional feedback to the user here (e.g., toast notification)
    } else {
      axios
        .post("https://elansol-tech-chidanand-server-ppc3v1nn6-chidanands-projects.vercel.app/", { name, dob, email,gender, password, })
        .then((response) => {
          console.log("SUCCESS", response.data);
          alert("Registration Successful..!");
          navigate("/login");
        })
        .catch((error) => {
          console.error("Registration error", error);
          alert("Registration failed. Try with other Email id ..!");
          // Handle the error appropriately
        });
      // Here you will later add the code to send data to your Node.js backend
    }
  };

  return (
    <div className="container justify-content-md-center mt-4 ">
      <div className="registration-box" style={{ backgroundImage: `url(${loginBg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <h2>Register</h2>
        <Form onSubmit={(e) => onSubmit(e)}>
          <Form.Group className="mb-3">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your name"
              name="name"
              value={name}
              onChange={(e) => onChange(e)}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Date of Birth</Form.Label>
            <Form.Control
              type="date"
              name="dob"
              value={dob}
              onChange={(e) => onChange(e)}
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
              onChange={(e) => onChange(e)}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
          <Form.Label>Gender</Form.Label>
          <Form.Select
            name="gender"
            value={gender}
            onChange={(e) => onChange(e)}
            required
          >
            <option value="">Select Gender</option> {/* Default option */}
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </Form.Select>
        </Form.Group>


          <Form.Group className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              name="password"
              value={password}
              onChange={(e) => onChange(e)}
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
              onChange={(e) => onChange(e)}
              required
            />
          </Form.Group>

          <Button  className="submit-btn" variant="primary" type="submit">
            Register
          </Button>
          <div className=" mt-3">
            Already have an account? <Link className="login-btn" to="/login"> Log in</Link>
          </div>
        </Form>
      </div>
    </div>
  );
}

export default Registration;
