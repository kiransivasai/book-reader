import React, { useState } from "react";
import "./BookRead.scss";

const BookRead = () => {
  const [bookInput, setBookInput] = useState("");
  const [paused, setPaused] = useState(false);
  const msg = new SpeechSynthesisUtterance();

  const toogleReading = (e) => {
    if (paused) {
      window.speechSynthesis.resume();
    } else {
      window.speechSynthesis.pause();
    }
    setPaused(!paused);
  };
  const startReading = async () => {
    msg.text = bookInput;
    window.speechSynthesis.speak(msg);
  };
  return (
    <div className="book-read">
      <textarea
        rows="10"
        cols="10"
        placeholder="Enter the story to read"
        className="book-input"
        value={bookInput}
        onChange={(e) => setBookInput(e.target.value)}
      />
      <div className="book-play-options">
        <button
          className={`book-btn ${paused ? "btn-resume" : "btn-pause"}`}
          onClick={(e) => toogleReading(e)}
        >
          {paused ? "Resume" : "Pause"}
        </button>
        <button className="book-btn btn-start" onClick={(e) => startReading(e)}>
          Start
        </button>
      </div>
    </div>
  );
};

export default BookRead;
