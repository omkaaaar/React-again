import React from 'react'

const StateLiftingExample = ({ handleChangeName, value }) => {
  const handleChange = (e) => {
    handleChangeName(e.target.value)
  }
  return (
    <div>
      <label>Add text </label>
      <input type="text" value={value} onChange={handleChange} />
    </div>
  )
}

export default StateLiftingExample