const baseURL = process.env.GATSBY_API_URL || 'http://localhost:1337/'

const searchPatients = async params => {
  const options = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NCwiaWF0IjoxNTk5MzgyNzU1LCJleHAiOjE2MDE5NzQ3NTV9.4fyMok3jY7YqgXePL0MPMN4_c5dGivTY8wundDM7a8o'
    }
  }
  const url = new URL(`${baseURL}patients`)
  Object.keys(params).map(key => {
    if (params[key]) {
      url.searchParams.set(key, params[key])
    }
    return true
  })

  try {
    const resp = await fetch(`${url}`, options)
    const json = await resp.json()
    if (json?.error) {
      return { response: null, error: json }
    }
    return { response: json, error: null }
  } catch (error) {
    return { response: null, error }
  }
}

export default searchPatients
