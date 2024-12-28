import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

export const LeftSidebar = ({ sidebarOpen, toggleSidebar, activeAccordion, toggleAccordion }) => {
  return (
    <>
      <div className='fixed-top top-bar shadow'>
        <ul className='d-flex justify-content-end align-items-center m-3'>
            <li className='nav-link-dashboard'>
                <Link to="#" title="Account">
                <i className="fas fa-user fa-cus-2x"></i>
                </Link>
            </li>
            <li className='nav-link-dashboard'>
                <Link to="#" title="Notifications">
                <i className="fas fa-bell fa-cus-2x"></i>
                </Link>
            </li>
            <li className='nav-link-dashboard'>
                <Link to="#" title="Logout">
                <i className="fas fa-sign-in-alt fa-cus-2x"></i>
                </Link>
            </li>
        </ul>
      </div>
      <aside className={`sidebar ${sidebarOpen ? 'show-sidebar' : ''}`}>
        <div className="toggle">
          <Link
            to="#"
            className={`burger ${sidebarOpen ? 'active' : ''}`}
            onClick={toggleSidebar}
          >
            <span></span>
          </Link>
        </div>
        <div className="side-inner">
          <div className="profile">
            <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt="Profile" className="img-fluid" />
            <h3 className="name">Username</h3>
            <span className="country">Account Active/Inactive</span>
          </div>

          <div className="nav-menu">
            <ul>
              <li><Link to="#">Feed</Link></li>
              <li><Link to="#">Explore</Link></li>
              <li><Link to="#">Notifications</Link></li>
              <li><Link to="#">Direct</Link></li>
              <li><Link to="#">Stats</Link></li>
              <li className={`collapsible ${activeAccordion === 0 ? 'active' : ''}`} onClick={() => toggleAccordion(0)}>
                <div>
                  <Link to="#">More</Link>
                  <span className={`submenu_icon fa ${activeAccordion === 0 ? 'fa-chevron-up' : 'fa-chevron-down'}`}></span>
                </div>
                <ul className={`submenu ${activeAccordion === 0 ? 'open' : ''}`}>
                  <li><Link to="#">Item 1</Link></li>
                  <li><Link to="#">Item 2</Link></li>
                  <li><Link to="#">Item 3</Link></li>
                </ul>
              </li>

              <li><Link to="#">Sign out</Link></li>
            </ul>
          </div>
        </div>
      </aside>
    </>
  );
};
