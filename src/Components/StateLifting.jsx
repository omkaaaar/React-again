import React, { useState } from 'react'
import StateLiftingExample from './ChildComponents/StateLiftingExample'

const StateLifting = () => {
    const [name, setName]=useState("")

    const nameChange=(value)=>{
        setName(value)
    }
  return (
    <div>
        <StateLiftingExample handleChangeName={nameChange} value={name}/>
        <p>Hey, {name}!!</p>
    </div>
  )
}

export default StateLifting