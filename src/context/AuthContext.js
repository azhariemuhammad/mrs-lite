import React, { useState } from 'react'
import { node } from 'prop-types'
import { useCookies } from 'react-cookie'

import fetchRequest from '../helpers/fetchRequest'
import { normalizedAuth } from '../helpers/normalizeAuth'

const requestURL = 'auth/local'

const AuthContext = React.createContext()

const AuthProvider = ({ children }) => {
  const [cookies, setCookie] = useCookies()
  const [authData, setAuthData] = useState({})
  const login = async data => {
    const body = JSON.stringify(data)
    const { response, error } = await fetchRequest(body, requestURL, 'POST')
    if (!error) {
      setCookie('MRS-TOKEN', response.jwt, { path: '/' })
      setAuthData(normalizedAuth(response.user) || {})
    }
    return { response, error }
  }

  const getToken = () => {
    return cookies['MRS-TOKEN'] || ''
  }

  return (
    <AuthContext.Provider value={{ login, authData, getToken }}>
      {children}
    </AuthContext.Provider>
  )
}

AuthProvider.propTypes = {
  children: node.isRequired
}
const useAuth = () => React.useContext(AuthContext)

export { AuthProvider, useAuth }
