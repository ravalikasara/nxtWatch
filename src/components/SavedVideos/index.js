import {Component} from 'react'
import {HiFire} from 'react-icons/hi'
import {formatDistanceToNow} from 'date-fns'

import {Link} from 'react-router-dom'

import BackgroundTheme from '../BackgroundTheme'
import Header from '../Header'

import NavBar from '../NavBar'

import './index.css'

import {
  SavedBgContainer,
  SavedContainer,
  SavedTitleBg,
  SavedLogoBg,
  SavedLogoTitle,
} from './styled'

class SavedVideos extends Component {
  state = {s: 0}

  getNoVideos = isLightBackgroundTheme => (
    <div className="no-video-bg">
      <img
        alt="no saved videos"
        className="no-video-img"
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
      />
      <SavedLogoTitle Light={isLightBackgroundTheme}>
        No saved videos found
      </SavedLogoTitle>
      <p className="p">You can save your videos while watching them</p>
    </div>
  )

  getSavedVideo = (each, isLightBackgroundTheme) => {
    const {channel} = each

    const date = formatDistanceToNow(new Date(each.publishedAt)).split(' ')
    const dats = date.slice(1).join(' ')

    return (
      <li className="videos">
        <Link className="link" to={`/videos/${each.id}`}>
          <img
            src={each.thumbnailUrl}
            alt="video thumbnail"
            className="saved-img"
          />
          <div>
            <p>{each.title}</p>

            <p className="p">{channel.name}</p>
            <p className="p">
              {each.viewCount} views * {dats} ago
            </p>
          </div>
        </Link>
      </li>
    )
  }

  render() {
    const {s} = this.state
    return (
      <BackgroundTheme.Consumer>
        {value => {
          const {isLightBackgroundTheme, savedList} = value
          console.log(savedList)
          return (
            <>
              <Header />

              <SavedBgContainer>
                <NavBar />
                <SavedContainer
                  data-testid="savedVideos"
                  Light={isLightBackgroundTheme}
                >
                  {savedList.length > 0 ? (
                    <>
                      <SavedTitleBg Light={isLightBackgroundTheme}>
                        <SavedLogoBg Light={isLightBackgroundTheme}>
                          <HiFire />
                        </SavedLogoBg>
                        <SavedLogoTitle Light={isLightBackgroundTheme}>
                          Saved Videos
                        </SavedLogoTitle>
                      </SavedTitleBg>
                      <ul>
                        {savedList.map(each =>
                          this.getSavedVideo(each, isLightBackgroundTheme),
                        )}
                      </ul>
                    </>
                  ) : (
                    this.getNoVideos(isLightBackgroundTheme)
                  )}
                </SavedContainer>
              </SavedBgContainer>
            </>
          )
        }}
      </BackgroundTheme.Consumer>
    )
  }
}

export default SavedVideos
