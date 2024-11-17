import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav
            className="navbar navbar-expand-lg border-bottom sticky-top"
            style={{ backgroundColor: "#FFF" }}
        >
            <div className="container py-2">
                <Link className="navbar-brand" to={"/"}>
                    <img
                        src="media/images/logo.svg"
                        alt="Logo"
                        style={{ width: "25%" }}
                    />
                </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div
                    className="collapse navbar-collapse"
                    id="navbarSupportedContent"
                >
                    <form className="d-flex align-items-center" role="search">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 fs-6 text-body-secondary">
                            <li className="nav-item ">
                                <Link
                                    className="nav-link"
                                    aria-current="page"
                                    to={`https://zerodha-dashboard-p.onrender.com/login`}
                                >
                                    Signup
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to={"/about"}>
                                    About
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to={"/product"}>
                                    Products
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to={"pricing"}>
                                    Pricing
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to={"support"}>
                                    Support
                                </Link>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/">
                                    <i
                                        class="fa fa-bars"
                                        aria-hidden="true"
                                    ></i>
                                </a>
                            </li>
                        </ul>
                    </form>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
