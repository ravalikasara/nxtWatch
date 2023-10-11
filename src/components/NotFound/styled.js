import styled from 'styled-components'

export const NotFoundHeading = styled.h1`
  color: ${props => (props.Light ? '#000' : '#fff')};
  font-size: 28px;
  text-align: center;
`
export const NotFoundPara = styled.p`
  color: ${props => (props.Light ? '#000' : '#fff')};
  font-size: 20px;
  text-align: center;
`

export const NotFoundPageContainer = styled.div`
  height: 100vh;
  width: 90vw;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  background-color: ${props => (props.Light ? '#f1f1f1' : '#181818')};
`
export const NotFoundPageBgContainer = styled.div`
  display: flex;
`
export const Img = styled.img`
  height: 300px;
  width: 300px;
`
