import React, { useState } from 'react'

const UseStateBasics = () => {
  const [text, setTitle] = useState('random title')

  const handleClick = () => {
    if (text === 'random title') {
      setTitle('Hello World')
    }else {
      setTitle("random title")
    }
  }

  return (
    <React.Fragment>
      <h1 className='text'>{text}</h1>
      <button className='btn' onClick={handleClick}>
        change title
      </button>
    </React.Fragment>
  )
}

export default UseStateBasics
