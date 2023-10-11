import styled from 'styled-components'

export const SavedBgContainer = styled.div`
  display: flex;
`

export const SavedContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  min-height: 100vh;
  min-width: 1100px;
  background-color: ${props => (props.Light ? '#f9f9f9' : '#0f0f0f')};
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
export const SavedLogoTitle = styled.h1`
  font-size: 20px;
  width: 600px;
  margin-left: 20px;
  color: ${props => (props.Light ? '#000' : '#fff')};
`
