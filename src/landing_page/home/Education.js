import React from "react";

function Education() {
    return (
        <div className="container p-3 mt-5">
            <div className="row p-5">
                <div className="col-6">
                    <img
                        src="media\images\education.svg"
                        alt="Press Logos"
                        style={{ width: "70%" }}
                    />
                </div>
                <div className="col-6 p-3 ">
                    <h1 className="mb-3 fs-2 ">
                        Free and open market education
                    </h1>
                    <div className="mb-4">
                        <p className="text-muted">
                            Varsity, the largest online stock market education
                            book in the world covering everything from the
                            basics to advanced trading.
                        </p>
                        <a href="" className="text-decoration-none">
                            Varsity{" "}
                            <i
                                class="fa fa-long-arrow-right"
                                aria-hidden="true"
                            ></i>
                        </a>
                    </div>
                    <div>
                        <p className="text-muted">
                            TradingQ&A, the most active trading and investment
                            community in India for all your market related
                            queries.
                        </p>
                        <a href="" className="text-decoration-none">
                            TradingQ&A{" "}
                            <i
                                class="fa fa-long-arrow-right"
                                aria-hidden="true"
                            ></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Education;
