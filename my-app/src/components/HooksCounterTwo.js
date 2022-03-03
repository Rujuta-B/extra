import React, { useState } from 'react'

export const HooksCounterTwo = () => {
  const initialCount = 0;
  const [count, setCount] = useState(initialCount)

  const incrementFive = () =>  {
      for (let i=0;i <5; i++){
        setCount(prevCount => prevCount + 1)
         {/* we use function ('=>') to let it store the previous value */}
      }

  }
  
    return (
    <div>
        Count : {count}
        <button onClick={() => setCount(initialCount)}>Reset</button>
        <button onClick={() => {setCount(prevCount => prevCount + 1)}}>Increment</button> 
        {/* instead of count+1 we use function to let it store the previous value */}
        <button onClick={() => {setCount(prevCount => prevCount - 1)}}>Decrement</button>
        {/* instead of count-1 we use function to let it store the previous value */}
        <button onClick={incrementFive}>Increment 5</button>
    </div>
  )
}
