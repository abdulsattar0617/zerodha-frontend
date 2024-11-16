import React from "react";

function Pricing() {
    return (
        <div className="container p-3 mt-5">
            <div className="row p-5">
                <div className="col-4">
                    <h1 className="mb-3 fs-2 ">Unbeatable pricing</h1>
                    <p className="text-muted">
                        We pioneered the concept of discount broking and price
                        transparency in India. Flat fees and no hidden charges.
                    </p>
                    <a href="/" className="text-decoration-none">
                        See pricing{" "}
                        <i
                            class="fa fa-long-arrow-right"
                            aria-hidden="true"
                        ></i>
                    </a>
                </div>
                <div className="col-2"></div>
                <div className="col-6">
                    <div className="row text-center">
                        <div className="col border p-3">
                            <h1 className="mb-5">₹0</h1>
                            <p>
                                Free equity delivery and <br />
                                direct mutual funds
                            </p>
                        </div>
                        <div className="col border p-3">
                            <h1 className="mb-5">₹20</h1>
                            <p>Intraday and F&O</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Pricing;
