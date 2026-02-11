import React from 'react'

const PropsEvents = ({count, increment}) => {
  return (
    <div>
        <h1>Counter using events: Communicating between parent and child</h1>
        <p>{count}</p>
        <button onClick={()=>increment(count+1)}>+++++</button>
        <button onClick={()=>increment(count-1)} disabled={count===0}>-----</button>
    </div>
  )
}

export default PropsEvents