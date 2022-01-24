export interface ThemeType {
  fg: string
  bg: string

  red: string
  orange: string
  grey: string
  black: string
  lavender: string
  violet: string
  purple: string
  blue: string
  yellow: string
  pink: string

  navH: number
  navHS: number
  footH: string
  borderR: string
  buttonR: string
  sidePad: string
  compPad: string

  mediaSm: string
  mediaMd: string
  mediaLg: string
}

const appTheme: ThemeType = {
  // [[[ COLORS ----
  // vvvvvvvvvvvvvvvv
  fg: '#30332E',
  bg: '#ffffff',
  red: '#A31621',
  orange: '#C3533D',
  grey: '#cfcfcf',
  black: '#30332E',
  lavender: '#EAE6FF',
  violet: '#8479d1',
  purple: '#3e3491',
  blue: '#009FFF',
  yellow: '#f5c745',
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
  sidePad: '10vw',
  compPad: '3rem',
  // ---- MEDIA ----
  // vvvvvvvvvvvvvvvv
  mediaSm: '850px',
  mediaMd: '1050px',
  mediaLg: '1250px',
}

export default appTheme
