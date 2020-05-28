import React from 'react'
import League from '../components/league'
const Ligues = props => {
  console.log('Ligue -> props', props)
  return (
    <div>
      <p>Ligues</p>
      <League></League>
    </div>
  )
}
export default Ligues
