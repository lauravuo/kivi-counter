import React from 'react'
import {Button, View} from 'react-native'

import {Container, BodyText, SpaceAroundRow} from './style'

const PlayerSelection = ({points, activeUser, selectActiveUser}) => {
  const selectUser1 = () => selectActiveUser(1)
  const selectUser2 = () => selectActiveUser(2)
  const selectUser3 = () => selectActiveUser(3)
  const selectUser4 = () => selectActiveUser(4)
  return (
    <Container>
      <BodyText>Selection: Player {activeUser}</BodyText>
      <SpaceAroundRow>
        <View>
          <Button title="P1" onPress={selectUser1} />
          <BodyText player={1}>{points[1]}</BodyText>
        </View>
        <View>
          <Button title="P2" onPress={selectUser2} />
          <BodyText player={2}>{points[2]}</BodyText>
        </View>
        <View>
          <Button title="P3" onPress={selectUser3} />
          <BodyText player={3}>{points[3]}</BodyText>
        </View>
        <View>
          <Button title="P4" onPress={selectUser4} />
          <BodyText player={4}>{points[4]}</BodyText>
        </View>
      </SpaceAroundRow>
    </Container>
  )
}

export default PlayerSelection
