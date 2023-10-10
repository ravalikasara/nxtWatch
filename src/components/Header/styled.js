import styled from 'styled-components'

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px 50px;
  min-height: 100px;

  background-color: ${props => (props.Lighttheme ? '#fff' : '#1e293b')};
`

export const HeaderLogo = styled.img`
  height: 30px;
  width: 100px;
`
export const HeaderRightIconsCard = styled.div`
  display: flex;
`
export const HeaderThemeButton = styled.button`
  border: none;
  background-color: transparent;
  outline: none;
  margin-top: 0px;
  margin-right: 20px;
  color: ${props => (props.Lighttheme ? '#000' : '#fff')};
`
export const LogOut = styled.button`
  border: 1px solid #3b82f6;
  color: #3b82f6;
  background-color: transparent;
  outline: none;
  height: 30px;
  width: 100px;
  border-radius: 3px;
  margin-top: 13px;
  margin-left: 25px;
`
export const HeaderProfile = styled.button`
  border: none;
  background-color: transparent;
  outline: none;
  margin-top: 0px;

  color: ${props => (props.Lighttheme ? '#000' : '#fff')};
`
