import React, { useState } from 'react'

const UseStateCounter = () => {
  const [value, setValue] = useState(0)

  const reset = () => {
    setValue(0)
  }

  const complexIncrease = () => {
    setTimeout(()=> {
      // setValue(value + 1)
      setValue(prevState => prevState + 1)
    }, 2000)
  }
  return (
    <>
      <section style={{ margin: '4rem 0' }}>
        <h2>regula counter</h2>
        <h1>{value}</h1>
        <button
          className='btn'
          onClick={() => setValue(value > 0 ? value - 1 : 0)}
        >
          Decrease
        </button>
        <button className='btn' onClick={reset}>
          Reset
        </button>
        <button className='btn' onClick={() => setValue(value + 1)}>
          Increase
        </button>
      </section>

      <section style={{ margin: '4rem 0' }}>
        <h2>More Complex counter</h2>
        <h1>{value}</h1>
        <button className='btn' onClick={complexIncrease}>
          Increase Later
        </button>
        
      </section>
    </>
  )
}

export default UseStateCounter
