import React from "react";
import "../App.css";
import { Link } from "react-router-dom";

export default function Footer() {
  return (



    <footer className="footer ">
<div className="container">
    <div className="row g-4">
        <div className="col-md-5 text-start">
            <div className="footer-logo"></div>
                <h2>
                <span className="white">NeuroEdge</span>
                <span className="blue">Solutions</span>
                </h2>
             <p>
              Empowering startups and businesses with modern technology,
              expert guidance, and strategic digital growth.
            </p>
          <div className="social">

  {/* LinkedIn */}
  <a
    href="https://www.linkedin.com/in/your-profile" // real link
    target="_blank" // open in new tab
    rel="noopener noreferrer" // security best practice
    className="sociall-icon"
  >
    <svg viewBox="0 0 24 24">
      <path fill="#00d4ff" d="M4.98 3.5C4.98 5 3.89 6.1 2.49 6.1 1.1 6.1 0 5 0 3.5 0 2 1.1.9 2.49.9c1.4 0 2.49 1.1 2.49 2.6zM.21 8.09h4.56V24H.21zM8.09 8.09h4.37v2.17h.06c.61-1.16 2.1-2.38 4.32-2.38 4.62 0 5.47 3.04 5.47 6.99V24h-4.56v-7.95c0-1.9-.03-4.34-2.65-4.34-2.66 0-3.07 2.08-3.07 4.21V24H8.09z"/>
    </svg>
  </a>

  {/* Facebook */}
  <a
    href="https://www.facebook.com/your-page"
    target="_blank"
    rel="noopener noreferrer"
    className="sociall-icon"
  >
    <svg viewBox="0 0 24 24">
      <path fill="#00d4ff" d="M22 12a10 10 0 1 0-11.5 9.9v-7h-2.3V12h2.3V9.8c0-2.3 1.4-3.6 3.5-3.6 1 0 2 .2 2 .2v2.2h-1.1c-1.1 0-1.5.7-1.5 1.4V12h2.6l-.4 2.9h-2.2v7A10 10 0 0 0 22 12z"/>
    </svg>
  </a>

  {/* WhatsApp */}
  <a
    href="https://wa.me/1234567890" // use your number
    target="_blank"
    rel="noopener noreferrer"
    className="sociall-icon"
  >
    <svg viewBox="0 0 24 24">
      <path fill="#00d4ff" d="M12 0a12 12 0 0 0-10.3 18.1L0 24l6-1.6A12 12 0 1 0 12 0zm0 21.8c-1.9 0-3.8-.5-5.4-1.5l-.4-.2-3.5.9.9-3.4-.2-.4A9.8 9.8 0 1 1 12 21.8zm5.4-7.3c-.3-.2-1.8-.9-2-.9s-.5-.2-.7.2-.8.9-1 .9-.4 0-.7-.2a8 8 0 0 1-2.3-2c-.2-.3 0-.5.2-.7.2-.2.3-.4.5-.6.2-.2.2-.3.3-.5s0-.4 0-.6c0-.2-.7-1.6-1-2.2-.2-.5-.5-.4-.7-.4h-.6c-.2 0-.6 0-.9.4s-1.2 1.1-1.2 2.7 1.3 3.2 1.5 3.4c.2.2 2.6 4 6.3 5.4.9.3 1.6.5 2.2.6.9.1 1.7.1 2.3.1.7-.1 1.8-.7 2.1-1.3.3-.6.3-1.2.2-1.3-.1-.1-.3-.2-.6-.4z"/>
    </svg>
  </a>

  {/* Email */}
  <a
    href="mailto:youremail@example.com"
    target="_blank"
    rel="noopener noreferrer"
    className="sociall-icon"
  >
    <svg viewBox="0 0 24 24">
      <path fill="#00d4ff" d="M12 13 2 6.76V18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6.76L12 13zm10-9H2a2 2 0 0 0-2 2l12 7 12-7a2 2 0 0 0-2-2z"/>
    </svg>
  </a>

</div>

        </div>
        <div className="col-md-3 text-start">
            <div className="footer-col">
             

<h4>Quick Links</h4>
<ul>
  <li>
    <Link to="/about">About</Link>
  </li>
  <li>
    <Link to="/services">Services</Link>
  </li>
  <li>
    <Link to="/pricing">Pricing</Link>
  </li>
  <li>
    <Link to="/contact">Contact</Link>
  </li>
  <li>
    <Link to="/career">Careers</Link>
  </li>
</ul>

           </div>
        </div>
        <div className="col-md-3   text-start">
            <div className="footer-col">
             <h4>Legal</h4>
             <ul>
               <li>Privacy Policy</li>
               <li>Terms & Conditions</li>
             </ul>
             <h4 className="academy">NeuroEdge Academy</h4>
             <ul>
               <li>Visit Academy</li>
             </ul>
           </div>
        </div>
    </div>
    
      <div className="row">
        <div className="col-md-6">
          <p>© 2026 NeuroEdge Solutions. All rights reserved.</p>
        </div>
        <div className="col-md-6">
          <div className="led-by">
            <span className="dot"></span>
            <span className="led-text">Led By Muhammad Umais Sohail</span>
          </div>
        </div>
      </div>
    </div>


    </footer>
    // <footer className="footer">
        
    //   <div className="footer-container">

    //     {/* Top Grid */}
    //     <div className="footer-top">

    //       {/* Column 1 */}
    //       <div className="footer-col footer-brand">
    //         <div className="footer-logo">
    //           <div className="logo-icon"></div>
    //           <h2>
    //             <span className="white">NeuroEdge</span>
    //             <span className="blue"> Solutions</span>
    //           </h2>
    //         </div>

    //         <p>
    //           Empowering startups and businesses with modern technology,
    //           expert guidance, and strategic digital growth.
    //         </p>

    //         <div className="socials">
    //           <a href="#">L</a>
    //           <a href="#">F</a>
    //           <a href="#">W</a>
    //           <a href="#">@</a>
    //         </div>
    //       </div>

    //       {/* Column 2 */}
    //       <div className="footer-col">
    //         <h4>Quick Links</h4>
    //         <ul>
    //           <li>About</li>
    //           <li>Services</li>
    //           <li>Pricing</li>
    //           <li>Contact</li>
    //           <li>Careers</li>
    //         </ul>
    //       </div>

    //       {/* Column 3 */}
    //       <div className="footer-col">
    //         <h4>Legal</h4>
    //         <ul>
    //           <li>Privacy Policy</li>
    //           <li>Terms & Conditions</li>
    //         </ul>

    //         <h4 className="academy">NeuroEdge Academy</h4>
    //         <ul>
    //           <li>Visit Academy</li>
    //         </ul>
    //       </div>

    //     </div>

    //     {/* Bottom Row */}
    //     <div className="footer-bottom">
    //       <p>© 2026 NeuroEdge Solutions. All rights reserved.</p>
    //       <div className="led">
    //         <span className="dot"></span>
    //         <span>Led By Muhammad Umais Sohail</span>
    //       </div>
    //     </div>

    //   </div>
    // </footer>
  );
}
