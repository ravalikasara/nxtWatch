import styled from 'styled-components'

export const TrendingBgContainer = styled.div`
  display: flex;
`

export const Trendingmain = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${props => (props.Light ? '#f1f1f1' : '#0f0f0f')};
`

export const Logo = styled.img`
  height: 50px;
  width: 140px;
`

export const TrendingPageContainer = styled.div`
  padding: 20px;

  background-color: ${props => (props.Light ? '#f1f1f1' : '#0f0f0f')};
`

export const VideoStatusContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  min-width: 90vw;
`
export const SavedLogoTitle = styled.h1`
  font-size: 20px;
  width: 600px;
  margin-left: 20px;
  color: ${props => (props.Light ? '#000' : '#fff')};
`

export const FailureHeading = styled.h1`
  color: ${props => (props.Light ? '#000' : '#fff')};
  font-size: 28px;
  text-align: center;
`
export const FailurePara = styled.p`
  color: ${props => (props.Light ? '#000' : '#fff')};
  font-size: 20px;
  text-align: center;
`
export const RetryButton = styled.button`
  color: white;
  text-align: center;
  height: 50px;
  width: 100px;
  border: none;
  border-radius: 5px;
  background-color: #4f46e5;
  font-size: 20px;
`
export const Title = styled.p`
  font-size: 14px;
  font-weight: 500;
  width: 180px;

  color: ${props => (props.Light ? '#000' : '#fff')};
`

export const SavedTitleBg = styled.div`
  height: 100px;
  display: flex;
  padding: 20px;

  justify-content: flex-start;
  align-items: center;

  background-color: ${props => (props.Light ? '#f1f1f1' : '#231f20')};
`
export const SavedLogoBg = styled.div`
  height: 50px;
  width: 50px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  color: red;

  border-radius: 50px;

  background-color: ${props => (props.Light ? '#ebebeb' : '#383838')};
`
