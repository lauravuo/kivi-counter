import React from 'react'
import {connect} from 'react-redux'

import {selectUser, toggleSquare, closeRound} from '../actions'
import Rounds from './rounds'
import Board from './board'
import PlayerSelection from './player-selection'

import {Container, Header, Scroll, ScrollContainer} from './style'

export const MainView = ({
  selectActiveUser,
  toggleActiveSquare,
  closeActiveRound,
  activeUser,
  selections,
  points,
  rounds
}) => (
  <Container>
    <Header>Kivi Scores</Header>
    <Scroll>
      <ScrollContainer>
        <Board selections={selections} toggleActiveSquare={toggleActiveSquare} />
        <PlayerSelection
          points={points}
          selectActiveUser={selectActiveUser}
          activeUser={activeUser}
        />
        <Rounds rounds={rounds} closeActiveRound={closeActiveRound} />
      </ScrollContainer>
    </Scroll>
  </Container>
)

const mapStateToProps = ({activeUser, selections, points, rounds}) => ({
  activeUser,
  selections,
  points,
  rounds
})

const mapDispatchToProps = dispatch => ({
  selectActiveUser: number => dispatch(selectUser(number)),
  toggleActiveSquare: (row, square) => dispatch(toggleSquare({row, square})),
  closeActiveRound: () => dispatch(closeRound())
})

export default connect(mapStateToProps, mapDispatchToProps)(MainView)
