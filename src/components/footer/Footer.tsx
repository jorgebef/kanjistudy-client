import React from 'react'
import { BsGithub, BsLinkedin, BsMailbox } from 'react-icons/bs'
import {
  FooterContainer,
  ButtonContainer,
  Button,
  Separator,
  CopyrightContainer,
  FooterWrapper,
} from './styled'

const Footer: React.FC = () => {
  return (
    <FooterWrapper>
      <FooterContainer>
        <ButtonContainer>
          <Button
            social='github'
            href='https://github.com/jorgebef'
            target='_blank'
          >
            <BsGithub color='inherit' size={20} />
          </Button>
          <Button social='linkedin' href=''>
            <BsLinkedin color='inherit' size={20} />
          </Button>
          <Button social='mail' href=''>
            <BsMailbox color='inherit' size={20} />
          </Button>
        </ButtonContainer>

        <Separator>
          <span />
        </Separator>

        <CopyrightContainer>
          <p>
            2022 Design by: <b>Jorge B.</b>
          </p>
        </CopyrightContainer>
      </FooterContainer>
    </FooterWrapper>
  )
}

export default Footer
