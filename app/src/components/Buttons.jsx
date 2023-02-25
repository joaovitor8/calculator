
const btnum = [7, 8, 9, 4, 5, 6, 1, 2, 3, '.', 0]
const btnsimb = ['/', 'X', '-', '+']
const btnv = ['_', '_', '_']

export function BotoesVazio(prop) {
  return(
    <div>
      {btnv.map(v => <button> {v} </button>)}
      <button onClick={prop.limpar}>DEL</button>
    </div>
  )
}

export function BotoesNum(prop) {
  return(
    <div>
      {btnum.map(n => <button key={n} onClick={prop.inpnum} value={n}> {n} </button>)}
      <button onClick={prop.calc}>=</button>
    </div>
  )
}

export function BotoesSimb(prop) {
  return(
    <div>
      {btnsimb.map(s => <button key={s} onClick={prop.ope} value={s}> {s} </button>)}
    </div>
  )
}
