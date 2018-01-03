import React, {Component} from 'react'
import {connect} from 'react-redux'

import {selectUser, toggleSquare, closeRound, closeGame} from '../actions'
import Rounds from './rounds'
import Board from './board'
import PlayerSelection from './player-selection'

import {Container, Header, Scroll, ScrollContainer} from './style'

export class MainView extends Component {
  render() {
    const {
      selectActiveUser,
      toggleActiveSquare,
      closeActiveGame,
      activeUser,
      selections,
      points,
      rounds
    } = this.props
    const setScrollRef = scrollView => {
      this.scrollView = scrollView
    }
    const activeRoundClosed = () => {
      this.props.closeActiveRound()
      this.scrollView.scrollToEnd()
    }
    return (
      <Container>
        <Header>Kivi Scores</Header>
        <Scroll innerRef={setScrollRef}>
          <ScrollContainer>
            <Board selections={selections} toggleActiveSquare={toggleActiveSquare} />
            <PlayerSelection
              points={points}
              selectActiveUser={selectActiveUser}
              activeUser={activeUser}
            />
            <Rounds
              rounds={rounds}
              closeActiveRound={activeRoundClosed}
              closeActiveGame={closeActiveGame}
            />
          </ScrollContainer>
        </Scroll>
      </Container>
    )
  }
}

const mapStateToProps = ({activeUser, selections, points, rounds}) => ({
  activeUser,
  selections,
  points,
  rounds
})

const mapDispatchToProps = dispatch => ({
  selectActiveUser: number => dispatch(selectUser(number)),
  toggleActiveSquare: (row, square) => dispatch(toggleSquare({row, square})),
  closeActiveRound: () => dispatch(closeRound()),
  closeActiveGame: () => dispatch(closeGame())
})

export default connect(mapStateToProps, mapDispatchToProps)(MainView)
