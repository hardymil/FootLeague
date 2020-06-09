import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Favo = () => {
  const [favo, setFavo] = useState(JSON.parse(localStorage.getItem('favorite')))
  return (
    <div>
      {favo.map(team => (
        <div key={team.id}>
          <Link to={`/favoriteTeam/${team.id}/${team.league_id}`}>
            {team.name}
          </Link>
        </div>
      ))}
    </div>
  )
}

export default Favo
