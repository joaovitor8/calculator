import { useState } from 'react'
import './App.css'

export default function App() {
  const [num, setNum] = useState(0)
  const [numAntigo, setNumAntigo] = useState(0)
  const [operador, setOperador] = useState()

  const btnum = [7, 8, 9, 4, 5, 6, 1, 2, 3, '.', 0]
  const btnsimb = ['/', 'X', '-', '+']
  const btnv = ['_', '_', '_',]


  //Components
  function Tela() {
    return(
      <div className='tela'>
        <span>{num}</span>
      </div>
    )
  }

  function BotoesVazio() {
    return(
      <div>
        {btnv.map(v => <button> {v} </button>)}
        <button onClick={Clear}>DEL</button>
      </div>
    )
  }

  function BotoesNum() {
    return(
      <div>
        {btnum.map(n => <button key={n} onClick={InputNum} value={n}> {n} </button>)}
        <button onClick={Calcular}>=</button>
      </div>
    )
  }

  function BotoesSimb() {
    return(
      <div>
        {btnsimb.map(s => <button key={s} onClick={Operacao} value={s}> {s} </button>)}
      </div>
    )
  }


  //Funçoes
  function InputNum(e) {
    let valor = e.target.value
    if(num === 0) {
      setNum(valor)
    }else{
      setNum(num + valor)
    }
  }

  function Clear() {
    setNum(0)
  }

  function Operacao(e) {
    var oper = e.target.value
    setOperador(oper)
    setNumAntigo(num)
    setNum(0)
  }

  function Calcular() {
    if(operador === '/') {
      setNum(parseFloat(numAntigo) / parseFloat(num))
    }else if(operador === 'X') {
      setNum(parseFloat(numAntigo) * parseFloat(num))
    }else if(operador === '-') {
      setNum(parseFloat(numAntigo) - parseFloat(num))
    }else if(operador === '+') {
      setNum(parseFloat(numAntigo) + parseFloat(num))
    }
  }


  return (
    <div className="App">
      <Tela />

      <div className='botoes'>
        <BotoesVazio />
        <div className='numSimb'>
          <BotoesNum />
          <BotoesSimb />
        </div>
      </div>
    </div>
  )
}
