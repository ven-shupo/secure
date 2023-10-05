import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./styles.css";
import { BrowserRouter as Router } from "react-router-dom";
import { TelegramWebApp } from "react-telegram-webapp";

async function validateHash(hash) {
  const response = await fetch(`/api/validate`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ hash })
  });

  return response.ok;
}

const rootElement = document.getElementById("root");
ReactDOM.render(
  <TelegramWebApp validateHash={validateHash}>
    <Router>
      <App />
    </Router>
  </TelegramWebApp>,
  rootElement
);
