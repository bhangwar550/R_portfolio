import React from "react";

export default function Header() {
  return (
   <div className="c_header">

  <img src="/images/profile.png" className="profile-img" alt="profile" />

  <div className="header-text">
    <h1 className="my_self">My Self Kamran Ali</h1>
    <h3 className="developer">I am a React Developer</h3>
    <p>
      I build modern responsive web applications using React.js,
      JavaScript and Bootstrap.
    </p>
    <button className="hire_me" onClick={()=> alert("Thanks for visiting my portfolio")}>Click Me</button>
  </div>

</div>
  );
}