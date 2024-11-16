import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
    return (
        <div className="container text-body-secondary">
            <div className="row p-5">
                <div className="col-5 p-5">
                    <h2 className="fs-4 my-3">404</h2>
                    <h1 className="">Kiaan couldn’t find that page</h1>
                    <p className="fs-5">
                        We couldn’t find the page you were looking for. Visit{" "}
                        <Link to={"/"} className="text-decoration-none">
                            Zerodha’s home page
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default NotFound;
