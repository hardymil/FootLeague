import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { StyledList } from '../config/theme'

const FavoriteTeam = props => {
  console.log('FavoriteTeam -> props', props.match.params)
  const [goalsList, setGoalsList] = useState({})
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
        setGoalsList(res.data.api.statistics.matchs)
      })
      .catch(err => {
        console.log(err)
      })
  }, [])

  return Object.keys(goalsList).map((value, i) => {
    console.log(Object.values(goalsList[value]))
    return (
      <StyledList>
        <li key={i}>
          <p>{value}</p>
          <li>
            <ul>{goalsList[value].away}</ul>
            <ul>{goalsList[value].home}</ul>
            <ul>{goalsList[value].total}</ul>
          </li>
        </li>
      </StyledList>
    )
  })
}

export default FavoriteTeam
