import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Pagination from '../pagination'

const League = () => {
  const valueOffset = 20
  const [leagueList, setLigueList] = useState([])
  const [currentPage, setCurrentPage] = useState(0)
  const [total, setTotal] = useState(0)

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
        setLigueList(res.data.api.leagues)
        setTotal(res.data.api.results)
      })
      .catch(err => {
        console.log(err)
      })
  }, [])

  const [tabLeague, setTabLeague] = useState([])

  useEffect(() => {
    const indexItem = valueOffset * currentPage
    setTabLeague(leagueList.splice(indexItem, valueOffset))
  }, [leagueList, currentPage])

  return (
    <div>
      <ul>
        {tabLeague.map(item => (
          <li key={item.league_id}>
            <Link to={`/classement/${item.league_id}`}>{item.name}</Link>
            <img src={item.logo}></img>
          </li>
        ))}
      </ul>
      <Pagination
        total={total}
        setCurrentPage={setCurrentPage}
        valueOffset={valueOffset}
      ></Pagination>
    </div>
  )
}

export default League
