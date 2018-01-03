import React from 'react'
import {TouchableHighlight, View} from 'react-native'

import {Container, White, Black, Red, Row, Cross} from './style'
import {PTS, BoardModel} from '../../reducer/board-model'

const SquareType = (square, rowIndex, squareIndex, {toggleActiveSquare, selections}) => {
  const onSquarePress = () => toggleActiveSquare(rowIndex, squareIndex)
  let color = <White />
  if (square === PTS.BK) {
    color = <Black key={squareIndex} />
  }
  if (square === PTS.RD) {
    color = <Red key={squareIndex} />
  }
  const player = selections[rowIndex][squareIndex]
  return (
    <TouchableHighlight onPress={onSquarePress} key={squareIndex}>
      <View>
        {color}
        {player && <Cross player={player}>{player}</Cross>}
      </View>
    </TouchableHighlight>
  )
}

const Board = props => (
  <Container>
    {BoardModel.map((row, index) => (
      <Row key={index}>
        {row.map((square, squareIndex) => SquareType(square, index, squareIndex, props))}
      </Row>
    ))}
  </Container>
)

export default Board
