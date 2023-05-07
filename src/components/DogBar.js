import React from 'react'

function DogBar({pups, onPupClick}) {
    const pupList = pups.map((pup) => {
        return <span key={pup.id} onClick={() => onPupClick(pup.id)}>{pup.name}</span>
    })
  return (
    <>
    {pupList}
    </>
  )
}

export default DogBar