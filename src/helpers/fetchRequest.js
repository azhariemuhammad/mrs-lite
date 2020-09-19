const baseURL = process.env.GATSBY_API_URL || 'http://localhost:1337/'

const fetchRequest = async (body, url, method, token) => {
  const options = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: token ? `Bearer ${token}` : ''
    },
    ...(Object.keys(body).length && { body }),
    method
  }
  try {
    const resp = await fetch(`${baseURL}${url}`, options)
    const json = await resp.json()

    if (json?.error) {
      return { response: null, error: json }
    }
    return { response: json, error: null }
  } catch (error) {
    console.error(error)
    return { response: null, error }
  }
}

export default fetchRequest
