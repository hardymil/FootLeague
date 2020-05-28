import React, { useState } from 'react'

const Counter = () => {
  const [counter, setCounter] = useState(0)
  return (
    <div>
      <p>Counter</p>
      <p>{counter}</p>
      <button onClick={() => setCounter(counter - 1)}>-</button>
      <button onClick={() => setCounter(counter + 1)}>+</button>
    </div>
  )
}
export default Counter
