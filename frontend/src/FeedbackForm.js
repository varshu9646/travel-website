import React, { useState } from 'react';
import { db } from './firebase'; 
import { collection, addDoc } from "firebase/firestore";

function FeedbackForm() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // This part sends the data to your Firebase Firestore
      await addDoc(collection(db, "messages"), {
        name: name,
        feedback: message,
        timestamp: new Date()
      });
      alert("Feedback submitted successfully!");
      setName("");
      setMessage("");
    } catch (error) {
      console.error("Error adding document: ", error);
      alert("Error submitting feedback. Check your Firebase Rules.");
    }
  };

  return (
    <div style={{ marginTop: "40px", textAlign: "center" }}>
      <h2>Give Feedback</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          style={{ padding: "10px", width: "250px", marginBottom: "10px" }}
        />
        <br />
        <textarea
          placeholder="Your Feedback"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          style={{ padding: "10px", width: "250px", height: "100px" }}
        />
        <br /><br />
        <button type="submit" style={{
          padding: '10px 20px',
          backgroundColor: '#007bff',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer'
        }}>
          Submit Feedback
        </button>
      </form>
    </div>
  );
}

export default FeedbackForm;