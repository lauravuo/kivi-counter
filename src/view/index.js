import React from 'react'
import {connect} from 'react-redux'
import {Button, Text, TouchableHighlight, View} from 'react-native'

import {selectUser, toggleSquare} from '../actions'

import {Board, Container, Cross, Header, Row, Black, White, Red, SpaceAroundRow} from './style'
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
      <Text>Selection: {activeUser}</Text>
      <SpaceAroundRow>
        <View>
          <Button title="1" onPress={selectUser1} />
          <Text>{points[1]}</Text>
        </View>
        <View>
          <Button title="2" onPress={selectUser2} />
          <Text>{points[2]}</Text>
        </View>
        <View>
          <Button title="3" onPress={selectUser3} />
          <Text>{points[3]}</Text>
        </View>
        <View>
          <Button title="4" onPress={selectUser4} />
          <Text>{points[4]}</Text>
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
