import styled from 'styled-components'

export const Navs = styled.ul`
  display: flex;

  flex-direction: column;
`

export const NavBars = styled.div`
  display: flex;
  width: 300px;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
  align-items: start;
  background-color: ${props => (props.Light ? '#fff' : '#1e293b')};
`

export const Lists = styled.li`
  list-style-type: none;
  text-decoration: none;
  height: 30px;

  width: 200px;
  margin: 10px;
  padding: 2px;
  background-color: ${props => {
    if (!props.Light) {
      return '#1e293b'
    }
    if (props.value === props.activeRoute) {
      return '#d7dfe9'
    }
    return '#fff'
  }};
`
export const Logo = styled.i`
  color: ${props => {
    if (!props.Light) {
      return '#a6a6a6'
    }
    if (props.value === props.activeRoute) {
      return '#ff0000'
    }
    return '#475569'
  }};
  height: 20px;

  width: 20px;
`

export const RouteName = styled.p`
  margin-top: 0px;
  color: ${props => {
    if (!props.Light) {
      return '#fff'
    }
    if (props.value === props.activeRoute) {
      return '#1e293b'
    }
    return '#000'
  }};
`

export const ContactUs = styled.p`
  font-size: 20px;
  align-self: center;
  color: ${props => (props.Light ? '#000' : '#fff')};
`

export const SocialMedia = styled.div`
  align-self: center;
  display: flex;
`

export const C = styled.div`
  display: flex;
  flex-direction: column;
`

export const Social = styled.img`
  height: 30px;
  width: 30px;
  margin: 10px;
`
export const Head = styled.p`
  width: 200px;
  font-size: 15px;
  text-align: center;
  align-self: center;
  font-weight: bold;
  color: ${props => (props.Light ? '#000' : '#fff')};
`
