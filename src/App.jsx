import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");

  // Fungsi untuk mengambil kutipan dari API
  const fetchQuote = async () => {
    try {
      const response = await fetch("https://api.quotable.io/random");
      const data = await response.json();
      console.log(data);
      setQuote(data.content);
      setAuthor(data.author);
    } catch (error) {
      console.error("Error fetching the quote:", error);
    }
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "20%" }}>
      <h1>Random Quote Generator</h1>
      <p style={{ fontSize: "1.5rem" }}>"{quote}"</p>
      <p>- {author}</p>
      <button onClick={fetchQuote}>Generate New Quote</button>
    </div>
  );
}

export default App;
