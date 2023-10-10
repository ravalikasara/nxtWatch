import {Component} from 'react'

import {Route, Redirect, Switch, BrowserRouter} from 'react-router-dom'

import './App.css'

import ProtectedRoute from './components/ProtectedRoute'

import Login from './components/Login'

import Home from './components/Home'

import BackgroundTheme from './components/BackgroundTheme'

class App extends Component {
  state = {backgroundTheme: true, activeRoute: 'Home'}

  changeBackgroundTheme = () => {
    this.setState(prev => ({backgroundTheme: !prev.backgroundTheme}))
  }

  changeActiveRoute = value => {
    this.setState({activeRoute: value})
  }

  render() {
    const {backgroundTheme, activeRoute} = this.state

    return (
      <BrowserRouter>
        <BackgroundTheme.Provider
          value={{
            activeRoute,
            isLightBackgroundTheme: backgroundTheme,
            changeBackgroundTheme: this.changeBackgroundTheme,
            changeActiveRoute: this.changeActiveRoute,
          }}
        >
          <Switch>
            <Route exact path="/login" component={Login} />
            <ProtectedRoute exact path="/" component={Home} />
          </Switch>
        </BackgroundTheme.Provider>
      </BrowserRouter>
    )
  }
}

export default App
