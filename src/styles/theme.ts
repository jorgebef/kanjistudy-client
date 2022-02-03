const appTheme = {
  // [[[ COLORS ----
  fg: '#30332E',
  bg: '#ffffff',
  white: '#ffffff',
  red: '#DA2C38',
  orange: '#C3533D',
  grey: '#9d9d9d',
  darkgrey: '#434641',
  lightgrey: '#e1e1e1',
  black: '#1E201D',
  lavender: '#EAE6FF',
  green: '#4F9D69',
  violet: '#8479d1',
  purple: '#3e3491',
  lightblue: '#AACFDD',
  blue: '#009FFF',
  yellow: '#FFA400',
  pink: '#ec2F4B',
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
