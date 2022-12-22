import React from 'react'
import { useState } from 'react'

const ErrorExample = () => {
  const [title, setTitle] = useState('Random Title')

  const handleClick = () => {
    setTitle('Hello People')
  }

  return (
    <React.Fragment>
      <h2>{title}</h2>
      <button className='btn' onClick={handleClick}>
        change title
      </button>
    </React.Fragment>
  )
}

export default ErrorExample
