import React from "react";
import heroImage from "../assets/Hero-1.jpg";
import "./Home.css"; // Import custom CSS

const Home = () => {
  return (
    <main className="home-main">
      <div className="home-container">
        {/* Left Side: Image Container */}
        <div className="home-image-container">
          <img 
            src={heroImage} 
            alt="SmartMart" 
            className="home-image" 
          />
        </div>
        
        {/* Right Side: Content */}
        <div className="home-content">
          <h1>
            Welcome to <span>SmartMart</span>
          </h1>
          <p>
            Your one-stop solution for Inventory and Billing Management.
          </p>
          <button onClick={() => alert("Get Started!")}>
            Get Started
          </button>
        </div>
      </div>
    </main>
  );
};

export default Home;
