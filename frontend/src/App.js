import React, { useEffect, useState } from "react";
import "./App.css";
import FeedbackForm from "./FeedbackForm";
import { db } from './firebase';

function App() {
  const [destinations, setDestinations] = useState([]);

  useEffect(() => {
   fetch('https://travel-website-backend-x127.onrender.com/api/destinations')
      .then(res => res.json())
      .then(data => setDestinations(data))
      .catch(err => console.error("Fetch error:", err));
  }, []);

  return (
    <div>
      <section className="hero">
        <h1>🌍 Travel Explorer</h1>
        <p>Explore beautiful destinations around the world</p>
      </section>

      <section className="destinations">
        <h2>Top Destinations</h2>
        <div className="grid">
          {destinations.map((d, i) => (
            <div key={i} className="card">
              <img src={d.image} alt={d.name} />
              <h3>{d.name}</h3>
              <p>{d.description}</p>
            </div>
          ))}
        </div>
    </section>

    {/* CONTACT */}
    <FeedbackForm />

  </div>
);
}

export default App;