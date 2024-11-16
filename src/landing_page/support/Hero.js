import React from "react";

function Hero() {
    return (
        <section className="container-fluid" id="supportHero">
            <div className="container text-light">
                <div className="row p-5  mx-5">
                    <h4 className="col d-inline">Support Portal</h4>
                    <span className="col text-end">
                        <a href="/support" className="white-link">
                            Track tickets
                        </a>
                    </span>
                </div>
                <div className="row px-5 pb-5 mx-5">
                    <div className="col-7">
                        <h1 className="fs-4 fw-normal">
                            Search for an answer or browse help topics to create
                            a ticket
                        </h1>
                        <input
                            type="text"
                            placeholder="Eg: how do i activate F&O, why is my order getting rejected ..."
                        />
                        <br />
                        <a href="/support" className="white-link">
                            Track account opening{" "}
                        </a>
                        <a href="/support" className="white-link">
                            Track segment activation{" "}
                        </a>
                        <a href="/support" className="white-link">
                            Intraday margins{" "}
                        </a>
                        <br />
                        <a href="/support" className="white-link">
                            Kite user manual
                        </a>
                    </div>
                    <div className="col-5 ps-5">
                        <h1 className="fs-4 fw-normal">Featured</h1>
                        <ol >
                            <li>
                                <a href="/support" className="feature-link" style={{lineHeight: "2.75"}} >
                                    Rights Entitlements listing in November 2024
                                </a>
                            </li>
                            <li>
                                <a href="/support" className="feature-link" style={{lineHeight: "2.75"}}  >
                                    Surveillance measure on scrips - November
                                    2024
                                </a>
                            </li>
                        </ol>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;
