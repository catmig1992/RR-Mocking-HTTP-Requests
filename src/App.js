import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [gitHubName, setGitHubName] = useState(" ");

  useEffect(() => {
    fetch("https://api.github.com/users/learningToCode1234")
      .then((res) => res.json())
      .then((data) => {
        setGitHubName(data.name);
      });
  }, []);

  return (
    <div className="App">
      <h1>Github Profile Info:</h1>
      <h2>{gitHubName}</h2>
    </div>
  );
}

export default App;
