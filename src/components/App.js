import React, { useState, useEffect } from "react";
import DogBar from './DogBar'
import DogInfo from './DogInfo'

function App() {

const [ pups, setPups ] = useState([])
const [pupId, setPupId] = useState(null)
const [ filteredPup, setFilteredPup ] = useState(false)

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
let filteredPups = pups

if(filteredPup){
   filteredPups = filteredPups.filter((pup) => pup.isGoodDog )
}


  return (
    <div className="App">
      <div id="filter-div">
        <button id="good-dog-filter" onClick={() => setFilteredPup(prevFilteredPup => !prevFilteredPup)}>Filter good dogs: {filteredPup ? "ON" : 'OFF'}</button>
      </div>
      <div id="dog-bar"><DogBar pups={filteredPups} onPupClick={handlePupId}/></div>
      <div id="dog-summary-container">
        <h1>DOGGO:</h1>
        <div id="dog-info"><DogInfo pup={selectedPup} onUpdate={handleUpdate}/></div>
      </div>
    </div>
  );
}

export default App;
