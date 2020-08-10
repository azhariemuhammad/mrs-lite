import React, { useEffect } from 'react'

const baseURL = process.env.GATSBY_API_URL || 'http://localhost:1337/'
console.log({ baseURL })

const useFetch = (url, method, opt) => {
  const [response, setResponse] = React.useState(null)
  useEffect(() => {
    const fetchData = async () => {
      const options = {
        method,
        headers: {
          'Content-Type': 'application/json',
          Authorization:
            'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NCwiaWF0IjoxNTk2NjQ0MjMyLCJleHAiOjE1OTkyMzYyMzJ9.e86udwnmwGCUaQKXFOwc3LsgJ_OkQsFVwI_GFWSI1Kw'
        },
        ...opt
      }
      const res = await fetch(`${baseURL}${url}`, options)
      const json = await res.json()
      setResponse(json)
    }
    fetchData()
  }, [])
  return response
}

export default useFetch
