import React from "react";

function openTab(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}

function Brokerage() {
    return (
        <div className="container px-5">
            <div className="row mx-5">
                <div className="tabs">
                    <ul class="nav nav-underline fs-3">
                        <li class="nav-item">
                            <button
                                class="nav-link active tablink"
                                onClick={(event) => openTab(event, "equity")}
                            >
                                Equity
                            </button>
                        </li>
                        <li class="nav-item">
                            <button
                                class="nav-link tablink"
                                onClick={(event) => openTab(event, "currency")}
                            >
                                Currency
                            </button>
                        </li>
                        <li class="nav-item">
                            <button
                                class="nav-link tablink"
                                onClick={(event) => openTab(event, "commodity")}
                            >
                                Commodity
                            </button>
                        </li>
                    </ul>
                </div>
                <div className="content">
                    <div id="equity" className="tabcontent mt-3">
                        <table
                            class="table table-striped border "
                            width={"100%"}
                        >
                            <thead className="border-bottom">
                                <tr>
                                    <td className="p-3" width={"15%"}>
                                        {" "}
                                    </td>
                                    <td className="p-3" width={"20%"}>
                                        Equity delivery
                                    </td>
                                    <td className="p-3" width={"20%"}>
                                        Equity intraday
                                    </td>
                                    <td className="p-3" width={"20%"}>
                                        {" "}
                                        F&O - Futures
                                    </td>
                                    <td className="p-3" width={"20%"}>
                                        F&O - Options
                                    </td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="p-3">Brokerage</td>
                                    <td>Zero Brokerage</td>
                                    <td>
                                        0.03% or Rs. 20/executed order whichever
                                        is lower
                                    </td>
                                    <td>
                                        0.03% or Rs. 20/executed order whichever
                                        is lower
                                    </td>
                                    <td>Flat Rs. 20 per executed order</td>
                                </tr>
                                <tr className="">
                                    <td>STT/CTT</td>
                                    <td>0.1% on buy & sell</td>
                                    <td>0.025% on the sell side</td>
                                    <td>0.02% on the sell side</td>
                                    <td>
                                        <ul>
                                            <li>
                                                0.125% of the intrinsic value on
                                                options that are bought and
                                                exercised
                                            </li>
                                            <li>
                                                0.1% on sell side (on premium)
                                            </li>
                                        </ul>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        Transaction <br />
                                        charges
                                    </td>
                                    <td>
                                        NSE: 0.00297% <br />
                                        BSE: 0.00375%
                                    </td>
                                    <td>
                                        NSE: 0.00297% <br />
                                        BSE: 0.00375%
                                    </td>
                                    <td>
                                        NSE: 0.00173% <br />
                                        BSE: 0
                                    </td>
                                    <td>
                                        NSE: 0.03503% (on premium) <br />
                                        BSE: 0.0325% (on premium)
                                    </td>
                                </tr>
                                <tr>
                                    <td>GST</td>
                                    <td>
                                        18% on (brokerage + SEBI charges +
                                        transaction charges)
                                    </td>
                                    <td>
                                        18% on (brokerage + SEBI charges +
                                        transaction charges)
                                    </td>
                                    <td>
                                        18% on (brokerage + SEBI charges +
                                        transaction charges)
                                    </td>
                                    <td>
                                        18% on (brokerage + SEBI charges +
                                        transaction charges)
                                    </td>
                                </tr>
                                <tr>
                                    <td>SEBI charges</td>
                                    <td>₹10 / crore</td>
                                    <td>₹10 / crore</td>
                                    <td>₹10 / crore</td>
                                    <td>₹10 / crore</td>
                                </tr>
                                <tr>
                                    <td>Stamp charges</td>
                                    <td>0.015% or ₹1500 / crore on buy side</td>
                                    <td>0.003% or ₹300 / crore on buy side</td>
                                    <td>0.002% or ₹200 / crore on buy side</td>
                                    <td>0.003% or ₹300 / crore on buy side</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div id="currency" className="tabcontent mt-3">
                        <table
                            class="table table-striped border "
                            width={"100%"}
                        >
                            <thead className="border-bottom">
                                <tr>
                                    <td className="p-3" width={"20%"}>
                                        {" "}
                                    </td>
                                    <td className="p-3" width={"40%"}>
                                        Currency futures
                                    </td>
                                    <td className="p-3" width={"40%"}>
                                        Currency options
                                    </td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="p-3">Brokerage</td>
                                    <td>
                                        0.03% or ₹ 20/executed order whichever
                                        is lower
                                    </td>
                                    <td>₹ 20/executed order</td>
                                </tr>
                                <tr className="">
                                    <td>STT/CTT</td>
                                    <td>No STT</td>
                                    <td>No STT</td>
                                </tr>
                                <tr>
                                    <td>
                                        Transaction <br />
                                        charges
                                    </td>
                                    <td>
                                        NSE: 0.00035% <br />
                                        BSE: 0.00045%
                                    </td>
                                    <td>
                                        NSE: 0.0311% <br />
                                        BSE: 0.001%
                                    </td>
                                </tr>
                                <tr>
                                    <td>GST</td>
                                    <td>
                                        18% on (brokerage + SEBI charges +
                                        transaction charges)
                                    </td>
                                    <td>
                                        18% on (brokerage + SEBI charges +
                                        transaction charges)
                                    </td>
                                </tr>
                                <tr>
                                    <td>SEBI charges</td>
                                    <td>₹10 / crore</td>
                                    <td>₹10 / crore</td>
                                </tr>
                                <tr>
                                    <td>Stamp charges</td>
                                    <td>0.0001% or ₹10 / crore on buy side</td>
                                    <td>0.0001% or ₹10 / crore on buy side</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div id="commodity" className="tabcontent mt-3">
                        <table
                            class="table table-striped border "
                            width={"100%"}
                        >
                            <thead className="border-bottom">
                                <tr>
                                    <td className="p-3" width={"20%"}>
                                        {" "}
                                    </td>
                                    <td className="p-3" width={"40%"}>
                                        Commodity futures
                                    </td>
                                    <td className="p-3" width={"40%"}>
                                        Commodity options
                                    </td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="p-3">Brokerage</td>
                                    <td>
                                        0.03% or Rs. 20/executed order whichever
                                        is lower
                                    </td>
                                    <td>₹ 20/executed order</td>
                                </tr>
                                <tr className="">
                                    <td>STT/CTT</td>
                                    <td>0.01% on sell side (Non-Agri)</td>
                                    <td>0.05% on sell side</td>
                                </tr>
                                <tr>
                                    <td>
                                        Transaction <br />
                                        charges
                                    </td>
                                    <td>
                                        MCX: 0.0021% <br />
                                        NSE: 0.0001%
                                    </td>
                                    <td>
                                        MCX: 0.0418%
                                        <br />
                                        NSE: 0.001%
                                    </td>
                                </tr>
                                <tr>
                                    <td>GST</td>
                                    <td>
                                        18% on (brokerage + SEBI charges +
                                        transaction charges)
                                    </td>
                                    <td>
                                        18% on (brokerage + SEBI charges +
                                        transaction charges)
                                    </td>
                                </tr>
                                <tr>
                                    <td>SEBI charges</td>
                                    <td>
                                        Agri: <br />
                                        ₹1 / crore <br />
                                        Non-agri: <br />
                                        ₹10 / crore
                                    </td>
                                    <td>₹10 / crore</td>
                                </tr>
                                <tr>
                                    <td>Stamp charges</td>
                                    <td>0.002% or ₹200 / crore on buy side</td>
                                    <td>0.003% or ₹300 / crore on buy side</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div className="row mt-3 px-5 fs-5 text-center">
                <p>
                    <a href="" className="text-decoration-none">
                        Calculate your costs upfront
                    </a>{" "}
                    using our brokerage calculator
                </p>
            </div>
            <div className="row px-5 charges-content text-muted">
                <h3 className="my-3">Charges explained</h3>
                <div className="col-6">
                    <h4 className="fs-6 my-3">
                        Securities/Commodities transaction tax
                    </h4>
                    <p>
                        Tax by the government when transacting on the exchanges.
                        Charged as above on both buy and sell sides when trading
                        equity delivery. Charged only on selling side when
                        trading intraday or on F&O.
                    </p>
                    <p>
                        When trading at Zerodha, STT/CTT can be a lot more than
                        the brokerage we charge. Important to keep a tab.
                    </p>
                    <h4 className="fs-6 my-3">Transaction/Turnover Charges</h4>
                    <p>
                        Charged by exchanges (NSE, BSE, MCX) on the value of
                        your transactions.
                    </p>
                    <p>
                        BSE has revised transaction charges in XC, XD, XT, Z and
                        ZP groups to ₹10,000 per crore w.e.f 01.01.2016. (XC and
                        XD groups have been merged into a new group X w.e.f
                        01.12.2017)
                    </p>
                    <p>
                        BSE has revised transaction charges in SS and ST groups
                        to ₹1,00,000 per crore of gross turnover.
                    </p>
                    <p>
                        BSE has revised transaction charges for group A, B and
                        other non exclusive scrips (non-exclusive scrips from
                        group E, F, FC, G, GC, W, T) at ₹375 per crore of
                        turnover on flat rate basis w.e.f. December 1, 2022.
                    </p>
                    <p>
                        BSE has revised transaction charges in M, MT, TS and MS
                        groups to ₹275 per crore of gross turnover.
                    </p>
                    <h4 className="fs-6 my-3">Call & trade</h4>
                    <p>
                        Additional charges of ₹50 per order for orders placed
                        through a dealer at Zerodha including auto square off
                        orders.
                    </p>

                    <h4 className="fs-6 my-3">Stamp charges</h4>
                    <p>
                        Stamp charges by the Government of India as per the
                        Indian Stamp Act of 1899 for transacting in instruments
                        on the stock exchanges and depositories.
                    </p>

                    <h4 className="fs-6 my-3">NRI brokerage charges</h4>
                    <p>
                        <ul>
                            <li>₹100 per order for futures and options.</li>
                            <li>
                                For a non-PIS account, 0.5% or ₹100 per executed
                                order for equity (whichever is lower).
                            </li>
                            <li>
                                For a PIS account, 0.5% or ₹200 per executed
                                order for equity (whichever is lower).
                            </li>
                            <li>
                                ₹500 + GST as yearly account maintenance charges
                                (AMC) charges.
                            </li>
                        </ul>
                    </p>
                    <h4 className="fs-6 my-3">Account with debit balance</h4>
                    <p>
                        If the account is in debit balance, any order placed
                        will be charged ₹40 per executed order instead of ₹20
                        per executed order.
                    </p>
                    <h4 className="fs-6 my-3">
                        Charges for Investor's Protection Fund Trust (IPFT) by
                        NSE
                    </h4>
                    <p>
                        <ul>
                            <li>
                                Equity and Futures - ₹10 per crore + GST of the
                                traded value.
                            </li>
                            <li>
                                Options - ₹50 per crore + GST traded value
                                (premium value).
                            </li>
                            <li>
                                Currency - ₹0.05 per lakh + GST of turnover for
                                Futures and ₹2 per lakh + GST of premium for
                                Options.
                            </li>
                        </ul>
                    </p>
                </div>
                <div className="col-6 px-5 ">
                    <h4 className="fs-6 my-3">GST</h4>
                    <p>
                        Tax levied by the government on the services rendered.
                        18% of ( brokerage + SEBI charges + transaction charges)
                    </p>

                    <h4 className="fs-6 my-3">SEBI Charges</h4>
                    <p>
                        Charged at ₹10 per crore + GST by Securities and
                        Exchange Board of India for regulating the markets.
                    </p>

                    <h4 className="fs-6 my-3">
                        DP (Depository participant) charges
                    </h4>
                    <p>
                        ₹15.34 per scrip (₹3.5 CDSL fee + ₹9.5 Zerodha fee +
                        ₹2.34 GST) is charged on the trading account ledger when
                        stocks are sold, irrespective of quantity.
                    </p>
                    <p>
                        Female demat account holders (as first holder) will
                        enjoy a discount of ₹0.25 per transaction on the CDSL
                        fee.
                    </p>
                    <p>
                        Debit transactions of mutual funds & bonds get an
                        additional discount of ₹0.25 on the CDSL fee.
                    </p>

                    <h4 className="fs-6 my-3">Pledging charges</h4>
                    <p>₹30 + GST per pledge request per ISIN.</p>

                    <h4 className="fs-6 my-3">
                        AMC (Account maintenance charges)
                    </h4>
                    <p>
                        For BSDA demat account: Zero charges if the holding
                        value is less than ₹4,00,000. To learn more about BSDA,
                        <a href="">Click here</a>
                    </p>
                    <p>
                        For non-BSDA demat accounts: ₹300/year + 18% GST charged
                        quarterly (90 days). To learn more about AMC,{" "}
                        <a href="">Click here</a>
                    </p>
                    <h4 className="fs-6 my-3">
                        Corporate action order charges
                    </h4>
                    <p>
                        ₹20 plus GST will be charged for OFS / buyback /
                        takeover / delisting orders placed through Console.
                    </p>

                    <h4 className="fs-6 my-3">Off-market transfer charges</h4>
                    <p>
                        ₹25 or 0.03% of the transfer value (whichever is
                        higher).
                    </p>

                    <h4 className="fs-6 my-3">Physical CMR request</h4>
                    <p>
                        First CMR request is free. ₹20 + ₹100 (courier charge) +
                        18% GST for subsequent requests.
                    </p>

                    <h4 className="fs-6 my-3">Payment gateway charges</h4>
                    <p>₹9 + GST (Not levied on transfers done via UPI)</p>
                    <h4 className="fs-6 my-3">Delayed Payment Charges</h4>
                    <p>
                        Interest is levied at 18% a year or 0.05% per day on the
                        debit balance in your trading account.{" "}
                        <a href="">Learn more.</a>
                    </p>
                </div>
            </div>
            <div className="row charges-content px-5 pb-5">
                <h4 className="fs-6 my-3">Disclaimer</h4>
                <p>
                    For Delivery based trades, a minimum of ₹0.01 will be
                    charged per contract note. Clients who opt to receive
                    physical contract notes will be charged ₹20 per contract
                    note plus courier charges. Brokerage will not exceed the
                    rates specified by SEBI and the exchanges. All statutory and
                    regulatory charges will be levied at actuals. Brokerage is
                    also charged on expired, exercised, and assigned options
                    contracts. Free investments are available only for our
                    retail individual clients. Companies, Partnerships, Trusts,
                    and HUFs need to pay 0.1% or ₹20 (whichever is less) as
                    delivery brokerage. A brokerage of 0.25% of the contract
                    value will be charged for contracts where physical delivery
                    happens. For netted off positions in physically settled
                    contracts, a brokerage of 0.1% will be charged.
                </p>
            </div>
            <div className="row mt-5 px-5 text-muted pb-5">
                <h2>Charges for account opening</h2>
                <table
                    class="mt-3 table table-striped border account-charges"
                    width={"100%"}
                >
                    <thead>
                        <tr>
                            <td width={"80%"}>Type of account</td>
                            <td width={"20%"}>Charges</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Online account</td>
                            <td>free</td>
                        </tr>
                        <tr>
                            <td>Offline account</td>
                            <td>free</td>
                        </tr>
                        <tr>
                            <td>NRI account (offline only)</td>
                            <td>₹ 500</td>
                        </tr>
                        <tr>
                            <td>
                                Partnership, LLP, HUF, or Corporate accounts
                                (offline only)
                            </td>
                            <td>₹ 500</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="row mt-5 px-5 text-muted pb-5">
                <h2>Charges for optional value added services</h2>
                <table
                    class="mt-3 table table-striped border account-charges"
                    width={"100%"}
                >
                    <thead>
                        <tr>
                            <td width={"20%"}>Service</td>
                            <td width={"20%"}>Billing Frquency</td>
                            <td width={"60%"}>Charges</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Tickertape</td>
                            <td>Monthly / Annual</td>
                            <td>Free: 0 | Pro: 249/2399</td>
                        </tr>
                        <tr>
                            <td>Smallcase</td>
                            <td>Per transaction</td>
                            <td>Buy & Invest More: 100 | SIP: 10</td>
                        </tr>
                        <tr>
                            <td>Kite Connect</td>
                            <td>Monthly</td>
                            <td>Connect: 2000 | Historical: 2000</td>
                        </tr> 
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Brokerage;
