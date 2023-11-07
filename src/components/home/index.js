import React, { useState, useEffect } from "react";
import "./home.css";
import Header from "../header/index";
import Body from "../body/index";
import Footer from "../footer/index";

function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const [buttonPosition, setButtonPosition] = useState("static");

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    if (window.pageYOffset > 100) {
      setButtonPosition("fixed");
    } else {
      setButtonPosition("static");
    }
  };

  return (
    <div className={darkMode ? "home dark-mode" : "home"}>
      <div>
        <Header />
        <div className="button-container" style={{ position: buttonPosition }}>
          <button className="dark-mode-button" onClick={toggleDarkMode}>
            {darkMode ? "Light Mode" : "Dark Mode"}
          </button>
        </div>
      </div>
      <div>
        <Body />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default Home;
