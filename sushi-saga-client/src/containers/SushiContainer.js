import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

// starter code: SushiContainer began as a functional component
// changed to a js object (class) in order to create / store state

class SushiContainer extends React.Component {
  state = {
    startIndex: 0
  }

  updateIndex = () => {
    this.setState(prevState => ({ startIndex: prevState.startIndex + 4 }))
  }
  render(){
    let { startIndex } = this.state
    return (
      <Fragment>
        <div className="belt">
          {props.sushi.slice(4, 8).map(sushi => <Sushi key={sushi.id} {...sushi} /> )}
        </div>
        <div>
          <MoreButton />
        </div>
      <Fragment/>)
      )
  }
}

export default SushiContainer;