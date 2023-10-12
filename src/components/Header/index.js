import {Component} from 'react'

import Cookies from 'js-cookie'

import Popup from 'reactjs-popup'

import {BiSun} from 'react-icons/bi'

import {FaMoon} from 'react-icons/fa'

import {withRouter, Link} from 'react-router-dom'

import BackgroundTheme from '../BackgroundTheme'

import {
  HeaderContainer,
  HeaderLogo,
  HeaderRightIconsCard,
  HeaderThemeButton,
  LogOut,
  HeaderProfile,
} from './styled'

import './index.css'

class Header extends Component {
  render() {
    return (
      <BackgroundTheme.Consumer>
        {value => {
          const {isLightBackgroundTheme, changeBackgroundTheme} = value

          const onLogout = () => {
            const {history} = this.props

            Cookies.remove('jwt_token')
            history.replace('/login')
          }
          const onTheme = () => {
            changeBackgroundTheme()
          }

          return (
            <HeaderContainer Lighttheme={isLightBackgroundTheme}>
              <Link to="/">
                {isLightBackgroundTheme ? (
                  <HeaderLogo
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                    alt="website logo"
                  />
                ) : (
                  <HeaderLogo
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png"
                    alt="website logo"
                  />
                )}
              </Link>
              <HeaderRightIconsCard>
                <HeaderThemeButton
                  data-testid="theme"
                  Lighttheme={isLightBackgroundTheme}
                  onClick={onTheme}
                  type="button"
                >
                  {isLightBackgroundTheme ? (
                    <FaMoon className="theme" />
                  ) : (
                    <BiSun className="theme" />
                  )}
                </HeaderThemeButton>
                <HeaderProfile Lighttheme={isLightBackgroundTheme}>
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                    alt="profile"
                    className="profile"
                  />
                </HeaderProfile>
                <Popup modal trigger={<LogOut>LogOut</LogOut>}>
                  {close => (
                    <div className="model">
                      <p>Are you sure, you want to logout</p>
                      <HeaderRightIconsCard>
                        <button
                          data-testid="close"
                          className="cancel"
                          type="button"
                          onClick={() => close()}
                        >
                          Cancel
                        </button>
                        <button
                          className="confirm"
                          type="button"
                          onClick={() => onLogout()}
                        >
                          Confirm
                        </button>
                      </HeaderRightIconsCard>
                    </div>
                  )}
                </Popup>
              </HeaderRightIconsCard>
            </HeaderContainer>
          )
        }}
      </BackgroundTheme.Consumer>
    )
  }
}

export default withRouter(Header)
