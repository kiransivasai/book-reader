import axios from "axios";
import React, { useState } from "react";
import "./BookRead.scss";

const BookRead = () => {
  const [bookInput, setBookInput] = useState("");
  const [audioURI, setAudioURI] = useState("");
  const readBook = async () => {
    const response = await axios.post("http://localhost:5000/get_audio", {
      text: bookInput,
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
      responseType: "blob",
    });
    const audioUrl = window.URL.createObjectURL(new Blob([response.data]));
    setAudioURI(audioUrl);
    console.log(audioUrl);
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
      <button className="book-btn" onClick={(e) => readBook(e)}>
        Play
      </button>
      {!!audioURI && (
        <audio controls src={audioURI}>
          Your browser does not support the
          <code>audio</code> element.
        </audio>
      )}
    </div>
  );
};

export default BookRead;
