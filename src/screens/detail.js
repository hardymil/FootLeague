import React, { useState, useEffect } from 'react'
import axios from 'axios'

import { publicKey, timeStamp, hash } from '../utils/getHash'

const Detail = props => {
  console.log('Detail -> props', props.match.params.id)
  const [detail, setDetail] = useState({})
  useEffect(() => {
    const generateUrl = `https://gateway.marvel.com/v1/public/characters/${props.match.params.id}`

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
        setDetail(res.data.data.results[0])
      })
      .catch(err => {
        console.log(err)
      })
  }, [])

  return (
    <div>
      <p>detail</p>
      <p>{detail.name}</p>
      <p>{detail.description}</p>
    </div>
  )
}

export default Detail
