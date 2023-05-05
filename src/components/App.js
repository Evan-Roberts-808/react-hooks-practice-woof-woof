import React, { useState, useEffect } from "react";
import PupBar from "./PupBar.js"
import PupInfo from "./PupInfo.js"

function App() {
  const [pups, setPups] = useState([])
  const [pupId, setPupId] = useState(null)

  let selectedPup = pups.find((pup) => pup.id === pupId)

  useEffect(() => {
    fetch('http://localhost:3001/pups')
    .then((response) => response.json())
    .then((pups) => {
      setPups(pups)
    })
  }, [])

  function handlePupId(pup)  {
    setPupId(pup)
  }

  function handleUpdate(updated) {
    const updatedPup = pups.map((pup) => 
    pup.id === updated.id ? updated : pup
    );
    setPups(updatedPup)
  }

console.log(pupId)

  return (
    <div className="App">
      <div id="filter-div">
        <button id="good-dog-filter">Filter good dogs: OFF</button>
      </div>
      <div id="dog-bar"><PupBar pups={pups} onPupClick={handlePupId}/></div>
      <div id="dog-summary-container">
        <h1>DOGGO:</h1>
        <div id="dog-info"><PupInfo pup={selectedPup} onUpdate={handleUpdate}/></div>
      </div>
    </div>
  );
}

export default App;
