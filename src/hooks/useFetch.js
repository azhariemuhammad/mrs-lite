import React, { useEffect } from 'react'

const baseURL = process.env.GATSBY_API_URL || 'http://localhost:1337/'
console.log({ baseURL })

const useFetch = (url, method, opt) => {
  const [response, setResponse] = React.useState(null)
  const [error, setError] = React.useState(null)
  useEffect(() => {
    const fetchData = async () => {
      const options = {
        method,
        headers: {
          'Content-Type': 'application/json',
          Authorization:
            'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NCwiaWF0IjoxNTk5MzgyNzU1LCJleHAiOjE2MDE5NzQ3NTV9.4fyMok3jY7YqgXePL0MPMN4_c5dGivTY8wundDM7a8o'
        },
        ...opt
      }
      try {
        const res = await fetch(`${baseURL}${url}`, options)

        const json = await res.json()

        if (json?.error) {
          return setError(json)
        }
        setResponse(json)
      } catch (err) {
        setError(err)
      }
    }
    fetchData()
  }, [])
  return { response, error }
}

export default useFetch
