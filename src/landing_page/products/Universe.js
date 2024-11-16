import React from "react";

function PartnerPlatform({ imageURL, partnerDescription }) {
    return (
        <div className="px-5 pb-5">
            <img src={imageURL} alt="" style={{ height: "3rem" }} className="mb-5"/>
            <p className=" text-muted" style={{ fontSize: "0.8rem" }}>
                {partnerDescription}
            </p>
        </div>
    );
}

function Universe() {
    return (
        <div className="container p-5 text-center">
            <div className="row p-5">
                <h1 className="fs-2">The Zerodha Universe</h1>
                <p className="mt-3 text-muted">
                    Extend your trading and investment experience even further
                    with our partner platforms
                </p>
            </div>
            <div className="row">
                <div className="col-4">
                    <PartnerPlatform
                        imageURL={"media/images/zerodhaFundHouse.png"}
                        partnerDescription={
                            "Our asset management venture that is creating simple and transparent index funds to help you save for your goals."
                        }
                    />
                </div>
                <div className="col-4">
                    <PartnerPlatform
                        imageURL={"media/images/sensibullLogo.svg"}
                        partnerDescription={
                            "Options trading platform that lets you create strategies, analyze positions, and examine data points like open interest, FII/DII, and more."
                        }
                    />
                </div>
                <div className="col-4">
                    {" "}
                    <PartnerPlatform
                        imageURL={"media/images/tijori.svg"}
                        partnerDescription={
                            "Investment research platform that offers detailed insights on stocks, sectors, supply chains, and more."
                        }
                    />
                </div>
            </div>
            <div className="row">
                <div className="col-4">
                    <PartnerPlatform
                        imageURL={"media/images/streakLogo.png"}
                        partnerDescription={
                            "Systematic trading platform that allows you to create and backtest strategies without coding."
                        }
                    />
                </div>
                <div className="col-4">
                    <PartnerPlatform
                        imageURL={"media/images/smallcaseLogo.png"}
                        partnerDescription={
                            "Thematic investing platform that helps you invest in diversified baskets of stocks on ETFs."
                        }
                    />
                </div>
                <div className="col-4">
                    <PartnerPlatform
                        imageURL={"media/images/dittoLogo.png"}
                        partnerDescription={
                            "Personalized advice on life and health insurance. No spam and no mis-selling. Sign up for free"
                        }
                    />
                </div>
            </div>
            <div className="row">
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

export default Universe;
