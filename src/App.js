import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import { useState } from "react";
function App() {
  const [notes,setNotes] = useState([]);
  function addNote(newNote){
    setNotes(prevNotes => {
       return  [...prevNotes,newNote];
    })
  }

  function deleteNote(id){
    setNotes(prevNote =>{
      //prevNote contains all the previous notes
      //filter takes two argument 1 - items 2 - index 
      return prevNote.filter((noteItem , index) => {
        return index !== id //filter threw the prevnotes until index doesn't match the id
      })
    })
  }
  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote}/>
    {  notes.map((noteItem,index) => {
           return <Note key={index} id={index} title={noteItem.title} content={noteItem.content}  onDelete={deleteNote}/>
      }) } 
      <Footer />
    </div>
  );
}

export default App;
