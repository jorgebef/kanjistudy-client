import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { Home, Kanji, NotFound } from './pages/'
import Footer from './components/Footer'
import NavBar from './components/NavBar'

import { ThemeProvider } from 'styled-components'

import appTheme from './styles/theme'
import GlobalStyle from './styles/globalStyles'
import { KanjiCtxProvider } from './context/KanjiContext'

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <ThemeProvider theme={appTheme}>
        <GlobalStyle />
        <NavBar />
        <KanjiCtxProvider>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/kanji' element={<Kanji />} />
            <Route path='/kana' element={<Kanji />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </KanjiCtxProvider>
        <Footer />
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App
