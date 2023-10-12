import {Component} from 'react'
import Cookies from 'js-cookie'

import Loader from 'react-loader-spinner'
import {Link} from 'react-router-dom'

import BackgroundTheme from '../BackgroundTheme'
import Header from '../Header'

import NavBar from '../NavBar'

import './index.css'
import {
  GameBgContainer,
  Gamemain,
  Title,
  GamePageContainer,
  VideoStatusContainer,
  FailureHeading,
  FailurePara,
  RetryButton,
} from './styled'

class Gaming extends Component {
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
    const url = `https://apis.ccbp.in/videos/gaming`

    const response = await fetch(url, options)
    const data = await response.json()

    if (response.ok === true) {
      const {videos} = data
      const updatedVideo = videos.map(each => ({
        id: each.id,
        title: each.title,
        thumbnailUrl: each.thumbnail_url,

        viewCount: each.view_count,
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
        <ul className="videos-container">
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
      <div className="retry-container">
        <RetryButton onClick={this.getData}>Retry</RetryButton>
      </div>
    </div>
  )

  getItem = (each, Light) => (
    <li className="item" key={each.id}>
      <Link className="linkssss" to={`videos/${each.id}`}>
        <img className="img" src={each.thumbnailUrl} alt="video thumbnail" />

        <Title Light={Light}>{each.title}</Title>
        <Title Light={Light}>{each.viewCount} Watching Worldwide</Title>
      </Link>
    </li>
  )

  render() {
    const {status} = this.state

    return (
      <BackgroundTheme.Consumer>
        {value => {
          const {isLightBackgroundTheme} = value
          return (
            <>
              <Header />

              <GameBgContainer>
                <NavBar />
                <Gamemain Light={isLightBackgroundTheme} data-testid="gaming">
                  <GamePageContainer Light={isLightBackgroundTheme}>
                    <h1>Gaming</h1>
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
                  </GamePageContainer>
                </Gamemain>
              </GameBgContainer>
            </>
          )
        }}
      </BackgroundTheme.Consumer>
    )
  }
}

export default Gaming
