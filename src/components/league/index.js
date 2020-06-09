import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import {StyledList} from '../../config/theme';
// xsrfCookieName: "XSRF-TOKEN"
// xsrfHeaderName: "X-XSRF-TOKEN"

const League = () => {
  const [leagueList, setLigueList] = useState([])
  useEffect(async () => {
    axios({
      method: 'GET',
      url: 'https://api-football-v1.p.rapidapi.com/v2/leagues/current/',
      headers: {
        'content-type': 'application/octet-stream',
        'x-rapidapi-host': 'api-football-v1.p.rapidapi.com',
        'x-rapidapi-key': 'e4325cc829msh805f610549e0035p1b0675jsnb4a480c0cf87'
      }
    })
      .then(res => {
        console.log(res)
        setLigueList(res.data.api.leagues)
      })
      .catch(err => {
        console.log(err)
      })
  }, [])
  return (
    <StyledList>
      {leagueList.map(item => (
        <li key={item.league_id}>
          <Link to={`/classement/${item.league_id}`}>{item.name}</Link>
          <img src={item.logo}/>
          <button> Vers Ligue </button>
        </li>
      ))}
    </StyledList>
  )
}

export default League
