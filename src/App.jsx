import React from "react";
import Home from "./pages/Home";
import BusinessOwnerDashboard from "./pages/BusinessOwnerDashboard";
import DashboardSidebar from "./components/DashboardSidebar";
import DashboardWidgets from "./components/DashboardWidgets";

const App = () => {
  return (
    <div>
      {/* Replace this with React Router for multiple pages */}
      {/* For now, toggle between Home and Dashboard */}
      <Home />
      {/* Uncomment below to test dashboard */}
      {/* <BusinessOwnerDashboard /> */}
    </div>
  );
};

export default App;
