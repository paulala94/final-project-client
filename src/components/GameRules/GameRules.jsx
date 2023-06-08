import React from 'react'
import { Container } from 'react-bootstrap'
import one from '../../assets/img/uno.png'
import two from '../../assets/img/dos.png'
import three from '../../assets/img/tres.png'
import four from '../../assets/img/cuatro.png'
import { Link } from 'react-router-dom'
import '../GameRules/GameRules.css'


const GameRules = () => {
  return (
    <Container className='game-rules-container'>
      <section className='game-rules-section'>
        <p>¿De qué va <span className='game-title'>Sacabó</span>?</p>
        <p>¡Bienvenidxs al emocionante mundo de <span className='game-title'>Sacabó</span>, el juego que pondrá a prueba tu habilidad para adivinar y tu sentido del humor! Prepárate para una explosión de diversión y risas. </p>

        <p>¡Aquí están las reglas!</p>
        <img src={one} alt="" className='numeros' />
        <p>
          Antes de nada, en <span className='game-title'>Sacabó</span> puedes elegir jugar con las cartas originales, o con las tuyas propias. Si quieres crear tus propias cartas necesitarás un <Link to='/perfil'>usuario</Link>. Una vez tengas creado tu perfil, tienes que <Link to='/crear-un-mazo'>crear un mazo</Link>. Una vez tengas este paso, solo tienes que <Link to='/crear-cartas'>crear las cartas</Link> y añadirlas al mazo al que quieres que pertenezcan.
          Primero tenéis que dividiros en dos equipos (porque todo es más divertido en equipo). Pueden ser Los Tacos vs. Las Pizzas, Los Pingüinos vs. Los Koalas, ¡lo que quieras! Solo asegúrate de que todos estén listos para competir.
        </p>
        <p>Una vez que los equipos estén formados es hora de jugar, ¿quién empieza? El último jugador en haber ido al baño 💩</p>

        <p>¡<span className='game-title'>Sacabó</span> tiene tres rondas! </p>
        <img src={two} alt="" className='numeros' />
        <p> En la primera, hay 30 segundos para describir el nombre en la tarjeta, sin usar el nombre en sí. ¡Es como un juego de mímica pero con palabras! Puedes hacer gestos, sonidos, rimas, lo que sea necesario para que tu equipo adivine correctamente. Pero recuerda, no puedes decir partes del nombre o utilizar palabras que sean demasiado obvias.</p>
        <img src={three} alt="" className='numeros' />
        <p>En la segunda ronda, las mismas cartas tienen que ser adivinadas, ¡pero ahora solo se puede usar una palabra para describirlas!</p>
        <img src={four} alt="" className='numeros' />
        <p>En la tercera ronda, solo se permite hacer mímica. ¡La tensión y las risas están garantizadas!</p>
        <p>El equipo con más puntos se lleva la gloria y el título de campeón. ¡Podrás presumir de tus habilidades de adivinanza durante días!</p>

        <p>Y recuerda, en <span className='game-title'>Sacabó</span> no hay respuestas correctas o incorrectas. La clave está en la comunicación rápida y efectiva, en ser creativo y en reírte de los momentos absurdos. ¡Diviértete y no te tomes demasiado en serio!</p>

        <p>Así que adelante, reúne a tu pandilla de amigos, prepara tu mejor voz de imitación y comienza a jugar a <span className='game-title'>Sacabó</span>. ¡La diversión está garantizada en cada tarjeta!</p>

      </section>

      <Link to='/juego' className='play-bt'>A JUGAR</Link>
    </Container>
  )
}

export default GameRules