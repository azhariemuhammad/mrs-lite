import React, { useEffect } from 'react'
import { useCookies } from 'react-cookie'

const baseURL = process.env.GATSBY_API_URL || 'http://localhost:1337/'
console.log({ baseURL })

const useFetch = (url, method, opt) => {
  const [cookies] = useCookies()
  const [response, setResponse] = React.useState(null)
  const [error, setError] = React.useState(null)
  const token = `Bearer ${cookies['MRS-TOKEN'] || ''}`
  useEffect(() => {
    const fetchData = async () => {
      const options = {
        method,
        headers: {
          'Content-Type': 'application/json',
          Authorization: token
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
