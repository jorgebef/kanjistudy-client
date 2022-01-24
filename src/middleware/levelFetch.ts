import { KanjiAliveListT } from './types'

const gradeListFetch = async (
  grade: number
) => {
  const apiKey: string = process.env.REACT_APP_API_KEY as string
  const url: string = `${process.env.REACT_APP_API_URL}search/advanced?grade=${grade}`
  return await fetch(url, {
    method: 'GET',
    headers: {
      'x-rapidapi-host': 'kanjialive-api.p.rapidapi.com',
      'x-rapidapi-key': apiKey,
    },
  })
    .then(res => res.json())
    .then((data: KanjiAliveListT[]) => {
      // Order the data by the "order" value in the returned Array
      // unfortunately, this is the order of the radical only, not a
      // logical order for studying :(
      const sortedData = data.sort((a, b) => a.radical.order - b.radical.order)
      return sortedData
    })
    .catch(error => {
      console.log(error)
      return error
    })
}

export default gradeListFetch
