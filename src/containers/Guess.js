import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import userGuess from '../actions/guess';


class Guess extends PureComponent {

  submitForm(event){
    event.preventDefault()
    const guess = this.refs.guess.value.toUppercase
    this.props.userGuess(guess)
    document.getElementById('form')
    console.log()
  }

  render(userGuess) {
    return (
      <div className="guess">
      <form id='form' onSubmit={this.submitForm.bind(this)}>
        <div className='input'>
           <input ref='guess' type='guess' maxlength='1' placeholder='pick a letter' />
        </div>
        <input type='submit' value='guess'/>
        </form>
      </div>
    )
  }

}

const mapStateToProps = ({ guess, word }) => ({ guess, word })
const mapDispatchToProps = { userGuess }


export default connect(mapStateToProps, mapDispatchToProps)(Guess)
