import React, { useEffect, useState } from 'react'
import GameSwipe from '../GameSwipe/GameSwipe'

const Timer = ({ setTimeCounter, ROUND_TIME }) => {

  const [counter, setCounter] = useState(ROUND_TIME)

  useEffect(() => {
    counter > 0 ? setTimeout(() => setCounter(counter - 1), 1000) : setTimeCounter(0)
  }, [counter])

  return (
    <div>
      {
        counter > 0
          ?
          <h1>{counter}</h1>
          :
          <h1>¡Sacabó!</h1>
      }
    </div>
  )
}

export default Timer