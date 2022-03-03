import React, { useState } from 'react'

export const HooksExample4 = () => {
  const [items, setNum] = useState([])

  const newNumber = () => {
      setNum([...items, {
        id:items.length,
        value: Math.floor(Math.random() * 10)
      }])
  }

    return (
    <div>
        <button onClick={newNumber}>Add Number</button>
        <ul>{items.map(item => (<li key={item.id}>{item.value}</li>))}</ul>
    </div>
  )
}
