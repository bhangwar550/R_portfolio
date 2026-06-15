import React from "react";

export default function Work() {
  return (
    <div className="work_section">
 <h1>Work Section</h1>
      <div className="work_big_card">

       
       <img src="/images/work.jfif" alt="project" className="work_img" />

     
        <div className="work_content">

          <h2>React Portfolio Website</h2>

          <p className="tag">
            React.js • Node.js • MongoDB • Responsive Design
          </p>

          <p>
            I built a modern personal portfolio website using React.js.
            It includes routing, reusable components and a responsive layout.
          </p>

          <p>
            Focused on clean UI, performance optimization and mobile-friendly design.
          </p>

          <a href="#" className="work_btn">View Project</a>

        </div>

      </div>

    </div>
  );
}