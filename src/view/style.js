import styled from 'styled-components/native'

const playerColor = props => {
  switch (props.player) {
    case 1:
      return 'cyan'
    case 2:
      return 'blue'
    case 3:
      return 'ivory'
    case 4:
      return 'green'
  }
  return 'black'
}

export const Container = styled.View`
  flex: 1;
  padding-top: 50;
  background-color: darkgray;
  align-items: center;
  justify-content: center;
  width: 100%;
`
export const Scroll = styled.ScrollView`
  width: 100%;
`
export const ScrollContainer = styled.View`
  align-items: center;
  justify-content: center;
`
export const Header = styled.Text`
  font-size: 25;
  font-weight: bold;
  padding-bottom: 20;
`
export const Row = styled.View`
  flex-direction: row;
`
export const SpaceAroundRow = Row.extend`
  width: 100%;
  justify-content: space-around;
`
export const Board = styled.View`
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
export const BodyText = styled.Text`
  padding-top: 20;
  padding-bottom: 20;
  padding-left: 5;
  font-size: 20;
  text-align: center;
  color: ${playerColor};
`
