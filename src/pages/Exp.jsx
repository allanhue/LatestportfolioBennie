import React from "react";
import "../css/style.css";

const Exp=()=> {
  return (
    <div className="container">
      <h1 style={{ display: "flex", justifyContent: "center" }}>
      </h1>
      <div className="container">
        <div>
          <div style={{ display: "flex", gap: "1rem" }}>
            <div>
              <h2
                style={{
                  border: "3px solid var(--border-color)",
                  display: "inline-block",
                  padding: "1rem",
                }}
              >
                2024
              </h2>
              <h2>IBM Coursera</h2>
              <p>
                I graduated with a certificate in{" "}
                <span style={{ color: "var(--accent)", fontWeight: "bold" }}>
                  Frontend Development / Backend Developer 
                </span>{" "}
                from IBM Coursera, where I developed a strong foundation in software development, making me able to complete projects like an e-commerce website with the help of several technologies end to end. I developed a client relation where I charged on projects on Fiverr and Upwork, hosting on Netlify if needed. This experience made me improve my progress and never look back on my mentality and focus on progressing. I made large tasks small stepping stones since my journey wasn't an easy one.
                <br /><br />
                Being part of HackerRank has been a significant part of my journey, taking quizzes every day and asking for mentorship from peers. Version control with Git and GitHub played a crucial role in all advancements, ensuring I never lost my code during the development process. AI has been transformative and crucial in my daily tasks, especially in my research projects as an aspiring future tech in AI models.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Exp;
