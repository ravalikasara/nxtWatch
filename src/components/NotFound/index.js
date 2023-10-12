import {Component} from 'react'

import BackgroundTheme from '../BackgroundTheme'
import Header from '../Header'

import NavBar from '../NavBar'

import {
  NotFoundPageBgContainer,
  NotFoundPageContainer,
  NotFoundPara,
  NotFoundHeading,
  Img,
} from './styled'

class NotFound extends Component {
  render() {
    return (
      <BackgroundTheme.Consumer>
        {value => {
          const {isLightBackgroundTheme} = value
          return (
            <>
              <Header />

              <NotFoundPageBgContainer>
                <NavBar />
                <NotFoundPageContainer Light={isLightBackgroundTheme}>
                  {isLightBackgroundTheme ? (
                    <Img
                      src="https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png"
                      alt="not found"
                    />
                  ) : (
                    <Img
                      src="https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png"
                      alt="not found"
                    />
                  )}
                  <NotFoundHeading Light={isLightBackgroundTheme}>
                    Page Not Found
                  </NotFoundHeading>
                  <NotFoundPara Light={isLightBackgroundTheme}>
                    we are sorry, the page you requested could not be found.
                  </NotFoundPara>
                </NotFoundPageContainer>
              </NotFoundPageBgContainer>
            </>
          )
        }}
      </BackgroundTheme.Consumer>
    )
  }
}

export default NotFound
