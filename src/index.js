import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// if (username && password) {
//   const response = await fetch('/api/user/login', {
//     method: 'post',
//     body: JSON.stringify({
//       username,
//       password,
//     }),
//     headers: { 'Content-Type': 'application/json' },
//   });

//   if (response.ok) {
//     document.location.replace('/dashboard');
//     console.table(response);
//   } else {
//     alert(response.statusText);
//   }
// }

reportWebVitals();
