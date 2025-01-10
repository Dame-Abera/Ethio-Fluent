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
        <h2>Introducing Yourself in Tigrigna</h2>
        <p>Learning how to introduce yourself is essential when learning Tigrigna.</p>
        <ul>
          <li><strong>"ሺመይ ___፡፡ /shimey ...."</strong></li>
          <li>Translation: "My name is ___."</li>
          <li>Example: ሽመይ ሂያብ ዪበሃል፡፡  (My name is ሂያብሂያብ.)</li>
        </ul>
        <ul>
          <li><strong>"አነ..አነ.."</strong></li>
          <li>Translation: "I am ___."</li>
          <li>Example: አነ ተማህሪት እየእየ. (I am a student.)</li>
        </ul>
        <ul>
          <li><strong>"ጺመታኩ ካብ ......"</strong></li>
          <li>Translation: "I come from ___."</li>
          <li>Example: አነ ዚመጻኩ ካብ ኢትዮጵያ እዩ።እዩ። (I come from Ethiopia.)</li>
        </ul>
        <ul>
          <li><strong>"አነ ዚነብረልሉ ቦታቦታ"</strong></li>
          <li>Translation: "I live in ___."</li>
          <li>Example: አብ አዲስ አባባ እየ ዚነብር።ዚነብር። (I live in Addis Ababa.)</li>
        </ul>
        
        <ul>
          <li><strong>"አነ ዚፈትዎ ነገርነገር"</strong></li>
          <li>Translation: "I like ___."</li>
          <li>Example: ኩእሶ ዪፈትው እየ።እየ። (I like football.)</li>
        </ul>
        <p>for more information please see the next video to be easly understand how can make self-introduction in Tigrigna.</p>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/9IL3PBPQjcc?si=6oTAxjOG1VSHHe15" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      `,
    },
    {
      title: "Chapter 2: Basics",
      content: `
        <h2>Tigrigna basic Phrases</h2>
        <p>Here are some basic phrases to get you started:</p>
        <ul>
          <li><strong>ከመይ ኢካ</strong> - How are you?</li>
          <li><strong>የቀንየለይ</strong> - Thank you</li>
          <li><strong>እንኳእ ደሃን መጻኩም</strong> - Welcome</li>
          <li><strong>በጃካበጃካ</strong> - Please</li>
          <li><strong>ሺምካ መን እዩእዩ?</strong> - What is your name?</li>
          <li><strong>ደኅን ዲካዲካ?</strong> - Are you okay?</li>
        </ul>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/pWqrWd7YuDQ?si=1g8xwBPld7zWKcJB" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      `,
    },
    {
      title: "Chapter 3: Advanced Topics",
      content: `
        <h2>Advanced Grammar and Sentence Structures</h2>
        <p>Once you master the basics, you can start learning advanced grammar topics.</p>
        <p>For example:</p>
        <ul>
          <li><strong>How to form complex sentences:</strong> Learn how to combine multiple ideas into one sentence using conjunctions, relative clauses, and conditional structures.</li>
          <li><strong>How to use conjunctions:</strong> Conjunctions like "ዪኩን እንበር" (however), "ቢተወሳኪ" (also), and "ቢዝቢልቢዝቢል" (therefore) help link sentences or clauses together.</li>
          <li><strong>How to express past, present, and future tenses:</strong> Amharic has different verb conjugations for expressing actions in different tenses. For example:
            <ul>
              <li><strong>Past tense:</strong> "መጼ አለኩ።አለኩ።" (I came)</li>
              <li><strong>Present tense:</strong> "እንዳመጻኩ እየ።እየ።" (I am coming)</li>
              <li><strong>Future tense:</strong> "ኪመጺእ እየእየ" (I will come)</li>
            </ul>
          </li>
        </ul>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/MJJXmrsvWOk?si=4RZY__Qnc4OqVLM5" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

Eyerusalem, [1/10/2025 7:07 AM]
`,
    },
    {
      title: "Chapter 4: Vocabulary",
      content: `
        <h2>Chapter 4: Vocabulary for Daily Use</h2>
<p>Now that you know some basic phrases, it’s time to expand your vocabulary. This chapter introduces essential nouns, adjectives, and verbs to help you communicate more effectively in everyday situations.</p>
<ul>
  <li><strong>ገዛገዛ</strong> (House)</li>
  <li><strong>መኪና</strong> (Car)</li>
  <li><strong>ሰበይቲ(ጓል)</strong> (Woman)</li>
  <li><strong>ቢት ቲምህርቲቲምህርቲ</strong> (School)</li>
  <li><strong>ስራህህ</strong> (Work)</li>
</ul>
<p>Learning these words will enable you to talk about basic objects and activities that you encounter regularly.</p>
<iframe width="560" height="315" src="https://www.youtube.com/embed/qVOUxWjXFMg?si=HggTM_PJox5rNW24" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      `,
    },
    {
      title: "Chapter 5: History",
      content: `
        <h2>History of Tigrigna </h2>
        <p>Tigrigna  is the most greatest language in Ethiopia from the past . it also known as ge'ez language.because Tigrigna drive from ge'ez language. It has a rich history and cultural significance.</p>
        
        <ol>
          <li>Origins of Tigrigna language is from Axum kingdom. </li>
          <li>The role of Tigrigna in horn of africa history it was great.</li>
        </ol>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/3FtIx-ogV2k?si=k9aIW-xmwzmprWcK" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      `,
    },
    {
      title: "Chapter 6: Sentence Structures and Conjunctions",
      content: `
        <h2>Chapter 6: Sentence Structures and Conjunctions</h2>
<p>In this chapter, you will learn how to form more complex sentences using conjunctions and different sentence structures. Tigrigna uses conjunctions to link phrases and clauses together, which helps express complex ideas.</p>

<p>Conjunctions are vital for connecting ideas and making your speech flow more naturally. form more understandabilty aiew all of videos</p>
<iframe width="560" height="315" src="https://www.youtube.com/embed/3ZvAvibEchc?si=uHQ7w4wJQDhfIXHS" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
<iframe width="560" height="315" src="https://www.youtube.com/embed/PnDnaqO0qT0?si=iUiVcSH2Z8RMGeYA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
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
    },
    { title: "Chapter 8: Case Studies", content: "This is the content  for Chapter 8." },
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

export default App;

