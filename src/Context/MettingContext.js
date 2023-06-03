import React from 'react'

const MeetingContext = React.createContext({
  username: '',
  activeOptionValue: '',
  onChangeUsername: () => {},
  onChangeMeetingOption: () => {},
})

export default MeetingContext
