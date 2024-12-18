import React from 'react';
import { createRoot } from "react-dom/client";
import './index.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <React.StrictMode>
  <BrowserRouter>
  <ToastContainer />
    <App />
    </BrowserRouter>
  </React.StrictMode>
);

