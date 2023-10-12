import {Component} from 'react'

import {Redirect} from 'react-router-dom'

import Cookies from 'js-cookie'

import {
  LoginBg,
  LoginCard,
  LoginLogoCard,
  LoginInput,
  LoginForm,
  LoginLabel,
  Checkbox,
  LoginButton,
  Error,
} from './styled'

class Login extends Component {
  state = {
    showPassword: false,
    username: '',
    password: '',
    showError: false,
    errorMsg: '',
  }

  onShowPassword = () => {
    this.setState(prev => ({
      showPassword: !prev.showPassword,
    }))
  }

  getUser = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }

    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok === true) {
      const {history} = this.props
      const jwtToken = data.jwt_token
      Cookies.set('jwt_token', jwtToken, {expires: 30})
      history.replace('/')
    } else {
      this.setState({showError: true, errorMsg: data.error_msg})
    }
  }

  onUsernameChange = event => {
    this.setState({username: event.target.value})
  }

  onPasswordChange = event => {
    this.setState({password: event.target.value})
  }

  render() {
    const {showPassword, username, password, showError, errorMsg} = this.state

    if (Cookies.get('jwt_token') !== undefined) {
      return <Redirect to="/" />
    }
    return (
      <LoginBg>
        <LoginCard>
          <LoginLogoCard>
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
              alt="website logo"
            />
          </LoginLogoCard>

          <LoginForm onSubmit={this.getUser}>
            <LoginLabel htmlFor="username">USERNAME</LoginLabel>
            <LoginInput
              type="text"
              id="username"
              value={username}
              onChange={this.onUsernameChange}
            />
            <LoginLabel htmlFor="password">PASSWORD</LoginLabel>
            <LoginInput
              id="password"
              value={password}
              onChange={this.onPasswordChange}
              type={showPassword ? 'text' : 'password'}
            />
            <Checkbox>
              <input
                onChange={this.onShowPassword}
                type="checkbox"
                id="checkbox"
              />
              <label htmlFor="checkbox">Show Password</label>
            </Checkbox>
            <LoginButton type="submit">Login</LoginButton>
            {showError ? <Error>*{errorMsg}</Error> : null}
          </LoginForm>
        </LoginCard>
      </LoginBg>
    )
  }
}

export default Login
