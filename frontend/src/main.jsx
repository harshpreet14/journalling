import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Auth0Provider } from "@auth0/auth0-react";



ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Auth0Provider
    domain="dev-fvwp66zogc354jg0.us.auth0.com"
    clientId="xTVtdKTkCmxjMZxAXyjb1tI36tk5QErl"
    authorizationParams={{
      redirect_uri: window.location.origin,
      audience:"http://localhost:3000/journal-api/v1/users/me/entries",
      useRefreshTokens: true
    }}
    scope="openid profile email"
    >
        <App />
    </Auth0Provider>
  </React.StrictMode>
);
