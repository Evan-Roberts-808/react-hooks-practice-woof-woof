import React from 'react'

function DogBar({pups, onPupClick}) {
    const pupsNav = pups.map((pup) => {
        return <span key={pup.id} onClick={() => onPupClick(pup.id)}>{pup.name}</span>
      })
  return (
    <>{pupsNav}</>
  )
}

export default DogBar