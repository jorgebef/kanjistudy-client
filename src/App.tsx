import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { Home, Kanji, NotFound } from './pages/'
import Footer from './components/footer/Footer'
import NavBar from './components/navbar/NavBar'

import { ThemeProvider } from 'styled-components'

import appTheme from './styles/theme'
import GlobalStyle from './styles/globalStyles'
import { Quiz } from './pages/Quiz'
import { QuizCtxProvider } from './context/KanjiAliveCtx'

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <ThemeProvider theme={appTheme}>
        <GlobalStyle />
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/kanji' element={<Kanji />} />
          <Route
            path='/quiz'
            element={
              <QuizCtxProvider>
                <Quiz />
              </QuizCtxProvider>
            }
          />
          <Route path='*' element={<NotFound />} />
        </Routes>
        <Footer />
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App
