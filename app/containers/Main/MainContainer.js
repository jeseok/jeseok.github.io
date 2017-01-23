import React from 'react'
import { Header } from 'components'

const MainContainer = React.createClass({
  componentDidMount(){

  },
  render () {
    return (
      <div className={'outer-frame'}>
        <Header
          textToDisplay={'Hello-World'}/>
      </div>

    )
  },
})

export default MainContainer
