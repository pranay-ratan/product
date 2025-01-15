import React, { useState } from "react";
import DashboardSidebar from "../components/DashboardSidebar";
import DashboardWidgets from "../components/DashboardWidgets";
import "../styles/BusinessOwnerDashboard.css"; // Adjusted path

const BusinessOwnerDashboard = () => {
  const [activeSection, setActiveSection] = useState("Sales");

  const renderContent = () => {
    switch (activeSection) {
      case "Sales":
        return <DashboardWidgets title="Sales Trends" content="Sales data coming soon..." />;
      case "Inventory":
        return <DashboardWidgets title="Inventory Levels" content="Inventory data coming soon..." />;
      case "Employees":
        return <DashboardWidgets title="Employee Status" content="Employee data coming soon..." />;
      default:
        return <p>Select a section from the sidebar.</p>;
    }
  };

  return (
    <div className="dashboard">
      <DashboardSidebar activeSection={activeSection} setActiveSection={setActiveSection} />
      <div className="dashboard-main">
        <h1>Business Owner Dashboard</h1>
        <div className="dashboard-content">{renderContent()}</div>
      </div>
    </div>
  );
};

export default BusinessOwnerDashboard;
