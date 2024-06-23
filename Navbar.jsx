import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <Link className="navbar-brand d-flex align-items-center" to="/">
                    <img src="./images/new logo.jpg" width="120" height="120" alt="Logo" />
                    <span className="navbar-text ml-3">Welcome to Ice Cream Shop</span>
                </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item mx-2">
                            <Link className="nav-link" to="/">Home</Link>
                        </li>
                        <li className="nav-item mx-2">
                            <Link className="nav-link" to="/details">Details</Link>
                        </li>
                        <li className="nav-item mx-2">
                            <Link className="nav-link" to="/reviews">Reviews</Link>
                        </li>
                        <li className="nav-item mx-2">
                            <Link className="nav-link" to="/order">How to Order</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;

