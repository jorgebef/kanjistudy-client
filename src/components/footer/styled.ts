import styled from 'styled-components'

export const FooterWrapper = styled.footer`
  width: 100%;
  height: ${p => p.theme.footH};
  background-color: ${p => p.theme.black};
`

export const FooterContainer = styled.div`
  width: 100%;
  max-width: ${p => p.theme.mediaLg};
  display: flex;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  height: ${p => p.theme.footH};
  flex-direction: column;
`

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
  flex-direction: row;
  gap: 3rem;

  @media (max-width: ${p => p.theme.mediaSm}){
    gap: 1.5rem;
  }
`

interface ButtonProps {
  social?: string
}

export const Button = styled.a.attrs(p => ({
  href: p.href,
}))<ButtonProps>`
  display: flex;
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

export const Separator = styled.div`
  width: 80%;
  height: 0.15rem;
  align-self: center;
  background: linear-gradient(
    90deg,
    ${p => p.theme.pink} 0%,
    ${p => p.theme.violet} 100%
  );
`

export const CopyrightContainer = styled.div.attrs(() => ({
  className: 'copyright',
}))`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 1rem 0;
  color: ${p => p.theme.lavender};
`
