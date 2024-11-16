import React from "react";

function OpenAccount() {
    return (
        <div className="container p-5 mb-5">
            <div className="row text-center">
                <img
                    src="media/images/homeHero.png"
                    alt="Hero"
                    className="mb-5"
                />
                <h1 className="mt-5">Open a Zerodha account</h1>
                <p>
                    Modern platforms and apps, ₹0 investments, and flat ₹20
                    intraday and F&O trades.
                </p>
                <button
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

export default OpenAccount;
