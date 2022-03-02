import { click } from '@testing-library/user-event/dist/click'
import React from 'react'

//this is a demo for event handlung in class comp
const FunctionClick = () => {
  function click(){ console.log('button clicked'); }
    return (
    <div>
        <button onClick={click}>Click</button>
    </div>
  )

}

export default FunctionClick