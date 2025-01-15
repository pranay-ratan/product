import React from "react";
import "../styles/DashboardSidebar.css"; 

const DashboardSidebar = ({ activeSection, setActiveSection }) => {
  const sections = ["Sales", "Inventory", "Employees"];

  return (
    <div className="sidebar">
      <h2>Dashboard</h2>
      <ul>
        {sections.map((section) => (
          <li
            key={section}
            className={activeSection === section ? "active" : ""}
            onClick={() => setActiveSection(section)}
          >
            {section}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DashboardSidebar;
