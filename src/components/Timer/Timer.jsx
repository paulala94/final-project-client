import React, { useEffect, useState } from 'react'
import GameSwipe from '../GameSwipe/GameSwipe'

const Timer = () => {

    const [counter, setCounter] = useState(30)

    useEffect(() => {
    counter > 0 && setTimeout(() => setCounter(counter - 1), 1000)
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
