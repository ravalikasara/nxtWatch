import {Component} from 'react'

import {Route, Redirect, Switch} from 'react-router-dom'

import './App.css'

import ProtectedRoute from './components/ProtectedRoute'

import Login from './components/Login'

import NotFound from './components/NotFound'

import Gaming from './components/Gaming'

import SavedVideos from './components/SavedVideos'

import Home from './components/Home'

import Trending from './components/Trending'

import VideoDetails from './components/VideoDetails'

import BackgroundTheme from './components/BackgroundTheme'

class App extends Component {
  state = {backgroundTheme: true, activeRoute: 'Home', savedList: []}

  changeBackgroundTheme = () => {
    this.setState(prev => ({backgroundTheme: !prev.backgroundTheme}))
  }

  changeActiveRoute = value => {
    this.setState({activeRoute: value})
  }

  changeSavedList = item => {
    const {savedList} = this.state
    const {id} = item
    const newData = savedList.filter(each => each.id === id)

    if (newData.length === 0) {
      const updatedData = [...savedList, item]
      this.setState({savedList: updatedData})
    } else {
      const updatedData = savedList.filter(each => {
        if (each.id !== id) {
          return each
        }
        return null
      })

      this.setState({savedList: updatedData})
    }
  }

  render() {
    const {backgroundTheme, activeRoute, savedList} = this.state

    return (
      <BackgroundTheme.Provider
        value={{
          activeRoute,
          isLightBackgroundTheme: backgroundTheme,
          changeBackgroundTheme: this.changeBackgroundTheme,
          changeActiveRoute: this.changeActiveRoute,
          changeSavedList: this.changeSavedList,
          savedList,
        }}
      >
        <Switch>
          <Route exact path="/login" component={Login} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute exact path="/videos/:id" component={VideoDetails} />
          <ProtectedRoute exact path="/saved-videos" component={SavedVideos} />
          <ProtectedRoute exact path="/gaming" component={Gaming} />
          <ProtectedRoute exact path="/trending" component={Trending} />
          <Route exact path="/not-found" component={NotFound} />
          <Redirect to="/not-found" />
        </Switch>
      </BackgroundTheme.Provider>
    )
  }
}

export default App
