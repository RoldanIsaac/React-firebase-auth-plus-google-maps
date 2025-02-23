import React, { useState } from 'react';
import './Sidebar.css'; // Aquí se importan los estilos

const Sidebar = ({ onClick }) => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
      <div className="sidebar-header">
        <button className="toggle-btn" onClick={toggleSidebar}>
          {isOpen ? 'Close' : 'Open'} Menu
        </button>
      </div>
      <div className="sidebar-content">
        <ul>
          <li onClick={() => onClick('dashboard')}>Dashboard</li>
          <li onClick={() => onClick('users')}>Users</li>
          <li onClick={() => onClick('places')}>Places</li>
          <li onClick={() => onClick('events')}>Events</li>
          <li onClick={() => onClick('products')}>Products</li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;