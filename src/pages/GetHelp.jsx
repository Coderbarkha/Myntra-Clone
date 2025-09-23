// src/pages/GetHelp.jsx
import React, { useState } from "react";
import {
  FaLock,
  FaAngleRight,
  FaUser,
  FaUndo,
  FaGift,
  FaPercent,
  FaMoneyBill,
  FaTimes,
} from "react-icons/fa";
import "../styles/global.css";

export default function GetHelp() {
  const [activeTab, setActiveTab] = useState("order");
  const [activeTopic, setActiveTopic] = useState(null);

  return (
    <div className="gethelp-container">
      <div className="gethelp-header">
        <div className="left-text">
          <h2>HELP CENTER</h2>
          <p className="sub-text">We are here to help you</p>
        </div>

        <div className="track-box">
          <FaLock size={22} className="lock-icon" />
          <div className="track-texts">
            <p className="track-title">Track, Cancel, Return/Exchange</p>
            <p className="track-sub">Manage your purchases</p>
          </div>
          <button className="orders-btn">ORDERS</button>
        </div>
      </div>

      <div className="gethelp-body">
        {/* left tabs vertical */}
        <div className="query-tabs-vertical">
          <h4 className="query-heading">Select Query Type</h4>
          <button
            className={`tab ${activeTab === "order" ? "active" : ""}`}
            onClick={() => setActiveTab("order")}
          >
            Order Related Queries <FaAngleRight />
          </button>
          <button
            className={`tab ${activeTab === "nonOrder" ? "active" : ""}`}
            onClick={() => setActiveTab("nonOrder")}
          >
            Non-Order Related Issues <FaAngleRight />
          </button>
          <button
            className={`tab ${activeTab === "recent" ? "active" : ""}`}
            onClick={() => setActiveTab("recent")}
          >
            Recent Issues <FaAngleRight />
          </button>
          <div className="faq-link">
            Frequently Asked Questions <FaAngleRight />
          </div>
        </div>

        {/* right side content */}
        <div className="content-area">
          {/* Order Related Queries */}
          {activeTab === "order" && (
            <div className="content-box blurred-box">
              <p className="content-text">
                Please <strong>log in</strong> if you have queries related to
                purchases.
              </p>
              <button className="gethelplogin-btn">LOG IN</button>
            </div>
          )}

          {/* Recent Issues */}
          {activeTab === "recent" && (
            <div className="recent-box">
              <p className="content-text">
                Please <strong>log in</strong> if you have queries related to
                purchases.
              </p>
              <button className="gethelplogin-btn">LOG IN</button>
            </div>
          )}

          {/* Non-Order Related */}
          {activeTab === "nonOrder" && (
            <div>
              <div className="browse-topics">
                <h4 className="browse-heading">Browse Topics</h4>

                <div className="topics-grid">
                  <div
                    className="topic-btn"
                    onClick={() => setActiveTopic("account")}
                  >
                    <div className="icon-circle light-red">
                      <FaUser />
                    </div>
                    <span>Account</span>
                  </div>

                  <div
                    className="topic-btn"
                    onClick={() => setActiveTopic("return")}
                  >
                    <div className="icon-circle light-grey">
                      <FaUndo />
                    </div>
                    <span>Return & Exchange</span>
                  </div>

                  <div
                    className="topic-btn"
                    onClick={() => setActiveTopic("insider")}
                  >
                    <div className="icon-circle brown">
                      <FaGift />
                    </div>
                    <span>Myntra Credit & Insider</span>
                  </div>

                  <div
                    className="topic-btn"
                    onClick={() => setActiveTopic("offers")}
                  >
                    <div className="icon-circle beige">
                      <FaPercent />
                    </div>
                    <span>Offers</span>
                  </div>

                  <div
                    className="topic-btn"
                    onClick={() => setActiveTopic("payments")}
                  >
                    <div className="icon-circle light-blue">
                      <FaMoneyBill />
                    </div>
                    <span>Payments</span>
                  </div>

                  <div
                    className="topic-btn"
                    onClick={() => setActiveTopic("cancel")}
                  >
                    <div className="icon-circle light-pink">
                      <FaTimes />
                    </div>
                    <span>Cancellation & Charges</span>
                  </div>
                </div>
              </div>

              {/* FAQs only for Non-Order tab */}
              <div className="faqs-section">
                <div className="faq-item">
                  <span>How do I login to my Myntra account?</span>
                  <FaAngleRight className="faq-icon" />
                </div>
                <div className="faq-item">
                  <span>I am not able to login to my Myntra account.</span>
                  <FaAngleRight className="faq-icon" />
                </div>
                <div className="faq-item">
                  <span>Why am I not getting an OTP?</span>
                  <FaAngleRight className="faq-icon" />
                </div>
                <div className="faq-item">
                  <span>I am not getting the Forgot Password link.</span>
                  <FaAngleRight className="faq-icon" />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
