import React from 'react';
import './Header.css'
import logo from '../../images/logo.png'

const Header = () => {
    return (
    <div className="header">
     
     {/* <img src={logo} className="d-block mx-auto" alt="Logo"/> */}

     <nav className="navbar navbar-expand-lg navbar-light bg-light">
     <a class="navbar-brand text-success fw-bolder ms-5" style={{fontSize: '25px'}} href="https://bossbajar-babulakterfsd.netlify.app">BossBajar</a>
    <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-md-5 me-auto mb-2 mb-lg-0 fw-bold text-secondary">
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
      <form className="d-flex mt-md-3 me-md-5">
      <div className="input-group mb-3">
       <input type="text" className="form-control" placeholder="search product..." aria-label="Recipient's username" aria-describedby="basic-addon2"/>
       <span className="input-group-text fw-bold text-secondary" id="search-button" style={{cursor: 'pointer'}}>search</span>
       <div className="navbar-cart ms-md-5 d-none d-md-block">
        <i className="fas fa-cart-plus fa-2x text-success mx-md-5" style={{cursor: 'pointer'}}></i>
       </div>
      </div>
        </form>
      </div>
     </div>
   </nav>
 </div>
  );
};

export default Header;