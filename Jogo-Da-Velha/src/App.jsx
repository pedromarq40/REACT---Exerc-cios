import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  return (
    <>
    <h1>Jogo Da Velha</h1>
      <Jogo_Da_Velha />
    </>
  )
}

function Jogo_Da_Velha(){

  const [vezDoX, setVezDoX] = useState(true)
  const [quadrados, setQuadrados] = useState(Array(9).fill(null))
  //Cria array vazio com 9 casas e coloca null em todos

  const vencedor = verificarVencedor(quadrados)
  let status
  //Cada vez que usa set em um state o componente se refaz, logo, essa função
  //testa o tabuleiro novo e não o antigo

  if(vencedor){
    status = `Vencedor é ${vencedor}`
  } else {
    status = `Vez do ${ vezDoX ? 'X' : 'O'}`
  }


  function marcarJogo(i){
    let novos_quadrados = quadrados.slice()

    if(vencedor){
      alert('Já há um vencedor!')
      return
    }
    
    if(novos_quadrados[i]){ //Acaba a função caso a peça esteja ocupada
      alert('Esse quadrado já está marcado!')
      return 
    }

    if (vezDoX){
      novos_quadrados[i] = 'X'
    } else {
      novos_quadrados[i] = 'O'
    }

    setVezDoX(!vezDoX)
    setQuadrados(novos_quadrados)

  }

  return (
    <>
    <h2>{status}</h2>
      <div className='jogo_da_velha'>
        <Quadrado desenho={quadrados[0]} Marcar={() => marcarJogo(0)} />
        <Quadrado desenho={quadrados[1]} Marcar={() => marcarJogo(1)} />
        <Quadrado desenho={quadrados[2]} Marcar={() => marcarJogo(2)} />
        <Quadrado desenho={quadrados[3]} Marcar={() => marcarJogo(3)} />
        <Quadrado desenho={quadrados[4]} Marcar={() => marcarJogo(4)} />
        <Quadrado desenho={quadrados[5]} Marcar={() => marcarJogo(5)} />
        <Quadrado desenho={quadrados[6]} Marcar={() => marcarJogo(6)} />
        <Quadrado desenho={quadrados[7]} Marcar={() => marcarJogo(7)} />
        <Quadrado desenho={quadrados[8]} Marcar={() => marcarJogo(8)} />
      </div>
    </>
  )
}

function Quadrado({desenho, Marcar}){

  return (<button className='quadrado' onClick={Marcar}>
    {desenho}
  </button>)
}

function verificarVencedor(quadrados){

  const VITORIAS = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ]

  for( let combinacao of VITORIAS ){

    let [a, b, c] = combinacao

    if(quadrados[a] && quadrados[a] === quadrados[b] && quadrados[b] === quadrados[c]){
      return quadrados[a]
    }
  }
  return null

}
export default App
