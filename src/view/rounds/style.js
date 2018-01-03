import styled from 'styled-components/native'

export const Container = styled.View`
  padding-top: 5;
  padding-bottom: 5;
`
export const RoundsContainer = styled.View`
  margin-top: 20;
  border-width: 1;
`
export const RoundRow = styled.View`
  background: lightgray;
  padding-bottom: 5;
  padding-top: 5;
  flex-direction: row;
  min-width: 75%;
  overflow: hidden;
  border-bottom-width: 1;
`
export const RoundText = styled.Text`
  min-width: 15%;
  text-align: center;
`

export const BoldText = styled.Text`
  font-weight: bold;
  text-align: center;
  min-width: 15%;
`
export const WinnerOverlay = styled.View`
  position: absolute;
  height: 28;
  width: 28;
  border-radius: 20;
  border-color: red;
  border-width: 2;
  left: 25%;
  top: -32%;
  display: ${props => (props.visible ? 'flex' : 'none')};
`
