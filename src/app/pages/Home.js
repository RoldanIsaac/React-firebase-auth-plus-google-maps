import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from '../modules/auth/Login'
import Register from '../modules/auth/Register';
import ForgotPassword from '../modules/auth/ForgotPassword';
import VerificationCode from '../modules/auth/VerificationCode';
import ChangePassword from '../modules/auth/ChangePassword';
import Logout from '../modules/auth/Logout';
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Dashboard from "../pages/Dashboard";
import Sidebar from './Sidebar';
import User from './User';
import Place from './Place';
import Product from './Product';
import Event from './Event';
import { useState } from 'react';

// Layout para las rutas privadas (Dashboard)
const Layout = ({ children }) => {
   const [activeView, setActiveView] = useState('dashboard');

   const handleSidebarClick = (view) => {
      setActiveView(view);
    };

   const renderContent = () => {
      switch (activeView) {
         case 'dashboard':
            return <Dashboard />;
         case 'users':
            return <User />;
         case 'places':
            return <Place />;
         case 'events':
            return <Event />;
         case 'products':
            return <Product />;
         default:
            return <Dashboard />; // Default view
      }
    };

   return (
      <div style={{ display: 'flex' }}>
         <Sidebar onClick={handleSidebarClick} />
         <div style={{ flex: 1, marginLeft: '250px' }}>
         <Header username="Orlando Llamos" />
            <main>{renderContent()}</main>
         <Footer />
         </div>
      </div>
   );
};

const PrivateRoute = ({element}) => {
  const isAuthenticated = true;

  return isAuthenticated ? element : <Login />;
}

const Home = () => {
   return (
      <Router>
         <Routes>
            {/* Public Routes */}
            <Route path="/" element={<Login />} />
            <Route path="/login" element={<Login />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/verification-code" element={<VerificationCode />} />
            <Route path="/change-password" element={<ChangePassword />} />
            <Route path="/register" element={<Register />} />
            <Route path="/logout" element={<Logout />} />

            {/* Private Routes (With Header & Footer) */}
            <Route path="/dashboard" element={<PrivateRoute element={<Layout><Dashboard /></Layout>} />} />

            {/* If not authenticated, redirect to Login */}
            <Route path="*" element={<Login />} />
         </Routes>
      </Router>
   );
}

export default Home;
