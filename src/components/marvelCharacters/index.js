import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

import { publicKey, timeStamp, hash } from '../../utils/getHash'

const MarvelCharacters = () => {
  const [marvelCharactersList, setMarvelCharactersList] = useState([])

  useEffect(async () => {
    const generateUrl = 'https://gateway.marvel.com/v1/public/characters'

    axios({
      method: 'GET',
      url: generateUrl,
      params: {
        ts: timeStamp,
        apikey: publicKey,
        hash: hash
      }
    })
      .then(res => {
        console.log(res)
        setMarvelCharactersList(res.data.data.results)
      })
      .catch(err => {
        console.log(err)
      })
  }, [])

  return (
    <ul>
      {marvelCharactersList.map(item => (
        <li key={item.id}>
          <Link to={`/detail/${item.id}`}>{item.name}</Link>
          <p>{item.description}</p>
          <img src={item.thumbnail.path + '.' + item.thumbnail.extension}></img>
        </li>
      ))}
    </ul>
  )
}

export default MarvelCharacters
