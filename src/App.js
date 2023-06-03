import {Component} from 'react'
import {Route, Switch, Redirect} from 'react-router-dom'

import MeetingContext from './Context/MettingContext'
import Register from './components/Register'
import NotFound from './components/NotFound'
import Home from './components/Home'

import './App.css'

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

class App extends Component {
  state = {
    username: '',
    activeOptionValue: topicsList[0].id,
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangeMeetingOption = event => {
    this.setState({activeOptionValue: event.target.value})
  }

  render() {
    const {username, activeOptionValue} = this.state

    return (
      <MeetingContext.Provider
        value={{
          username,
          activeOptionValue,
          onChangeUsername: this.onChangeUsername,
          onChangeMeetingOption: this.onChangeMeetingOption,
        }}
      >
        <Switch>
          <Route exact path="/register" component={Register} />
          <Route exact path="/" component={Home} />
          <Route path="/not-found" component={NotFound} />
          <Redirect to="not-found" />
        </Switch>
      </MeetingContext.Provider>
    )
  }
}

export default App
