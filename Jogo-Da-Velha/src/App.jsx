import { useState } from 'react'
import './App.css'

function App() {
  
  const [historico, setHistorico] = useState([Array(9).fill(null)])
  const [atualJogada, setAtualJogada] = useState(0)
  const atuaisQuadrados = historico[atualJogada]
  const vezDoX = atualJogada % 2 === 0

  function marcarJogo(novos_quadrados){ //Marcar o Jogo

    let novo_historico = historico.slice(0, atualJogada + 1)
    novo_historico.push(novos_quadrados)

    setAtualJogada(novo_historico.length - 1)
    setHistorico(novo_historico)
  }

  function voltarJogadas(i){
    setAtualJogada(i)
  }

  const jogadas = historico.map( (jogada, index) => {

    let texto = index === 0 ? 'Inicio' : `Jogada n${index}` 

    return (
      <li key={index}>
        <button onClick={ () => voltarJogadas(index)}>{texto}</button>
      </li>
    )
  })

  return (
    <>
    <h1>Jogo Da Velha</h1>
    <div class='jogo'>
        <Jogo_Da_Velha quadrados={atuaisQuadrados} marcarJogo={marcarJogo} vezDoX={vezDoX}/>

        <div class='list '>
          <h3>Lista de Jogadas: </h3>
          <ol>
            {jogadas}
          </ol>
        </div>
    </div>
    </>
  )
}

function Jogo_Da_Velha({quadrados, marcarJogo, vezDoX}){
  
  function pre_marcarJogo(i){

    const novos_quadrados = quadrados.slice()

    if(verificarVencedor(quadrados)){ //Acaba a função caso tenha vencedor
      alert('Já há um vencedor!')
      return
    }
    
    if(novos_quadrados[i]){ //Acaba a função caso a peça esteja ocupada
      alert('Esse quadrado já está marcado!')
      return 
    }

    if(vezDoX){
      novos_quadrados[i] = 'X'
    }else{
      novos_quadrados[i] = 'O'
    }

    marcarJogo(novos_quadrados)

  }

  //Fora do escopo da função, faz a verificação
    const vencedor = verificarVencedor(quadrados)
    let status

    if(vencedor){
      status = `Vencedor é ${vencedor}`
    }else{
      status = `Vez do ${ vezDoX ? 'X' : 'O'}`
    }

  return (
    <>
      <div>
        <h2>{status}</h2>
          <div className='jogo_da_velha'>
            <Quadrado desenho={quadrados[0]} Marcar={() => pre_marcarJogo(0)} />
            <Quadrado desenho={quadrados[1]} Marcar={() => pre_marcarJogo(1)} />
            <Quadrado desenho={quadrados[2]} Marcar={() => pre_marcarJogo(2)} />
            <Quadrado desenho={quadrados[3]} Marcar={() => pre_marcarJogo(3)} />
            <Quadrado desenho={quadrados[4]} Marcar={() => pre_marcarJogo(4)} />
            <Quadrado desenho={quadrados[5]} Marcar={() => pre_marcarJogo(5)} />
            <Quadrado desenho={quadrados[6]} Marcar={() => pre_marcarJogo(6)} />
            <Quadrado desenho={quadrados[7]} Marcar={() => pre_marcarJogo(7)} />
            <Quadrado desenho={quadrados[8]} Marcar={() => pre_marcarJogo(8)} />
          </div>
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
