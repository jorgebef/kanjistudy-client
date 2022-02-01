// export interface ThemeType {
//   fg: string
//   bg: string
//
//   white: string
//   black: string
//   red: string
//   orange: string
//   grey: string
//   darkgrey: string
//   lightgrey: string
//   lavender: string
//   violet: string
//   purple: string
//   lightblue: string
//   blue: string
//   green: string
//   yellow: string
//   pink: string
//
//   navH: number
//   navHS: number
//   footH: string
//   borderR: string
//   buttonR: string
//   sidePad: string
//   compPadLg: string
//   compPadMd: string
//   compPadSm: string
//
//   mediaSm: string
//   mediaMd: string
//   mediaLg: string
//
//   transition: string
//   transitionL: string
// }

// const appTheme: ThemeType = {
const appTheme = {
  // [[[ COLORS ----
  // vvvvvvvvvvvvvvvv
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
  // ---- SIZING ----
  // vvvvvvvvvvvvvvvv
  navH: 4,
  navHS: 3,
  footH: '10rem',
  // [[[ OTHER VALUES ----
  borderR: '0.2rem',
  buttonR: '0.3rem',
  // OTHER VALUES ---- ]]]
  // ---- PADDING ----
  // vvvvvvvvvvvvvvvv
  sidePad: '1.5rem',
  compPadLg: '3rem',
  compPadMd: '1.5rem',
  compPadSm: '1rem',
  // ---- MEDIA ----
  // vvvvvvvvvvvvvvvv
  mediaSm: '850px',
  mediaMd: '1200px',
  mediaLg: '1920px',

  transition: 'ease 0.25s',
  transitionL: 'ease 0.45s',
}

export type ThemeType = typeof appTheme

export default appTheme
