import React from 'react'
import { BsGithub, BsLinkedin, BsMailbox } from 'react-icons/bs'
import styled from 'styled-components'

const FooterContainer = styled.footer`
  display: flex;
  height: ${p => p.theme.footH + 'rem'};
  flex-direction: column;
  justify-content: center;
  align-items: stretch;
  background-color: ${p => p.theme.black};

`

// const TextContainer = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   flex-direction: row;
//   flex-grow: 1;
//   padding: 1.5rem 0;
//   background-color: ${p => p.theme.lavender};
// `

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
  flex-direction: row;
`

interface ButtonProps {
  social?: string
}

const But = styled.a.attrs(p => ({
  href: p.href,
}))<ButtonProps>`
  display: flex;
  margin: 0 1.5vw;
  border-radius: 0.5rem;
  padding: 0.5rem;
  cursor: pointer;
  align-items: center;
  background-color: ${p =>
    p.social === 'github'
      ? p.theme.violet
      : p.social === 'linkedin'
      ? p.theme.blue
      : p.social === 'mail'
      ? p.theme.yellow
      : null};
  color: ${p => p.theme.fg};
  transition: all ease-in-out 0.25s;

  &:hover {
    color: ${p => p.theme.fg};
    background-color: ${p => p.theme.pink};
  }
`

const Separator = styled.div`
  width: 80%;
  height: 0.15rem;
  align-self: center;
  background: linear-gradient(
    90deg,
    ${p => p.theme.pink} 0%,
    ${p => p.theme.violet} 100%
  );
`

const CopyrightContainer = styled.div.attrs(() => ({
  className: 'copyright',
}))`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 1rem 0;
  color: ${p => p.theme.lavender};
`

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      {/* <TextContainer>TEST</TextContainer> */}
      <ButtonContainer>
        <But social='github' href='https://github.com/jorgebef' target='_blank'>
          <BsGithub color='inherit' size={20} />
        </But>
        <But social='linkedin' href=''>
          <BsLinkedin color='inherit' size={20} />
        </But>
        <But social='mail' href=''>
          <BsMailbox color='inherit' size={20} />
        </But>
      </ButtonContainer>

      <Separator>
        <span />
      </Separator>

      <CopyrightContainer>
        <p>
          © 2022 Copyright: <b>Jorge B.</b>
        </p>
      </CopyrightContainer>
    </FooterContainer>
  )
}

export default Footer
