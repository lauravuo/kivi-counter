import styled from 'styled-components/native'

export const playerColor = props => {
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
  padding-bottom: 10;
`
