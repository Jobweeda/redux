import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import Guess from '../actions/guess';
import PropTypes from 'prop-types'

function showGuess(word, guess) {
  var wordArray = word.split("")
  var guesses = wordArray.map(function(letter){
    if (guess.includes(letter) === false) return "_"
    else return letter
  })
  var showGuess = guesses.join(" ")
  return showGuess
}

function wrongGuessCount(word, guesses) {
  return guesses.reduce(function(sum, guess) {
    return sum + (word.indexOf(guess, 0) === -1)
  }, 0);
}

class Hangman extends PureComponent {
  static propTypes = {
    word: PropTypes.string.isrequired,
    guesses: PropTypes.array,
  }

  isWinner(word, guesses) {
    const guess = this.props.Guess[Guess.length - 1]
    const currentWord = this.props.word
    if ((wrongGuessCount(word, guesses) <= 6) && (showGuess(word, guesses)  === word.split("").join(" "))) return true
    else if (guess === currentWord) return true
  }

  newGuess(event) {
    event.preventDefault()
    const guess = this.refs.guess.value
    const currentWord = this.props.word

    if ((guess.length === 1) || (guess === currentWord))
    this.props.Guess(guess)
    else
    return (
      <alert>Invalid choice, try picking one letter OR the entire word!</alert>
    )
    document.getElementById("guessForm").reset()
  }

  render(){
    const currentWord = this.props.word
    const currentGuess = this.props.guess
    const currentGameWord = showGuess(currentWord, currentGuess)
    const thisRoundGuesses = wrongGuessCount(currentWord, currentGuess)
    const roundWinner = this.isWinner(currentWord, currentGuess)

    if (thisRoundGuesses <= 7 && roundWinner === true)
      return (
        <div className="game-won">
        <h2> Hurrah You won!</h2>
        </div>
      )
      else if (thisRoundGuesses > 7)
        return (
          <div className="game-lost">
          <h2>Oh noez you lost!</h2>
          <p> The word you were look for was {currentWord}</p>
          </div>
        )
    return (
      <div className='secret-word'>
          <h2>{ currentGameWord }</h2>
      <div className="guess">
          <form id="guessForm" onSubmit={this.newGuess.bind(this)}>
            <div className="input">
              <input ref="guess" type="guess" />
            </div>
            <input type="submit" value="Guess" />
          </form>
        </div>
         <p>Total guesses: {currentGuess.length}/7</p>
         <p>Guessed letters: { currentGuess.join(" ") }</p>

      </div>

    )
  }
}

const mapStateToProps = ({ word, guess }) => ({ word, guess })
const mapDispatchToProps = { Guess }

export default connect (mapStateToProps, mapDispatchToProps)(Hangman)
