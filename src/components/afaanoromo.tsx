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
          <p>Learning basic phrases is a great way to start speaking Afaan Oromoo. Here are some common expressions you'll use in everyday conversations:</p>
      
          <h3>1. Greetings and Introductions</h3>
          <ul>
            <li><strong>Akkam?</strong> - How are you?</li>
            <li><strong>Akkaataa kee?</strong> - How are you doing?</li>
            <li><strong>Galatoomaa</strong> - Thank you</li>
            <li><strong>Simboo</strong> - Welcome</li>
            <li><strong>Good Morning: <em>Baga garaa kee gaarii</em></strong></li>
            <li><strong>Good Evening: <em>Baga galgalaa</em></strong></li>
            <li><strong>Good Night: <em>Halkan gaarii</em></strong></li>
          </ul>
      
          <h3>2. Introducing Yourself</h3>
          <ul>
            <li><strong>Maqaan koo ___</strong> - My name is ___</li>
            <li>Example: <em>Maqaan koo Abdi</em> (My name is Abdi)</li>
            <li><strong>Ati eenyu?</strong> - Who are you?</li>
            <li><strong>Hedduun koo nagaa dha</strong> - I am fine (response to greetings)</li>
          </ul>
      
          <h3>3. Basic Expressions</h3>
          <ul>
            <li><strong>Fayyummaa gaarii qaba</strong> - I'm doing well</li>
            <li><strong>Galatoomaa</strong> - Thank you</li>
            <li><strong>Simboo</strong> - Welcome</li>
            <li><strong>Maaliif?</strong> - Why?</li>
            <li><strong>Eyyee</strong> - Yes</li>
            <li><strong>Hayyee</strong> - No</li>
            <li><strong>Fakkenyaaf</strong> - For example</li>
          </ul>
      
          <h3>4. Asking for Help</h3>
          <ul>
            <li><strong>Maaltu si barbaachisa?</strong> - What do you need?</li>
            <li><strong>Na gargaari</strong> - Help me</li>
            <li><strong>Akka gaariitti nan gargaara</strong> - I will help you</li>
          </ul>
      
          <h3>5. Basic Questions</h3>
          <ul>
            <li><strong>Maaltu ta'ee?</strong> - What happened?</li>
            <li><strong>Isa jiru eessa?</strong> - Where is it?</li>
            <li><strong>Isaan hoo?</strong> - How about them?</li>
            <li><strong>Kan biraa ni jiraa?</strong> - Is there something else?</li>
          </ul>
      
          <h3>6. Directions</h3>
          <ul>
            <li><strong>Achii deemi</strong> - Go there</li>
            <li><strong>Isa dura deemi</strong> - Go straight</li>
            <li><strong>Garuu bitaa fi mirgaa ilaali</strong> - Turn left or right</li>
            <li><strong>Gara jalqabaa deemi</strong> - Go back</li>
          </ul>
      
          <h3>7. Polite Phrases</h3>
          <ul>
            <li><strong>Galatoomaa</strong> - Thank you</li>
            <li><strong>Ni gammaddaa?</strong> - How are you feeling?</li>
            <li><strong>Dhugaa maali?</strong> - What’s the truth?</li>
            <li><strong>Waa'ee keenya</strong> - Excuse me (formal)</li>
          </ul>
          
          <h3>8. Farewell</h3>
          <ul>
            <li><strong>Halkan gaarii</strong> - Good night</li>
            <li><strong>Fiixee gaarii</strong> - Have a good day</li>
            <li><strong>Ni wal argina</strong> - See you later</li>
          </ul>
      
          <p>These phrases will help you in many everyday situations, whether you're meeting someone for the first time, asking for directions, or just having a casual conversation.</p>
        `,
      }
      ,
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
        { (
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

