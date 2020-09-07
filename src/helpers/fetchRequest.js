const baseURL = process.env.GATSBY_API_URL || 'http://localhost:1337/'

const fetchRequest = async (body, url, method) => {
  const options = {
    headers: {
      'Content-Type': 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NCwiaWF0IjoxNTk5MzgxMDk4LCJleHAiOjE2MDE5NzMwOTh9.HoT9LcNgKIVLQASkVE7oW82Iamma2EYxKle9A49D9Kk'
    },
    ...(Object.keys(body).length && { body }),
    method
  }
  try {
    const resp = await fetch(`${baseURL}${url}`, options)
    const json = await resp.json()

    return json
  } catch (error) {
    console.log(error)
    return { error }
  }
}

export default fetchRequest
