import React from 'react'
import {Button, View} from 'react-native'

import {Container, BodyText, SpaceAroundRow} from './style'

const PlayerSelection = ({points, activeUser, selectActiveUser}) => (
  <Container>
    <SpaceAroundRow>
      {[1, 2, 3, 4].map(player => (
        <View key={player}>
          {/* eslint-disable react/jsx-no-bind */}
          <Button
            title={`PL${player}`}
            onPress={() => selectActiveUser(player)}
            disabled={activeUser === player}
          />
          {/* eslint-enable react/jsx-no-bind */}
          <BodyText player={player}>{points[player]}</BodyText>
        </View>
      ))}
    </SpaceAroundRow>
  </Container>
)

export default PlayerSelection
