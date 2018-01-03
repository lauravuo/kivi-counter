import styled from 'styled-components/native'

import {playerColor} from '../style'

export const Container = styled.View`
  width: 100%;
`
export const SpaceAroundRow = styled.View`
  flex-direction: row;
  width: 100%;
  justify-content: space-around;
`
export const BodyText = styled.Text`
  padding-top: 20;
  padding-bottom: 20;
  padding-left: 5;
  font-size: 20;
  text-align: center;
  color: ${playerColor};
`
