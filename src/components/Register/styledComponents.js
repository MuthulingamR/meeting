import styled from 'styled-components'

export const RegisterContainer = styled.div`
  background-color: #ffffff;
  height: 100vh;
  padding: 25px;
  display: flex;
  justify-content: center;
`
export const Logo = styled.img`
  width: 110px;
  align-self: flex-start;
`
export const RegisterResponseContainer = styled.div`
  display: flex;
  width: 80%;
  height: 80%;
  justify-content: center;
  align-items: center;
`
export const RegisterImage = styled.img`
  width: 45%;
`

export const FormContainer = styled.form`
  display: flex;
  width: 50%;
  flex-direction: column;
  align-items: flex-start;
`
export const FormHeading = styled.h1`
  color: ' #334155';
  font-family: 'Roboto';
  font-size: 35px;
`
export const Label = styled.label`
  color: #7b8794;
  font-family: 'Roboto';
  font-size: 15px;
  margin-bottom: 10px;
  font-weight: 600;
`
export const InputField = styled.input`
  width: 100%;
  height: 40px;
  padding: 10px;
  color: #475569;
  font-family: 'Roboto';
  font-size: 15px;
  border: 1px solid #cbd5e1;
  border-radius: 6px;
  outline: none;
  margin-bottom: 25px;
`
export const RegisterBtn = styled.button`
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
export const ErrorMsg = styled.p`
  color: #ff0b37;
  font-family: 'Roboto';
  font-size: 15px;
`
