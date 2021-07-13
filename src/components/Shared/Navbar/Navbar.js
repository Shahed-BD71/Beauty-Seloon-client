import React from "react";
import { Link } from 'react-router-dom'
import NavLogo from "../../../images/beauty-seloon.jpg"
import './Navbar.css'


const Navbar = ({countCartItems}) => {
  return (
    <nav
      style={{ backgroundColor: "rgb(37, 150, 190)" }}
      className="navbar navbar-expand-lg navbar-dark"
    >
      <div className="container-fluid">
        <a className="navbar-brand ms-3" href="#">
          Beauty Saloon
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <ul className="navbar-nav ms-auto hover-nav fw-bolder">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-dark" to="#">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-dark" to="dashboard">
                Dashboard
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-dark" to="/shop">
                Shop
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-dark" href="#">
                Blogs
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-dark" href="#">
                Contact Us
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-dark" to="login">
                Sign Up
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-dark" to="/shop">
                Cart{" "}
                {countCartItems ? (
                  <button className="btn-sm fw-bolder btn btn-warning">
                    {countCartItems}
                  </button>
                ) : (
                  ""
                )}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
