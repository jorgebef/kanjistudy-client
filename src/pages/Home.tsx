import React, { useRef } from 'react'
import styled from 'styled-components'
import { Container, Grid, Row } from '../components/common/PageContainer'
import HomeCards from '../components/homecards'
import toriGates from '../assets/tori-gates.jpeg'
import useAppear from '../utils/useAppear'
import {
  AOStranslateL,
  AOStranslateR,
} from '../components/common/AOSImage.style'
import Hero from '../components/hero'

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
