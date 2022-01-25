import React from 'react'
import styled from 'styled-components'
import {
  Container,
  Grid,
  Row,
  Title,
  TopRow,
} from '../components/PageContainer'
import {
  CellWrapper,
  HomeCell,
  RowGradient,
  RowGradientInverted,
} from '../components/RowGradient'
import toriGates from '../assets/tori-gates.jpeg'

const LastRow = styled(Grid)`
  --specPad: 6rem;
  padding-top: calc(var(--specPad) * 2);
  padding-bottom: var(--specPad);
  /* margin-top: calc(-1 * var(--specPad)); */
  /* background-color: ${p => p.theme.lavender}; */
  background: linear-gradient(
    45deg,
    ${p => p.theme.bg} 10%,
    ${p => p.theme.lavender} 90%
  );
`

export const Home: React.FC = () => {
  return (
    <Container>
      <TopRow>
        <Title>Practice Kanji for JLPT</Title>
      </TopRow>
      <RowGradient>
        <CellWrapper>
          <HomeCell to={'/kana'}>
            <h1>KANA</h1>
            <p className='pop'>Learn hiragana and katakana</p>
          </HomeCell>
          <HomeCell to={'/kanji'}>
            <h1>JLPT N5 KANJI</h1>
            <div className='pop'>
              <div>Learn JLPTN5 Kanji</div>
              <div className='scrolling'>
                <p>九 書 中 聞 高 子 下 校 前 南 食 山</p>
                <p>九 書 中 聞 高 子 下 校 前 南 食 山</p>
              </div>
            </div>
            {/* <div className='pop'>Learn Jlaksdlfkjalsdk lasdkjfla ksdflaksjdf Kanji</div> */}
          </HomeCell>
          <HomeCell to={'/about'}>HOME</HomeCell>
        </CellWrapper>
      </RowGradient>
      <Row>
        <img src={toriGates} alt='Tori Gates' />
      </Row>
      <Row>TEST TEXT</Row>
    </Container>
  )
}

export default Home
