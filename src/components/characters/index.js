import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Characters = () => {
  const [charactersList, setCharactersList] = useState([])

  useEffect(async () => {
    const result = await axios(`http://hp-api.herokuapp.com/api/characters`)
    setCharactersList(result.data)
  }, [])

  return (
    <ul>
      {charactersList.map(item => (
        <li key={item.name}>
          <p>{item.name}</p>
          <p>{item.house}</p>
          <img src={item.image}></img>
        </li>
      ))}
    </ul>
  )
}

export default Characters
