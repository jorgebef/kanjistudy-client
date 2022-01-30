import styled, { css } from 'styled-components'
import appTheme from '../../styles/theme'

const LoadingContainer = styled.div`
  display: flex;
  justify-self: center;
  align-self: center;
  align-items: center;
  justify-content: center;
  margin: 4rem 0;
`

function createAnimation() {
  let styles = ''
  for (let i = 1; i <= 5; i++) {
    const e = 4 // the constant to update the difference between start and end
    styles += `
    & span:nth-child(${i}) {
      animation: pulse${i} 4s ease-in-out infinite;
    }
    @keyframes pulse${i} {
      ${i * e}% {
        font-size: var(--size);
      color:${appTheme.fg};
      }
      ${i * e + 2 * e}% {
        font-size: calc(var(--size) * 1.3);
      color:${appTheme.red};
      }
      ${i * e + 4 * e}% {
        font-size: var(--size);
      color:${appTheme.red};
      }
    }
    `
  }
  return css`
    ${styles}
  `
}

const JPText = styled.p.attrs(() => ({
  lang: 'ja',
}))`
  --size: 3rem;
  font-size: var(--size);
  font-weight: 600;
  color: ${p => p.theme.fg};
  white-space: nowrap;
  transition: all ease-in-out 0.25s;
  line-height: 1.8rem; /* keep in mind this is vertical text, so this is the width */

  ${createAnimation()}
`

const Loading = () => {
  return (
    <LoadingContainer>
      <JPText>
        <span>ロ</span>
        <span>ー</span>
        <span>デ</span>
        <span>ィ</span>
        <span>ン</span>
        <span>グ</span>
        {/* <span>あ</span> */}
        {/* <span>り</span> */}
        {/* <span>が</span> */}
        {/* <span>と</span> */}
        {/* <span>う</span> */}
      </JPText>
    </LoadingContainer>
  )
}

export default Loading
