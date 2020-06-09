import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {StyledList} from '../config/theme';

const Classement = props => {
  console.log('Classement -> props', props)
  const [classementList, setClassementList] = useState([])
  const generatUrl = `https://api-football-v1.p.rapidapi.com/v2/leagueTable/${props.match.params.id}`
  useEffect(async () => {
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
        console.log(res.data.api.standings)
        setClassementList(res.data.api.standings[0])
      })
      .catch(err => {
        console.log(err)
      })
  }, [])

  const handleFavorite = team => {
    console.log('handleFavorite -> team', team)
    const currentFavorite = localStorage.getItem('favorite')
      ? JSON.parse(localStorage.getItem('favorite'))
      : []

    const isPresent = currentFavorite.map(e => e.id).indexOf(team.id)
    console.log('isPresent', isPresent)

    if (isPresent === -1) {
      currentFavorite.push(team)
      localStorage.setItem('favorite', JSON.stringify(currentFavorite))
    } else {
      const filteredEquipe = currentFavorite.filter(
        equipe => equipe.team_id != team.team_id
      )
      console.log('filteredEquipe', filteredEquipe)
      localStorage.setItem('favorite', JSON.stringify(filteredEquipe))
    }
  }
  return (
    <StyledList>
      <p>classement</p>
      {classementList.map(item => (
        <li key={item.team_id}>
          <p>{item.rank}</p>
          <p>{item.teamName}</p>
          <img src={item.logo}></img>
          <button
            onClick={() =>
              handleFavorite({ id: item.team_id, name: item.teamName })
            }
          >
            add to favorite
          </button>
        </li>
      ))}
    </StyledList>
  )
}

export default Classement
