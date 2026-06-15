import React from "react";
export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        <h2>Kamran Portfolio</h2>

        <p>
          Frontend Developer • React Learner • UI Designer
        </p>

        {/* Contact Info */}
        <div className="contact-info">
          <p>Email: kamranbhangwar@gmail.com</p>
          <p>Phone: +92 3053035304</p>
        </div>

        {/* Social Links */}
        <div className="social-links">
          <a href="#">Facebook</a>
          <a href="#">GitHub</a>
          <a href="#">LinkedIn</a>
          <a href="#">Instagram</a>
        </div>

        <hr />

        <p className="copyright">
          © 2026 All Rights Reserved
        </p>
<a href="/cv.pdf" download>
  <button className="cv_downloader">
    Cv Download
  </button>
</a>
      </div>
     
    </footer>
  );
}