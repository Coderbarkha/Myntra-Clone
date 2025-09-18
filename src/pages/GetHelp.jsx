import React, { useState } from "react";
import { FaLock, FaAngleRight, FaUser, FaUndo, FaGift, FaCreditCard, FaPercent, FaMoneyBill, FaTimes } from "react-icons/fa";
import "../styles/global.css";

const GetHelp = () => {
  const [activeTab, setActiveTab] = useState("order"); // order, nonOrder, recent

  return (
    <div className="gethelp-container">
      {/* HEADER SECTION */}
      <div className="gethelp-header">
        <div className="left-text">
          <h2>HELP CENTER</h2>
          <p className="sub-text">We are here to help you</p>
        </div>

        <div className="track-box">
          <FaLock size={22} className="lock-icon" />
          <div>
            <p className="track-title">Track, Cancel, Return/Exchange</p>
            <p className="track-sub">Manage your purchases</p>
          </div>
        </div>

        <button className="orders-btn">ORDERS</button>
      </div>

      <hr />

      {/* QUERY TABS */}
      <div className="query-tabs">
        <p
          className={`tab ${activeTab === "order" ? "active" : ""}`}
          onClick={() => setActiveTab("order")}
        >
          Order Related Queries <FaAngleRight />
        </p>
        <p
          className={`tab ${activeTab === "nonOrder" ? "active" : ""}`}
          onClick={() => setActiveTab("nonOrder")}
        >
          Non-Order Related Issues <FaAngleRight />
        </p>
        <p
          className={`tab ${activeTab === "recent" ? "active" : ""}`}
          onClick={() => setActiveTab("recent")}
        >
          Recent Issues <FaAngleRight />
        </p>
      </div>

      <hr />

      {/* FAQ */}
      <p className="faq">Frequently Asked Questions <FaAngleRight /></p>

      {/* CONTENT BOX */}
      <div className="content-box">
        {activeTab === "order" && (
          <>
            <p className="content-text">
              Order Related Queries <br />
              Please log in, if you have queries related to purchases.
            </p>
            <button className="login-btn">Login</button>
          </>
        )}

        {activeTab === "recent" && (
          <>
            <p className="content-text">
              Please log in, if you have queries related to purchases.
            </p>
            <button className="login-btn">Login</button>
          </>
        )}

        {activeTab === "nonOrder" && (
          <div className="topics">
            <h3>Browse Topics</h3>
            <div className="topics-grid">
              <button className="topic-btn"><FaUser /> Account</button>
              <button className="topic-btn"><FaUndo /> Return & Exchange</button>
              <button className="topic-btn"><FaGift /> Myntra Insider & Credit</button>
              <button className="topic-btn"><FaPercent /> Offers</button>
              <button className="topic-btn"><FaMoneyBill /> Payments</button>
              <button className="topic-btn"><FaTimes /> Cancellation & Charges</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default GetHelp;
