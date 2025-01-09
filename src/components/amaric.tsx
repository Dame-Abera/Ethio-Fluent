import React, { useState } from "react";
import Header from "./headers";
import Footer from "./footer";
import "../components/course.css";

function App() {
  // Create an array of chapters with their content
  const chapters = [
    {
      title: "Chapter 1: Introduction",
      content: `
        <h2>Introducing Yourself in Amharic</h2>
<p>Learning how to introduce yourself is essential when learning Amharic.</p>
<ul>
  <li><strong>ስሜ _____</strong> (Translation: My name is _____)</li>
  <li>Example: <em>ስሜ አብዲ</em>. (My name is Abdi)</li>
</ul>
<p>Start by greeting someone: <strong>“እንዴት ነህ?”</strong> (How are you?)</p>

<p>Here’s a video that will help you learn more about greetings and self-introduction in Amharic:</p>

<!-- Embed a video from YouTube -->
<iframe width="900" height="400" src="https://www.youtube.com/embed/uMmQd11Ltqo?si=eTWWJO-WvZmhEqmz" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      `,
    },
    {
      title: "Chapter 2: Basics",
      content: `
       <h2>Amharic Basic Phrases</h2>
<p>Here are some basic phrases to get you started:</p>
<ul>
  <li><strong>እንዴት ነህ</strong> - How are you?</li>
  <li><strong>አመሰግናለሁ</strong> - Thank you</li>
  <li><strong>እንኳን ደህና መጡ</strong> - Welcome</li>
  <li><strong>እባኮትን</strong> - Please</li>
  <li><strong>ስምህ ማን ነው?</strong> - What is your name?</li>
  <li><strong>ደኅና ነህ?</strong> - Are you okay?</li>
</ul>

<p>Here’s a video that will help you learn more about basic Amharic phrases:</p>

<!-- Embed a video from YouTube -->
<iframe width="900" height="400" src="https://www.youtube.com/embed/N8Q5lX3E-V0?si=O4-UAZvpBRxOfBA7" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      `,
    },
    {
      title: "Chapter 3: Advanced Topics",
      content: `
       <h2>Advanced Amharic Grammar and Sentence Structures</h2>
<p>Once you master the basics, you can start learning advanced grammar topics to communicate more fluently. Advanced grammar will help you form more complex sentences, understand different tenses, and use conjunctions to connect ideas.</p>

<p>For example:</p>
<ul>
  <li><strong>How to form complex sentences:</strong> Learn how to combine multiple ideas into one sentence using conjunctions, relative clauses, and conditional structures.</li>
  <li><strong>How to use conjunctions:</strong> Conjunctions like "እንግዲኛ" (but), "እንዲሁም" (also), and "በሚል" (therefore) help link sentences or clauses together.</li>
  <li><strong>How to express past, present, and future tenses:</strong> Amharic has different verb conjugations for expressing actions in different tenses. For example:
    <ul>
      <li><strong>Past tense:</strong> "አመጣሁ" (I came)</li>
      <li><strong>Present tense:</strong> "እመጣለሁ" (I am coming)</li>
      <li><strong>Future tense:</strong> "እመጣለሁ" (I will come)</li>
    </ul>
  </li>
</ul>

<p>To further understand these concepts, here's a video that will guide you through advanced Amharic grammar:</p>

<!-- Embed a video from YouTube -->
<iframe width="900" height="400" src="https://www.youtube.com/embed/INtTh9Smu4w?si=mM90YAtoZZtGPaXi" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      `,
    },
    {
      title: "Chapter 4: Vocabulary",
      content: `
        <h2>Chapter 4: Vocabulary for Daily Use</h2>
<p>Now that you know some basic phrases, it’s time to expand your vocabulary. This chapter introduces essential nouns, adjectives, and verbs to help you communicate more effectively in everyday situations.</p>
<ul>
  <li><strong>ቤት</strong> (House)</li>
  <li><strong>መኪና</strong> (Car)</li>
  <li><strong>ሴት</strong> (Woman)</li>
  <li><strong>ተምታ</strong> (School)</li>
  <li><strong>ስራ</strong> (Work)</li>
</ul>
<p>Learning these words will enable you to talk about basic objects and activities that you encounter regularly.</p>
<iframe width="900" height="400" src="https://www.youtube.com/embed/ie8NLeMOkow?si=nElD5A8hhI-3GPWf" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      `,
    },
    {
      title: "Chapter 5: Pronoun and Nouns",
      content: `
       <h2>Chapter 5: Pronouns and Nouns</h2>
<p>In this chapter, you will learn how to use pronouns and nouns effectively in sentences. Understanding pronouns is key to forming correct Amharic sentences and will help you communicate more naturally.</p>
<ul>
  <li><strong>እኔ</strong> (I)</li>
  <li><strong>አንተ</strong> (You - singular)</li>
  <li><strong>እሷ</strong> (She)</li>
  <li><strong>እኛ</strong> (We)</li>
  <li><strong>እናንተ</strong> (You - plural)</li>
</ul>
<p>Pronouns are essential for referring to people and objects without repeating their names. The practice of nouns with pronouns is crucial for effective sentence construction in Amharic.</p>
<iframe width="900" height="400" src="https://www.youtube.com/embed/t9gY7OpvkAk?si=XeUPU70u8AtIsql4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
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
      content: "This is the content  for Chapter 8.",
    },
    {
      title: "Chapter 9: Research Methods",
      content: "This is the content for Chapter 9.",
    },
    {
      title: "Chapter 10: Tools and Techniques",
      content: "This is the content for Chapter 10.",
    },
    {
      title: "Chapter 11: Development Strategies",
      content: "This is the content for Chapter 11.",
    },
    {
      title: "Chapter 12: Problem Solving",
      content: "This is the content for Chapter 12.",
    },
    {
      title: "Chapter 13: Innovations",
      content: "This is the content for Chapter 13.",
    },
    {
      title: "Chapter 14: Ethics",
      content: "This is the content for Chapter 14.",
    },
    {
      title: "Chapter 15: Future Trends",
      content: "This is the content for Chapter 15.",
    },
    {
      title: "Chapter 16: Conclusion",
      content: "This is the content for Chapter 16.",
    },
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
        {
          <>
            <h1>{chapters[selectedChapter].title}</h1>
            <div
              className="chapter-content"
              dangerouslySetInnerHTML={{
                __html: chapters[selectedChapter].content,
              }}
            ></div>
          </>
        }
      </div>
    </div>
  );
}

export default App;
