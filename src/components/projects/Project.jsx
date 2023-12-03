import React, { useState } from "react";
import "./project.scss";

const Project = () => {
  const [cards] = useState([
    {
      title: "Scholarly Circle",
      link: "https://github.com/dipkorimon/Scholarly-Circle",
      text: "Scholarly Circle is a project and thesis reports sharing platform for the Department of Computer Science and Telecommunication Engineering, Noakhali Science and Technology University.",
    },
    {
      title: "Rapid Weather",
      link: "https://github.com/dipkorimon/Rapid-Weather",
      text: "Rapid Weather is a web application that provides users with real-time or forecasted weather information. This application is designed to help users stay informed about current weather conditions, temperature, humidity, wind speed, precipitation, and other relevant meteorological data for a specific location or multiple locations.",
    },
    {
      title: "My Personal Portfolio",
      link: "https://github.com/dipkorimon/My-Personal-Portfolio",
      text: "This is my personal Portfolio website. A personal portfolio website is a website that showcases an individual's work, achievements, skills, and experiences. It serves as an online platform to present and promote your professional or creative work to potential employers, clients, or collaborators.",
    },
    {
      title: "Use case of Computer Vision on Medical Domain",
      link: "http://wprince00.pythonanywhere.com/",
      text: "This is an implementation of computer vision. I have done the front end of this project. This has several features like Brain Tumor Detection, Types of Brain Tumors and can detect Colon Cancer (Colon Benign and Colon Adenocarcinoma)",
    },
  ]);

  return (
    <div>
      <section>
        <div className="container">
          <h1>Projects</h1>
          <div className="cards">
            {cards.map((card, index) => (
              <div className="card">
                <h3>{card.title}</h3>
                <p>{card.text}</p>
                <a href={card.link}>
                  <button className="btn">Show Project</button>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Project;
