import React from "react";
import emojipedia from "../emojipedia";
import Card from "./Card";
import Header from "./m-conponents/Header";
import Footer from "./m-conponents/Footer"



// Entry component for 
function createdCard(emojipedia) {  
      return <Card 
      key={emojipedia.id}
      emoji={emojipedia.emoji}
      name={emojipedia.name}
      meaning={emojipedia.meaning}/>
}

function App() {
  return (
    <div>
      <Header />
      <div>
        <h1>
          <span>Emoji Dictionary</span>
        </h1>
        <dl className="dictionary">{emojipedia.map(createdCard)}</dl>
      </div>
      <Footer />
    </div>
  );
}

export default App;
