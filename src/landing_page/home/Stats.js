import React from "react";

function Stats() {
    return (
        <div className="container ">
            <div className="row p-3">
                <div className="col-6 p-5">
                    <h1 className="fs-2 mb-5">Trust with confidence</h1>

                    <h2 className="mt-5 fs-4 text-secondary-emphasis">
                        Customer-first always
                    </h2>
                    <p className="text-muted">
                        That's why 1.5+ crore customers trust Zerodha with ₹4.5+
                        lakh crores of equity investments and contribute to 15%
                        of daily retail exchange volumes in India.
                    </p>

                    <h2 className="mt-5 fs-4 text-secondary-emphasis">
                        No spam or gimmicks
                    </h2>
                    <p className="text-muted ">
                        No gimmicks, spam, "gamification", or annoying push
                        notifications. High quality apps that you use at your
                        pace, the way you like.
                    </p>

                    <h2 className="mt-5 fs-4 text-secondary-emphasis">
                        The Zerodha universe
                    </h2>
                    <p className="text-muted">
                        Not just an app, but a whole ecosystem. Our investments
                        in 30+ fintech startups offer you tailored services
                        specific to your needs.
                    </p>

                    <h2 className="mt-5 fs-4 text-secondary-emphasis">
                        Do better with money
                    </h2>
                    <p className="text-muted">
                        With initiatives like Nudge and Kill Switch, we don't
                        just facilitate transactions, but actively help you do
                        better with your money.
                    </p>
                </div>
                <div className="col-6 text-center">
                    <img
                        src="media\images\ecosystem.png"
                        alt="Ecosystem"
                        style={{ width: "90%" }}
                    />

                    <div className="">
                        <a href="" className="mx-5 text-decoration-none">
                            Explore our products{" "}
                            <i
                                class="fa fa-long-arrow-right"
                                aria-hidden="true"
                            ></i>
                        </a>
                        <a href="" className="text-decoration-none">
                            Try Kite demo{" "}
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

export default Stats;
