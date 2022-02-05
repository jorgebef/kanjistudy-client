const appTheme = {
  // [[[ COLORS ----
  white: '#ffffff',
  red: '#e63946',
  grey: '#8d99ae',
  grey2: '#E6EDEF',
  lightgrey: '#edf2f4',
  black: '#2B2D42',
  green: '#447604',
  violet: '#8479d1',
  lightblue: '#a8dadc',
  blue: '#457b9d',
  yellow: '#fcbf49',
  // ]]]
  // [[[ SIZING ----
  navH: 4,
  navHS: 3,
  footH: '10rem',
  // ]]]
  // [[[ OTHER VALUES ----
  borderR: '0.8rem',
  buttonR: '0.4rem',
  // ]]]
  // [[[[ PADDING ----
  sidePad: '1.5rem',
  compPadLg: '3rem',
  compPadMd: '1.5rem',
  compPadSm: '1rem',
  // ]]]]
  // [[[[ MEDIA ----
  mediaSm: '850px',
  mediaMd: '1200px',
  mediaLg: '1920px',
  // ]]]]

  // [[[[ TRANSITIONS ----
  transition: 'ease 0.25s',
  transitionS: 'ease 0.15s',
  transitionL: 'ease 0.45s',
  // ]]]]
}

export type ThemeType = typeof appTheme

export default appTheme
