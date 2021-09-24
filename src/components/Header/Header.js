import React from 'react';
import './Header.css'

const Header = () => {
    return (
    <div className="header">

     <nav className="navbar navbar-expand-lg navbar-light bg-light">
     <a className="navbar-brand text-success fw-bolder ms-5" href="https://bossbajar-babulakterfsd.netlify.app">BossBajar</a>
    <button className="navbar-toggler ms-auto btn-sm" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-5 ms-md-auto me-md-5 mb-2 mb-lg-0 fw-bold text-secondary">
        <li className="nav-item">
          <a className="nav-link" href="/shop">Shop</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/orders">Orders</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/inventory">Inventory</a>
        </li>
      </ul>
      </div>
   </nav>
 </div>
  );
};

export default Header;