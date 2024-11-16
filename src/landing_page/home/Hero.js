import React from "react";

function Hero() {
    return (
        <div className="container p-5 mb-5">
            <div className="row text-center">
                <img
                    src="media/images/homeHero.png"
                    alt="Hero Image"
                    className="mb-5"
                />
                <h1 className="mt-5">Invest in everything</h1>
                <p>
                    Online platform to invest in stocks, derivatives, mutual
                    funds, ETFs, bonds, and more.
                </p>
                <button
                    role="button"
                    className="btn mt-4 p-2 fs-5 fw-semibold"
                    style={{
                        width: "25%",
                        margin: "0 auto",
                        backgroundColor: "#387ed1",
                        color: "#FFF",
                    }}
                >
                    Signup Now
                </button>
            </div>
        </div>
    );
}

export default Hero;
