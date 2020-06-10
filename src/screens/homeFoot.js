import React, { useState } from 'react'
import League from '../components/league'
import Favo from '../components/favo'

const HomeFoot = () => {
  const [favo, setFavo] = useState(JSON.parse(localStorage.getItem('favorite')))

  return (
    <div>
      <p>Home Foot</p>
      <Favo />
      <p>Ligue</p>
      <League />
    </div>
  )
}

export default HomeFoot
