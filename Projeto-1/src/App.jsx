import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [count, setCount] = useState(0)

  function Contador(){
    setCount(count + 1)
  }

  return (
    <>
      <div>
        <BotaoContadorCompartilhado count={count} onClick={Contador} />
        <Lista />
        <BotaoContadorCompartilhado count={count} onClick={Contador} />
        <BotaoContadorNormal />
      </div>
    </>
  )
}

function BotaoContadorCompartilhado({count, onClick}){

  let estilo = {color: 'white', backgroundColor: 'gray'}
  let divisor = ''

  if ( count % 2 == 0){
    estilo.color = 'white'
    divisor = '2'
  } else if ( count % 3 == 0){
    estilo.color = 'blue'
    divisor = '3'
  } else {
    estilo.color = 'red'
    divisor = 'outro número'
  }

  return (
    <div style={{border: '2px solid gray'}}>
      <h1>Contador Compartilhado </h1>
      <button onClick={onClick} style={estilo}>Contador</button>
      <p>Clicado {count} vezes</p>
      <p>Número de cliques divisível por {divisor}</p>
    </div>
  )
}

function BotaoContadorNormal(){

  const [count_proprio, setCount_proprio] = useState(0)

  function Contador_proprio(){
    setCount_proprio(count_proprio + 1)
  }

  let estilo = {color: 'white', backgroundColor: 'gray'}
  let divisor = ''

  if ( count_proprio % 2 == 0){
    estilo.color = 'white'
    divisor = '2'
  } else if ( count_proprio % 3 == 0){
    estilo.color = 'blue'
    divisor = '3'
  } else {
    estilo.color = 'red'
    divisor = 'outro número'
  }

  return (
    <div style={{border: '2px solid gray'}}>
      <h1>Contador Normal</h1>
      <button onClick={Contador_proprio} style={estilo}>Contador</button>
      <p>Clicado {count_proprio} vezes</p>
      <p>Número de cliques divisível por {divisor}</p>
      <Alerta />
    </div>
  )
}

function Lista(){

  const pessoas = [
    {nome : 'Joao', idade : 15, peso : 67},
    {nome : 'Pedro', idade : 16, peso : 76},
    {nome : 'Jose', idade : 37, peso : 89}
  ]

  let nova_lista = pessoas.map(pessoa => (
    <li key={pessoa.nome}>
      {pessoa.nome}, {pessoa.idade}, {pessoa.peso}
    </li>
  ))

  return (
    <div style={{border: '2px solid gray'}}>
      <ul>
        {nova_lista}
      </ul>
    </div>
  )
}

function Alerta(){
  
  function Alertar(){
    alert('OI')
  }

  return (
    <div style={{border: '2px solid gray'}}>
      <button onClick={Alertar}>Alertar</button>
    </div>
  )
}

export default App

