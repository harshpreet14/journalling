import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Auth0Provider } from "@auth0/auth0-react";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Auth0Provider
      domain='dev-fvwp66zogc354jg0.us.auth0.com'
      clientId="xTVtdKTkCmxjMZxAXyjb1tI36tk5QErl"
      redirectUri={window.location.origin}
    >
      <App />
    </Auth0Provider>
   
  </React.StrictMode>
);
