import React from "react";
import "../styles/global.css"; // optional for styling

function TermsOfUse() {
  return (
    <div className="terms-container">
      {/* Language Selector */}
      <div className="language-selector">
  <i className="bi bi-globe text-primary me-2"></i>
  <select>
    <option>English</option>
    <option>Hindi</option>
    <option>Telugu</option>
    <option>Tamil</option>
    <option>Malayalam</option>
  </select>
</div>


      {/* Heading */}
      <h2 className="terms-heading">MYNTRA : TERMS OF USE</h2>

      {/* Content */}
      <p>
        <b>Welcome to Myntra.</b> This document is an electronic record in terms
        of Information Technology Act, 2000 and published in accordance with the
        provisions of Rule 3 of the Information Technology (Intermediaries
        guidelines) Rules, 2011 that require publishing the rules and
        regulations, privacy policy and <b>Terms of Use</b> for access or usage
        of Myntra marketplace platform - www.myntra.com (hereinafter referred to
        as "Platform").
      </p>

      <p>
        The Platform is owned by <b>Myntra Designs Private Limited</b>, having
        its registered office at Buildings Alyssa, Begonia and Clover situated
        in Embassy Tech Village, Outer Ring Road, Devarabeesanahalli Village,
        Varthur Hobli, Bengaluru – 560103, India...
      </p>

      <p>
        Your use of the Myntra and services and tools are governed by the
        following <b>Terms of Use</b> as applicable to the Myntra including the
        applicable policies...
      </p>

      <p>
        For the purpose of these <b>Terms of Use</b>, wherever the context so
        requires <b>You</b> or <b>User</b> shall mean any natural or legal
        person...
      </p>

      {/* Example list */}
      <ul>
        <li>
          When You use any of the services provided by <b>Us</b> through the
          Platform...
        </li>
        <li>
          We reserve the right, at <b>Our</b> sole discretion, to change,
          modify...
        </li>
      </ul>
    </div>
  );
}

export default TermsOfUse;
