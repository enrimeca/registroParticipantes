import { useState, useEffect } from 'react'

function useFetch(url, defaultValue) {

  console.log('ingresando useFetch.js ')
  const[data, setData] = useState(defaultValue)
  const[error, setError] = useState(null)

  useEffect(() => {
    console.log('useFetch.js : ' , url)
    fetch(url)
      .then(response => response.json())
      .then(data => {
        setData(data)
      })
      .catch(err => {
        setError(err)
      })
  }, [])

  return { data, error }
}

export default useFetch
