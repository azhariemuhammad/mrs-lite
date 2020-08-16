const baseURL = process.env.GATSBY_API_URL || 'http://localhost:1337/'

const postRequest = async (body, url) => {
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NCwiaWF0IjoxNTk2NjQ0MjMyLCJleHAiOjE1OTkyMzYyMzJ9.e86udwnmwGCUaQKXFOwc3LsgJ_OkQsFVwI_GFWSI1Kw'
    },
    body
  }
  try {
    const resp = await fetch(`${baseURL}${url}`, options)
    const json = await resp.json()
    return json
  } catch (error) {
    return error
  }
}

export default postRequest
