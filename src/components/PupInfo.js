import React from 'react'

function PupInfo({ pup, onUpdate }) {
if (!pup) return <h3>Select a Pup</h3>

function handleGvB() {
    pup.isGoodDog = !pup.isGoodDog
    fetch(`http://localhost:3001/pups/${pup.id}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            'isGoodDog' : pup.isGoodDog
        })
    })
    .then(response => response.json())
    .then((updated) => {
        onUpdate(updated)
    })
}

  return (
    <>
    <img src={pup.image} alt={pup.name}/> 
    <h2>{pup.name}</h2>
    <button onClick={handleGvB}>{pup.isGoodDog ? "Good Dog!" : "Bad Dog!"}</button>
    </>
  )
}

export default PupInfo