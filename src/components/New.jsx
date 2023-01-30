import React from 'react'
import { useState } from 'react'

function New() {

    const [counter , setCounter] = useState(0);


  return (
    <div className="App">
        <h1>start codding</h1>
        <p>{counter}</p>
        <button onClick={()=>{
            setCounter(counter + 1)
        }}>click</button>

    </div>
  )
}

export default New