import React, { useRef } from 'react'
import styled from 'styled-components'
import { Container, Grid, Row } from '../components/common/PageContainer'
import HomeCards from '../components/HomeCards'
import toriGates from '../assets/tori-gates.jpeg'
import useAppear from '../hooks/useAppear'
import {
  AOStranslateL,
  AOStranslateR,
} from '../components/common/AOSImage.style'
import Hero from '../components/Hero'

const LastRow = styled(Grid)`
  --specPad: 6rem;
  padding-top: calc(var(--specPad) * 2);
  padding-bottom: var(--specPad);
  /* margin-top: calc(-1 * var(--specPad)); */
  /* background-color: ${p => p.theme.red}; */
  background: linear-gradient(
    45deg,
    ${p => p.theme.white} 10%,
    ${p => p.theme.red} 90%
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
      <HomeCards />
      <Row ref={imgRefA}>
        <AOStranslateR className='aos'>
          <img width='300px' height='200px' src={toriGates} alt='Tori Gates' />
          <p>I really want to travel to Japan, so since I'm stuck here without any possible way of actually visiting the country, I've decided to create this project to at least take my mind off the fact I can't travel and instead test out some skills. =)</p>
        </AOStranslateR>
      </Row>
      <Row ref={imgRef}>
        <AOStranslateL className='aos'>
          <p>Review Kanji from any level from JLPT N5 to N1 as well as Hiragana and Katakana. Take a quick quiz which can be slightly customized to practice and make sure you know your stuff!</p>
          <img width='300px' height='200px' src={toriGates} alt='Tori Gates' />
        </AOStranslateL>
      </Row>
    </Container>
  )
}

export default Home
