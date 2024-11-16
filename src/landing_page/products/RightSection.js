import React from "react";

function RightSection({
    imageURL,
    productName,
    productDescription,
    learnMore,
}) {
    return (
        <div className="container ">
            <div className="row ">
                <div className="col-4  my-auto">
                    <h1 className=" fs-2">{productName}</h1>
                    <p className="fs-6 text-muted mt-3">
                        {productDescription}
                    </p>
                    <p className="mt-3">
                        
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
                        
                    </p>
                </div>
                <div className="col-1"></div>
                <div className="col-6 ">
                    <img src={imageURL} alt={productName} />
                </div>
                <div className="col-1"></div>
            </div>
        </div>
    );
}

export default RightSection;
