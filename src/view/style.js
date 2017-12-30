import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  padding-top: 50;
  background-color: darkgray;
  align-items: center;
  justify-content: center;
`
export const Header = styled.Text`
  font-size: 25;
  font-weight: bold;
  padding-bottom: 20;
`
export const Row = styled.View`
  flex: 1;
  flex-direction: row;
`
export const SpaceAroundRow = Row.extend`
  width: 100%;
  justify-content: space-around;
  max-height: 20%;
`
export const Board = styled.View`
  flex: 1;
  flex-direction: column;
  max-height: 356;
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
  color: gray;
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
export const BodyText = styled.Text`
  padding-top: 10;
  padding-bottom: 10;
  padding-left: 5;
  font-size: 20;
`
