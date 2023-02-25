import { useState } from 'react'
import { Tela } from './components/Screen'
import { BotoesVazio, BotoesNum, BotoesSimb } from './components/Buttons'
import './App.css'

export default function App() {
  const [num, setNum] = useState(0)
  const [numAntigo, setNumAntigo] = useState(0)
  const [operador, setOperador] = useState()

  
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
      <Tela resultado={num} />

      <div className='botoes'>
        <BotoesVazio limpar={Clear}/>
        <div className='numSimb'>
          <BotoesNum calc={Calcular} inpnum={InputNum}/>
          <BotoesSimb ope={Operacao}/>
        </div>
      </div>
    </div>
  )
}
