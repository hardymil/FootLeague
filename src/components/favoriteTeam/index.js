import React, { useState, useEffect } from 'react'
import axios from 'axios'

const FavoriteTeam = props => {
  console.log('FavoriteTeam -> props', props.match.params)
  const [favTeam, setFavTeam] = useState({})
  const generatUrl = `https://api-football-v1.p.rapidapi.com/v2/statistics/${props.match.params.id_league}/${props.match.params.id}`

  useEffect(() => {
    axios({
      method: 'GET',
      url: generatUrl,
      headers: {
        'content-type': 'application/octet-stream',
        'x-rapidapi-host': 'api-football-v1.p.rapidapi.com',
        'x-rapidapi-key': 'e4325cc829msh805f610549e0035p1b0675jsnb4a480c0cf87'
      }
    })
      .then(res => {
        console.log(res.data.api.statistics)
        //setFavTeam(res.data.api.statistics)
      })
      .catch(err => {
        console.log(err)
      })
  }, [])
  return (
    <div>
      <p>Team</p>
    </div>
  )
}

export default FavoriteTeam
