import React from "react";
import "../styles/Home.css"; // Adjusted path

const Home = () => {
  return (
    <div className="home">
      <header className="home-header">
        <h1>Welcome to Business Tech Framework</h1>
        <p>Empowering small businesses with innovative tools and analytics.</p>
      </header>

      <section className="home-features">
        <h2>Key Features</h2>
        <ul>
          <li>Customizable Digital Dashboards</li>
          <li>Data Analytics for Sales and Inventory</li>
          <li>Employee Scheduling and Task Management</li>
          <li>Cloud Integration for Seamless Access</li>
        </ul>
      </section>

      <section className="home-demo">
        <h2>Explore Our Demos</h2>
        <p>Demos coming soon. Stay tuned!</p>
      </section>

      <section className="home-cta">
        <h2>Get Started Today</h2>
        <button>Learn More</button>
      </section>
    </div>
  );
};

export default Home;
