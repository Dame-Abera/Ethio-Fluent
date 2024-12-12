import React, { useState } from "react";
import Header from "./headers";
import Footer from "./footer";
import "../components/course.css";

function App() {
  // Create an array of chapters with their content
  const chapters = [
    { title: "Chapter 1: Introduction", content: "This is the content for Chapter 1." },
    { title: "Chapter 2: Basics", content: "This is the content for Chapter 2." },
    { title: "Chapter 3: Advanced Topics", content: "This is the content for Chapter 3." },
    { title: "Chapter 4: Summary", content: "This is the content for Chapter 4." },
    { title: "Chapter 5: History", content: "This is the content for Chapter 5." },
    { title: "Chapter 6: Concepts", content: "This is the content for Chapter 6." },
    { title: "Chapter 7: Practical Applications", content: "This is the content for Chapter 7." },
    { title: "Chapter 8: Case Studies", content: "This is the content for Chapter 8." },
    { title: "Chapter 9: Research Methods", content: "This is the content for Chapter 9." },
    { title: "Chapter 10: Tools and Techniques", content: "This is the content for Chapter 10." },
    { title: "Chapter 11: Development Strategies", content: "This is the content for Chapter 11." },
    { title: "Chapter 12: Problem Solving", content: "This is the content for Chapter 12." },
    { title: "Chapter 13: Innovations", content: "This is the content for Chapter 13." },
    { title: "Chapter 14: Ethics", content: "This is the content for Chapter 14." },
    { title: "Chapter 15: Future Trends", content: "This is the content for Chapter 15." },
    { title: "Chapter 16: Conclusion", content: "This is the content for Chapter 16." },
  ];

  // State to track the selected chapter
  const [selectedChapter, setSelectedChapter] = useState(0);

  return (
    <div className="app-container">
      {/* Sidebar */}
      <div className="sidebar">
        <div className="scrollable-div">
          {chapters.map((chapter, index) => (
            <a
              key={index}
              onClick={() => setSelectedChapter(index)}
              className="chapter-link"
            >
              {chapter.title}
            </a>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="main-content">
        {selectedChapter === 0 ? (
          <>
            <h1>Welcome to the Learning Platform</h1>
            <p>Select a chapter from the sidebar to begin.</p>
          </>
        ) : (
          <>
            <h1>{chapters[selectedChapter].title}</h1>
            <p>{chapters[selectedChapter].content}</p>
          </>
        )}
      </div>
    </div>
  );
}

export default App;

