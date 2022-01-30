import React, { useRef } from 'react'
import styled from 'styled-components'
import { Container, Grid, Row } from '../components/common/PageContainer'
import {
  CellWrapper,
  HomeCell,
  RowGradient,
} from '../components/common/RowGradient'
import toriGates from '../assets/tori-gates.jpeg'
import useAppear from '../utils/useAppear'
import { AOStranslateL, AOStranslateR } from '../components/common/AOSImage'
import Hero from '../components/hero/Hero'

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
  const imgRefA = useRef(null)
  useAppear(imgRefA)
  const imgRef = useRef(null)
  useAppear(imgRef)

  return (
    <Container>
      {/* <Hero bgImg={toriGates}> */}
      <Hero />
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
          </HomeCell>
          <HomeCell to={'/about'}>HOME</HomeCell>
        </CellWrapper>
      </RowGradient>
      <Row ref={imgRefA}>
        <AOStranslateR className='aos'>
          <img width='300px' height='200px' src={toriGates} alt='Tori Gates' />
        </AOStranslateR>
      </Row>
      <Row ref={imgRef}>
        <AOStranslateL className='aos'>
          <img width='300px' height='200px' src={toriGates} alt='Tori Gates' />
        </AOStranslateL>
      </Row>
    </Container>
  )
}

export default Home
