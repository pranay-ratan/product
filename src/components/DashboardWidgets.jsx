import React from "react";
import "../styles/DashboardWidgets.css"; // Adjusted path

const DashboardWidgets = ({ title, content }) => {
  return (
    <div className="widget">
      <h3>{title}</h3>
      <p>{content}</p>
    </div>
  );
};

export default DashboardWidgets;
