import {Component} from 'react'

import Cookies from 'js-cookie'
import ReactPlayer from 'react-player'

import {AiOutlineDislike, AiOutlineLike} from 'react-icons/ai'
import {RiPlayListAddLine} from 'react-icons/ri'

import Loader from 'react-loader-spinner'

import {formatDistanceToNow} from 'date-fns'

import BackgroundTheme from '../BackgroundTheme'
import Header from '../Header'

import NavBar from '../NavBar'

import './index.css'

import {
  VideoDeatilsBgContainer,
  Hr,
  Title,
  FailureHeading,
  FailurePara,
  RetryButton,
  normalText,
  LikesButton,
  LikesText,
  VideoPageContainer,
} from './styled'

class VideoDetails extends Component {
  state = {
    status: 'Initial',
    likeColor: '#64748b',
    dislikeColor: '#64748b',
    saveColor: '#64748b',
    videosDetails: [],
    saveStatus: false,
  }

  componentDidMount() {
    this.getData()
  }

  getData = async () => {
    this.setState({status: 'LOADING'})
    const {match} = this.props
    const {params} = match
    const {id} = params

    const jwtToken = Cookies.get('jwt_token')

    this.setState({status: 'LOADING'})
    const options = {
      method: 'GET',
      headers: {Authorization: `Bearer ${jwtToken}`},
    }
    const url = `https://apis.ccbp.in/videos/${id}`

    const response = await fetch(url, options)
    const data = await response.json()

    if (response.ok === true) {
      const each = data.video_details
      const updatedVideo = {
        id: each.id,
        title: each.title,
        description: each.description,
        thumbnailUrl: each.thumbnail_url,
        videoUrl: each.video_url,
        channel: each.channel,
        viewCount: each.view_count,
        publishedAt: each.published_at,
      }

      this.setState({status: 'SUCCESS', videosDetails: updatedVideo})
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

  Success = (Light, changeSavedList) => {
    const {saveStatus, likeColor, dislikeColor, saveColor} = this.state
    const {videosDetails} = this.state
    const date = formatDistanceToNow(new Date(videosDetails.publishedAt)).split(
      ' ',
    )

    const {channel} = videosDetails
    const profileImage = channel.profile_image_url
    const subscribersCount = channel.subscriber_count

    const dats = date.slice(1).join(' ')

    return (
      <div className="video-details">
        <ReactPlayer
          height="500px"
          width="1000px"
          url={videosDetails.videoUrl}
        />

        <div className="details">
          <div>
            <Title Light={Light}>{videosDetails.title}</Title>
            <p className="name">
              {videosDetails.viewCount} views {dats} ago
            </p>
          </div>
          <div className="details-profile">
            <div className="details-profile">
              <LikesButton
                onClick={this.like}
                Color={likeColor}
                className="button"
              >
                <AiOutlineLike />
                <LikesText Color={likeColor} className="likes">
                  Like
                </LikesText>
              </LikesButton>
            </div>
            <div className="details-profile">
              <LikesButton
                onClick={this.dislike}
                Color={dislikeColor}
                className="button"
              >
                <AiOutlineDislike />
                <LikesText Color={dislikeColor} className="likes">
                  Dislike
                </LikesText>
              </LikesButton>
            </div>
            <div className="details-profile">
              <LikesButton
                onClick={() => {
                  this.save(changeSavedList)
                }}
                Color={saveColor}
                className="button"
              >
                <RiPlayListAddLine />
                <LikesText Color={saveColor} className="likes">
                  {saveStatus ? 'Saved' : 'Save'}
                </LikesText>
              </LikesButton>
            </div>
          </div>
        </div>
        <Hr className="hr" />
        <div className="details-profile">
          <img className="profile-img" src={profileImage} alt="channel logo" />
          <div>
            <Title Light={Light}>{channel.name}</Title>
            <p className="name">{subscribersCount} subscribers</p>
          </div>
          <p>{videosDetails.description}</p>
        </div>
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
        We are having some trouble to complete your request. Please try again.
      </FailurePara>

      <RetryButton onClick={this.getData}>Retry</RetryButton>
    </div>
  )

  like = () => {
    const {likeColor, dislikeColor} = this.state
    let newLikeColor = '#64748b'
    let newDislikeColor = '#64748b'
    if (likeColor === '#64748b') {
      newLikeColor = '#2563eb'
      if (dislikeColor === '#2563eb') {
        newDislikeColor = '#64748b'
      }
    }
    this.setState({likeColor: newLikeColor, dislikeColor: newDislikeColor})
  }

  save = changeSavedList => {
    const {saveColor, videosDetails} = this.state

    let newSaveColor = '#64748b'

    if (saveColor === '#64748b') {
      newSaveColor = '#2563eb'
    }
    this.setState(prev => ({
      saveColor: newSaveColor,
      saveStatus: !prev.saveStatus,
    }))
    changeSavedList(videosDetails)
  }

  dislike = () => {
    const {likeColor, dislikeColor} = this.state

    let newDislikeColor = '#64748b'
    let newLikeColor = '#64748b'

    if (dislikeColor === '#64748b') {
      newDislikeColor = '#2563eb'
      if (likeColor === '#2563eb') {
        newLikeColor = '#64748b'
      }
    }
    this.setState({likeColor: newLikeColor, dislikeColor: newDislikeColor})
  }

  render() {
    const {status} = this.state

    return (
      <BackgroundTheme.Consumer>
        {value => {
          const {isLightBackgroundTheme, changeSavedList} = value
          return (
            <>
              <Header />
              <VideoDeatilsBgContainer>
                <NavBar />
                <VideoPageContainer
                  data-testid="videoItemDetails"
                  Light={isLightBackgroundTheme}
                >
                  {(() => {
                    switch (status) {
                      case 'LOADING':
                        return this.Loading(isLightBackgroundTheme)
                      case 'SUCCESS':
                        return this.Success(
                          isLightBackgroundTheme,
                          changeSavedList,
                        )
                      case 'FAILURE':
                        return this.Failure(isLightBackgroundTheme)
                      default:
                        return null
                    }
                  })()}
                </VideoPageContainer>
              </VideoDeatilsBgContainer>
            </>
          )
        }}
      </BackgroundTheme.Consumer>
    )
  }
}

export default VideoDetails
