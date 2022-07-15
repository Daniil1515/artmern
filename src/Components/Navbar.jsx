import React from 'react';
import {Link, NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light shadow">
                <div className="container">

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link active" aria-current="page" to="/">Главная</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/about">О нас</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/services">Наши автомобили</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/contact">Контакты</NavLink>
                            </li>
                        </ul>
                        <a className="navbar-brand fw-bolder fs-4 mx-auto" href="#">Мир Авто</a>
                        <NavLink to="/login" className="btn btn-outline-dark ms-auto px-4"><i className="fa fa-sign-in me-2"></i>Login</NavLink>
                        <NavLink to="/register" className="btn btn-outline-dark ms-2 px-4"><i className="fa fa-user-plus me-2"></i>Register</NavLink>
                        <NavLink to="/dashboard" className="btn btn-outline-dark ms-auto px-4">Dashboard</NavLink>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;