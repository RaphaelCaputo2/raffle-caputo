import React, { useState, useEffect } from 'react';
import { adminService } from '../services/adminService';

const AdminDashboard: React.FC = () => {
  const [users, setUsers] = useState([]);
  const [raffles, setRaffles] = useState([]);

  useEffect(() => {
    fetchUsers();
    fetchRaffles();
  }, []);

  const fetchUsers = async () => {
    const response = await adminService.getUsers();
    setUsers(response.data);
  };

  const fetchRaffles = async () => {
    const response = await adminService.getRaffles();
    setRaffles(response.data);
  };

  return (
    <div id="adminDashboard">
      <h1>Admin Dashboard</h1>
      <h2>Users</h2>
      <ul>
        {users.map((user: any) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
      <h2>Raffles</h2>
      <ul>
        {raffles.map((raffle: any) => (
          <li key={raffle.id}>{raffle.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default AdminDashboard;