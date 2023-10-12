import {Component} from 'react'
import Cookies from 'js-cookie'

import {HiFire} from 'react-icons/hi'

import Loader from 'react-loader-spinner'

import {formatDistanceToNow} from 'date-fns'
import {Link} from 'react-router-dom'

import BackgroundTheme from '../BackgroundTheme'
import Header from '../Header'

import NavBar from '../NavBar'

import {
  TrendingBgContainer,
  Trendingmain,
  SavedLogoTitle,
  Title,
  TrendingPageContainer,
  VideoStatusContainer,
  FailureHeading,
  FailurePara,
  RetryButton,
  SavedLogoBg,
  SavedTitleBg,
} from './styled'

class Trending extends Component {
  state = {status: 'Initial', videosList: []}

  componentDidMount() {
    this.getData()
  }

  getData = async () => {
    const jwtToken = Cookies.get('jwt_token')

    this.setState({status: 'LOADING'})
    const options = {
      method: 'GET',
      headers: {Authorization: `Bearer ${jwtToken}`},
    }
    const url = `https://apis.ccbp.in/videos/trending`

    const response = await fetch(url, options)
    const data = await response.json()

    if (response.ok === true) {
      const {videos} = data
      const updatedVideo = videos.map(each => ({
        id: each.id,
        title: each.title,
        thumbnailUrl: each.thumbnail_url,
        channel: each.channel,
        viewCount: each.view_count,
        publishedAt: each.published_at,
      }))
      this.setState({status: 'SUCCESS', videosList: updatedVideo})
    } else {
      this.setState({status: 'FAILURE'})
    }
  }

  Loading = Light => (
    <div className="loader-container" data-testid="loader">
      <Loader
        type="ThreeDots"
        color={Light ? '#000' : '#fff'}
        height="50"
        width="50"
      />
    </div>
  )

  Success = Light => {
    const {videosList} = this.state

    return (
      <div>
        <SavedTitleBg Light={Light}>
          <SavedLogoBg Light={Light}>
            <HiFire />
          </SavedLogoBg>
          <SavedLogoTitle Light={Light}>Saved Videos</SavedLogoTitle>
        </SavedTitleBg>
        <ul className="videoss-container">
          {videosList.map(each => this.getItem(each, Light))}
        </ul>
      </div>
    )
  }

  Failure = Light => (
    <div className="failure-container">
      {Light ? (
        <img
          className="failure-img"
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png"
          alt="failure view"
        />
      ) : (
        <img
          className="failure-img"
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png"
          alt="failure view"
        />
      )}
      <FailureHeading Light={Light}>Oops! Something Went Wrong</FailureHeading>
      <FailurePara Light={Light}>
        We are having some trouble to complete your request.Please try again.
      </FailurePara>

      <RetryButton onClick={this.getData}>Retry</RetryButton>
    </div>
  )

  getItem = (each, Light) => {
    const {channel} = each

    const date = formatDistanceToNow(new Date(each.publishedAt)).split(' ')
    const dats = date.slice(1).join(' ')

    return (
      <li key={each.id} className="videos">
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
    const {status} = this.state

    return (
      <BackgroundTheme.Consumer>
        {value => {
          const {isLightBackgroundTheme} = value
          return (
            <>
              <Header />

              <TrendingBgContainer>
                <NavBar />
                <Trendingmain
                  Light={isLightBackgroundTheme}
                  data-testid="trending"
                >
                  <TrendingPageContainer Light={isLightBackgroundTheme}>
                    <h1>Trending</h1>
                    <VideoStatusContainer>
                      {(() => {
                        switch (status) {
                          case 'LOADING':
                            return this.Loading(isLightBackgroundTheme)
                          case 'SUCCESS':
                            return this.Success(isLightBackgroundTheme)
                          case 'FAILURE':
                            return this.Failure(isLightBackgroundTheme)
                          default:
                            return null
                        }
                      })()}
                    </VideoStatusContainer>
                  </TrendingPageContainer>
                </Trendingmain>
              </TrendingBgContainer>
            </>
          )
        }}
      </BackgroundTheme.Consumer>
    )
  }
}

export default Trending
