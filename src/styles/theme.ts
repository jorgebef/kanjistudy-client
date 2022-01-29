export interface ThemeType {
  fg: string
  bg: string

  white: string
  black: string
  red: string
  orange: string
  grey: string
  darkgrey: string
  lightgrey: string
  lavender: string
  violet: string
  purple: string
  blue: string
  green: string
  yellow: string
  pink: string

  navH: number
  navHS: number
  footH: string
  borderR: string
  buttonR: string
  sidePad: string
  compPadLg: string
  compPadMd: string
  compPadSm: string

  mediaSm: string
  mediaMd: string
  mediaLg: string
}

const appTheme: ThemeType = {
  // [[[ COLORS ----
  // vvvvvvvvvvvvvvvv
  fg: '#30332E',
  bg: '#ffffff',
  white: '#ffffff',
  red: '#e7001d',
  orange: '#C3533D',
  grey: '#afafaf',
  darkgrey: '#afafaf',
  lightgrey: '#fafafa',
  black: '#30332E',
  lavender: '#EAE6FF',
  green: '#4F9D69',
  violet: '#8479d1',
  purple: '#3e3491',
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
  borderR: '0.5rem',
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
}

export default appTheme
