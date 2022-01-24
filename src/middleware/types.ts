export type KanjiAliveSingleT = {
  kanji: {
    character: string
    meaning: {
      english: string
    }
    strokes: number
    onyomi: {
      romaji: string
      katakana: string
    }
    kunyomi: {
      romaji: string
      hiragana: string
    }
    video: {
      poster: string
      mp4: string
      webm: string
    }
  }
  radical: {
    character: string
    strokes: number
    image: string
    position: {
      hiragana: string
      romaji: string
      icon: string
    }
    name: {
      hiragana: string
      romaji: string
    }
    meaning: {
      english: string
    }
    animagion: string[]
  }
  references: {
    grade: number
    kodansha: string
    classic_nelson: string
  }
  examples: {
    japanese: string
    meaning: { english: string }
    audio: { opus: string; aac: string; ogg: string; mp3: string }
  }[]
}

export type KanjiAliveListT = {
  kanji: {
    character: string
    stroke: number
  }
  radical: {
    character: string
    stroke: number
    order: number
  }
}
