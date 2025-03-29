import React from "react";
import "./Dashboard.css";

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <h2 className="dashboard-title">Dashboard</h2>
      <p className="dashboard-subtitle">
        Welcome to your Dashboard! Manage your orders, stock updates, and more efficiently.
      </p>
      
      <div className="dashboard-grid">
        <div className="dashboard-card">
          <h3>Recent Orders</h3>
          <p>View and track your latest orders.</p>
          <button className="dashboard-btn">View Orders</button>
        </div>
        <div className="dashboard-card">
          <h3>Stock Updates</h3>
          <p>Keep an eye on inventory levels.</p>
          <button className="dashboard-btn">Check Stock</button>
        </div>
        <div className="dashboard-card">
          <h3>Sales Reports</h3>
          <p>Analyze sales data for better decisions.</p>
          <button className="dashboard-btn">View Reports</button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
