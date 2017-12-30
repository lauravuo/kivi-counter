import React from 'react'
import {connect} from 'react-redux'
import {Button, Text, TouchableHighlight, View} from 'react-native'

import {selectUser, toggleSquare} from '../actions'

import {Board, BodyText, Container, Cross, Header, Row, Black, White, Red, SpaceAroundRow} from './style'
import {PTS, BoardModel} from '../reducer/board-model'

export const MainView = ({
  selectActiveUser,
  toggleActiveSquare,
  activeUser,
  selections,
  points
}) => {
  const selectUser1 = () => selectActiveUser(1)
  const selectUser2 = () => selectActiveUser(2)
  const selectUser3 = () => selectActiveUser(3)
  const selectUser4 = () => selectActiveUser(4)

  const SquareType = (square, rowIndex, squareIndex) => {
    const onSquarePress = () => toggleActiveSquare(rowIndex, squareIndex)
    let color = <White />
    if (square === PTS.BK) {
      color = <Black key={squareIndex} />
    }
    if (square === PTS.RD) {
      color = <Red key={squareIndex} />
    }
    return (
      <TouchableHighlight onPress={onSquarePress} key={squareIndex}>
        <View>
          {color}
          {selections[rowIndex][squareIndex] && <Cross>{selections[rowIndex][squareIndex]}</Cross>}
        </View>
      </TouchableHighlight>
    )
  }

  return (
    <Container>
      <Header>Kivi Points</Header>
      <Board>
        {BoardModel.map((row, index) => (
          <Row key={index}>
            {row.map((square, squareIndex) => SquareType(square, index, squareIndex))}
          </Row>
        ))}
      </Board>
      <BodyText>Selection: {activeUser}</BodyText>
      <SpaceAroundRow>
        <View>
          <Button title="1" onPress={selectUser1} />
          <BodyText>{points[1]}</BodyText>
        </View>
        <View>
          <Button title="2" onPress={selectUser2} />
          <BodyText>{points[2]}</BodyText>
        </View>
        <View>
          <Button title="3" onPress={selectUser3} />
          <BodyText>{points[3]}</BodyText>
        </View>
        <View>
          <Button title="4" onPress={selectUser4} />
          <BodyText>{points[4]}</BodyText>
        </View>
      </SpaceAroundRow>
    </Container>
  )
}

const mapStateToProps = ({activeUser, selections, points}) => ({
  activeUser,
  selections,
  points
})

const mapDispatchToProps = dispatch => ({
  selectActiveUser: number => dispatch(selectUser(number)),
  toggleActiveSquare: (row, square) => dispatch(toggleSquare({row, square}))
})

export default connect(mapStateToProps, mapDispatchToProps)(MainView)
