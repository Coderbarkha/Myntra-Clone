import React, { useState,useEffect } from 'react';

function PrivacyPolicy(){
    const[date,setDate]=useState("");

    useEffect (()=>{
        const today=new Date();
        const formattedDate=today.toLocaleDateString("en-GB",{
            day:"2-digit",
            month:"long",
            year:"numeric"
        });
        setDate(formattedDate);
    },[]);

    return(
        <div className='privacy-container'>
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
      <h2 className="privacy-heading">Privacy Policy</h2>
      <p>This Privacy Policy describes how Myntra Designs Private Limited and its affiliates and group entities (collectively referred to as "Myntra," "we," "our," or "us") collect, use, share, and process your personal data through https://www.myntra.com, its sub-domains; mobile application and m-site (hereinafter, collectively referred to as “<b>Platform</b>”).

While you can browse certain sections of our platform without registering, our services and products require registration and are exclusively offered within India. Your personal data is primarily governed by Indian laws and stored in India, however, some of your personal data may be processed or stored in servers located outside of India to ensure efficient service delivery. To avail the products or services within our platform, you are required to explicitly consent to adhere to the guidelines set forth in this Policy, as well as our Terms of Use and any terms specific to certain services or products we offer and agree to be governed by the laws of India including but not limited to the laws applicable to data protection and privacy</p>
{/* Section 1 */}
<h3>Collection And Purpose</h3>
<p>We collect your personal data directly from you (e.g., when you visit our Platform); in course of our relationship with you (e.g., if you purchase our products or utilize services); when you make your personal data public (e.g., if you make a public post about us on social media); when you download, install or use any of our Services. You can browse our Platform without registering however once you use Platform or give us your personal data , you may no longer be anonymous to us. We clearly indicate which fields are mandatory for using certain services and which are optional, thereby offering you the choice to decide. We may also receive information about you from third parties (e.g., our delivery partners). We may also create information about you, such as records of your interactions with us or combine data you have provided to us with data obtained from third parties such as social networks and other data collection entities. Myntra is not responsible for personal data you volunteer about yourself in the public domains. This Privacy Policy does not cover the practices of third parties who may provide information about you to Myntra. Some of the information that we may collect includes but is not limited to are listed below:
</p>
<ul>
    <li><em>Registration and Personalisation</em>: We collect basic identifying information like your name, date of birth, device identifiers, and IP address to personalise your experience, provide the services you request. This includes assisting sellers and business partners in handling and fulfilling orders, enhancing customer experience, resolving disputes, and troubleshooting problems. We also use your data to detect and protect against error, fraud, and other criminal activities</li>
<li><em>Communication and Order Delivery</em>: Your address is essential for order delivery. Your telephone number and email ID are used for updates and commercial communications related to your orders and other products and services. We may request permission to access your text messages (SMS), instant messages, contacts, camera, photo gallery, location, and device information for enhancing your experience and providing access to various services. Your access to these services may be affected if permission is not provided</li>
<li><em>Transaction Processing</em>: Financial data like bank account details and credit/debit card information are collected to process transactions efficiently.</li>
<li><em>Eligibility Checks</em>: For certain services, products or events including but not limited to credit and payment products, we require identity verification data such as PAN, GST number, government-issued IDs, credit checks and KYC details which may further be shared with our banking and lending partners.</li>
<li><em>Enhanced User Experience</em>: To offer specific features on our Platform, we may collect biometric and behavioural data, such as facial features and shopping habits</li>
<li><em>Loyalty Programs</em>: If you enrol in our loyalty program or a third-party loyalty program offered by us, we collect personal data such as your name, contact number, and other relevant details for the loyalty program.</li>
<li><em>Marketing and User Experience</em>: To the extent we use your data for marketing, you have the option to opt-out. We also conduct research and surveys to improve our offerings and may ask for additional demographic and profile data, which is entirely voluntary to provide. This includes attributes like your interests, household or lifestyle information, purchasing behaviour, and preferences. We use this data to tailor your experience at our Platform, providing you with content that we think you might be interested in and to display content according to your preferences.</li>
<li><em>AI Offerings and Model Training</em>: You may voluntarily opt to use our AI features like the Skin and Hair Analyser, AI Stylist, MyFashionGPT, Maya chatbot etc. Data collected from these features, as well as aggregated data of user behaviour, user analytics, or user-generated content, may be used to train various AI models. While using these AI features, user discretion is advised as some technologies may produce hallucinations or other unexpected results</li>
<li><em>Customer Support and Personal Correspondence</em>: Your interactions with our customer support via chat, calls, or emails are recorded for quality assurance and safety. Personal correspondence such as emails or letters, as well as correspondence from third parties about your activities, may be collected into a file specific to you.</li>
<li><em>Community and Affiliate Programs</em>: For users who enroll onto specific platforms such as the Ultimate Glam Clan, we may collect your Social Media handles. The purpose of this collection is to facilitate communication with you regarding potential influencer engagements to promote us to your audience.</li>
<li><em>Public Forums and User Interactions</em>: Please be mindful when sharing messages, reviews, or other content in public areas of our Platform. Such information is not only publicly accessible but may also be collected and stored by us for internal use, research, training and compliance purposes. Additionally, with your explicit consent, we may display images you upload to platforms like the Ultimate Glam Clan on our promotional banners and on the profile pages of the products featured in your UGC profile. This is for the purpose of showcasing products on real users to enhance authenticity and for other marketing initiative</li>
</ul>
<h3>Cookies</h3>
<p>We use data collection devices like "cookies" on our Platform to assist with various functionalities. Cookies are small files placed on your hard drive and do not contain personal data. They help us in:</p>
<ul>
    <li>Analysing web page flow.</li>
    <li>Measuring promotional effectiveness.</li>
    <li>Promoting trust and safety.</li>
</ul>
<p>We use cookies from third-party partners such as Google Analytics for marketing and analytical purposes. Additionally, you may encounter "cookies" or other similar devices (pixels, web beacons) on certain pages of the Platform that are placed by third parties not partnered with us. We do not control the use of cookies by third parties.<br></br>

For partnered third-party cookies, you can read more about how Google uses your Personal Information here, and opt-out of Google Analytics here.<br></br>

Most cookies are "session cookies," deleted automatically at the end of a session. You are free to decline our cookies if your browser permits, although doing so may disable certain features on the Platform and require more frequent re-entry of your password.<br></br>

This updated section clearly states that cookies from third-party partners are used for specific purposes and offers an option to opt-out, while also mentioning that third-party cookies not partnered with the Platform may also be encountered.</p>

<h3>Sharing</h3>
<p>We may share your personal data internally within the Flipkart Group, our other corporate entities, and affiliates including Flipkart Advanz Private Limited, Scapic Innovations Private Limited, and other Flipkart affiliates, related companies, including Credit Bureaus and business partners (such as UPI platform), for purposes of providing products and services offered by such Flipkart group companies and affiliates and related companies, such as, personal loans offered by Scapic Innovations Private Limited through its lending partners, insurance, the deferred payment options, Flipkart PayLater offered by Flipkart Advanz Private Limited through its lending partners. These group companies, affiliates and related parties may share such information with their own affiliates, business partners and other third parties for the purpose of conducting the required checks, namely for the purpose of credit underwriting, providing you their products and services and may market to you as a result of such sharing..These entities and affiliates may market to you as a result of such sharing unless you explicitly opt-out.<br></br>
Your personal and sensitive information may also be disclosed with third parties, including AI System providers for the following reasons:
</p>
<ul>
    <li>To provide you access to our services and products</li>
    <li>To personalise customer engagement, curated product or service recommendations, and other outreach activities designed to align with your interests and preferences.</li>
    <li>To comply with legal obligations.</li>
    <li>To enforce our user agreement.</li>
    <li>To facilitate our marketing and advertising activities.</li>
    <li>To prevent, detect, mitigate, and investigate fraudulent or illegal activities related to our services</li>
</ul>
<p>We may also disclose your personal data to third parties, such as our sellers, business partners. This disclosure may be required for us to provide you access to our products and services; for fulfillment of your orders; for enhancing your experience; for providing feedback on products; to collect payments from you; to comply with our legal obligations; to conduct market research or surveys; to enforce our Terms of Use; to facilitate our marketing and advertising activities; to analyze data; for customer service assistance; to prevent, detect, mitigate, and investigate fraudulent or illegal activities related to our product and services. We also share certain personal data with sellers who may be located outside of India such as international brands. Regardless of where your data is processed or shared, it remains subject to the protections and guidelines of this Privacy Policy.

In addition, we may share your personal data with business partners and third-parties who offer services to us or to whom we provide our products or services to enable them to offer, advertise, personalise your browsing experience and customise various aspects of the user journey such as the checkout flow, auto-filling sign-up details to facilitate a faster checkout process, or promote their own products and services to you and this may include, without limitation, conducting marketing campaigns, personalised customer engagement, curated product or service recommendations, and other outreach activities designed to align with your interests and preferences.
<br></br>
We may also disclose your information to government agencies or other authorised law enforcement agencies under the following conditions:</p>
<ul>
    <li>In response to police complaints, subpoenas, notices, court orders, or other legal processes.</li>
    <li>In the good faith belief that such disclosure is reasonably necessary to enforce our Terms or Privacy Policy.</li>
    <li>To protect the rights, property, or personal safety of our users or the general public</li>
</ul>
<p>In case of a business transaction like a merger, acquisition, or restructuring, your data may be shared or sold to the new business entity, should such a transaction occur, that other business entity (or the new combined entity) will be required to follow this privacy policy with respect to your personal data.</p>
<h3>Links to Other Sites</h3>
<p>Our Platform links to other websites that may collect personal data about you. Myntra is not responsible for the privacy practices or the content of those linked website</p>
<h3>Security Precautions</h3>
<p>We maintain reasonable security practices and procedures to protect your personal data from unauthorized access, damage, use, modification, disclosure or impairment of the information under our control. Whenever you access your account information, we offer the use of a secure server. The transmission of information is not completely secure for reasons beyond our control. We adopt industry standard security measures and keep updating our systems from time to time to protect your personal data against any hacking or virus dissemination. However, by using the Platform, the users accept the security implications of data transmission over the internet and the World Wide Web which cannot always be guaranteed as completely secure, and therefore, there would always remain certain inherent risks regarding use of the Platform. Users are responsible for ensuring the protection of login and password records for their account. We have policies and procedures in place to tackle incidents of information security breach, which enables the incident response team to detect, analyse, contain, remediate and recover from information security breach incident</p>
<h3>Choice/Opt-Out</h3>
<p>We provide all users with the opportunity to opt-out of receiving non-essential (promotional, marketing-related) communications from us after setting up an account. If you do not wish to receive promotional communications from us, then please unsubscribe by clicking on the unsubscribe link in the email or visit our Help Center at Unsubscribe.</p>
<h3>Advertisements</h3>
<p>We use third-party advertising companies to serve ads when you visit our Platform. These companies may use information (not including your name, address, email address, or telephone number) about your visits to this Platform and other websites in order to provide advertisements about goods and services of interest to you. You have an option to opt-out from tracking of personalised advertising using the “Opt out of Ads Personalization” settings using your device’s settings application. Myntra will have no access to your GAID once you select this feature</p>
<h3>Use of Children Information</h3>
<p>Use of our Platform is available only to persons who can form a legally binding contract under the Indian Contract Act, 1872. We do not knowingly solicit or collect personal data from children under the age of 18 years. If you have shared any personal data of children under the age of 18 years, you represent that you have the authority to do so and permit us to use the information in accordance with this Privacy Policy.</p>
<h3>Data Retention</h3>
<p>We retain your personal data for a period no longer than is required for the purpose for which it was collected or as required under any applicable law. However, we may retain data related to you if there is a legal obligation to retain the data; if required to comply with any applicable statutory or regulatory retention requirement by law; if we believe it may be necessary to prevent fraud or future abuse; to enable Myntra to exercise its legal rights and/or defend against legal claims. We may continue to retain your data in anonymised form for analytical and research purposes.</p>
<h3>Your Rights</h3>
<p>We are committed to providing you with control over your personal data. You can visit our Privacy Centre, a self-serve portal designed to help you easily manage your data and exercise your rights. Through the Privacy Centre, you can:</p>
<ul>
<li>Request a copy of your personal data held by us</li>
<li>Check the status of any existing data request</li>
<li>Edit or update your personal data.</li>
<li>Request the deletion of your account</li>
</ul>
<p>To exercise any rights beyond those available in the self-serve portal, such as withdrawing consent or appointing a nominee, you may contact our customer support team using the details provided below</p>
<h3>Changes to this Privacy Policy</h3>
<p>Please check our Privacy Policy periodically for changes. We may update this Privacy Policy to reflect changes to our information practices. We will alert you to significant changes by posting the date our Privacy Policy got last updated, placing a notice on our Platform, or by sending you an email when we are required to do so by applicable law.</p>
<h3>Queries</h3>
<p>If you have a query, concern, or complaint in relation to collection or usage of your personal data under this Privacy Policy, please contact us at the contact information provided above <br /> <br />

Last updated: {date}</p>

        </div>
    );
}

export default PrivacyPolicy;