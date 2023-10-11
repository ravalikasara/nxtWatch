import React from 'react'

const BackgroundTheme = React.createContext({
  BackgroundTheme: 'Light',
  activeRoute: 'Home',
  changeBackgroundTheme: () => {},
  changeSavedList: () => {},
  savedList: [],
})

export default BackgroundTheme
