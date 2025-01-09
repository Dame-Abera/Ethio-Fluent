import React from "react";
import Header from "./headers";
import Footer from "./footer";
import "../components/css/culture.css";

function Culture() {
  return (
    <div className="culture-container">
      <div className="culture-content" style={{display: 'flex', flexDirection: 'column', alignItems: "center", justifyContent: 'center'}}>
        <h1>Ethiopian Cultural Insights</h1>

        <section>
          <h2>The Diversity of Ethiopian Culture</h2>
          <p>
            Ethiopia is one of the oldest nations in the world with a rich and diverse culture. With over 80 different
            ethnic groups, the country has a remarkable variety of languages, traditions, music, art, and food. The
            Ethiopian culture is a blend of influences from various civilizations, but its deep roots in indigenous
            traditions are a key defining characteristic.
          </p>

          <h3>Languages</h3>
          <p>
            Ethiopia is home to a wide array of languages, each tied to its unique ethnic group. The most widely spoken
            languages include Amharic, Afaan Oromo, and Tigrigna, but there are over 80 languages spoken across the
            country. The diversity of languages reflects the country's cultural richness and the significance of
            language in preserving history and identity.
          </p>

          <h3>Music and Dance</h3>
          <p>
            Ethiopian music and dance are central to cultural celebrations and daily life. The melodies are often based on
            pentatonic scales, and the rhythm is an integral part of the music. Traditional dances like the "Eskista," which
            involves intricate shoulder movements, are popular throughout the country. Music plays a major role in religious
            and cultural events, and various regional styles contribute to the country's musical diversity.
          </p>

          <h3>Art and Architecture</h3>
          <p>
            Ethiopian art is unique in its use of vibrant colors, religious symbolism, and intricate designs. One of the most
            famous examples of Ethiopian art is the iconic religious paintings found in the country’s ancient churches, such as
            those at Lalibela. Ethiopian architecture is also noteworthy, with the ancient rock-hewn churches in Lalibela being
            a UNESCO World Heritage site.
          </p>

          <h3>Food</h3>
          <p>
            Ethiopian cuisine is famous for its use of injera, a spongy sourdough flatbread, served with a variety of stews and
            dishes like kitfo (minced meat) and doro wat (spicy chicken stew). Meals are often communal, and food plays an
            important role in bringing people together. The use of berbere spice, a key ingredient in Ethiopian cooking, adds
            rich flavor to many dishes.
          </p>
        </section>

        <section>
          <h2>Festivals and Traditions</h2>
          <p>
            Ethiopians celebrate many festivals throughout the year, often based on the Ethiopian Orthodox Church calendar.
            Major holidays include Timkat (Epiphany), Meskel (Finding of the True Cross), and Enkutatash (Ethiopian New Year).
            These festivals are often marked by elaborate rituals, religious processions, and family gatherings, reinforcing the
            importance of tradition in Ethiopian society.
          </p>

          <h3>Timkat (Epiphany)</h3>
          <p>
            Timkat is one of the most significant religious festivals in Ethiopia, celebrating the baptism of Jesus Christ in
            the Jordan River. The festival is celebrated with church services, processions, and ritual bathing, marking a time of
            spiritual renewal and community unity.
          </p>

          <h3>Meskel (Finding of the True Cross)</h3>
          <p>
            Meskel celebrates the discovery of the True Cross by Queen Helena in the 4th century. The event is commemorated with
            large bonfires, known as "Demera," symbolizing the burning of incense by the Queen as she searched for the cross.
          </p>
        </section>
      </div>
    </div>
  );
}

export default Culture;
