import React from 'react'

import {Button, View} from 'react-native'
import {BoldText, Container, RoundsContainer, RoundRow, RoundText, WinnerOverlay} from './style'

const winnerCount = rounds => {
  let winner = rounds.total[1]
  winner = rounds.total[2] > rounds.total[1] ? rounds.total[2] : winner
  winner = rounds.total[3] > rounds.total[2] ? rounds.total[3] : winner
  winner = rounds.total[4] > rounds.total[3] ? rounds.total[4] : winner
  return winner
}

const Rounds = ({rounds, closeActiveRound, closeActiveGame}) => {
  const winnerTotal = winnerCount(rounds)
  return (
    <Container>
      <Button title={`Close round ${rounds.history.length + 1}`} onPress={closeActiveRound} />
      {rounds.history.length > 0 && (
        <RoundsContainer>
          <RoundRow>
            {['Round', 'P1', 'P2', 'P3', 'P4'].map((column, index) => (
              <RoundText key={index}>{column}</RoundText>
            ))}
          </RoundRow>
          {rounds.history.map((round, roundIndex) => (
            <RoundRow key={roundIndex}>
              <RoundText>{roundIndex + 1}</RoundText>
              {Object.values(round).map((column, columnIndex) => (
                <RoundText key={columnIndex}>{column}</RoundText>
              ))}
            </RoundRow>
          ))}
          <RoundRow>
            <View>
              <BoldText>Total</BoldText>
            </View>
            {Object.values(rounds.total).map((column, columnIndex) => (
              <View key={columnIndex}>
                <BoldText>{column}</BoldText>
                <WinnerOverlay visible={winnerTotal && winnerTotal === column} />
              </View>
            ))}
          </RoundRow>
          <Button title="Close game" onPress={closeActiveGame} />
        </RoundsContainer>
      )}
    </Container>
  )
}
export default Rounds
