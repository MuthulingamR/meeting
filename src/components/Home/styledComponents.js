import styled from 'styled-components'

export const HomeContainer = styled.div`
  background-color: #ffffff;
  display: flex;
  justify-content: center;
  height: 100vh;
  padding: 25px;
`
export const Logo = styled.img`
  width: 110px;
  align-self: flex-start;
`

export const HomeImg = styled.img`
  width: 65%;
`

export const HomeResponseContainer = styled.div`
  display: flex;
  width: 80%;
  height: 80%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 55px;
`
export const HomeHeading = styled.h1`
  color: ${props => (props.isClicked ? '#2563eb' : '#334155')};
  font-family: 'Roboto';
  font-size: ${props => (props.isClicked ? '45px' : '35px')};
  font-weight: ${props => (props.isClicked ? 'bold' : 400)};
  text-align: center;
`
export const HomePara = styled.p`
  color: ${props => (props.isClicked ? '#334155' : '#475569')};
  font-family: 'Roboto';
  font-size: ${props => (props.isClicked ? '35px' : '25px')};
  font-weight: ${props => (props.isClicked ? 'bold' : 400)};
  text-align: center;
`
export const HomeBtn = styled.button`
  background-color: #3b82f6;
  padding: 8px 14px 8px 14px;
  color: #ffffff;
  font-family: 'Roboto';
  font-weight: 600;
  border-radius: 8px;
  border: none;
  outline: none;
  cursor: pointer;
`
