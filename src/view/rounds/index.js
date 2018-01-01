import React from 'react'

import {Container, RoundContainer, RoundText} from './style'

const Rounds = ({rounds}) => (
  <Container>
    {rounds.history.length > 0 && (
      <RoundContainer>
        <RoundText>Round</RoundText>
        <RoundText>Player 1</RoundText>
        <RoundText>Player 2</RoundText>
        <RoundText>Player 3</RoundText>
        <RoundText>Player 4</RoundText>
      </RoundContainer>
    )}
    {rounds.history.map((round, index) => (
      <RoundContainer key={index}>
        <RoundText>{index + 1}</RoundText>
        <RoundText>{round[1]}</RoundText>
        <RoundText>{round[2]}</RoundText>
        <RoundText>{round[3]}</RoundText>
        <RoundText>{round[4]}</RoundText>
      </RoundContainer>
    ))}
    {rounds.history.length > 0 && (
      <RoundContainer>
        <RoundText>Total</RoundText>
        <RoundText>{rounds.total[1]}</RoundText>
        <RoundText>{rounds.total[2]}</RoundText>
        <RoundText>{rounds.total[3]}</RoundText>
        <RoundText>{rounds.total[4]}</RoundText>
      </RoundContainer>
    )}
  </Container>
)

export default Rounds
