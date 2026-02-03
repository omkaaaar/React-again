import { useState } from 'react'

const Counter = () => {
    const [count, setCount]=useState(0)


    const changeCount = (amount)=>{
        setCount(prev=>Math.max(prev+amount,0))
    }

    // const incrementCount = () => changeCount(1)
    // const decrementCount = () => changeCount(-1)
    // const incrementByFive = () => changeCount(5)
    // const decrementByFive = () => changeCount(-5)
    // const resetCount = () => setCount(0)
    
    return (
      <>
        <div>
          <h1>Hello this is counter application</h1>
          <h2>{count}</h2>
          <button onClick={()=>changeCount(1)}>Increment</button>
          <button onClick={()=>setCount(0)}>RESET</button>
          <button onClick={()=>changeCount(-1)} disabled={count===0}>Decrement</button>
          <br />
          <br />
          <br />
          <button onClick={()=>changeCount(5)}>Add +5</button>
          <button onClick={()=>changeCount(-5)} disabled={count===0}>Remove -5</button>
        </div>
      </>
    )
}

export default Counter