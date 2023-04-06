
import React from 'react';
import { useNavigate } from 'react-router-dom';

function Dashboard() {

    const Nav = useNavigate();

const forLogout = () => {
    localStorage.removeItem("jwtToken")
    Nav("/login")
}

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Welcome to your Dashboard!</h1>
      <p>This is where you can see an overview of your account.</p>
      <button onClick={forLogout}>Logout</button>
    </div>
  );
}

export default Dashboard;