import React from "react";

function LeftSection({
    imageURL,
    productName,
    productDescription,
    tryDemo,
    learnMore,
    googlePlay,
    appStore,
}) {
    return (
        <div className="container p-5">
            <div className="row  p-5">
                <div className="col-6 ">
                    <img src={imageURL} alt={productName} />
                </div>
                <div className="col-2"></div>
                <div className="col-4 mt-3 pt-5" style={{}}>
                    <h1>{productName}</h1>
                    <p className="mt-4 fs-6 text-muted">{productDescription}</p>
                    <p className="">
                        <span>
                            <a href={tryDemo} className="text-decoration-none">
                                Try demo{" "}
                                <i
                                    class="fa fa-long-arrow-right"
                                    aria-hidden="true"
                                ></i>
                            </a>
                        </span>
                        <span className="mx-5">
                            <a
                                href={learnMore}
                                className="text-decoration-none"
                            >
                                Learn more{" "}
                                <i
                                    class="fa fa-long-arrow-right"
                                    aria-hidden="true"
                                ></i>
                            </a>
                        </span>
                    </p>
                    <div className="pt-3">
                        <a href={googlePlay}>
                            <img
                                src="media\images\googlePlayBadge.svg"
                                alt="Google Play"
                            />
                        </a>
                        <a href={appStore} className="mx-3">
                            <img
                                src="media\images\appstoreBadge.svg"
                                alt="App Store"
                            />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LeftSection;
