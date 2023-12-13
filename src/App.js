import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function RiotText() {
  const [content, setContent] = useState("");

  useEffect(() => {
    fetch("/riot.txt")
      .then((response) => response.text())
      .then((text) => setContent(text));
  }, []);

  return <div>{content}</div>;
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/riot.txt" element={<RiotText />} />
        {/* ... other routes ... */}
      </Routes>
    </Router>
  );
}

export default App;
