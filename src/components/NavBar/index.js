import {Component} from 'react'

import {SiYoutubegaming} from 'react-icons/si'

import {AiFillHome} from 'react-icons/ai'

import {MdPlaylistAdd} from 'react-icons/md'

import {HiFire} from 'react-icons/hi'

import {Link} from 'react-router-dom'

import BackgroundTheme from '../BackgroundTheme'

import {
  Navs,
  Lists,
  Logo,
  RouteName,
  NavBars,
  ContactUs,
  SocialMedia,
  C,
  Social,
  Head,
} from './styled'

class NavBar extends Component {
  render() {
    return (
      <BackgroundTheme.Consumer>
        {value => {
          const {changeActiveRoute, activeRoute, isLightBackgroundTheme} = value

          const onRouteChange = k => {
            changeActiveRoute(k)
          }

          return (
            <NavBars Light={isLightBackgroundTheme}>
              <Navs>
                <Lists
                  onClick={() => onRouteChange('Home')}
                  activeRoute={activeRoute}
                  Light={isLightBackgroundTheme}
                  value="Home"
                  className="lists"
                >
                  <Link className="link" to="/">
                    <Logo
                      Light={isLightBackgroundTheme}
                      activeRoute={activeRoute}
                      value="Home"
                    >
                      <AiFillHome />
                    </Logo>
                    <RouteName Light={isLightBackgroundTheme}>Home</RouteName>
                  </Link>
                </Lists>
                <Lists
                  onClick={() => onRouteChange('Trending')}
                  activeRoute={activeRoute}
                  Light={isLightBackgroundTheme}
                  value="Trending"
                  className="lists"
                >
                  <Link className="link" to="/trending">
                    <Logo
                      Light={isLightBackgroundTheme}
                      activeRoute={activeRoute}
                      value="Trending"
                    >
                      <HiFire />
                    </Logo>
                    <RouteName Light={isLightBackgroundTheme}>
                      Trending
                    </RouteName>
                  </Link>
                </Lists>
                <Lists
                  onClick={() => onRouteChange('Gaming')}
                  activeRoute={activeRoute}
                  Light={isLightBackgroundTheme}
                  value="Gaming"
                  className="lists"
                >
                  <Link className="link" to="/gaming">
                    <Logo
                      Light={isLightBackgroundTheme}
                      activeRoute={activeRoute}
                      value="Gaming"
                    >
                      <SiYoutubegaming />
                    </Logo>
                    <RouteName Light={isLightBackgroundTheme}>Gaming</RouteName>
                  </Link>
                </Lists>
                <Lists
                  onClick={() => onRouteChange('Saved Videos')}
                  activeRoute={activeRoute}
                  Light={isLightBackgroundTheme}
                  value="Saved Videos"
                  className="lists"
                >
                  <Link className="link" to="/saved-videos">
                    <Logo
                      activeRoute={activeRoute}
                      Light={isLightBackgroundTheme}
                      value="Saved Videos"
                    >
                      <MdPlaylistAdd />
                    </Logo>
                    <RouteName Light={isLightBackgroundTheme}>
                      Saved Videos
                    </RouteName>
                  </Link>
                </Lists>
              </Navs>

              <C>
                <ContactUs Light={isLightBackgroundTheme}>Contact Us</ContactUs>
                <SocialMedia>
                  <Social
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                    alt="facebook logo"
                  />
                  <Social
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                    alt="twitter logo"
                  />
                  <Social
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                    alt="linked in logo"
                  />
                </SocialMedia>
                <Head Light={isLightBackgroundTheme}>
                  Enjoy! Now to see your channels and recommendations!
                </Head>
              </C>
            </NavBars>
          )
        }}
      </BackgroundTheme.Consumer>
    )
  }
}

export default NavBar
