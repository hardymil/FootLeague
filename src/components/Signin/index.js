import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import { useHistory } from 'react-router-dom'

const Signin = ({ submit }) => {
  const [formState, setFormState] = useState({ username: '', password: '' })
  const [errorMessage, setErrorMessage] = useState('')
  useEffect(() => {
    console.log(formState)
  })

  const history = useHistory()
  console.log('history', history)

  return (
    <StyledForm onSubmit={e => submit(e, formState, setErrorMessage, history)}>
      <StyledSpan>Signin</StyledSpan>
      <StyledInput
        placeholder='Username'
        type='text'
        onChange={e => setFormState({ ...formState, username: e.target.value })}
      ></StyledInput>
      <StyledInput
        placeholder='password'
        type='password'
        onChange={e => setFormState({ ...formState, password: e.target.value })}
      ></StyledInput>
      <StyledSpan>{errorMessage}</StyledSpan>
      <StyledInput type='submit'></StyledInput>
    </StyledForm>
  )
}
const StyledSpan = styled.span`
  color: green;
  margin-bottom: 12px;
`

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const StyledInput = styled.input`
  margin: 6px 0px;
  border-radius: 12px;
  border: none;
  background-color: #222222;
  height: 30px;
  color: white;
  padding: 0px 6px;
`
export default Signin
