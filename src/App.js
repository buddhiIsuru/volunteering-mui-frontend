import * as React from "react";
import { Outlet } from "react-router-dom"; // Importing necessary components from react-router-dom
import "./globalStyles.css";

function App() {
  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      <Outlet />
    </React.Suspense>
  );
}

export default App; // Exporting the App component as the default export
