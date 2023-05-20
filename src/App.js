import "./App.css";
import React from "react";
import * as ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Landing from "./pages/Landing";
import Proposal from "./pages/Proposal";
import Voting from "./pages/Voting";
import Progress from "./pages/Progress";
import Milestone from "./pages/Milestone";


function App() {
  function openSignupPopup() {
    document.getElementById("signUpPopup").style.display = "block"
  }

  function closeSignupPopup() {
    document.getElementById("signUpPopup").style.display = "none"
  }

  function openLoginPopup() {
    document.getElementById("logInPopup").style.display = "block"
  }

  function closeLoginPopup() {
    document.getElementById("logInPopup").style.display = "none"
  }

  function onClick(element) {
    document.getElementById("img01").src = element.src
    document.getElementById("modal01").style.display = "block"
    var captionText = document.getElementById("caption")
    captionText.innerHTML = element.alt
  }

  // Toggle between showing and hiding the sidebar when clicking the menu icon
  var mySidebar = document.getElementById("mySidebar")

  function w3_open() {
    if (mySidebar.style.display === "block") {
      mySidebar.style.display = "none"
    } else {
      mySidebar.style.display = "block"
    }
  }

  // Close the sidebar with the close button
  function w3_close() {
    mySidebar.style.display = "none"
  }
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Landing />} />
          <Route path="/proposal" element={<Proposal />} />
          <Route path="/voting" element={<Voting />} />
          <Route path="/progress" element={<Progress />} />
          <Route path="/milestone" element={<Milestone />} />
        </Routes>

        <Footer />
        <div id="signUpPopup" className="popup">
          <div className="popup-content">
            <span className="close" onclick="closeSignupPopup()">
              &times;
            </span>
            <h2>Sign Up</h2>
            <form>
              <div className="input-wrapper">
                <input type="text" placeholder="Username" />
              </div>
              <div className="input-wrapper">
                <input type="password" placeholder="Password" />
              </div>
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
        <div id="logInPopup" className="popup">
          <div className="popup-content">
            <span className="close" onclick="closeLoginPopup()">
              &times;
            </span>
            <h2>Log In</h2>
            <form>
              <div className="input-wrapper">
                <input type="text" placeholder="Username" />
              </div>
              <div className="input-wrapper">
                <input type="password" placeholder="Password" />
              </div>
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </Router>
  )
}

export default App


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);