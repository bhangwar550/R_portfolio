import "./App.css";
import Navbar from "./Navbar";
import About from "./About";
import Contact from "./Contact";
import Service from "./Service";
import Work from "./Work";
import Home from "./Home";
import Footer from "./Footer";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/service" element={<Service />} />
        <Route path="/work" element={<Work />} />
      </Routes>

      {/* 👇 Footer always show hoga */}
      <Footer />
    </>
  );
}

export default App;