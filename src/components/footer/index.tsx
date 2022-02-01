import React from 'react'
import { BsGithub, BsLinkedin, BsMailbox } from 'react-icons/bs'
import * as S from './styles'

const Footer: React.FC = () => {
  return (
    <S.FooterWrapper>
      <S.FooterContainer>
        <S.ButtonContainer>
          <S.Button
            social='github'
            href='https://github.com/jorgebef'
            target='_blank'
          >
            <BsGithub color='inherit' size={20} />
          </S.Button>
          <S.Button social='linkedin' href=''>
            <BsLinkedin color='inherit' size={20} />
          </S.Button>
          <S.Button social='mail' href=''>
            <BsMailbox color='inherit' size={20} />
          </S.Button>
        </S.ButtonContainer>

        <S.Separator>
          <span />
        </S.Separator>

        <S.CopyrightContainer>
          <p>
            2022 Design by: <b>Jorge B.</b>
          </p>
        </S.CopyrightContainer>
      </S.FooterContainer>
    </S.FooterWrapper>
  )
}

export default Footer
