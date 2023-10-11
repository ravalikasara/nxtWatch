import styled from 'styled-components'

export const VideoDeatilsBgContainer = styled.div`
  display: flex;
`

export const VideoDetails = styled.div`
  display: flex;
  flex-direction: column;
`
export const normalText = styled.p`
  color: '#aaa';
`

export const FailureHeading = styled.h1`
  color: ${props => (props.Light ? '#000' : '#fff')};
  font-size: 28px;

  text-align: center;
`
export const FailurePara = styled.p`
  color: ${props => (props.Light ? '#000' : '#fff')};
  font-size: 20px;
  width: 1000px;
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

export const Hr = styled.hr`
  color: ${props => (props.Light ? '#000' : '#fff')};
  height: 2px;
  margin: 50px 10px;
`
export const VideoPageContainer = styled.div`
  background-color: ${props => (props.Light ? '#f9f9f9' : '#0f0f0f ')};
`
export const Title = styled.p`
  font-weight: 500;

  color: ${props => (props.Light ? '#000' : '#fff')};
`

export const LikesButton = styled.button`
  color: ${props => props.Color};
`

export const LikesText = styled.p`
  color: ${props => props.Color};
`
