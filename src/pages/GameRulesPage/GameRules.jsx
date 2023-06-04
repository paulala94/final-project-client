import React from 'react'
import { Container } from 'react-bootstrap'
import GameRules from '../../components/GameRules/GameRules'

const GameRulesPage = () => {
  return (
    <Container>
        <h1>Cómo jugar</h1>
        <GameRules/>
    </Container>
  )
}

export default GameRulesPage