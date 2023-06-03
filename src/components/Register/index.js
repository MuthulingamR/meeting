import {Component} from 'react'
import {
  RegisterContainer,
  RegisterResponseContainer,
  Logo,
  RegisterImage,
  FormContainer,
  FormHeading,
  Label,
  InputField,
  RegisterBtn,
  ErrorMsg,
} from './styledComponents'

import MeetingContext from '../../Context/MettingContext'

const topicsList = [
  {
    id: 'ARTS_AND_CULTURE',
    displayText: 'Arts and Culture',
  },
  {
    id: 'CAREER_AND_BUSINESS',
    displayText: 'Career and Business',
  },
  {
    id: 'EDUCATION_AND_LEARNING',
    displayText: 'Education and Learning',
  },
  {
    id: 'FASHION_AND_BEAUTY',
    displayText: 'Fashion and Learning',
  },
  {
    id: 'GAMES',
    displayText: 'Games',
  },
]

class Register extends Component {
  state = {isEmptyUsername: false}

  render() {
    return (
      <MeetingContext.Consumer>
        {value => {
          const {
            activeOptionValue,
            username,
            onChangeUsername,
            onChangeMeetingOption,
          } = value
          const onSubmitForm = event => {
            event.preventDefault()
            const {history} = this.props
            if (username !== '') {
              history.replace('/')
            } else {
              this.setState({isEmptyUsername: true})
            }
          }
          const {isEmptyUsername} = this.state
          return (
            <RegisterContainer>
              <Logo
                src="https://assets.ccbp.in/frontend/react-js/meetup/website-logo-img.png"
                alt="website logo"
              />
              <RegisterResponseContainer>
                <RegisterImage
                  src="https://assets.ccbp.in/frontend/react-js/meetup/website-register-img.png"
                  alt="website register"
                />
                <FormContainer onSubmit={onSubmitForm}>
                  <FormHeading>Let us join</FormHeading>
                  <Label htmlFor="name">NAME</Label>
                  <InputField
                    type="text"
                    onChange={onChangeUsername}
                    value={username}
                    id="name"
                  />
                  <Label htmlFor="select">TOPICS</Label>
                  <InputField
                    as="select"
                    onChange={onChangeMeetingOption}
                    value={activeOptionValue}
                    id="select"
                  >
                    {topicsList.map(each => (
                      <option key={each.id} value={each.id}>
                        {each.displayText}
                      </option>
                    ))}
                  </InputField>
                  <RegisterBtn type="submit">Register Now</RegisterBtn>
                  {isEmptyUsername && (
                    <ErrorMsg>Please enter your name</ErrorMsg>
                  )}
                </FormContainer>
              </RegisterResponseContainer>
            </RegisterContainer>
          )
        }}
      </MeetingContext.Consumer>
    )
  }
}

export default Register
