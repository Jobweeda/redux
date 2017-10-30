import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import Game from '../actions/newGame'
import word from '../fixtures/words'

class NewGame extends PureComponent {


  newGame(event) {
    event.preventDefault()
    this.props.Game(word[Math.floor(Math.random()*word.length)])
  }

  render() {
    return (
     <div className='newGame-button'>
     <button className="primary-button" onClick={this.newGame.bind(this)}>New game</button>
     </div>
    )
  }
}

const mapDispatchToProps = { Game }
export default connect (null, mapDispatchToProps)(NewGame)
