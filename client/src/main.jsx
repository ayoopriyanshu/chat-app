import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from "react-router-dom";
import { Authcontextprovider } from './context/authContext.jsx';
import { Socketcontextprovider } from './context/socketContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Authcontextprovider>
        <Socketcontextprovider>
          <App />
        </Socketcontextprovider>
      </Authcontextprovider>
    </BrowserRouter>
  </React.StrictMode>,
)
