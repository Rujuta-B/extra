// example of hooks in Funct Component.

import React, { useState } from 'react'

export const HooksCounter = () => {
  
  //array destructuring of current state(count), future state(setCount) 
  const [count, setCount] = useState(0) //here 0 is the default value of 'count'. Will be used only for rendering first time

    return (
    <div>
        <button onClick={() => {setCount(count + 1)}}>Count {count}</button>  
        {/* here setCount func was called hence the arrow func inside onclick */}
    </div>
  )
}
