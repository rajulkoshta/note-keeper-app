import React from "react";
import Header from "./Header";
import Note from "./Note";
import Footer from "./Footer";
import notes from "./note";

function AddDesc(desc){
  return (
      <Note 
        title = {desc.title}
        content = {desc.content}
      />
  );
}

function App(){
    return (
        <div>
          <Header />
         {notes.map(AddDesc)}
          <Footer />
        </div>
    );
}

export default App;