import {Component} from 'react'
import Cookies from 'js-cookie'
import {formatDistanceToNow} from 'date-fns'
import Loader from 'react-loader-spinner'
import {Link} from 'react-router-dom'

import {AiOutlineClose, AiOutlineSearch} from 'react-icons/ai'
import BackgroundTheme from '../BackgroundTheme'
import Header from '../Header'

import NavBar from '../NavBar'

import './index.css'
import {
  HomeBgContainer,
  Homemain,
  HomeBanner,
  Logo,
  Title,
  BannerText,
  BannerButton,
  HomePageContainer,
  SearchInputDiv,
  HomeInput,
  VideoStatusContainer,
  FailureHeading,
  FailurePara,
  RetryButton,
} from './styled'

class Home extends Component {
  state = {showBanner: true, status: 'Initial', search: '', videosList: []}

  componentDidMount() {
    this.getData()
  }

  getData = async () => {
    const {search} = this.state
    console.log(search)
    const jwtToken = Cookies.get('jwt_token')

    this.setState({status: 'LOADING'})
    const options = {
      method: 'GET',
      headers: {Authorization: `Bearer ${jwtToken}`},
    }
    const url = `https://apis.ccbp.in/videos/all?search=${search}`

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

  removeBanner = () => {
    this.setState({showBanner: false})
  }

  HomeSearchChange = event => {
    this.setState({search: event.target.value})
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
    if (videosList.length === 0) {
      return (
        <div className="failure-container">
          <img
            className="failure-img"
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
            alt="no videos"
          />

          <FailureHeading Light={Light}>No Search results found</FailureHeading>
          <FailurePara Light={Light}>
            Try different key words or remove search filter
          </FailurePara>
          <div className="retry-container">
            <RetryButton>Retry</RetryButton>
          </div>
        </div>
      )
    }

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

  getItem = (each, Light) => {
    const {channel} = each

    const date = formatDistanceToNow(new Date(each.publishedAt)).split(' ')
    const dats = date.slice(1).join(' ')

    const profileUrl = channel.profile_image_url
    const {name} = channel
    return (
      <li className="item" key={each.id}>
        <Link className="linksssss" to={`videos/${each.id}`}>
          <img className="img" src={each.thumbnailUrl} alt="video thumbnail" />

          <div className="video-details-card">
            <img className="profile" src={profileUrl} alt="channel logo" />
            <div>
              <Title Light={Light}>{each.title}</Title>
              <p className="name">{name}</p>
              <p className="name">
                {each.viewCount} views {dats} ago
              </p>
              <p>{each.description}</p>
            </div>
          </div>
        </Link>
      </li>
    )
  }

  render() {
    const {showBanner, status, search} = this.state

    return (
      <BackgroundTheme.Consumer>
        {value => {
          const {isLightBackgroundTheme} = value
          return (
            <>
              <Header />

              <HomeBgContainer>
                <NavBar />
                <Homemain Light={isLightBackgroundTheme} data-testid="home">
                  {showBanner ? (
                    <HomeBanner data-testid="banner">
                      <div>
                        <Logo
                          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                          alt="channel logo"
                        />
                        <p>Buy Nxt Watch Premium</p>
                        <BannerButton>GET IT NOW</BannerButton>
                      </div>
                      <AiOutlineClose onClick={this.removeBanner} />
                    </HomeBanner>
                  ) : null}
                  <HomePageContainer Light={isLightBackgroundTheme}>
                    <SearchInputDiv Light={isLightBackgroundTheme}>
                      <HomeInput
                        onChange={this.HomeSearchChange}
                        value={search}
                        Light={isLightBackgroundTheme}
                        type="search"
                      />
                      <button
                        data-testid="searchButton"
                        type="button"
                        onClick={this.getData}
                        className="home-search"
                      >
                        <AiOutlineSearch />
                      </button>
                    </SearchInputDiv>
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
                  </HomePageContainer>
                </Homemain>
              </HomeBgContainer>
            </>
          )
        }}
      </BackgroundTheme.Consumer>
    )
  }
}

export default Home
