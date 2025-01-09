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
        <iframe
  id="chapter8-video"
  width="100%"
  height="400"
  src="https://www.youtube.com/embed/cQ4_lYFJUCs"
  frameborder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowfullscreen
></iframe>
        <h1>Introducing Yourself in Afaan Oromoo</h1>
        <h2>Key Phrases for Introduction</h2>
        <ul>
          <li><strong>"Maqaan koo ___."</strong></li>
          <li>Translation: "My name is ___."</li>
          <li>Example: Maqaan koo Abdi. (My name is Abdi.)</li>
        </ul>
        <ul>
          <li><strong>"Ani ___dha."</strong></li>
          <li>Translation: "I am ___."</li>
          <li>Example: Ani barataa dha. (I am a student.)</li>
        </ul>
        <ul>
          <li><strong>"Biyyaa ___ dhufe."</strong></li>
          <li>Translation: "I come from ___."</li>
          <li>Example: Biyyaa Itoophiyaa dhufe. (I come from Ethiopia.)</li>
        </ul>
        <ul>
          <li><strong>"Gara ___ nan jira."</strong></li>
          <li>Translation: "I live in ___."</li>
          <li>Example: Gara Finfinnee nan jira. (I live in Addis Ababa.)</li>
        </ul>
        <ul>
          <li><strong>"Umuriin kiyya ___ dha."</strong></li>
          <li>Translation: "I am ___ years old."</li>
          <li>Example: Umuriin kiyya 25 dha. (I am 25 years old.)</li>
        </ul>
        <ul>
          <li><strong>"Ani ___ nan jaaladha."</strong></li>
          <li>Translation: "I like ___."</li>
          <li>Example: Ani kubbaa miilaa nan jaaladha. (I like football.)</li>
        </ul>
      `,
    },
    {
      title: "Chapter 2: Basic Greeting",
      content: `
      <iframe
  id="chapter-video"
  width="100%"
  height="400"
  src="https://www.youtube.com/embed/vRHD2xB5uck?si=dkShUnkdDcwgCllT"
  frameborder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowfullscreen
></iframe>

        <h1>Basic Greetings</h1>
  <p>Greetings are an essential part of Oromo culture, as they often include asking about the well-being of family and friends.</p>
  
  <h2>Common Greetings</h2>
  <ul>
    <li><strong>"Akkam?"</strong><br>Translation: "Hi" or "How are you?"</li>
    <li><strong>"Akkam jirta?"</strong><br>Translation: "How are you (singular)?"</li>
    <li><strong>"Akkam jirtu?"</strong><br>Translation: "How are you (plural)?"</li>
    <li><strong>"Nagaan dha?"</strong><br>Translation: "Are you at peace?"</li>
    <li><strong>"Nagaa?"</strong><br>Translation: "Peace?" (A shorter way of asking if someone is well.)</li>
  </ul>
  
  <h2>Responses to Greetings</h2>
  <ul>
    <li><strong>"Nagaan nan jira."</strong><br>Translation: "I’m fine/at peace."</li>
    <li><strong>"Nagaan jira."</strong><br>Translation: "I’m doing well."</li>
    <li><strong>"Ani nagaa dha, ati hoo?"</strong><br>Translation: "I’m fine, and you?"</li>
    <li><strong>"Galatoomi, nagaa koo gaarii dha."</strong><br>Translation: "Thank you, I’m doing well."</li>
  </ul>
  
  <h2>Time-Specific Greetings</h2>
  
  <h3>Morning</h3>
  <ul>
    <li><strong>"Akkam bulte?"</strong><br>Translation: "Good morning" (Literally: "How did you spend the night?")</li>
    <li><strong>Response:</strong> "Nagaan bulte." (I spent the night peacefully.)</li>
  </ul>

  <h3>Afternoon</h3>
  <ul>
    <li><strong>"Akkam oolte?"</strong><br>Translation: "Good afternoon" (Literally: "How has your day been so far?")</li>
    <li><strong>Response:</strong> "Nagaan oole." (I’ve had a peaceful day.)</li>
  </ul>
  
  <h3>Evening</h3>
  <ul>
    <li><strong>"Akkam oolte?"</strong><br>Translation: "Good evening."</li>
  </ul>
  
  <h3>Night</h3>
  <ul>
    <li><strong>"Akkam oolte?"</strong><br>Translation: "Good night."</li>
  </ul>
  
  <h2>Polite and Formal Greetings</h2>
  <ul>
    <li><strong>"Nagaan siif haa ta’u."</strong><br>Translation: "May peace be upon you."</li>
    <li><strong>"Nagaa manaa keetii fi maatii keetii hoo?"</strong><br>Translation: "How is the peace of your house and family?"</li>
    <li><strong>"Nagaan si ga’uufan hawwa."</strong><br>Translation: "I wish you peace."</li>
    <li><strong>"Galatoomi, ati hoo nagaa dha?"</strong><br>Translation: "Thank you, and you? Are you at peace?"</li>
  </ul>
  
  <h2>Greetings in a Group Setting</h2>
  <ul>
    <li><strong>"Akkam jirtan?"</strong><br>Translation: "How are you all?"</li>
    <li><strong>"Nagaan keessan hoo?"</strong><br>Translation: "How is your peace (plural)?"</li>
    <li><strong>"Dadhabbii hin qabdan ta’a?"</strong><br>Translation: "I hope you aren’t tired."</li>
    <li><strong>"Hunda keessan nagaa dha?"</strong><br>Translation: "Is everyone well?"</li>
  </ul>
  
  <h2>Casual Greetings</h2>
  <ul>
    <li><strong>"Maaltu ta’a?"</strong><br>Translation: "What’s up?"</li>
    <li><strong>"Naguma?"</strong><br>Translation: "All good?"</li>
    <li><strong>"Dhuguma nagaa dha?"</strong><br>Translation: "Are you truly well?"</li>
  </ul>

  <h2>Sample Greeting Conversation</h2>
  <p><strong>Person A:</strong> Akkam? (Hi, how are you?)</p>
  <p><strong>Person B:</strong> Nagaan nan jira. Ati hoo? (I’m fine. How about you?)</p>
  <p><strong>Person A:</strong> Nagaan nan jira, galatoomi. Maaltu ta’aa? (I’m fine, thank you. What’s up?)</p>
  <p><strong>Person B:</strong> Hojii irraa deebi’een jiru. (I’m just coming back from work.)</p>
  <p><strong>Person A:</strong> Naguma! Galgala gaarii. (That’s good! Have a nice evening.)</p>
      `,
    },
    {
      title: "Chapter 3: Getting to know someone",
      content: `
      <iframe
  id="chapter8-video"
  width="100%"
  height="400"
  src="https://www.youtube.com/embed/WWxlK11hAaY"
  frameborder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowfullscreen
></iframe>
        <h1>Greeting and Starting the Conversation</h1>
    <ul>
        <li><strong>"Akkam?"</strong> <br>
            Translation: "How are you?" <br>
            Example Response: Nagaan, ati hoo? (I’m fine, and you?)
        </li>
        <li><strong>"Maqaan kee eenyu?"</strong> <br>
            Translation: "What is your name?" <br>
            Example Response: Maqaan koo Aysha. (My name is Aysha.)
        </li>
        <li><strong>"Eessa irra dhufte?"</strong> <br>
            Translation: "Where are you from?" <br>
            Example Response: Biyyaa Itoophiyaa dhufe. (I’m from Ethiopia.)
        </li>
        <li><strong>"Eessa jiraatta?"</strong> <br>
            Translation: "Where do you live?" <br>
            Example Response: Gara Finfinnee jiraadha. (I live in Addis Ababa.)
        </li>
    </ul>

    <h1>Asking About Work or Studies</h1>
    <ul>
        <li><strong>"Maaltu si hojjachiisa?"</strong> <br>
            Translation: "What do you do?" <br>
            Example Response: Ani barsiisaa dha. (I’m a teacher.) <br>
            Or: Ani barataa dha. (I’m a student.)
        </li>
        <li><strong>"Eessatti baratta?"</strong> <br>
            Translation: "Where do you study?" <br>
            Example Response: Anasatti baradha. (I study at Addis Ababa University.)
        </li>
    </ul>

    <h1>Hobbies and Interests</h1>
    <ul>
        <li><strong>"Maaltu si gammachiisa?"</strong> <br>
            Translation: "What makes you happy?" <br>
            Example Response: Kubbaa miilaa nan jaaladha. (I like football.)
        </li>
        <li><strong>"Maaltu si dhiba?"</strong> <br>
            Translation: "What do you dislike?" <br>
            Example Response: Amanamummaa dhabummaa nan jibba. (I dislike dishonesty.)
        </li>
    </ul>

    <h1>Asking About Family</h1>
    <ul>
        <li><strong>"Maatii kee wa'ee naaf himi."</strong> <br>
            Translation: "Tell me about your family." <br>
            Example Response: Maatii koo keessa nama shan jira. (There are five people in my family.)
        </li>
        <li><strong>"Akkamitti maatii kee waliin jiraatta?"</strong> <br>
            Translation: "How do you live with your family?" <br>
            Example Response: Nagaan fi jaalalaan waliin jiraanna. (We live together peacefully and with love.)
        </li>
    </ul>

    <h1>Ending the Conversation</h1>
    <ul>
        <li><strong>"Nagaan oolii!"</strong> <br>
            Translation: "Have a good day!" <br>
            Example Response: Siifiis nagaan ool. (You too, have a good day.)
        </li>
        <li><strong>"Waay'ee kee gammade."</strong> <br>
            Translation: "It was nice to learn about you." <br>
            Example Response: Aniis waay'ee kee gammade. (I also enjoyed learning about you.)
        </li>
    </ul>

    <h1>Example Dialogue</h1>
    <p>Here’s a sample conversation:</p>
    <ul>
        <li>A: Akkam?</li>
        <li>B: Nagaan, ati hoo?</li>
        <li>A: Maqaan kee eenyu?</li>
        <li>B: Maqaan koo Sifan. Ati hoo?</li>
        <li>A: Maqaan koo Hawii dha. Eessa irra dhufte?</li>
        <li>B: Biyyaa Walloo dhufe. Eessa jiraatta?</li>
        <li>A: Gara Finfinnee jiraadha. Maaltu si hojjachiisa?</li>
        <li>B: Ani barataa dha. Ati hoo?</li>
        <li>A: Ani hojjataa dha. Maaltu si gammachiisa?</li>
        <li>B: Kitaabota dubbisuu nan jaaladha. Ati hoo?</li>
        <li>A: Ani fira koo waliin ta'uu nan jaaladha.</li>
    </ul>
      `,
    },
    
    {
      title: "Chapter 4: Invitation",
      content: `
      <iframe
  id="chapter8-video"
  width="100%"
  height="400"
  src="https://www.youtube.com/embed/jCmbYx0xj1k"
  frameborder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowfullscreen
></iframe>
        <h1>Extending an Invitation</h1>
    <h2>Common Phrases</h2>
    <ul>
        <li><strong>"Simataa koo gara ___ dhaaf affeeruufan jirra."</strong> <br>
            Translation: "I’m inviting you to my ___." <br>
            Example: Simataa koo gara cidhaa dhaaf affeeruufan jirra. (I’m inviting you to my wedding.)
        </li>
        <li><strong>"Nu waliin ___ ni dhufa ta'a?"</strong> <br>
            Translation: "Will you join us for ___?" <br>
            Example: Nu waliin nyaata ni dhufa ta’a? (Will you join us for a meal?)
        </li>
        <li><strong>"Gaaffii tokko si gaafadha, ___ ni dhufa?"</strong> <br>
            Translation: "I have a request for you; will you come to ___?" <br>
            Example: Gaaffii tokko si gaafadha, ayyaanichaaf ni dhufa? (I have a request for you; will you come to the celebration?)
        </li>
        <li><strong>"Guyyaa ___ ganama/saaatii ___ ___ bakka dhufuu qabda."</strong> <br>
            Translation: "On ___ day at ___ o’clock, you should come to ___." <br>
            Example: Guyyaa Sabtii saaatii 10:00 iddoo mana ciisicha dhufuu qabda. (On Saturday at 10:00, you should come to the hotel.)
        </li>
    </ul>

    <h2>Casual Invitations</h2>
    <ul>
        <li><strong>"Hin taanee nu waliin yeroo tokko dabarsi?"</strong> <br>
            Translation: "Why don’t you spend some time with us?" <br>
            Example: Hin taanee nu waliin galgala tokko dabarsi? (Why don’t you spend an evening with us?)
        </li>
        <li><strong>"Nu waliin taphachuu feetaa?"</strong> <br>
            Translation: "Do you want to play with us?" <br>
            Example: Nu waliin kubbaa taphachuu feetaa? (Do you want to play soccer with us?)
        </li>
    </ul>

    <h1>Accepting an Invitation</h1>
    <ul>
        <li><strong>"Eeyyen, nan dhufa."</strong> <br>
            Translation: "Yes, I will come." <br>
            Example: Eeyyen, ayyaanichaaf nan dhufa. (Yes, I will come to the celebration.)
        </li>
        <li><strong>"Galatoomi! Ani gammadee nan dhufa."</strong> <br>
            Translation: "Thank you! I’ll happily come." <br>
            Example: Galatoomi! Ani cidhaaf gammadee nan dhufa. (Thank you! I’ll happily come to the wedding.)
        </li>
        <li><strong>"Kun carraa bareedaadha."</strong> <br>
            Translation: "This is a wonderful opportunity." <br>
            Example: Galatoomi, kun carraa bareedaadha. (Thank you, this is a wonderful opportunity.)
        </li>
    </ul>

    <h1>Declining an Invitation Politely</h1>
    <ul>
        <li><strong>"Baga na yaadatte! Garuu osoo hin ta’in dhufuu hin danda’u."</strong> <br>
            Translation: "Thank you for thinking of me! But unfortunately, I can’t come."
        </li>
        <li><strong>"Dhiifama, hojii baay’ee qaba."</strong> <br>
            Translation: "I’m sorry, I have a lot of work."
        </li>
        <li><strong>"Guyyaa sanaan dura waan adda addaa na eeggataa ture."</strong> <br>
            Translation: "I had other plans for that day."
        </li>
        <li><strong>"Galatoomi! Garuu na dursanii barbaachisummaan na qunnamaa jira."</strong> <br>
            Translation: "Thank you! But I have a prior commitment."
        </li>
    </ul>

    <h1>Sample Invitation Dialogue</h1>
    <p>Here’s a sample conversation:</p>
    <ul>
        <li>A: Guyyaa Sabtii ganama sa’aa 4:00 bakka nyaata uffata ibiddaa iddoo keenya ni dhufa ta’a?<br>
            (Will you join us on Saturday morning at 4:00 for breakfast at our place?)
        </li>
        <li>B: Eeyyen, galatoomi! Ani nan dhufa.<br>
            (Yes, thank you! I’ll come.)
        </li>
        <li>A: Kun gammachuu koo guddaadha!<br>
            (This makes me very happy!)
        </li>
    </ul>
      `,
    },
    {
      title: "Chapter 5: phone calls",
      content: `
      <iframe
  id="chapter8-video"
  width="100%"
  height="400"
  src="https://www.youtube.com/embed/rSobMkEwk8M"
  frameborder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowfullscreen
></iframe>
        <h1>Answering a Phone Call</h1>
  <ul>
    <li><strong>"Alo!"</strong></li>
    <p>Translation: "Hello!"</p>
    <p>Commonly used when answering a phone call.</p>

    <li><strong>"Ani (maqaa kee) ti."</strong></li>
    <p>Translation: "This is (your name)."</p>
    <p>Example: Ani Aysha ti. (This is Aysha.)</p>

    <li><strong>"Ati eenyu?"</strong></li>
    <p>Translation: "Who are you?"</p>
    <p>Example: Ati eenyu akka taatan naaf himi. (Please tell me who you are.)</p>

    <li><strong>"Maaltu si fide?"</strong></li>
    <p>Translation: "What can I do for you?"</p>
  </ul>

  <h1>Starting a Phone Call</h1>
  <ul>
    <li><strong>"Alo, Ani (maqaa kee) ti."</strong></li>
    <p>Translation: "Hello, this is (your name)."</p>
    <p>Example: Alo, Ani Kadir ti. (Hello, this is Kadir.)</p>

    <li><strong>"Maaliif si bilbile?"</strong></li>
    <p>Translation: "May I ask why you called?"</p>
    <p>Example: Maaliif si bilbile naaf himi. (Please tell me why you called.)</p>

    <li><strong>"Hojii keessaa ilaalchisee si bilbileera."</strong></li>
    <p>Translation: "I’m calling about work."</p>

    <li><strong>"Si dubbachuu barbaade."</strong></li>
    <p>Translation: "I wanted to talk to you."</p>
  </ul>

  <h1>Making a Request Over the Phone</h1>
  <ul>
    <li><strong>"Gaaffii tokko qaba."</strong></li>
    <p>Translation: "I have a question."</p>
    <p>Example: Hojii irratti gaaffii tokko qaba. (I have a question about work.)</p>

    <li><strong>"Mee ergaa tokko dabarsiteef na gargaari."</strong></li>
    <p>Translation: "Can you pass on a message for me, please?"</p>

    <li><strong>"Namni (maqaa) achi jiru?"</strong></li>
    <p>Translation: "Is (name) there?"</p>
    <p>Example: Namni Ahmed achi jiru? (Is Ahmed there?)</p>
  </ul>

  <h1>Ending a Phone Call</h1>
  <ul>
    <li><strong>"Nagaan oolii!"</strong></li>
    <p>Translation: "Have a good day!"</p>

    <li><strong>"Galatoomi bilbilte!"</strong></li>
    <p>Translation: "Thank you for calling!"</p>

    <li><strong>"Yeroo biraan walitti bilbilla."</strong></li>
    <p>Translation: "We’ll talk again another time."</p>
  </ul>
      `,
    },
    {
      title: "Chapter 6: Telling Time",
      content: `
      <iframe
  id="chapter8-video"
  width="100%"
  height="400"
  src="https://www.youtube.com/embed/_AUuLmz0OPs?si=aYJzTbS24svDHLP5"
  frameborder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowfullscreen
></iframe>
        <h1>Key Vocabulary for Telling Time</h1>
    <p>Time-telling in Afaan Oromoo often uses a 12-hour format, and the phrases for hours, minutes, and parts of the day are straightforward once you know the basics.</p>

    <h2>Key Vocabulary</h2>
    <ul>
        <li><strong>"Sa’aatii"</strong> - Translation: "Hour" or "Clock"</li>
        <li><strong>"Daqiiqaa"</strong> - Translation: "Minute"</li>
        <li><strong>"Waggaa" / "Galgala"</strong> - Translation: "Morning" / "Evening"</li>
        <li><strong>"Kan booda"</strong> - Translation: "Past"</li>
        <li><strong>"Kan dura"</strong> - Translation: "To" (as in "10 minutes to 5")</li>
    </ul>

    <h2>Basic Structure to Tell Time</h2>
    <ul>
        <li><strong>"Sa’aatii ___ dha."</strong> - Translation: "It is ___ o’clock." Example: Sa’aatii 3 dha. (It is 3 o’clock.)</li>
        <li><strong>"Sa’aatii ___ fi ___ daqiiqaa dha."</strong> - Translation: "It is ___ and ___ minutes." Example: Sa’aatii 4 fi 15 daqiiqaa dha. (It is 4:15.)</li>
        <li><strong>"Sa’aatii ___ keessa ___ daqiiqaa jiru."</strong> - Translation: "It is ___ minutes past ___." Example: Sa’aatii 5 keessa 20 daqiiqaa jiru. (It is 20 minutes past 5.)</li>
        <li><strong>"Sa’aatii ___ hafu."</strong> - Translation: "It is ___ to ___." Example: Sa’aatii 10 hafu. (It is 10 to 10, or 9:50.)</li>
    </ul>

    <h2>Parts of the Day</h2>
    <ul>
        <li><strong>"Ganama"</strong> - Translation: "Morning" (AM)</li>
        <li><strong>"Galgal"</strong> - Translation: "Evening" (PM)</li>
        <li><strong>"Wixinee"</strong> - Translation: "Midday" (Noon)</li>
        <li><strong>"Irra darbe"</strong> - Translation: "Afternoon"</li>
    </ul>

    <h2>Sample Phrases</h2>
    <p><strong>What time is it?</strong><br>Sa’aatii meeqa dha?</p>
    <p><strong>It is 7:30 in the morning.</strong><br>Sa’aatii 7 fi 30 daqiiqaa ganama dha.</p>
    <p><strong>It is 3:15 in the afternoon.</strong><br>Sa’aatii 3 fi 15 daqiiqaa galgala dha.</p>
    <p><strong>It is 10 minutes to 6.</strong><br>Sa’aatii 6 hafu 10 daqiiqaa dha.</p>

    <h2>Practicing Time</h2>
    <h3>Ask the Time</h3>
    <ul>
        <li>Sa’aatii meeqa ta’e? (What time is it?)</li>
        <li>Yeroo meeqa dha? (What’s the time?)</li>
    </ul>

    <h3>Specify the Hour</h3>
    <ul>
        <li>Sa’aatii 2 dha. (It’s 2 o’clock.)</li>
        <li>Sa’aatii 8 galgala dha. (It’s 8 in the evening.)</li>
    </ul>

    <h3>Add Minutes</h3>
    <ul>
        <li>Sa’aatii 10 fi 5 daqiiqaa ganama dha. (It’s 10:05 in the morning.)</li>
        <li>Sa’aatii 3 keessa 20 daqiiqaa jiru. (It’s 20 minutes past 3.)</li>
    </ul>
      `,
    },
    {
      title: "Chapter 7: Shopping",
      content: `
      <iframe
  id="chapter-video"
  width="100%"
  height="400"
  src="https://www.youtube.com/embed/5ZSil0mqKOw?si=zE_RhLd6u6dzRIRX"
  frameborder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowfullscreen
></iframe>

        <h2>Key Vocabulary</h2>
<ul>
  <li><strong>"Bittaa"</strong> - Translation: "Shopping" or "Buying"</li>
  <li><strong>"Gatii"</strong> - Translation: "Price"</li>
  <li><strong>"Diriirii"</strong> - Translation: "Expensive"</li>
  <li><strong>"Gatii xiqqaa"</strong> - Translation: "Cheap"</li>
  <li><strong>"Birrii"</strong> - Translation: "Ethiopian Birr" (currency)</li>
  <li><strong>"Meeqa?"</strong> - Translation: "How much?"</li>
  <li><strong>"Harcaasa"</strong> - Translation: "Discount"</li>
  <li><strong>"Waa’ee"</strong> - Translation: "About" (used in asking about items)</li>
</ul>

<h3>Common Phrases for Shopping</h3>

<h4>Asking About Items</h4>
<ul>
  <li><strong>"Kun maal?"</strong> - Translation: "What is this?"</li>
  <li><strong>"Kun meeqa?"</strong> - Translation: "How much is this?"</li>
  <li><strong>"Gatii isaa naaf ibsi."</strong> - Translation: "Tell me its price."</li>
  <li><strong>"Kun gatii isaa gad xiqqeesuu ni danda'aa?"</strong> - Translation: "Can you lower the price of this?"</li>
  <li><strong>"Waa’ee nyaata naaf himi."</strong> - Translation: "Tell me about the food."</li>
</ul>

<h4>Making a Purchase</h4>
<ul>
  <li><strong>"Ani kana bituu barbaada."</strong> - Translation: "I want to buy this."</li>
  <li><strong>"Maallaqa kana guutuu qabaa?"</strong> - Translation: "Do I have enough money for this?"</li>
  <li><strong>"Mee kana naaf keemi."</strong> - Translation: "Please give me this."</li>
  <li><strong>"Suma kana qofaan bituufi."</strong> - Translation: "I will buy only this."</li>
  <li><strong>"Meeshaa kaan ni qabaataa?"</strong> - Translation: "Do you have other items?"</li>
</ul>

<h4>Talking About Prices</h4>
<ul>
  <li><strong>"Kun baay'ee diriirii dha."</strong> - Translation: "This is very expensive."</li>
  <li><strong>"Harcaasa naa kennuu ni danda’aa?"</strong> - Translation: "Can you give me a discount?"</li>
  <li><strong>"Gatii xiqqaa qaban ni argamaa?"</strong> - Translation: "Do you have a cheaper one?"</li>
  <li><strong>"Ani qaalii kana bituu hin danda’u."</strong> - Translation: "I can’t afford to buy this expensive one."</li>
  <li><strong>"Meeqa akka ta’e naaf ibsi."</strong> - Translation: "Explain to me how much it costs."</li>
</ul>

<h4>At a Food Market</h4>
<ul>
  <li><strong>"Furtuu kuduraa fi muduraa maali?"</strong> - Translation: "What is the price of vegetables and fruits?"</li>
  <li><strong>"Xiyaara xiqqaa naaf kenni."</strong> - Translation: "Give me a small quantity."</li>
  <li><strong>"Kun akka maali dhadhamaa jira?"</strong> - Translation: "What does this taste like?"</li>
  <li><strong>"Kun qulqulluu dha?"</strong> - Translation: "Is this clean?"</li>
  <li><strong>"Nyaata yeroo dheeraaf turu qabdu?"</strong> - Translation: "Do you have food that lasts a long time?"</li>
</ul>

<h3>Polite Words to Use</h3>
<ul>
  <li>"Galatoomi." - Translation: "Thank you."</li>
  <li>"Baga naaf hojjette." - Translation: "Thank you for helping me."</li>
  <li>"Dhimma kee baay'ee bareeda." - Translation: "You’re very kind."</li>
</ul>

<h3>Sample Shopping Dialogue</h3>
<p><strong>Customer:</strong> Kun maal? (What is this?)</p>
<p><strong>Seller:</strong> Kun bunaa dha. (This is coffee.)</p>
<p><strong>Customer:</strong> Gatii isaa meeqa? (How much is it?)</p>
<p><strong>Seller:</strong> Gatii isaa birrii 300 dha. (Its price is 300 Birr.)</p>
<p><strong>Customer:</strong> Baay’ee diriirii dha. Harcaasa naa kennuu ni danda’aa? (It’s very expensive. Can you give me a discount?)</p>
<p><strong>Seller:</strong> Eeyyen, birrii 250 itti kenna. (Yes, I’ll sell it for 250 Birr.)</p>
<p><strong>Customer:</strong> Nagaa baay’ee galatoomi. Mee naaf kenni. (Alright, thank you so much. Please give it to me.)</p>

      `,
    },
    
    {
      title: "Chapter 8: summary",
      content: `
          <iframe
            id="chapter8-video"
            width="100%"
            height="400"
            src="https://www.youtube.com/embed/zMm5ujN7xao?si=OaaHXo2Q5UFdAeMc"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
      
          <h1>General Phrases</h1>

  <h2>Common Phrases</h2>
  <p><strong>"Eeyyen."</strong> <br>Translation: "Yes."</p>
  <p><strong>"Lakkii."</strong> <br>Translation: "No."</p>
  <p><strong>"Galatoomi."</strong> <br>Translation: "Thank you."</p>
  <p><strong>"Naguma?"</strong> <br>Translation: "Are you okay?"</p>
  <p><strong>"Naguma jira."</strong> <br>Translation: "I’m okay."</p>
  <p><strong>"Akkam ta’a?"</strong> <br>Translation: "What’s happening?"</p>
  <p><strong>"Baay’ee galatoomi."</strong> <br>Translation: "Thank you very much."</p>
  <p><strong>"Baga garaa keetii."</strong> <br>Translation: "Welcome."</p>

  <h2>Asking for Help</h2>
  <p><strong>"Na gargaaraa?"</strong> <br>Translation: "Can you help me?"</p>
  <p><strong>"Mee kun naaf ibsi."</strong> <br>Translation: "Please explain this to me."</p>
  <p><strong>"Akka tasaa na gargaaraa?"</strong> <br>Translation: "Can you help me by any chance?"</p>
  <p><strong>"Akka malee carraa qabu?"</strong> <br>Translation: "Is there another way?"</p>
  <p><strong>"Kun maal jechuu dha?"</strong> <br>Translation: "What does this mean?"</p>

  <h2>Travel and Directions</h2>
  <p><strong>"Biyya kana keessatti eessa jira?"</strong> <br>Translation: "Where is this place in this country?"</p>
  <p><strong>"Akka tasaa gara bakka kana geessuu danda’aa?"</strong> <br>Translation: "Can you take me to this place?"</p>
  <p><strong>"Bajaajii ykn taaksii eessa argadha?"</strong> <br>Translation: "Where can I find a bajaj or taxi?"</p>
  <p><strong>"Bakkichi fageenya meeqa jira?"</strong> <br>Translation: "How far is the place?"</p>
  <p><strong>"Deemsa gara hojiitti akkamitti gochuu dandeenya?"</strong> <br>Translation: "How can I get to work?"</p>

  <h2>Shopping</h2>
  <p><strong>"Kun meeqa?"</strong> <br>Translation: "How much is this?"</p>
  <p><strong>"Gatii isaa gad xiqqeesuu ni danda’aa?"</strong> <br>Translation: "Can you lower the price?"</p>
  <p><strong>"Maallaqa xiqqaa qabu?"</strong> <br>Translation: "Do you have something cheaper?"</p>
  <p><strong>"Mee kana naaf kenni."</strong> <br>Translation: "Please give me this."</p>
  <p><strong>"Meeqa kafaluu qabaa?"</strong> <br>Translation: "How much do I need to pay?"</p>

  <h2>Expressing Needs</h2>
  <p><strong>"Kun barbaada."</strong> <br>Translation: "I need this."</p>
  <p><strong>"Ani nyaata barbaada."</strong> <br>Translation: "I need food."</p>
  <p><strong>"Anis bishaan barbaada."</strong> <br>Translation: "I also need water."</p>
  <p><strong>"Mana fincaanii eessa jira?"</strong> <br>Translation: "Where is the restroom?"</p>
  <p><strong>"Dhimma koo hubachiisuu barbaada."</strong> <br>Translation: "I want to explain my situation."</p>

  <h2>Time</h2>
  <p><strong>"Sa’aatii meeqa ta’e?"</strong> <br>Translation: "What time is it?"</p>
  <p><strong>"Daqiiqaa tokko qophiidha."</strong> <br>Translation: "One moment, please."</p>
  <p><strong>"Yeroo gaarii qabaadhu!"</strong> <br>Translation: "Have a good time!"</p>
  <p><strong>"Yeroo dheeraa turte."</strong> <br>Translation: "It’s been a long time."</p>
  <p><strong>"Boodarra deebi'ee si dubbadha."</strong> <br>Translation: "I’ll talk to you later."</p>

  <h2>Health and Well-being</h2>
  <p><strong>"Nagaan jiraattu?"</strong> <br>Translation: "Are you doing well?"</p>
  <p><strong>"Ani dhukkubsataa dha."</strong> <br>Translation: "I’m sick."</p>
  <p><strong>"Fayyaa koo fooyya’eera."</strong> <br>Translation: "My health has improved."</p>
  <p><strong>"Mana yaalaa eessa argadha?"</strong> <br>Translation: "Where can I find a hospital?"</p>
  <p><strong>"Qoricha naa kennuu ni danda’aa?"</strong> <br>Translation: "Can you give me medicine?"</p>

  <h2>Polite Expressions</h2>
  <p><strong>"Dhiifama naa godhi."</strong> <br>Translation: "Excuse me."</p>
  <p><strong>"Waan gaarii siif hawwa."</strong> <br>Translation: "I wish you well."</p>
  <p><strong>"Dubbii kana dhiisi."</strong> <br>Translation: "Leave this matter alone."</p>
  <p><strong>"Fakkeenyummaa kee beekeera."</strong> <br>Translation: "I admire your personality."</p>
  <p><strong>"Akkuma barbaaddu godhi."</strong> <br>Translation: "Do as you like."</p>
        `,
    },

    { title: "Chapter 9: cultural insight", 
      content: `
      <iframe
  id="chapter8-video"
  width="100%"
  height="400"
  src="https://www.youtube.com/embed/4L3uGjlQPKA?si=OpjmRf3xUmphs95S"
  frameborder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowfullscreen
></iframe>

<h1>The Oromo People: Culture and Heritage</h1>
    
    <p>The Oromo people are one of the largest ethnic groups in East Africa, primarily residing in Ethiopia, but also in parts of Kenya and Somalia.<br/> They have a rich cultural heritage, language, and history that significantly influences the region. Below are some key aspects of Oromo culture:</p>

    <h2>1. Language</h2>
    <p>The Oromo language, also known as Afaan Oromoo, is part of the Cushitic branch of the Afroasiatic language family. It is one of the most widely spoken languages in Ethiopia and has several dialects. The Oromo language is used in various forms of expression, including literature, songs, proverbs, and oral traditions.</p>

    <h2>2. Traditional Religion and Beliefs</h2>
    <p>The Oromo people traditionally practiced Waaqeffannaa, a monotheistic religion that centers around the worship of Waaqa (God). This belief system emphasizes the connection between humans and nature, with rituals often performed in natural settings, such as mountains, forests, and rivers. However, many Oromos today also practice Islam or Christianity.</p>

    <h2>3. Gadaa System</h2>
    <p>The Gadaa system is a traditional socio-political and governance system of the Oromo people. It is based on the concept of age sets and revolves around a cycle of leadership every eight years. The system promotes democratic principles, as leaders (called Abbaa Gadaa) are elected by the community, and there is a strong focus on collective decision-making and consensus.</p>

    <h2>4. Cultural Practices and Social Structure</h2>
    <p>The Oromo society is structured around clans and lineages. They have a strong sense of identity tied to their clan, and family relationships are highly valued. Social roles are often defined by age, gender, and clan affiliation.</p>

    <ul>
        <li><strong>Mitiya (marriage)</strong>: Marriage is an important cultural institution in Oromo society. Traditional Oromo weddings involve various rituals, including the negotiation of the bride price and celebrations with music, dances, and communal feasts.</li>
        <li><strong>Traditional Music and Dance</strong>: Oromo music is an essential part of their cultural expression, with harp-like instruments (called Krar) and drums being prominent in ceremonies. Their traditional dances are energetic and feature vibrant movements that convey a sense of unity and celebration.</li>
    </ul>

    <h2>5. Agriculture and Livelihood</h2>
    <p>The majority of the Oromo people are farmers and pastoralists. They grow a variety of crops, such as teff, corn, wheat, and coffee, and raise livestock like cattle, goats, and sheep. Coffee holds special cultural significance, as Ethiopia is widely regarded as the birthplace of coffee, and the Oromo people have longstanding coffee traditions, from the coffee ceremony to the cultivation and trade of beans.</p>

    <h2>6. Oromo Festivals</h2>
    <p>The Irreecha festival is one of the most significant cultural celebrations for the Oromo people. It is a thanksgiving ceremony that takes place annually at the end of the rainy season, particularly around Lake Hora in Bishoftu (in Ethiopia). The festival celebrates the blessings of nature, and participants gather to offer thanks to Waaqa, singing songs, dancing, and making symbolic gestures to honor the earth and their ancestors.</p>

    <h2>7. Art and Crafts</h2>
    <p>Oromo people are known for their traditional crafts, which include pottery, weaving, and leatherwork. Oromo baskets, made from grass, are particularly well-known, and are used for storing food, clothing, and other essential items.</p>

    <h2>8. Dress and Clothing</h2>
    <p>Oromo traditional clothing often involves woven garments like Shamma (a cloth wrapped around the body) for both men and women. Women also wear headscarves, often decorated with beads and jewelry. Their attire is often brightly colored, symbolizing pride, identity, and beauty.</p>

    <h2>9. Oromo Identity and Struggles</h2>
    <p>The Oromo people have historically faced challenges related to their identity, particularly under the Ethiopian imperial and Derg regimes. During these periods, their language, culture, and political rights were suppressed. However, the rise of the Oromo Liberation Front (OLF) and the Oromo Federalist Movement in the 20th century was a significant turning point in asserting their rights, both culturally and politically. In recent years, Oromo identity has become more recognized, and they have made considerable strides in the political landscape, especially with the election of Abiy Ahmed, an Oromo, as Prime Minister of Ethiopia in 2018.</p>

    <h2>10. Oromo Cuisine</h2>
    <p>Oromo cuisine is rich and diverse, with a variety of staple foods. <br/> Injera (a sourdough flatbread made from teff flour) is a common part of their diet, accompanied by stews such as Wot (meat or vegetable-based stews). <br/> Buna (coffee) plays a central role in social gatherings, and the famous Ethiopian coffee ceremony is often an important part of community life.</p>

    <h2>11. Gender Roles and Women's Rights</h2>
    <p>Traditionally, Oromo women have played significant roles in both family life and agricultural work. While gender roles are generally distinct, women are integral to their communities and hold positions of influence, particularly within family and clan structures. However, like many communities around the world, Oromo women face challenges related to education, health care, and gender equality, although strides are being made in addressing these issues.</p>

    <h2>12. Oromo Literature</h2>
    <p>The Oromo people have a strong tradition of oral literature, with storytelling, proverbs, riddles, and poems passed down through generations. Many of these stories reflect the values of their society, such as respect for elders, community solidarity, and the importance of nature.</p>

    <p>Overall, the Oromo people's culture reflects a deep connection to their land, language, and traditions, while also evolving in response to modern challenges. Their resilience in preserving their identity amid adversity is a testament to their enduring strength and vibrancy.</p>
      `, },
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

export default AfaanOromo;

