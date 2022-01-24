import React from 'react'
import styled from 'styled-components'
import {
  Container,
  Grid,
  Title,
  TopRow,
} from '../components/PageContainer'
import { JLPTn5, RowGradient } from '../components/RowGradient'

const LastRow = styled(Grid)`
  --specPad: 6rem;
  padding-top: calc(var(--specPad) * 2);
  padding-bottom: var(--specPad);
  margin-top: calc(-1 * var(--specPad));
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
        <JLPTn5 to={'/kana'}>
          <h1>KANA</h1>
          <p className='pop'>Learn hiragana and katakana</p>
        </JLPTn5>
        <JLPTn5 to={'/kanji'}>
          <h1>JLPT N5 KANJI</h1>
          <div className='pop'>
            <div>Learn JLPTN5 Kanji</div>
            <div className='scrolling'>
              <p>九 書 中 聞 高 子 下 校 前 南 食 山</p>
              <p>九 書 中 聞 高 子 下 校 前 南 食 山</p>
            </div>
          </div>
          {/* <div className='pop'>Learn Jlaksdlfkjalsdk lasdkjfla ksdflaksjdf Kanji</div> */}
        </JLPTn5>
        <JLPTn5 to={'/about'}>HOME</JLPTn5>
      </RowGradient>
      <LastRow>KEKWWWW</LastRow>
    </Container>
  )
}

export default Home
