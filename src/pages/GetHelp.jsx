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
import {Link } from 'react-router-dom';
import PrivacyPolicy from './PrivacyPolicy';
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
    {
      q: "How do I login to my Myntra account?",
      a: "You can login to your Myntra account with these 3 simple steps:"

+"Click on LOG IN/SIGN UP and enter your mobile number, then click on CONTINUE."+

"An OTP will be sent to the mobile number entered by you."

+"Verify the OTP and post successful verification, you will be able to log in to Myntra."
    },
    {
      q: "I am not able to login to my Myntra account.",
      a: "Primary mobile number is not accessible"+

+"Send email to accountrecovery@myntra.com"
+"Email ID needs to be changed"

+"Go to your profile section."
+"Enter new email ID, save and validate using the OTP sent on your number."
+"However, if you are receiving an error the email ID is already linked to another account, kindly send" 
+"an email to accountrecovery@myntra.com."
+"Primary mobile number to be changed"

+"Go to your profile section."
+"Enter a new phone number, save and validate using the OTP sent on your number."+
+"However, if you are receiving an error the email ID is already linked to another account, kindly send"+" an email to accountrecovery@myntra.com."
    },
    {
      q: "Why am I not getting an OTP?",
      a: "We recommend you follow these steps to get the OTP:"+

+"Check if you entered the correct phone number registered to your Myntra account. Suggestion- Make sure" +"you have entered the correct and registered phone number only."
+"Try checking the network connection/SMS blocker due to which the OTP might be delayed/blocked."
+"Request for OTP once more."
    },
    {
      q: "I am not getting the Forgot Password link.",
      a: "Don’t worry! Follow these steps to get the Forgot Password link:"+

"Check if the registered email id is invalid. Also, check the spam folder in your email."
+"The password reset link is only active for 24 hours so check if the link has expired."
+"Try to reset the password with 3 previous the passwords OR password mismatched."
    },
    {
      q: "Why is my account locked?",
      a: "our Myntra account may get locked for a specified time period or permanently in case there are too many failed login attempts."

+"This is for the security of your account. You should be able to gain access to your account by resetting your password."

+"If the issue persists, click below to talk to our customer care executive"
    },
    {
      q: "Why are you collecting my personal details?",
      a: "Myntra uses your information to help you with faster payments and delivery. We also save your likes and preferences to show you personalized content that suits your style."

+"For more details on how we use your personal data please refer to the Myntra <Link to='/privacy' element={<PrivacyPolicy/>}Privacy Policy/>"
    }
  ],
  return: [
    { q: "How do I return an item?", a: "Go to Orders > Select Item > Return. Follow the steps." },
    { q: "What items are not eligible for return?", a: "Innerwear, cosmetics, and final sale items cannot be returned." },
    { q: "How many days do I have to return a product?", a: "Most products can be returned within 30 days of delivery." },
    { q: "How do I track my return request?", a: "Check your Orders page for return status." },
    { q: "When will I get my refund after return?", a: "Refunds are initiated within 5–7 working days after item pickup." },
    { q: "What if my return is rejected?", a: "If item fails quality check, it will be sent back to you." }
  ],    
  insider: [
     { q:"What is Myntra Insider?",a:""},
      {q:"How do I earn Insider points?",a:""},
      {q:"What benefits do Insiders get?",a:""},
      {q:"How can I redeem Insider rewards?",a:""},
      {q:"Do Insider points expire?",a:""},
      {q:"Can I transfer Insider points?",a:""}
    ],
    offers: [
      {q:"How can I apply a coupon code?",a:""},
      {q:"Why is my offer not working?",a:""},
      {q:"Can I combine two offers?",a:""},
      {q:"Where do I check available offers?",a:""},
      {q:"Do offers apply on all products?",a:""},
      {q:"Why was my discount removed at checkout?",a:""}
    ],
    payments: [
      {q:"What payment methods are available?",a:""},
      {q:"Why did my payment fail?",a:""},
      {q:"How do I add a new card?",a:""},
      {q:"Can I pay via UPI?",a:""},
      {q:"When will I get my refund?",a:""},
      {q:"Is Cash on Delivery available?",a:""}
    ],
    cancel: [
      {q:"How do I cancel an order?",a:""},
      {q:"Can I cancel after it is shipped?",a:""},
      {q:"Will I be charged for cancellation?",a:""},
      {q:"How do I check cancellation status?",a:""},
      {q:"When will my money be refunded?",a:""},
      {q:"Why was my order auto-cancelled?",a:""}
    ],
  };

  const toggleFaq = (topic, index) => {
    const key = `${topic}-${index}`;
    setOpenFaqs(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const getAnswer = (q) => {
    // Apni taraf se answers
    if(q.includes("login")) return "To login, use your registered email or phone number and password. If you forgot password, click 'Forgot Password' to reset it.For more detailed answer see FAQS .";
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
  topicFaqs[topic].slice(0, 2).map((item, i) => { 
    const key = `${topic}-${i}`;
    return (
      <div key={key} className="faq-item details-faq" onClick={() => toggleFaq(topic, i)}>
        <div className="faq-question">
          <span>{item.q}</span>   {/* ✅ now a string */}
          {openFaqs[key] ? <FaAngleUp className="faq-icon"/> : <FaAngleDown className="faq-icon"/>}
        </div>
        {openFaqs[key] && (
          <div className="faq-answer">
            <p>{getAnswer(item.q) || item.a}</p> {/* ✅ pass string */}
          </div>
        )}
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
  {topicFaqs[activeTopic].map((item, i) => {
    const key = `${activeTopic}-${i}`;
    return (
      <div key={key} className="faq-item details-faq" onClick={() => toggleFaq(activeTopic, i)}>
        <div className="faq-question">
          <span>{item.q}</span>
          {openFaqs[key] ? <FaAngleUp className="faq-icon"/> : <FaAngleDown className="faq-icon"/>}
        </div>
        {openFaqs[key] && <div className="faq-answer"><p>{item.a}</p></div>}
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
