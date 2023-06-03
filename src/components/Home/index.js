import {Link} from 'react-router-dom'
import {
  HomeContainer,
  HomeHeading,
  HomeResponseContainer,
  HomeBtn,
  HomePara,
  HomeImg,
  Logo,
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

const Home = () => (
  <MeetingContext.Consumer>
    {value => {
      const {username, activeOptionValue} = value
      const isClicked = username !== ''
      const headingContent = isClicked
        ? `Hello ${username}`
        : 'Welcome to Meetup'
      const activeMeeting = topicsList.find(
        each => each.id === activeOptionValue,
      )
      const {displayText} = activeMeeting
      const meeting = isClicked ? displayText : 'Please register for the topic'

      return (
        <HomeContainer>
          <Logo
            src="https://assets.ccbp.in/frontend/react-js/meetup/website-logo-img.png "
            alt="website logo"
          />
          <HomeResponseContainer>
            <HomeHeading isClicked={isClicked}>{headingContent}</HomeHeading>
            <HomePara isClicked={isClicked}>{meeting}</HomePara>
            {isClicked ? null : (
              <Link to="/register">
                <HomeBtn type="button">Register</HomeBtn>
              </Link>
            )}
            <HomeImg
              src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png"
              alt="meetup"
            />
          </HomeResponseContainer>
        </HomeContainer>
      )
    }}
  </MeetingContext.Consumer>
)

export default Home
