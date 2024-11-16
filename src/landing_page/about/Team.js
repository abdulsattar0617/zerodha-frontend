import React from "react";

function Team() {
    return (
        <div className="container mx-5 p-5 text-dark-emphasis ">
            <div className="row  text-center">
                <h1 className="fs-2 fw-medium">People</h1>
            </div>
            <div className="row p-5 mx-5" style={{ fontSize: "1.1rem" }}>
                <div className="col-1"></div>
                <div className="col-4 text-center">
                    <img
                        src="media\images\nithinKamath.jpg"
                        alt="Press Logos"
                        style={{ width: "90%" }}
                        className="rounded-circle"
                    />
                    <div className="mt-4">
                        <h5>Nithin Kamath</h5>
                        <p className="m-3">Founder, CEO</p>
                    </div>
                </div>

                <div className="col-7 px-5">
                    <p>
                        Nithin bootstrapped and founded Zerodha in 2010 to
                        overcome the hurdles he faced during his decade long
                        stint as a trader. Today, Zerodha has changed the
                        landscape of the Indian broking industry.
                    </p>
                    <p>
                        He is a member of the SEBI Secondary Market Advisory
                        Committee (SMAC) and the Market Data Advisory Committee
                        (MDAC).
                    </p>
                    <p>Playing basketball is his zen.</p>
                    <p>
                        Connect on{" "}
                        <a href="/" className="text-decoration-none">
                            Homepage
                        </a>{" "}
                        /{" "}
                        <a href="/" className="text-decoration-none">
                            TradingQnA
                        </a>{" "}
                        /{" "}
                        <a href="/" className="text-decoration-none">
                            Twitter
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Team;
