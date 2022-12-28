import React, { useState, useEffect } from 'react'
const url = 'https://api.github.com/users/Demandtech'

const MultipleReturns = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)
  const [user, setUser] = useState('default user')

  useEffect(() => {
    setIsLoading(true)
    fetch(url)
      .then((resp) => {
        if (resp.status >= 200 && resp.status <= 299) {
          setIsLoading(false)
          return resp.json()
        }else {
          setIsLoading(false)
          setIsError(true)
          throw new Error(resp.statusText)
        }
      })
      .then((user) => {
        const { login } = user
        console.log(user)
        setUser(login)
        setIsLoading(false)
      })
      .catch((err) => console.log(err))
  }, [])

  if (isLoading) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    )
  }

  if (isError) {
    return (
      <div>
        <h1>Error...</h1>
      </div>
    )
  }
  return <h2>{user}</h2>
}

export default MultipleReturns
