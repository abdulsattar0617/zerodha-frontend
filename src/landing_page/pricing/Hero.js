import React from "react";

function Hero() {
    return (
        <div className="container p-5" style={{ color: "#424242" }}>
            <div className="row text-center p-5">
                <h1>Charges</h1>
                <h2 className="text-black-50 fs-5 mt-3">
                    List of all charges and taxes
                </h2>
            </div>
            <div className="row p-5 mt-5 text-center">
                <div className="col-4">
                    <img
                        src="media/images/pricing0.svg"
                        alt=""
                        style={{ width: "75%" }}
                    />
                    <h3 className="mt-3">Free equity delivery</h3>
                    <p className="mt-3 muted fs-6 lh-lg">
                        All equity delivery investments (NSE, BSE), are
                        absolutely free — ₹ 0 brokerage.
                    </p>
                </div>
                <div className="col-4">
                    <img
                        src="media\images\intradayTrades.svg"
                        alt=""
                        style={{ width: "75%" }}
                    />
                    <h3 className="mt-3">Intraday and F&O trades</h3>
                    <p className="mt-3 muted lh-lg">
                        Flat ₹ 20 or 0.03% (whichever is lower) per executed
                        order on intraday trades across equity, currency, and
                        commodity trades. Flat ₹20 on all option trades.
                    </p>
                </div>
                <div className="col-4">
                    <img
                        src="media\images\pricingMF.svg"
                        alt=""
                        style={{ width: "75%" }}
                    />
                    <h3 className="mt-3">Intraday and F&O trades</h3>
                    <p className="mt-3 muted lh-lg">
                        All direct mutual fund investments are absolutely free —
                        ₹ 0 commissions & DP charges.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Hero;
