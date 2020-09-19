export const normalizedAuth = user => {
  if (Object.keys(user).length < 1) return {}
  return {
    email: user.email,
    username: user.username,
    role: user.role,
    firstName: user.first_name,
    lastName: user.last_name,
    postSalutation: user.post_salutation || '',
    preSalutation: user.pre_salutation || '',
    isAuth: true
  }
}
