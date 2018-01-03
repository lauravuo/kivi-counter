import {SELECT_USER, TOGGLE_SQUARE, CLOSE_ROUND, CLOSE_GAME} from '../actions'

import calculate from './calculate'

const pointsDefault = () => ({
  1: 0,
  2: 0,
  3: 0,
  4: 0
})

const emptySelections = () => ({
  0: {},
  1: {},
  2: {},
  3: {},
  4: {},
  5: {},
  6: {}
})

const roundsDefault = () => ({
  history: [],
  total: pointsDefault()
})

const defaultState = {
  activeUser: 1,
  selections: emptySelections(),
  points: pointsDefault(),
  rounds: roundsDefault()
}

const countTotal = (player, history) => {
  let total = 0
  for (const i = 0; i < history.length; i++) {
    total += history[i][player]
  }
  return total
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
      const points = calculate(selections)
      return {
        ...state,
        selections,
        points
      }
    }
    case CLOSE_ROUND: {
      const rounds = {...state.rounds}
      rounds.history = [...rounds.history, state.points]
      rounds.total[1] = countTotal(1, rounds.history)
      rounds.total[2] = countTotal(2, rounds.history)
      rounds.total[3] = countTotal(3, rounds.history)
      rounds.total[4] = countTotal(4, rounds.history)
      return {...state, rounds, selections: emptySelections(), points: pointsDefault()}
    }
    case CLOSE_GAME:
      return {...state, rounds: roundsDefault()}
    default: {
      return state
    }
  }
}
