import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
import App from './App'
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Invoices from './Pages/Invoices';
import Expenses from './Pages/Expenses';
import NotFound from './Pages/NotFound';
import Invoice from './Pages/Invoice';
import Signup from './Pages/Signup/Signup';
import './index.scss'
import Login from './Pages/Login/Login';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} >
          {/* <Route path='signup' element={<Signup />}>

          </Route> */}

        </Route>
        <Route path='/register' element={<Signup />} />
        <Route path='/login' element={<Login />} />
        <Route path='*' element={<NotFound />} />
      </Routes>

    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
