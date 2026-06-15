import React from "react";

export default function Services() {
  return (
    <div className="services">
  <h1 className="h_service">services</h1>

  <div className="cards-wrapper">
    <div className="card">
      <h2>Web Development</h2>
      <p>I build modern responsive websites using React.js, HTML, CSS and Bootstrap.</p>
    </div>

    <div className="card">
      <h2>UI Design</h2>
      <p>I design clean and user-friendly interfaces for better user experience.</p>
    </div>

    <div className="card">
      <h2>Responsive Design</h2>
      <p>Fully mobile-friendly and responsive layouts for all devices.</p>
    </div>
  </div>
</div>
  );
}