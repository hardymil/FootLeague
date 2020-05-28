import React from 'react'
import { Link } from 'react-router-dom'
import MarvelCharacters from '../components/marvelCharacters'

const Home = props => {
  console.log('Home -> props', props)
  return (
    <div>
      <p>home</p>
      <Link to='/login'> To login </Link>
      <MarvelCharacters></MarvelCharacters>
    </div>
  )
}

export default Home
