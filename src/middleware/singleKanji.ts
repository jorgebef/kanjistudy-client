// import { KanjiType } from '../../utils/kanjiData'
import { KanjiAliveSingleT } from './types'

const singleKanjiFetch = async (
  kanji: string | null
): Promise<KanjiAliveSingleT> => {
  const key: string = process.env.REACT_APP_API_KEY as string
  const url: string = `${process.env.REACT_APP_API_URL}kanji/${kanji}`
  return await fetch(url, {
    method: 'GET',
    headers: {
      'x-rapidapi-host': 'kanjialive-api.p.rapidapi.com',
      'x-rapidapi-key': key,
    },
  })
    .then(res => res.json())
    .then(data => {
      return data
    })
    .catch(error => {
      console.log(error)
      return error
    })
}

export default singleKanjiFetch
