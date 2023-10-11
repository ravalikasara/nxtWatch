import styled from 'styled-components'

export const LoginBg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`

export const LoginCard = styled.div`
  display: flex;
  flex-direction: column;
  height: 500px;
  width: 480px;
  padding: 50px;
  align-items: start;

  border-radius: 5px;
  box-shadow: 5px 5px 5px 5px #aaaaaa;
`
export const LoginLogoCard = styled.div`
  align-self: center;
  margin-bottom: 40px;
`

export const LoginInput = styled.input`
  background-color: transparent;
  border-radius: 5px;
  height: 40px;
  width: 280px;
  margin-bottom: 5px;
  border: 1px solid grey;
`
export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
`
export const LoginLabel = styled.label`
  margin-top: 20px;
  margin-bottom: 5px;
  color: #475569;
`
export const Checkbox = styled.div`
  display: flex;
  flex-direction: row;
`
export const LoginButton = styled.button`
  height: 40px;
  width: 300px;
  background-color: #3b82f6;
  margin-top: 20px;
  border-radius: 5px;
  color: #ffffff;
  border: none;
`

export const Error = styled.p`
  color: red;
  font-size: 15px;
`
