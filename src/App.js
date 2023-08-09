import avatar from "./assets/avatar.png";
import "./App.css";

function App() {
  return (
    <div className="avatarZone">
      <img className="avatar" src={avatar} alt="avatar"></img>
      <h1> John Smith</h1>
      <h2>Software Engineer</h2>
      <div className="containerBox">
        <h3>About me</h3>
        <p>
          I am an advocate of self-improvement and I want to help people improve
          their lives through knowledge and application.
        </p>
      </div>
      <div className="containerBox mt-3">
        <h3>Contact me</h3>
        <p>
          Email: sample_john_smith@mail.com | LinkedIn:
          https://www.linkedin.com/
        </p>
      </div>
    </div>
  );
}

export default App;
