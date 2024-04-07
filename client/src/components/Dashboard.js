import React, { useEffect, useState } from "react";
import { Table, Form, Button } from "react-bootstrap";

import axios from "axios";
import "./Dashboard.css";

function Dashboard() {
  
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredUsers, setFilteredUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get("http://localhost:5000/users");
        setUsers(response.data);
        setFilteredUsers(response.data); // Initialize filteredUsers
      } catch (error) {
        console.error("Failed to fetch users:", error);
      }
    };

    fetchUsers();
  }, []);

  const handleSearch = () => {
    const filtered = users.filter(user => 
      user.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredUsers(filtered);
  };

  return (
    <div className="dashboard-container">
      <h2>Dashboard</h2>
      <div className="user-search">
        <Form.Control
          type="text"
          placeholder="Search by name..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="me-2"
        />
        <Button variant="outline-success" onClick={handleSearch}>Search</Button>
      </div>
      <div className="users-container">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>S/N</th>
          
              <th>Name</th>
              <th>Date of Birth</th>
              <th>Email</th>
              <th>Gender</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.map((user, index) => (
              <tr key={user._id}>
                <td>{index + 1}</td>
               
                <td>{user.name}</td>
                <td>{new Date(user.dob).toLocaleDateString()}</td>
                <td>{user.email}</td>
                <td>{user.gender}</td>
                <td>
                  <span className="action-icon">&#9881;</span> {/* Gear symbol */}
                  <span className="action-icon">&#10006;</span> {/* Cross symbol */}
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>

    </div>
  );
}

export default Dashboard;
