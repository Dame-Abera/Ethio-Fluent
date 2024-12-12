import Header from "./headers"
import Footer from "./footer"
import "../components/course.css"
import React from "react";


function App() {
  return (
    <div className="app-container">
      {/* Sidebar with scrollable content */}
      <div className="sidebar">
        <div className="scrollable-div">
          <a href="#chapter1" className="chapter-link">Chapter 1: Introduction</a>
          <a href="#chapter2" className="chapter-link">Chapter 2: Basics</a>
          <a href="#chapter3" className="chapter-link">Chapter 3: Advanced Topics</a>
          <a href="#chapter4" className="chapter-link">Chapter 4: Summary</a>
          <a href="#chapter1" className="chapter-link">Chapter 1: Introduction</a>
          <a href="#chapter2" className="chapter-link">Chapter 2: Basics</a>
          <a href="#chapter3" className="chapter-link">Chapter 3: Advanced Topics</a>
          <a href="#chapter4" className="chapter-link">Chapter 4: Summary</a>
          <a href="#chapter1" className="chapter-link">Chapter 1: Introduction</a>
          <a href="#chapter2" className="chapter-link">Chapter 2: Basics</a>
          <a href="#chapter3" className="chapter-link">Chapter 3: Advanced Topics</a>
          <a href="#chapter4" className="chapter-link">Chapter 4: Summary</a>
          <a href="#chapter1" className="chapter-link">Chapter 1: Introduction</a>
          <a href="#chapter2" className="chapter-link">Chapter 2: Basics</a>
          <a href="#chapter3" className="chapter-link">Chapter 3: Advanced Topics</a>
          <a href="#chapter4" className="chapter-link">Chapter 4: Summary</a>
        </div>
      </div>

      {/* Main Content */}
      <div className="main-content">
        <h1>Welcome to the Learning Platform</h1>
        <p>Select a chapter from the sidebar to begin.</p>
      </div>
    </div>
  );
}

export default App;
