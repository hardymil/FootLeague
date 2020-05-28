import React from 'react'
import axios from 'axios'

import Signin from '../components/Signin'

const submit = (e, formState, setErrorMessage, history) => {
  e.preventDefault()
  if (!formState.username || !formState.password) {
    setErrorMessage('Les champs ne doivent pas etre vide')
    return
  }
  axios({
    method: 'POST',
    url: 'https://easy-login-api.herokuapp.com/users/login',
    data: {
      username: formState.username,
      password: formState.password
    }
  })
    .then(res => {
      localStorage.setItem('token', res.headers['x-access-token'])
      history.push('/home')
    })
    .catch(err => {
      setErrorMessage('Une erreur est survenue')
      console.log(err)
    })
}

const Login = props => {
  console.log('Login -> props', props)
  return <Signin submit={submit}></Signin>
}

export default Login
