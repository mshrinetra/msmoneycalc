import React from "react";
import { Link, NavLink } from "react-router-dom";

import logo from "../assets/ms_icon.svg";

const Header = function (props) {
    return (
        <nav>
            <header className="navbar navbar-dark bg-success">
                <Link className="navbar-brand m-auto" to="/">
                    <img src={logo} width="30" height="30" className="d-inline-block align-top mr-3" alt="" />
                    MS Money Calculator
                </Link>
            </header>
            <ul className="nav nav-tabs nav-justified bg-light">
                <li className="nav-item">
                    <NavLink className="nav-link" exact to="/">Loan</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" exact to="/investment">Investment</NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default Header;