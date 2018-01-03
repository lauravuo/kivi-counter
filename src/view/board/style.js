import styled from 'styled-components/native'

import {playerColor} from '../style'

export const Container = styled.View`
  flex-direction: column;
  max-height: 356;
`
export const Row = styled.View`
  flex-direction: row;
`
const Square = styled.View`
  border: gray;
  height: 50;
  position: relative;
  width: 50;
`
export const Cross = styled.Text`
  position: absolute;
  top: 0;
  left: 15;
  font-size: 40;
  font-weight: bold;
  color: ${playerColor};
  text-shadow-color: black;
  text-shadow-offset: 1px 1px;
  text-shadow-radius: 1;
`
export const Black = Square.extend`
  background: black;
`
export const White = Square.extend`
  background: white;
`
export const Red = Square.extend`
  background: red;
`
