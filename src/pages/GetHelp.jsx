// src/pages/GetHelp.jsx
import React, { useState } from "react";
import {
  FaLock,
  FaAngleRight,
  FaAngleDown,
  FaAngleUp,
  FaUser,
  FaUndo,
  FaGift,
  FaPercent,
  FaMoneyBill,
  FaTimes,
} from "react-icons/fa";
import "./GetHelp.css";

export default function GetHelp() {
  const [activeTab, setActiveTab] = useState("order");
  const [activeTopic, setActiveTopic] = useState(null);
  const [openFaqs, setOpenFaqs] = useState({}); // store multiple open FAQs

  const topics = [
    { id: "account", label: "Account", icon: <FaUser />, color: "light-red",
      desc: "For account related issues refer to the below questions to get the complete information and if you're still unable to access your account? Click on the Contact Us option to talk to our customer care." },
    { id: "return", label: "Return & Exchange", icon: <FaUndo />, color: "light-grey",
      desc: "For return & exchange related issues kindly check the questions below. If not solved, contact customer support." },
    { id: "insider", label: "Myntra Credit & Insider", icon: <FaGift />, color: "brown",
      desc: "Here are some FAQs related to Myntra Credit and Insider program benefits." },
    { id: "offers", label: "Offers", icon: <FaPercent />, color: "beige",
      desc: "For queries regarding offers, discounts and coupon usage kindly check below." },
    { id: "payments", label: "Payments", icon: <FaMoneyBill />, color: "light-blue",
      desc: "These questions resolve most of the issues regarding payments and transactions." },
    { id: "cancel", label: "Cancellation & Charges", icon: <FaTimes />, color: "light-pink",
      desc: "Cancellation policies and related charges are answered in the FAQs below." },
  ];

  const topicFaqs = {
    account: [
      "How do I login to my Myntra account?",
      "I am not able to login to my Myntra account.",
      "Why am I not getting an OTP?",
      "I am not getting the Forgot Password link.",
      "How do I change my registered email?",
      "How can I delete my account permanently?"
    ],
    return: [
      "How do I return an item?",
      "What items are not eligible for return?",
      "How many days do I have to return a product?",
      "How do I track my return request?",
      "When will I get my refund after return?",
      "What if my return is rejected?"
    ],
    insider: [
      "What is Myntra Insider?",
      "How do I earn Insider points?",
      "What benefits do Insiders get?",
      "How can I redeem Insider rewards?",
      "Do Insider points expire?",
      "Can I transfer Insider points?"
    ],
    offers: [
      "How can I apply a coupon code?",
      "Why is my offer not working?",
      "Can I combine two offers?",
      "Where do I check available offers?",
      "Do offers apply on all products?",
      "Why was my discount removed at checkout?"
    ],
    payments: [
      "What payment methods are available?",
      "Why did my payment fail?",
      "How do I add a new card?",
      "Can I pay via UPI?",
      "When will I get my refund?",
      "Is Cash on Delivery available?"
    ],
    cancel: [
      "How do I cancel an order?",
      "Can I cancel after it is shipped?",
      "Will I be charged for cancellation?",
      "How do I check cancellation status?",
      "When will my money be refunded?",
      "Why was my order auto-cancelled?"
    ],
  };

  const toggleFaq = (topic, index) => {
    const key = `${topic}-${index}`;
    setOpenFaqs(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const getAnswer = (q) => {
    // Apni taraf se answers
    if(q.includes("login")) return "To login, use your registered email or phone number and password. If you forgot password, click 'Forgot Password' to reset it.";
    if(q.includes("return")) return "You can return items within 30 days of delivery. Make sure they are unused and in original packaging.";
    if(q.includes("Myntra Insider")) return "Myntra Insider is a loyalty program. Earn points by shopping and redeem for rewards.";
    if(q.includes("coupon")) return "Apply the coupon code at checkout. Ensure it’s valid and applicable to the items.";
    if(q.includes("payment")) return "Ensure your card details are correct and your bank approves the transaction.";
    if(q.includes("cancel")) return "You can cancel before shipping. Charges may apply depending on the order status.";
    return "This is a general answer for your query.";
  };

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
        <div className="query-tabs-vertical">
          <h4 className="query-heading">Select Query Type</h4>
          <button className={`tab ${activeTab === "order" ? "active" : ""}`} onClick={() => { setActiveTab("order"); setActiveTopic(null); }}>
            Order Related Queries <FaAngleRight />
          </button>
          <button className={`tab ${activeTab === "nonOrder" ? "active" : ""}`} onClick={() => { setActiveTab("nonOrder"); setActiveTopic(null); }}>
            Non-Order Related Issues <FaAngleRight />
          </button>
          <button className={`tab ${activeTab === "recent" ? "active" : ""}`} onClick={() => { setActiveTab("recent"); setActiveTopic(null); }}>
            Recent Issues <FaAngleRight />
          </button>
          <div className="faq-link">
            Frequently Asked Questions <FaAngleRight />
          </div>
        </div>

        <div className="content-area">
          {activeTab === "order" && (
            <div className="content-box blurred-box">
              <p className="content-text">
                Please <strong>log in</strong> if you have queries related to purchases.
              </p>
              <button className="gethelplogin-btn">LOG IN</button>
            </div>
          )}

          {activeTab === "recent" && (
            <div className="recent-box">
              <p className="content-text">
                Please <strong>log in</strong> if you have queries related to purchases.
              </p>
              <button className="gethelplogin-btn">LOG IN</button>
            </div>
          )}

          {activeTab === "nonOrder" && (
            <div>
              {!activeTopic && (
                <>
                  <div className="browse-topics">
                    <h4 className="browse-heading">Browse Topics</h4>
                    <div className="topics-grid">
                      {topics.map((t) => (
                        <div key={t.id} className="topic-btn" onClick={() => setActiveTopic(t.id)}>
                          <div className={`icon-circle ${t.color}`}>{t.icon}</div>
                          <span>{t.label}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="faqs-section">
                    {Object.keys(topicFaqs).flatMap(topic =>
                      topicFaqs[topic].slice(0, 2).map((q, i) => { // top 4 FAQs
                        const key = `${topic}-${i}`;
                        return (
                          <div key={key} className="faq-item details-faq" onClick={() => toggleFaq(topic, i)}>
                            <div className="faq-question">
                              <span>{q}</span>
                              {openFaqs[key] ? <FaAngleUp className="faq-icon"/> : <FaAngleDown className="faq-icon"/>}
                            </div>
                            {openFaqs[key] && <div className="faq-answer"><p>{getAnswer(q)}</p></div>}
                          </div>
                        )
                      })
                    )}
                  </div>
                </>
              )}

              {activeTopic && (
                <>
                  <div className="topics-row">
                    {topics.map((t) => (
                      <div key={t.id} className={`row-topic-btn ${activeTopic === t.id ? "active" : ""}`} onClick={() => setActiveTopic(t.id)}>
                        <div className={`row-icon-circle ${t.color}`}>{t.icon}</div>
                        <span>{t.label}</span>
                        {activeTopic === t.id && <div className="active-line"></div>}
                      </div>
                    ))}
                  </div>

                  <div className="topic-details-box">
                    <div className="details-header">
                      <div className={`details-icon ${topics.find(t => t.id === activeTopic).color}`}>
                        {topics.find(t => t.id === activeTopic).icon}
                      </div>
                      <div>
                        <h4>{topics.find(t => t.id === activeTopic).label}</h4>
                        <p>{topics.find(t => t.id === activeTopic).desc}</p>
                      </div>
                    </div>

                    <div className="details-faqs">
                      {topicFaqs[activeTopic].map((q, i) => {
                        const key = `${activeTopic}-${i}`;
                        return (
                          <div key={key} className="faq-item details-faq" onClick={() => toggleFaq(activeTopic, i)}>
                            <div className="faq-question">
                              <span>{q}</span>
                              {openFaqs[key] ? <FaAngleUp className="faq-icon"/> : <FaAngleDown className="faq-icon"/>}
                            </div>
                            {openFaqs[key] && <div className="faq-answer"><p>{getAnswer(q)}</p></div>}
                          </div>
                        )
                      })}
                    </div>
                  </div>
                </>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
