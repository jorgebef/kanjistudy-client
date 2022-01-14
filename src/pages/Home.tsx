import React from 'react'
import styled from 'styled-components'
import { Cell, Container, Grid, TopRow } from '../components/PageContainer'
import { JLPTn5, RowGradient } from '../components/RowGradient'

const Title: React.FC = styled.p`
  text-align: center;
  align-self: center;
  font-size: 3rem;
  font-weight: 900;
`

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
        <Cell>
          <Title>Practice Kanji for JLPT N5</Title>
        </Cell>
        {/* <VertJPText size={4} bottom={10} left={85}> */}
        {/*   <span>あ</span> */}
        {/*   <span>り</span> */}
        {/*   <span>が</span> */}
        {/*   <span>と</span> */}
        {/*   <span>う</span> */}
        {/* </VertJPText> */}
      </TopRow>
      <Grid></Grid>
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
