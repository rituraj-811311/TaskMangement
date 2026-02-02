import "./About.css";

function About() {
  return (
    <div className="about">
      <h1>About Task Management App</h1>

      <p className="intro">
        This Task Management App is built using React to help users organize
        their daily and monthly tasks efficiently.
      </p>

      <div className="section">
        <h3>✨ Features</h3>
        <ul>
          <li>Daily task management</li>
          <li>Monthly task planning with due dates</li>
          <li>Task completion tracking</li>
          <li>Simple and user-friendly UI</li>
          <li>React Router for navigation</li>
        </ul>
      </div>

      <div className="section">
        <h3>🛠 Technologies Used</h3>
        <ul>
          <li>React.js</li>
          <li>React Router</li>
          <li>JavaScript (ES6)</li>
          <li>HTML & CSS</li>
        </ul>
      </div>

      <div className="section">
        <h3>🎯 Project Purpose</h3>
        <p>
          The goal of this project is to practice real-world React concepts like
          component-based architecture, routing, state management, and clean UI
          design.
        </p>
      </div>
    </div>
  );
}

export default About;
