import React from "react";
import Header from "./headers";
import Footer from "./footer";
import "../components/css/Aboutdevs.css";

function AboutDevs() {
  return (
    <div className="about-devs-container" >
      <div className="about-devs-content"  style={{display: 'flex', flexDirection: 'column', alignItems: "center", justifyContent: 'center'}}>
        <h1>About the Developers</h1>
        <p>
          We are a team of passionate software engineering students at Addis Ababa University. Our goal is to
          build technology that brings people closer to their roots, languages, and cultures. With a focus on
          Ethiopian languages and culture, we are driven to create an impactful platform for language learning.
        </p>

        <h2>Our Team</h2>
        <p>
          Our team consists of skilled developers who are dedicated to learning and innovating. We come from diverse
          backgrounds but share a common passion for technology and education. As students of Addis Ababa University,
          we are equipped with both theoretical knowledge and practical experience that enables us to work on projects
          that make a difference.
        </p>

        <h2>Our Mission</h2>
        <p>
          Our mission is to preserve and promote the rich linguistic and cultural heritage of Ethiopia through digital
          platforms. By building a system that teaches Ethiopian languages, we aim to bridge the gap for learners across
          the globe and contribute to the education of future generations.
        </p>
      </div>
    </div>
  );
}

export default AboutDevs;
