import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from "react-router-dom";
import { PrimeReactProvider, PrimeReactContext } from 'primereact/api';
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider>
      <PrimeReactProvider>
        <App />
      </PrimeReactProvider>
    </RouterProvider>
  </React.StrictMode>,
)
