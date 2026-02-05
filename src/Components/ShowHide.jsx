import { useState } from "react"

const ShowHide = () => {
    const [isVisible, setIsVisible]=useState(true)

  return (
    <div>
        <h2>This is an example to dispplay and isVisible text</h2>
        {isVisible && <p>I will either Hide or Displayed</p> }
        <button onClick={()=>setIsVisible(prev => !prev)}>{isVisible?'Hide Me':'Show Me'}</button>
    </div>
  )
}

export default ShowHide