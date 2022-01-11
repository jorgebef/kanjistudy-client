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
  footH: number
  borderR: string
  buttonR: string
  sidePad: string

  mediaSm: string
  mediaMd: string
  mediaLg: string
}

const appTheme: ThemeType = {
  // [[[ COLORS ----
  // vvvvvvvvvvvvvvvv
  fg: '#30332E',
  bg: '#ffffff',
  // red: '#B3421D',
  red: '#A31621',
  // red: '#85212B',
  orange: '#C3533D',
  grey: '#373460',
  black: '#30332E',
  lavender: '#EAE6FF',
  violet: '#8479d1',
  purple: '#3e3491',
  // blue: '#5ac3e3',
  blue: '#009FFF',
  yellow: '#f5c745',
  // pink: '#ef87cb',
  pink: '#ec2F4B',
  // ]]]
  // ---- SIZING ----
  // vvvvvvvvvvvvvvvv
  navH: 4,
  navHS: 3,
  footH: 10,
  // [[[ OTHER VALUES ----
  borderR: '1rem',
  buttonR: '0.3rem',
  // OTHER VALUES ---- ]]]
  // ---- PADDING ----
  // vvvvvvvvvvvvvvvv
  sidePad: '10vw',
  // ---- MEDIA ----
  // vvvvvvvvvvvvvvvv
  mediaSm: '850px',
  mediaMd: '1050px',
  mediaLg: '1250px',
}

export default appTheme
