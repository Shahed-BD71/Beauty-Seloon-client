import React from "react";
import { Link } from 'react-router-dom'
import NavLogo from "../../../images/beauty-seloon.jpg"
import './Navbar.css'


const Navbar = () => {
  return (
    <nav
      style={{ backgroundColor: "rgb(37, 150, 190)" }}
      className="navbar navbar-expand-lg navbar-dark"
    >
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          Beauty Seloon
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <ul className="navbar-nav ms-auto hover-nav fw-bolder">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="#">
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
              <Link className="nav-link text-dark" to="#">
                Reviews
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
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
