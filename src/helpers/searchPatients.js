const baseURL = process.env.GATSBY_API_URL || 'http://localhost:1337/'

const searchPatients = async params => {
  const options = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NCwiaWF0IjoxNTk2NjQ0MjMyLCJleHAiOjE1OTkyMzYyMzJ9.e86udwnmwGCUaQKXFOwc3LsgJ_OkQsFVwI_GFWSI1Kw'
    }
  }
  const url = new URL(`${baseURL}patients`)
  Object.keys(params).map(key => {
    if (params[key]) {
      url.searchParams.set(key, params[key])
    }
    return true
  })
  const resp = await fetch(`${url}`, options)
  try {
    const json = await resp.json()
    return { json, ok: resp.ok }
  } catch (error) {
    console.error(error)
    return resp
  }
}

export default searchPatients
