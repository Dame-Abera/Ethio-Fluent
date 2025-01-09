import React, { useState } from "react";
import Header from "./headers";
import Footer from "./footer";
import "../components/course.css";

function AfaanOromo() {
  // Create an array of chapters with their content
  const chapters = [
    {
      title: "Chapter 1: Introduction",
      content: `
        <h2>Introducing Yourself in Afaan Oromoo  is leakhhing </h2>
        <p>Learning how to introduce yourself is essential when learning Afaan Oromoo.</p>
        <ul>
          <li><strong>Maqaan koo ___</strong> (Translation: My name is ___)</li>
          <li>Example: <em>Maqaan koo Abdi</em>. (My name is Abdi)</li>
        </ul>
        <p>Start by greeting someone: <strong>“Akkam jirta?”</strong> (How are you?)</p>
      `,
    },
    {
      title: "Chapter 2: Basics",
      content: `
        <h2>Afaan Oromoo Basic Phrases</h2>
        <p>Here are some basic phrases to get you started:</p>
        <ul>
          <li><strong>Fayyummaa gaarii qaba</strong> - I'm doing well</li>
          <li><strong>Galatoomaa</strong> - Thank you</li>
          <li><strong>Simboo</strong> - Welcome</li>
        </ul>
      `,
    },
    {
      title: "Chapter 3: Advanced Topics",
      content: `
        <h2>Advanced Grammar and Sentence Structures</h2>
        <p>Once you master the basics, you can start learning advanced grammar topics.</p>
        <p>For example:</p>
        <ul>
          <li>How to form complex sentences</li>
          <li>How to use conjunctions</li>
          <li>How to express past, present, and future tenses</li>
        </ul>
      `,
    },
    {
      title: "Chapter 4: Summary",
      content: `
        <h2>Summary of Key Concepts</h2>
        <p>This chapter summarizes what you have learned so far:</p>
        <ul>
          <li>How to introduce yourself</li>
          <li>Basic phrases for conversation</li>
          <li>Advanced grammar topics</li>
        </ul>
      `,
    },
    {
      title: "Chapter 5: History",
      content: `
        <h2>History of Afaan Oromoo</h2>
        <p>Afaan Oromoo is the most widely spoken language in Ethiopia. It has a rich history and cultural significance.</p>
        <p>Key historical points:</p>
        <ol>
          <li>Origins of Afaan Oromoo</li>
          <li>The role of Afaan Oromoo in Ethiopian history</li>
          <li>Modern-day usage and cultural importance</li>
        </ol>
      `,
    },
    {
      title: "Chapter 6: Concepts",
      content: `
        <h2>Key Concepts in Afaan Oromoo</h2>
        <p>This chapter covers key linguistic concepts to help you build a strong foundation.</p>
      `,
    },
    {
      title: "Chapter 7: Practical Applications",
      content: `
        <h2>Practical Applications of Afaan Oromoo</h2>
        <p>Learn how to apply what you've learned in real-world situations:</p>
        <ul>
          <li>Introducing yourself in a business setting</li>
          <li>Traveling in Ethiopia</li>
          <li>Engaging in cultural conversations</li>
        </ul>
      `,
    },
    {
        title: "Chapter 8: Case Studies",
        content: `
          <iframe
            id="chapter8-video"
            width="100%"
            height="400"
            src="https://www.youtube.com/embed/lHZwlzOUOZ4"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
      
          <section>
            <h2>Chapter 8: Case Studies</h2>
            <p>This is the content for Chapter 8.</p>
          </section>
        `,
      },
      
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
            <div
            className="chapter-content"
            dangerouslySetInnerHTML={{ __html: chapters[selectedChapter].content }}
          ></div>
          </>
        )}
      </div>
    </div>
  );
}

export default AfaanOromo;

