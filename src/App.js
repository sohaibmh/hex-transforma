import React, { useState } from "react";
import profileImg from "./profile-img.png";
import "./App.css";

function App() {
  const [lightMode, setLightMode] = useState(false);

  if (lightMode) document.body.style.backgroundColor = "#F4FAFF";
  else document.body.style.backgroundColor = "#212836";

  const lineNumbers = () => {
    let returnVal = [];
    for (let i = 1; i <= 45; i++) {
      returnVal.push(i);
    }

    return returnVal.map((n) => {
      return (
        <li key={n.toString()} className="numbers">
          {n}
        </li>
      );
    });
  };

  return (
    <div className="App">
      <div
        className="lineNumbers"
        style={lightMode ? { color: "#BEB7DF" } : {}}
      >
        <ul>{lineNumbers()}</ul>
      </div>
      <svg
        className="themeMode"
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill={lightMode ? "#662E9B" : "#97a7c8"}
        onClick={() => setLightMode(!lightMode)}
      >
        <rect width="2" height="2" x="9" y="2"></rect>
        <rect
          width="2"
          height="2"
          x="13.88"
          y="4.051"
          transform="rotate(45.02 14.88 5.051)"
        ></rect>
        <rect width="2" height="2" x="16" y="9"></rect>
        <rect
          width="2"
          height="2"
          x="13.949"
          y="14.019"
          transform="rotate(-135.02 14.95 15.019)"
        ></rect>
        <rect width="2" height="2" x="9" y="16"></rect>
        <rect
          width="2"
          height="2"
          x="3.98"
          y="13.949"
          transform="rotate(-134.98 4.98 14.95)"
        ></rect>
        <rect width="2" height="2" x="2" y="9"></rect>
        <rect
          width="2"
          height="2"
          x="4.05"
          y="4.121"
          transform="rotate(44.98 5.05 5.12)"
        ></rect>
        <path d="M10,6 C7.8,6 6,7.8 6,10 C6,12.2 7.8,14 10,14 C12.2,14 14,12.2 14,10 C14,7.8 12.2,6 10,6 Z"></path>
        <title>
          {lightMode ? "Switch to dark mode" : "Switch to light mode"}
        </title>
      </svg>

      <div className="profile">
        <h3 className="name" style={lightMode ? { color: "#662E9B" } : {}}>
          &lt; SOHAIB MUBASHIR &gt;
        </h3>
        <p className="role" style={lightMode ? { color: "#716969" } : {}}>
          Software Developer
        </p>
        <img src={profileImg} className="profile-img" alt="profile" />
      </div>
      <br />
      <div
        className="line-1"
        style={lightMode ? { borderLeft: "2px solid #BEB7DF" } : {}}
      >
        <br />
        <div
          className="line-2"
          style={lightMode ? { borderLeft: "2px solid #BEB7DF" } : {}}
        >
          <h4 className="header" style={lightMode ? { color: "#662E9B" } : {}}>
            &lt; PROFILE &gt;
          </h4>
          <p
            className="profileDescription"
            style={lightMode ? { color: "#2D3047" } : {}}
          >
            Results-driven developer with a true passion for making user-focused
            applications. I enjoy the challenge of debugging as well as the
            satisfaction of writing clean, organised code. With a background in
            healthcare and sales, I am persistent, patient and have the
            willingness to always strive for excellence. I love to immerse
            myself within projects and meet goals on a strict deadline.
          </p>
        </div>
        <br />
        <div
          className="line-2"
          style={lightMode ? { borderLeft: "2px solid #BEB7DF" } : {}}
        >
          <h4 className="header" style={lightMode ? { color: "#662E9B" } : {}}>
            &lt; EMPLOYMENT &gt;
          </h4>
          <p
            className="profileDescription"
            style={lightMode ? { color: "#2D3047" } : {}}
          >
            Q Chi Limited: Jan 2020 – Aug 2020 - My first role as a software
            developer following the completion of the intensive software
            engineering bootcamp with Flatiron School. I primarily worked on
            building their marketing project management tool for Visa. Started
            as junior software developer, and briefly with increased role and
            responsibility, my role included:
          </p>
          <div
            className="line-3"
            style={lightMode ? { borderLeft: "2px solid #BEB7DF" } : {}}
          >
            <ul style={lightMode ? { color: "#2D3047" } : {}}>
              <li>
                Developing front-end UX code using: JavaScript, React, HTML, CSS
              </li>
              <li>Integrating front-end UX with back-end NoSQL data stores</li>
              <li>
                Building and maintaining RESTful web services and integrations
              </li>
              <li>Writing and performing unit tests with Jest</li>
              <li>Maintaining clear documentation</li>
              <li>
                Collaborating in Agile Scrum planning, sprints and
                retrospectives
              </li>
            </ul>
          </div>
        </div>
        <br />
        <div
          className="line-2"
          style={lightMode ? { borderLeft: "2px solid #BEB7DF" } : {}}
        >
          <h4 className="header" style={lightMode ? { color: "#662E9B" } : {}}>
            &lt; WEB APP PROJECT &gt;
          </h4>
          <p
            className="profileDescription"
            style={lightMode ? { color: "#2D3047" } : {}}
          >
            ACHIEVE - I created this app during my last module at Flatiron
            School. It allows the user to set up daily goals or get rid of bad
            habits; containing a calendar log to mark whether the goal was
            achieved on any particular day. I used React for front end and Rails
            for back end; utilising Bcrypt and JSON Web Tokens for user
            authentication.
          </p>
        </div>
        <br />
        <div
          className="line-2"
          style={lightMode ? { borderLeft: "2px solid #BEB7DF" } : {}}
        >
          <h4 className="header" style={lightMode ? { color: "#662E9B" } : {}}>
            &lt; WHY I WANT TO JOIN HEXTRANSFORMA &gt;
          </h4>
          <p
            className="profileDescription"
            style={lightMode ? { color: "#2D3047" } : {}}
          >
            I come from a biological science background, and worked in the NHS
            for one year before my change of career into software engineering.
            So I am naturally inclined to working in a company that focuses on
            healthcare. And besides this, it is because HexTransforma is such a
            growing and trusted company. I believe what makes me a very suitable
            candidate for this role is that I have the right skills and
            experience - specifically in JavaScript and React - as well as the
            willingness and flexibility of learning new tools and technology to
            be highly successful in this role.
          </p>
        </div>
        <br />
      </div>
    </div>
  );
}

export default App;
