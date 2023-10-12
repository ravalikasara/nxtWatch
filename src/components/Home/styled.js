import styled from 'styled-components'

export const HomeBgContainer = styled.div`
  display: flex;
`

export const Homemain = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${props => (props.Light ? '#f1f1f1' : '#181818')};
`

export const HomeBanner = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  height: 40vh;
  width: 80vw;
  padding: 2px 20px;
  display: flex;
  justify-content: space-between;
  background-size: cover;
`

export const Logo = styled.img`
  height: 50px;
  width: 140px;
`
export const BannerText = styled.p`
  width: 250px;
  margin-top: 20px;

  font-weight: 600px;
  color: #181818;
`
export const BannerButton = styled.button`
  width: 200px;
  margin-top: 20px;
  background-color: transparent;
  height: 40px;
  border: 2px solid #181818;

  font-weight: 600px;
  color: #181818;
`
export const HomePageContainer = styled.div`
  padding: 20px;

  background-color: ${props => (props.Light ? '#f1f1f1' : '#181818')};
`
export const SearchInputDiv = styled.div`
  border: 1px solid #7e858e;
  border-radius: 2px;
  height: 30px;
  width: 300px;
  display: flex;
  justify-content: space-between;

  background-color: ${props => (props.Light ? '#fff' : '#000')};
`
export const HomeInput = styled.input`
  outline:none;
  border:none;
  width:250px;

  color:${props => (props.Light ? '#000' : '#fff')}

  background-color: transparent;
`
export const VideoStatusContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
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
