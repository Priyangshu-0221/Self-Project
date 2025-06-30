import React from "react";

const Footer = () => {
  return (
    <>
      <div className="bg-[#ECF8F8]">
        <div className="flex flex-row justify-between items-center px-20">
          <div>
            <img
              className="h-15 rounded-b-full"
              src="Media\Images\logo.png"
              alt=""
            />
            <h1 className="text-2xl font-bold  py-2">Stockify</h1>
            <i className=" text-3xl m-1.5 ri-facebook-circle-fill"></i>
            <i className=" text-3xl m-1.5 ri-instagram-fill"></i>
            <i className=" text-3xl m-1.5 ri-twitter-x-fill"></i>
            <i className=" text-3xl m-1.5 ri-whatsapp-fill"></i>
            <i className=" text-3xl m-1.5 ri-linkedin-box-fill"></i>
            <i className=" text-3xl m-1.5 ri-telegram-2-fill"></i>
            <i className=" text-3xl m-1.5 ri-youtube-fill "></i>
            <div className="flex flex-row gap-2 mt-2">
              <p className="border-r-2 px-2 font-semibold">
                All Rights Reserved
              </p>
              <i className="ri-at-line">CopyRight 2025</i>
            </div>
          </div>
          <div className="px-10">
            <div className="row flex flex-row">
              <div className="col font-medium">
                <p className="font-bold my-2 py-1">Stockify</p>
                <a href="">About Us</a>
                <br />
                <a href="">Blog</a>
                <br />
                <a href="">Privacy Policy</a>
                <br />
                <a href="">Terms & Conditions</a>
                <br />
                <a href="">Legal & Regulatory</a>
                <br />
                <a href="">Grievance Redressal Policy</a>
                <br />
                <a href="">Sitemap</a>
                <br />
              </div>
              <div className="col px-10  font-medium">
                <p className="font-bold my-2 py-1">Products</p>
                <a href="">Stocks</a>
                <br />
                <a href="">MTF</a>
                <br />
                <a href="">ETF</a>
                <br />
                <a href="">IPO</a>
                <br />
                <a href="">Credit</a>
                <br />
                <a href="">Mutual Funds</a>
                <br />
              </div>
              <div className="col  px-15 font-semibold">
                <p className="font-bold my-2 py-1">Quick Links</p>
                <a href="">Customer Service</a>
                <br />
                <a href="">Fraud Awareness</a>
                <br />
              </div>
            </div>
          </div>
        </div>
        <div className="px-10 text-start">
          <h1 className=" text-xl font-bold my-5">About Stockify</h1>
          <p className="font-medium">
            Stockify, a product of Stockify Tech Private Limited (formerly
            Finzoom Investment Advisors Private Limited), provides financial
            technology solutions including personal finance management tools,
            UPI payment services, bill payments, and aggregation of financial
            products through its app and website. Stockify Private Limited
            (formerly INDmoney Private Limited) is a SEBI-registered Stock
            Broker (INZ000305337) and a CDSL Depository Participant
            (IN-DP-690-2022, DP ID: 12095500), and is a trading and clearing
            member of NSE (90267, M70042), BSE (6779), and BSE Star MF (6779),
            as well as an AMFI-registered Mutual Fund Distributor (ARN: 254564).
            The Research Analyst services are offered through a separately
            identifiable unit registered with SEBI (INH000018948) and enlisted
            with BSE (No. 6428). Finzoomers Services Private Limited, affiliated
            with Stockify, acts as a Corporate Agent (Composite) registered with
            IRDAI (CA0744) and a Point of Presence (Online) with PFRDA
            (362042023) for NPS services. <br />
            Registered Demo Office Address: 2nd Floor, Triveni Tech Park, Sector
            5, Bidhannagar, Kolkata – 700091, West Bengal. Compliance officers
            include Ameya Mahendra Bhelekar (Stock Broking), Papia Mondal
            (Research Analyst), Priyangshu Mondal (Tech/UPI), and Sukanya Dey
            (Insurance/NPS). Contact points include ☎ 1234567890 and emails such
            as: <br />
            📧 rasupport@stockify.com <br />
            📧 upisupport@stockify.com <br />
            📧 insurancesupport@stockify.com <br />
            📧 npssupport@stockify.com <br />
          </p>
        </div>
        <div className="px-10 text-start">
          <h1 className=" text-lg font-semibold my-5">Disclaimer</h1>
          <p className="font-medium">
            Stockify Pvt. Ltd. is a member of NSE & BSE with SEBI Registration
            No: INZ000301838, a Depository Participant of CDSL (SEBI
            Registration No: IN-DP-417-2019), and a registered Mutual Fund
            distributor with AMFI Registration No: ARN-111686. Registered
            Office: 2nd Floor, Triveni Tech Park, Sector 5, Bidhannagar, Kolkata
            – 700091, West Bengal. For any grievances related to Stock Broking
            or Depository Services, please write to: grievances@stockify.in We
            recommend reading the Risk Disclosure Document carefully as
            prescribed by SEBI before investing. <br /> <br />
            Investments in securities are subject to market risks. Please read
            all related documents carefully before investing. <br />
            Mutual fund investments are also subject to market risks. Please
            read all scheme-related documents carefully before investing. <br />
            Past performance of schemes is neither indicative of nor a guarantee
            for future performance. <br />
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
