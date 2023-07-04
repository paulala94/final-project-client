import React, { useEffect, useState } from 'react'

const Timer = ({ timeCounter, setTimeCounter, ROUND_TIME, startRound, setStartRound, currentTeam, setCurrentTeam }) => {

  const [counter, setCounter] = useState(ROUND_TIME)


  useEffect(() => {

    if(startRound === true && counter > 0){
      
      setTimeout(() => setCounter(counter - 1), 1000)
       
    }
    else if(counter == 0) setStartRound(false)
    
    if(startRound === false){
      // currentTeam == 1 && setCurrentTeam(2)
      // currentTeam == 2 && setCurrentTeam(1)
      setTimeCounter(0)
    }


  // counter > 0 ? setTimeout(() => setCounter(counter - 1), 1000) : setTimeCounter(0)
  
  }, [counter, startRound])

  useEffect(()=> {
    if(timeCounter === 0){
       currentTeam == 1 && setCurrentTeam(2)
      currentTeam == 2 && setCurrentTeam(1)
    }
  }, [timeCounter])

  useEffect(()=> {
    setCounter(ROUND_TIME)
  }, [startRound])

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