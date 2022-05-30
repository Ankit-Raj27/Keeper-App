import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes";

function App() {
  return (
    <div>
      <Header />
      <Footer />
      <div>
        {notes.map((entry) => 
        (
          <Note key={entry.id} title={entry.title} content={entry.content} />
        ))}
      </div>
    </div>
  );
}

export default App;
