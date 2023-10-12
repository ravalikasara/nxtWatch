import styled from 'styled-components'

export const GameBgContainer = styled.div`
  display: flex;
`

export const Gamemain = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${props => (props.Light ? '#f1f1f1' : '#0f0f0f')};
`

export const Logo = styled.img`
  height: 50px;
  width: 140px;
  background-color: ${props => (props.Light ? '#f1f1f1' : '#0f0f0f')};
`

export const GamePageContainer = styled.div`
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
