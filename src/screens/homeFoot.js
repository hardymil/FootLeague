import React, { useState, useEffect } from 'react'

const HomeFoot = () => {
  const [favo, setFavo] = useState(JSON.parse(localStorage.getItem('favorite')))
  useEffect(() => {
    console.log('Favorite -> favo', favo)
  })
  return (
    <div>
      <p>HomeFoot</p>
    </div>
  )
}

export default HomeFoot
