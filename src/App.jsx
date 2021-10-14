import React from "react";
import Header from "./Header";
import Note from "./Note";
import Footer from "./Footer";
import notes from "./note";


function App(){
    return (
        <div>
          <Header />
         {notes.map(desc => 
      <Note 
        key = {desc.key}
        title = {desc.title}
        content = {desc.content}
      />
)}
          <Footer />
        </div>
    );
}

export default App;