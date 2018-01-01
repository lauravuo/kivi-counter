export const SELECT_USER = 'SELECT_USER'
export const TOGGLE_SQUARE = 'TOGGLE_SQUARE'
export const CLOSE_ROUND = 'CLOSE_ROUND'

export const selectUser = payload => ({
  type: SELECT_USER,
  payload
})

export const toggleSquare = payload => ({
  type: TOGGLE_SQUARE,
  payload
})

export const closeRound = () => ({
  type: CLOSE_ROUND
})
