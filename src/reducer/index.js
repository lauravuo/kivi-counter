import {SELECT_USER, TOGGLE_SQUARE} from '../actions'
import {PTS, BoardModel} from './board-model'

const pointsDefault = () => ({
  1: {},
  2: {},
  3: {},
  4: {}
})

const defaultState = {
  activeUser: 1,
  selections: {
    0: {},
    1: {},
    2: {},
    3: {},
    4: {},
    5: {},
    6: {}
  },
  points: {
    1: 0,
    2: 0,
    3: 0,
    4: 0
  }
}

const squarePoints = square => {
  switch (square) {
    case PTS.WE:
      return 1
    case PTS.BK:
      return 2
    case PTS.RD:
      return 3
    default:
      return 0
  }
}

const calcPoints = (selections, rowMode) => {
  const resetTemp = () => ({
    factor: 0,
    current: 0,
    singleSquare: null
  })
  const points = pointsDefault()
  for (let player = 1; player < 5; player++) {
    let total = 0
    const singleSquares = []
    let temp = resetTemp()
    const sumPoints = () => {
      if (temp.factor > 0) {
        total += temp.factor > 1 ? temp.factor * temp.current : 0
        if (temp.factor === 1) {
          singleSquares.push({...temp.singleSquare})
        }
        temp = resetTemp()
      }
    }
    for (let i = 0; i < BoardModel.length; i++) {
      for (let j = 0; j < BoardModel[i].length; j++) {
        const first = rowMode ? i : j
        const second = rowMode ? j : i
        const singlePoints = squarePoints(BoardModel[first][second])
        const squareValue = selections[first][second]
        if (squareValue === player) {
          temp.factor++
          temp.current += singlePoints
          temp.singleSquare = {first, second}
        } else {
          sumPoints()
        }
      }
      sumPoints()
    }
    points[player].total = total
    points[player].singles = singleSquares
  }
  return points
}

const countSingleSquares = (horizontal, vertical) => {
  const points = pointsDefault()
  for (let player = 1; player < 5; player++) {
    let total = 0
    for (let i = 0; i < horizontal[player].singles.length; i++) {
      const horizontalItem = horizontal[player].singles[i]
      if (
        vertical[player].singles.find(
          item => item.first === horizontalItem.first && item.second === horizontalItem.second
        )
      ) {
        total += squarePoints(BoardModel[horizontalItem.first][horizontalItem.second])
      }
    }
    points[player].total = total
  }
  return points
}

const countPoints = selections => {
  const horizontalPoints = calcPoints(selections, true)
  const verticalPoints = calcPoints(selections, false)
  const singles = countSingleSquares(horizontalPoints, verticalPoints)
  return {
    1: horizontalPoints[1].total + verticalPoints[1].total + singles[1].total,
    2: horizontalPoints[2].total + verticalPoints[2].total + singles[2].total,
    3: horizontalPoints[3].total + verticalPoints[3].total + singles[3].total,
    4: horizontalPoints[4].total + verticalPoints[4].total + singles[4].total
  }
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case SELECT_USER: {
      return {
        ...state,
        activeUser: action.payload
      }
    }
    case TOGGLE_SQUARE: {
      const selections = {...state.selections}
      const current = selections[action.payload.row][action.payload.square]
      selections[action.payload.row][action.payload.square] = current ? null : state.activeUser
      const points = countPoints(selections)
      return {
        ...state,
        selections,
        points
      }
    }
    default: {
      return state
    }
  }
}
