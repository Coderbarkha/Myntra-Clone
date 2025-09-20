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

const faqData = [
  {
    question: "How do I login to my Myntra account?",
    answer: `You can login to your Myntra account with these 3 simple steps:

1. Click on LOG IN/SIGN UP and enter your mobile number, then click CONTINUE.
2. An OTP will be sent to the mobile number entered by you.
3. Verify the OTP and post successful verification, you will be able to log in to Myntra.`,
  },
  {
    question: "I am not able to login to my Myntra account.",
    answer: `Primary mobile number is not accessible

Send email to accountrecovery@myntra.com
Email ID needs to be changed

Go to your profile section.
Enter new email ID, save and validate using the OTP sent on your number.
However, if you are receiving an error "the email ID is already linked to another account", kindly send an email to accountrecovery@myntra.com.

Primary mobile number to be changed

Go to your profile section.
Enter a new phone number, save and validate using the OTP sent on your number.
However, if you are receiving an error "the email ID is already linked to another account", kindly send an email to accountrecovery@myntra.com.`,
  },
  {
    question: "Why am I not getting an OTP?",
    answer: `We recommend you follow these steps to get the OTP:

- Check if you entered the correct phone number registered to your Myntra account. Suggestion- Make sure you have entered the correct and registered phone number only.
- Try checking the network connection/SMS blocker due to which the OTP might be delayed/blocked.
- Request for OTP once more.
- Still unable to access your account? Click below to talk to our customer care executive.`,
  },
  {
    question: "I am not getting the Forgot Password link.",
    answer: `Don’t worry! Follow these steps to get the Forgot Password link:

- Check if the registered email id is invalid. Also, check the spam folder in your email.
- The password reset link is only active for 24 hours so check if the link has expired.
- Try to reset the password with 3 previous passwords OR password mismatched.`,
  },
  {
    question: "Why is my account locked?",
    answer: `Your Myntra account may get locked for a specified time period or permanently in case there are too many failed login attempts.

This is for the security of your account. You should be able to gain access to your account by resetting your password.

If the issue persists, click below to talk to our customer care executive.`,
  },
  {
    question: "Why are you collecting my personal details?",
    answer: `Myntra uses your information to help you with faster payments and delivery. We also save your likes and preferences to show you personalized content that suits your style.

For more details on how we use your personal data please refer to the Myntra Privacy Policy.`,
  },
];

const GetHelp = () => {
  const [activeTab, setActiveTab] = useState("order"); // order, nonOrder, recent
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleFAQ = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

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
          <div className="track-texts">
            <p className="track-title">Track, Cancel, Return/Exchange</p>
            <p className="track-sub">Manage your purchases</p>
          </div>
          <button className="orders-btn">ORDERS</button>
        </div>
      </div>

      <hr />

      {/* MAIN CONTENT AREA */}
      <div className="gethelp-body">
        {/* LEFT SIDE: TABS */}
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
          <p className="faq">
            Frequently Asked Questions <FaAngleRight />
          </p>
        </div>

        {/* RIGHT SIDE: CONTENT */}
        <div className="gethelp-content">
          {activeTab === "order" && (
            <div className="content-box">
              <p className="content-text">
                <strong>Order Related Queries</strong> <br />
                Please log in, if you have queries related to purchases.
              </p>
              <button className="gethelplogin-btn">Login</button>
            </div>
          )}

          {activeTab === "recent" && (
            <div className="recent-box">
              <p className="content-text">
                Please log in, if you have queries related to purchases.
              </p>
              <button className="gethelplogin-btn">Login</button>
            </div>
          )}

          {activeTab === "nonOrder" && (
            <div className="topics-section">
              <h3>Browse Topics</h3>
              <div className="topics-grid">
                <div className="topic-item" onClick={() => setExpandedIndex(0)}>
                  <FaUser size={30} />
                  <span>Account</span>
                </div>
                <div className="topic-item">
                  <FaUndo size={30} />
                  <span>Return & Exchange</span>
                </div>
                <div className="topic-item">
                  <FaGift size={30} />
                  <span>Myntra Insider & Credit</span>
                </div>
                <div className="topic-item">
                  <FaPercent size={30} />
                  <span>Offers</span>
                </div>
                <div className="topic-item">
                  <FaMoneyBill size={30} />
                  <span>Payments</span>
                </div>
                <div className="topic-item">
                  <FaTimes size={30} />
                  <span>Cancellation & Charges</span>
                </div>
              </div>

              {/* FAQ for Account */}
              {expandedIndex === 0 && (
                <div className="faq-box">
                  <div className="faq-header">
                    <FaUser size={24} />
                    <h4>Account</h4>
                  </div>
                  <p className="faq-intro">
                    For account related issues refer to the below questions to get the complete information and if you're still unable to access your account? Click on the Contact Us option to talk to our customer care.
                  </p>

                  {faqData.map((item, index) => (
                    <div key={index} className="faq-item">
                      <div
                        className="faq-question"
                        onClick={() =>
                          setExpandedIndex(expandedIndex === index + 1 ? null : index + 1)
                        }
                      >
                        {item.question}
                      </div>
                      {expandedIndex === index + 1 && (
                        <div className="faq-answer">{item.answer}</div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default GetHelp;
