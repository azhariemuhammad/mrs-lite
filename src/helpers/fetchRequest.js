const baseURL = process.env.GATSBY_API_URL || 'http://localhost:1337/'

const fetchRequest = async (body, url, method) => {
  const options = {
    headers: {
      'Content-Type': 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NCwiaWF0IjoxNTk2NjQ0MjMyLCJleHAiOjE1OTkyMzYyMzJ9.e86udwnmwGCUaQKXFOwc3LsgJ_OkQsFVwI_GFWSI1Kw'
    },
    ...(Object.keys(body).length && { body }),
    method
  }
  try {
    const resp = await fetch(`${baseURL}${url}`, options)
    const json = await resp.json()
    return json
  } catch (error) {
    return { error }
  }
}

export default fetchRequest
