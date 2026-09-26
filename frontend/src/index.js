import React from "react";
import { createRoot } from 'react-dom/client';  // Import createRoot
import App from "./App";
import "./styles/App.css";

const root = createRoot(document.getElementById("root"));  // Create the root element
root.render(<App />);  // Render the App component
