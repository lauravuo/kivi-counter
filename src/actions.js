export const SELECT_USER = 'SELECT_USER'
export const TOGGLE_SQUARE = 'TOGGLE_SQUARE'

export const selectUser = payload => ({
  type: SELECT_USER,
  payload
})

export const toggleSquare = payload => ({
  type: TOGGLE_SQUARE,
  payload
})
