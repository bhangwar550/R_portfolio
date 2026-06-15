import React from 'react'

export default function Contact() {
  return <div>
    <form class="contact-form">
  <input type="text" placeholder="Your Name" required />
  <input type="email" placeholder="Your Email" required />
  <textarea placeholder="Your Message" required></textarea>
<button
          type="button"
          onClick={() => alert("Your message sent!")}>Send Message</button>
</form>
  </div>;
}
