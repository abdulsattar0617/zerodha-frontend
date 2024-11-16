import React from "react";

function Hero() {
    return (
        <div className="container p-5 border-bottom">
            <div className="row text-center mb-5 ">
                <h1 className="mt-5">Zerodha Products</h1>
                <h3 className="fs-5 mt-3 text-muted">
                    Sleek, modern, and intuitive trading platforms
                </h3>
                <p className="mt-3 fs-6">
                    Check out our{" "}
                    <a href="/" className="text-decoration-none">
                        investment offerings{"  "}
                        <i
                            class="fa fa-long-arrow-right"
                            aria-hidden="true"
                        ></i>
                    </a>{" "}
                </p>
            </div>
        </div>
    );
}

export default Hero;
